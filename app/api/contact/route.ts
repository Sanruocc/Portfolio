import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Initialize Resend only if API key is available
function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured - emails will be logged only');
    return null;
  }
  return new Resend(process.env.RESEND_API_KEY);
}

// Rate limiting storage (in-memory for simplicity)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  projectType: z.enum(['Website for Service Business', 'AI Automation', 'Template/Product Purchase', 'Other']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message must be less than 500 characters'),
  budget: z.enum(['₹25k - ₹50k', '₹50k - ₹1L', '₹1L+', 'Not sure yet']).optional(),
  honeypot: z.string().optional(), // Honeypot field for bots
});

type ContactFormData = z.infer<typeof contactSchema>;

// Rate limiting function
function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const limit = 3; // Max 3 submissions per hour
  const window = 60 * 60 * 1000; // 1 hour in milliseconds

  // Clean old entries
  rateLimitStore.forEach((value, key) => {
    if (value.resetTime < now) {
      rateLimitStore.delete(key);
    }
  });

  const record = rateLimitStore.get(ip);
  
  if (!record) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + window });
    return { allowed: true };
  }

  if (record.count >= limit) {
    return { allowed: false, retryAfter: Math.ceil((record.resetTime - now) / 1000) };
  }

  record.count += 1;
  return { allowed: true };
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Log submission to JSON file
async function logSubmission(data: ContactFormData & { ip: string; userAgent: string; timestamp: string }) {
  try {
    const logsDir = path.join(process.cwd(), 'data');
    
    // Create data directory if it doesn't exist
    if (!existsSync(logsDir)) {
      await mkdir(logsDir, { recursive: true });
    }

    const logFile = path.join(logsDir, 'contacts.json');
    
    // Read existing logs
    let logs: any[] = [];
    if (existsSync(logFile)) {
      const existingContent = await import('fs').then(fs => 
        fs.promises.readFile(logFile, 'utf-8')
      );
      try {
        logs = JSON.parse(existingContent || '[]');
      } catch {
        logs = [];
      }
    }

    // Add new submission
    logs.push({
      id: Date.now().toString(),
      ...data,
    });

    // Write back to file
    await writeFile(logFile, JSON.stringify(logs, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to log submission:', error);
    // Don't fail the request if logging fails
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip = request.ip || request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Check rate limit
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please try again later.',
          retryAfter: rateLimit.retryAfter 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': rateLimit.retryAfter?.toString() || '3600',
          }
        }
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON format' },
        { status: 400 }
      );
    }

    // Check honeypot field
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Bot detected' },
        { status: 400 }
      );
    }

    // Validate input
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      return NextResponse.json(
        { 
          success: false, 
          error: firstError.message,
          field: firstError.path[0]
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      phone: data.phone ? sanitizeInput(data.phone) : undefined,
      projectType: data.projectType,
      message: sanitizeInput(data.message),
      budget: data.budget,
    };

    // Log submission
    await logSubmission({
      ...sanitizedData,
      ip,
      userAgent,
      timestamp: new Date().toISOString(),
    });

    // Send email to business owner (only if API key is configured)
    const resend = getResendClient();
    if (resend) {
      const emailResult = await resend.emails.send({
        from: process.env.FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL || 'hello@example.com',
        subject: `New Project Inquiry from ${sanitizedData.name}`,
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a24; margin-bottom: 20px;">New Project Inquiry</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #1a1a24;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${sanitizedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #1a1a24;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">
                  <a href="mailto:${sanitizedData.email}" style="color: #6366f1; text-decoration: none;">${sanitizedData.email}</a>
                </td>
              </tr>
              ${sanitizedData.phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #1a1a24;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">
                  <a href="tel:${sanitizedData.phone}" style="color: #6366f1; text-decoration: none;">${sanitizedData.phone}</a>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #1a1a24;">Project Type:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${sanitizedData.projectType}</td>
              </tr>
              ${sanitizedData.budget ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #1a1a24;">Budget:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${sanitizedData.budget}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: #1a1a24;">Message:</td>
                <td style="padding: 10px 0; color: #333; white-space: pre-wrap;">${sanitizedData.message}</td>
              </tr>
            </table>
            
            <p style="margin-top: 30px; color: #666; font-size: 14px;">
              Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        `,
        replyTo: sanitizedData.email,
      });

      if (emailResult.error) {
        console.error('Email send error:', emailResult.error);
        return NextResponse.json(
          { success: false, error: 'Failed to send email. Please try again later.' },
          { status: 500 }
        );
      }
    } else {
      console.log('Email not sent - API key not configured. Form data:', sanitizedData);
    }

    // Send confirmation email to user (only if API key is configured)
    if (resend) {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
        to: sanitizedData.email,
        subject: 'Thank you for your inquiry - Rajesh Shrirao',
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a24; margin-bottom: 20px;">Thank you for reaching out!</h2>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Hi ${sanitizedData.name},
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              Thank you for your interest in working together. I've received your message and will get back to you within 24 hours.
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, feel free to message me directly on WhatsApp for faster response:
            </p>
            
            <p style="color: #333; line-height: 1.6; margin-bottom: 30px;">
              <strong>Project Type:</strong> ${sanitizedData.projectType}<br>
              ${sanitizedData.budget ? `<strong>Budget:</strong> ${sanitizedData.budget}<br>` : ''}
              <strong>Submitted:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://wa.me/919876543210?text=Hi Rajesh, I'd like to discuss a project" 
                 style="display: inline-block; background: #10B981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600;">
                Chat on WhatsApp
              </a>
            </div>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              Best regards,<br>
              Rajesh Shrirao<br>
              Full-Stack Developer & AI Automation Builder
            </p>
          </div>
        `,
      });
    } else {
      console.log('Confirmation email not sent - API key not configured for user:', sanitizedData.email);
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! I will get back to you within 24 hours.',
    });

  } catch (error) {
    console.error('Contact form API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Add CORS headers
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
