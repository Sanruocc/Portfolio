'use client';

import { useEffect } from 'react';

export default function FaviconGenerator() {
  useEffect(() => {
    // Generate favicon using canvas
    const canvas = document.createElement('canvas');
    canvas.width = 64; // Higher resolution for better quality
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Create gradient background matching the theme
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, '#7C3AED'); // Purple
      gradient.addColorStop(0.7, '#5B21B6'); // Darker purple
      gradient.addColorStop(1, '#0A0A0F'); // Dark background
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      // Add subtle border
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.5)';
      ctx.lineWidth = 2;
      ctx.strokeRect(2, 2, 60, 60);

      // Draw "R" initial in white
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 32px Inter, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('R', 32, 32);

      // Add accent dot (orange) like in the navigation
      ctx.fillStyle = '#F97316';
      ctx.beginPath();
      ctx.arc(48, 18, 4, 0, Math.PI * 2);
      ctx.fill();

      // Convert to favicon
      const faviconUrl = canvas.toDataURL('image/x-icon');
      
      // Update or create favicon link
      let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = 'shortcut icon';
        document.head.appendChild(link);
      }
      
      link.type = 'image/x-icon';
      link.href = faviconUrl;

      // Also create additional favicon sizes for different devices
      const sizes = [16, 32, 96, 128];
      sizes.forEach(size => {
        if (size !== 64) {
          const sizeCanvas = document.createElement('canvas');
          sizeCanvas.width = size;
          sizeCanvas.height = size;
          const sizeCtx = sizeCanvas.getContext('2d');
          
          if (sizeCtx) {
            // Scale down the original canvas
            sizeCtx.drawImage(canvas, 0, 0, size, size);
            
            const sizeLink = document.createElement('link');
            sizeLink.rel = 'icon';
            sizeLink.sizes = `${size}x${size}`;
            sizeLink.href = sizeCanvas.toDataURL('image/png');
            document.head.appendChild(sizeLink);
          }
        }
      });

      // Create Apple Touch Icon (180x180)
      const appleCanvas = document.createElement('canvas');
      appleCanvas.width = 180;
      appleCanvas.height = 180;
      const appleCtx = appleCanvas.getContext('2d');
      
      if (appleCtx) {
        // Background
        const appleGradient = appleCtx.createRadialGradient(90, 90, 0, 90, 90, 90);
        appleGradient.addColorStop(0, '#7C3AED');
        appleGradient.addColorStop(0.7, '#5B21B6');
        appleGradient.addColorStop(1, '#0A0A0F');
        
        appleCtx.fillStyle = appleGradient;
        appleCtx.fillRect(0, 0, 180, 180);

        // "R" text
        appleCtx.fillStyle = '#FFFFFF';
        appleCtx.font = 'bold 90px Inter, Arial, sans-serif';
        appleCtx.textAlign = 'center';
        appleCtx.textBaseline = 'middle';
        appleCtx.fillText('R', 90, 90);

        // Accent dot
        appleCtx.fillStyle = '#F97316';
        appleCtx.beginPath();
        appleCtx.arc(135, 50, 12, 0, Math.PI * 2);
        appleCtx.fill();

        const appleLink = document.createElement('link');
        appleLink.rel = 'apple-touch-icon';
        appleLink.sizes = '180x180';
        appleLink.href = appleCanvas.toDataURL('image/png');
        document.head.appendChild(appleLink);
      }
    }
  }, []);

  return null;
}