import React from 'react';

export const HamburgerIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <line x1='3' y1='6' x2='21' y2='6' />
    <line x1='3' y1='12' x2='21' y2='12' />
    <line x1='3' y1='18' x2='21' y2='18' />
  </svg>
);

export const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
);

// Service Icons
export const BrowserSparkleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='64'
    height='64'
    viewBox='0 0 64 64'
    fill='none'
    className={className}
    aria-label='Browser with sparkle'
  >
    {/* Browser Window */}
    <rect x='8' y='16' width='48' height='40' rx='4' fill='#1A1A24' stroke='url(#browserGradient)' strokeWidth='1.5'/>
    
    {/* Browser Controls */}
    <circle cx='18' cy='24' r='3' fill='#EF4444'/>
    <circle cx='28' cy='24' r='3' fill='#F59E0B'/>
    <circle cx='38' cy='24' r='3' fill='#10B981'/>
    
    {/* Content Area */}
    <rect x='12' y='32' width='40' height='16' rx='2' fill='#262626'/>
    
    {/* Sparkle Stars */}
    <g fill='#A855F7'>
      <path d='M46 14l-1.5 3-3 0.5 2 2.5-0.5 3 2.5-2 3 0.5-2-2.5L46 14z'/>
      <path d='M52 20l-1 2-2 0.3 1.3 1.7-0.3 2 1.7-1.3 2 0.3-1.3-1.7L52 20z'/>
    </g>
    
    <defs>
      <linearGradient id='browserGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor='#A855F7'/>
        <stop offset='100%' stopColor='#C084FC'/>
      </linearGradient>
    </defs>
  </svg>
);

export const RobotAutomationIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='64'
    height='64'
    viewBox='0 0 64 64'
    fill='none'
    className={className}
    aria-label='Robot automation'
  >
    {/* Robot Head */}
    <rect x='16' y='12' width='32' height='40' rx='16' fill='#1A1A24' stroke='url(#robotGradient)' strokeWidth='1.5'/>
    
    {/* Antenna */}
    <rect x='30' y='6' width='4' height='8' rx='2' fill='#FB923C'/>
    <circle cx='32' cy='6' r='2' fill='#FB923C'/>
    
    {/* Eyes */}
    <rect x='22' y='22' width='6' height='6' rx='3' fill='#FB923C'/>
    <rect x='36' y='22' width='6' height='6' rx='3' fill='#FB923C'/>
    
    {/* Body - Geometric Pattern */}
    <rect x='20' y='32' width='8' height='8' rx='2' fill='#FB923C' opacity='0.3'/>
    <rect x='36' y='32' width='8' height='8' rx='2' fill='#FB923C' opacity='0.3'/>
    <rect x='28' y='40' width='8' height='8' rx='2' fill='#FB923C' opacity='0.3'/>
    
    {/* Automation Arrows */}
    <path d='M8 40l4-4m0 0l4 4m-4-4v8' stroke='#FB923C' strokeWidth='2' strokeLinecap='round'/>
    <path d='M56 40l-4-4m0 0l-4 4m4-4v8' stroke='#FB923C' strokeWidth='2' strokeLinecap='round'/>
    
    <defs>
      <linearGradient id='robotGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor='#FB923C'/>
        <stop offset='100%' stopColor='#F97316'/>
      </linearGradient>
    </defs>
  </svg>
);

export const LayersTemplateIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='64'
    height='64'
    viewBox='0 0 64 64'
    fill='none'
    className={className}
    aria-label='Layers template'
  >
    {/* Bottom Layer */}
    <rect x='8' y='20' width='48' height='36' rx='4' fill='#1A1A24' stroke='url(#layersGradient)' strokeWidth='1.5'/>
    
    {/* Middle Layer */}
    <rect x='12' y='16' width='40' height='32' rx='3' fill='#262626' stroke='#3B82F6' strokeWidth='1'/>
    
    {/* Top Layer */}
    <rect x='16' y='12' width='32' height='28' rx='2' fill='#333333' stroke='#3B82F6' strokeWidth='1'/>
    
    {/* Layer Indicators */}
    <circle cx='20' cy='20' r='1.5' fill='#3B82F6'/>
    <circle cx='24' cy='20' r='1.5' fill='#3B82F6'/>
    <circle cx='28' cy='20' r='1.5' fill='#3B82F6'/>
    
    {/* Component Blocks */}
    <rect x='20' y='28' width='8' height='6' rx='1' fill='#3B82F6' opacity='0.5'/>
    <rect x='32' y='28' width='8' height='6' rx='1' fill='#3B82F6' opacity='0.5'/>
    <rect x='20' y='36' width='20' height='2' rx='1' fill='#3B82F6' opacity='0.3'/>
    
    <defs>
      <linearGradient id='layersGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor='#3B82F6'/>
        <stop offset='100%' stopColor='#60A5FA'/>
      </linearGradient>
    </defs>
  </svg>
);

// Tech Stack Icons (16px minimal geometric style)
export const NextJsIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='Next.js'
  >
    <circle cx='8' cy='8' r='7' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M5 12l6-8' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'/>
    <path d='M11 12V8L9 10' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'/>
  </svg>
);

export const ReactIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='React'
  >
    <ellipse cx='8' cy='8' rx='5' ry='2' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <ellipse cx='8' cy='8' rx='2' ry='5' stroke='currentColor' strokeWidth='1.5' fill='none' transform='rotate(60 8 8)'/>
    <ellipse cx='8' cy='8' rx='2' ry='5' stroke='currentColor' strokeWidth='1.5' fill='none' transform='rotate(-60 8 8)'/>
    <circle cx='8' cy='8' r='1' fill='currentColor'/>
  </svg>
);

export const TailwindIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='Tailwind CSS'
  >
    <rect x='2' y='4' width='12' height='8' rx='1' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M4 8l2-2 2 2' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
    <path d='M12 8l-2-2-2 2' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
  </svg>
);

export const NodeJsIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='Node.js'
  >
    <rect x='3' y='3' width='10' height='10' rx='2' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M6 6h4v4H6z' fill='currentColor'/>
    <circle cx='8' cy='8' r='1' fill='currentColor'/>
  </svg>
);

export const TypeScriptIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='TypeScript'
  >
    <rect x='2' y='2' width='12' height='12' rx='2' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M5 5h6v6H5z' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M8 5v6' stroke='currentColor' strokeWidth='1.5'/>
  </svg>
);

export const ApiIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='API'
  >
    <rect x='2' y='4' width='12' height='8' rx='1' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <circle cx='5' cy='8' r='1' fill='currentColor'/>
    <circle cx='8' cy='8' r='1' fill='currentColor'/>
    <circle cx='11' cy='8' r='1' fill='currentColor'/>
    <path d='M5 8h6' stroke='currentColor' strokeWidth='1'/>
  </svg>
);

// Additional Tech Icons for About Section
export const FlutterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='Flutter'
  >
    <rect x='2' y='2' width='12' height='12' rx='2' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M6 6l4 4-4 4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'/>
    <path d='M10 6H6v4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'/>
  </svg>
);

export const GitIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='Git'
  >
    <circle cx='8' cy='8' r='6' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M5 11l3-3 3 3' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
    <circle cx='8' cy='5' r='1' fill='currentColor'/>
    <circle cx='5' cy='11' r='1' fill='currentColor'/>
    <circle cx='11' cy='11' r='1' fill='currentColor'/>
  </svg>
);

export const VSCodeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='VS Code'
  >
    <rect x='2' y='2' width='12' height='12' rx='1' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M5 5l2 2-2 2' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'/>
    <path d='M11 5l-2 2 2 2' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'/>
  </svg>
);

export const FigmaIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='Figma'
  >
    <rect x='2' y='2' width='12' height='12' rx='2' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <circle cx='6' cy='6' r='1' fill='currentColor'/>
    <circle cx='10' cy='6' r='1' fill='currentColor'/>
    <circle cx='6' cy='10' r='1' fill='currentColor'/>
    <circle cx='10' cy='10' r='1' fill='currentColor'/>
    <circle cx='8' cy='8' r='1' fill='currentColor'/>
  </svg>
);

export const RestApiIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='REST API'
  >
    <rect x='2' y='4' width='12' height='8' rx='1' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M4 8h8' stroke='currentColor' strokeWidth='1.5'/>
    <circle cx='6' cy='8' r='1' fill='currentColor'/>
    <circle cx='10' cy='8' r='1' fill='currentColor'/>
  </svg>
);

// Social Media Icons
export const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='WhatsApp'
  >
    <circle cx='10' cy='10' r='8' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M6 14l1-2c-1-1-1-2 0-3 1-1 2-1 3 0l2 2c1 1 1 2 0 3s-2 1-3 0l-1-1' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <circle cx='8' cy='8' r='0.5' fill='currentColor'/>
    <circle cx='12' cy='8' r='0.5' fill='currentColor'/>
  </svg>
);

export const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='GitHub'
  >
    <path d='M10 2C5.58 2 2 5.58 2 10c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0018 10c0-4.42-3.58-8-8-8z' stroke='currentColor' strokeWidth='1.5' fill='none'/>
  </svg>
);

export const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='LinkedIn'
  >
    <rect x='2' y='2' width='16' height='16' rx='2' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M6 8v6' stroke='currentColor' strokeWidth='1.5'/>
    <path d='M6 6c0 .5.5 1 1 1s1-.5 1-1-.5-1-1-1-1 .5-1 1z' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M14 8v6' stroke='currentColor' strokeWidth='1.5'/>
    <path d='M14 8c-1 0-2 .5-2 2v4' stroke='currentColor' strokeWidth='1.5'/>
  </svg>
);

export const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='Twitter'
  >
    <path d='M19 2c-1.5.7-3 1.2-4.5 1.4 1.7-1 3-2.6 3.5-4.5-1.6 1-3.4 1.7-5.3 2-1.5-1.6-3.7-2.6-6.1-2.6-4.6 0-8.3 3.7-8.3 8.3 0 .6.1 1.3.2 1.9C3.1 10.3 1.7 8.8.9 6.9c-.5 1-.8 2.1-.8 3.3 0 2.9 1.5 5.4 3.7 6.9-1.4 0-2.7-.4-3.8-1.1v.1c0 4 2.9 7.4 6.7 8.1-.7.2-1.4.3-2.1.3-.5 0-1 0-1.5-.1 1 3.2 3.9 5.5 7.3 5.6-2.7 2.1-6.1 3.4-9.8 3.4-.6 0-1.3 0-1.9-.1 3.5 2.2 7.7 3.5 12.2 3.5 14.6 0 22.6-12.1 22.6-22.6 0-.3 0-.7-.1-1 1.5-1.1 2.9-2.5 4-4z' stroke='currentColor' strokeWidth='1.5' fill='none'/>
  </svg>
);

export const MailIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='Email'
  >
    <rect x='2' y='4' width='16' height='12' rx='2' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M2 6l8 5 8-5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
  </svg>
);

export const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='Location'
  >
    <path d='M10 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M10 2C7.8 2 6 3.8 6 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M10 18c-2.2 0-4-1.8-4-4' stroke='currentColor' strokeWidth='1.5'/>
  </svg>
);

export const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='Response time'
  >
    <circle cx='10' cy='10' r='7' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M10 5v5l3 2' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
  </svg>
);

export const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='Check'
  >
    <circle cx='10' cy='10' r='7' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M6 10l3 3 5-5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
  </svg>
);

export const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='Arrow right'
  >
    <path d='M5 10h10' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'/>
    <path d='M10 5l5 5-5 5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
  </svg>
);

export const LoaderIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='Loading'
  >
    <circle cx='10' cy='10' r='7' stroke='currentColor' strokeWidth='1.5' fill='none' opacity='0.3'/>
    <path d='M10 3a7 7 0 0 1 7 7' stroke='currentColor' strokeWidth='1.5' fill='none' strokeLinecap='round'>
      <animateTransform attributeName='transform' type='rotate' dur='1s' values='0 10 10;360 10 10' repeatCount='indefinite'/>
    </path>
  </svg>
);

export const JsonIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='JSON'
  >
    <rect x='2' y='2' width='12' height='12' rx='1' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M5 5h6v6H5z' stroke='currentColor' strokeWidth='1' fill='none'/>
    <path d='M5 8h6' stroke='currentColor' strokeWidth='1'/>
  </svg>
);

export const AiIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='AI'
  >
    <circle cx='8' cy='8' r='5' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M6 8l2 2 2-2' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
    <circle cx='8' cy='6' r='0.5' fill='currentColor'/>
  </svg>
);

// Approach Icons
export const StrategyIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='Strategic thinking'
  >
    <circle cx='10' cy='10' r='7' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M10 3v14' stroke='currentColor' strokeWidth='1.5'/>
    <path d='M3 10h14' stroke='currentColor' strokeWidth='1.5'/>
    <circle cx='10' cy='10' r='2' fill='currentColor'/>
  </svg>
);

export const CommunicationIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='Clear communication'
  >
    <rect x='3' y='5' width='14' height='10' rx='2' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <circle cx='7' cy='10' r='1' fill='currentColor'/>
    <circle cx='10' cy='10' r='1' fill='currentColor'/>
    <circle cx='13' cy='10' r='1' fill='currentColor'/>
  </svg>
);

export const QualityIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='Premium quality'
  >
    <polygon points='10,2 13,7 19,7 14,11 16,16 10,13 4,16 6,11 1,7 7,7' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <circle cx='10' cy='10' r='1.5' fill='currentColor'/>
  </svg>
);

export const ResultsIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    className={className}
    aria-label='Results-focused'
  >
    <path d='M3 17V3' stroke='currentColor' strokeWidth='1.5'/>
    <path d='M3 17h14' stroke='currentColor' strokeWidth='1.5'/>
    <path d='M6 13l3-3 3 3 5-5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
  </svg>
);

export const MobileIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='Mobile'
  >
    <rect x='4' y='2' width='8' height='12' rx='1.5' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <rect x='6' y='4' width='4' height='6' rx='0.5' stroke='currentColor' strokeWidth='1' fill='none'/>
    <circle cx='8' cy='12' r='0.5' fill='currentColor'/>
  </svg>
);

export const WebsiteIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    className={className}
    aria-label='Website'
  >
    <rect x='2' y='3' width='12' height='10' rx='1' stroke='currentColor' strokeWidth='1.5' fill='none'/>
    <path d='M2 6h12' stroke='currentColor' strokeWidth='1'/>
    <circle cx='4' cy='5' r='0.5' fill='currentColor'/>
    <circle cx='6' cy='5' r='0.5' fill='currentColor'/>
    <circle cx='8' cy='5' r='0.5' fill='currentColor'/>
  </svg>
);
