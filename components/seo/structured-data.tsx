'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
}

/**
 * Component to inject JSON-LD structured data into the page
 * This helps search engines understand the content better
 */
export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [data]);

  return null;
}

/**
 * Person schema for Rajesh Shrirao
 */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rajesh Shrirao',
  description: 'Full-Stack Developer & Web Designer specializing in SaaS-style websites for service businesses in India',
  url: 'https://rajeshshrirao.com',
  image: 'https://rajeshshrirao.com/og-image.jpg',
  jobTitle: 'Full-Stack Developer & Web Designer',
  email: 'contact@rajeshshrirao.com',
  telephone: '+91-xxxxxxxxxx',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
    postalCode: '411xxx'
  },
  sameAs: [
    'https://linkedin.com/in/rajeshshrirao',
    'https://github.com/rajeshshrirao',
    'https://twitter.com/rajeshshrirao'
  ],
  knowsAbout: [
    'Web Development',
    'Next.js',
    'React',
    'TypeScript',
    'SaaS Development',
    'AI Automation',
    'Web Design',
    'Digital Product Development'
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Full-Stack Developer',
    description: 'Building premium web experiences for Indian service businesses'
  }
};

/**
 * Organization schema for Rajesh Shrirao's services
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Rajesh Shrirao - Web Development Services',
  description: 'Premium SaaS-style websites for service businesses in India',
  url: 'https://rajeshshrirao.com',
  logo: 'https://rajeshshrirao.com/og-image.jpg',
  sameAs: [
    'https://linkedin.com/in/rajeshshrirao',
    'https://github.com/rajeshshrirao'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-xxxxxxxxxx',
    contactType: 'customer service',
    email: 'contact@rajeshshrirao.com',
    availableLanguage: ['English', 'Hindi', 'Marathi']
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN'
  },
  knowsAbout: [
    'Web Development',
    'SaaS Development',
    'AI Automation',
    'Web Design',
    'Digital Marketing'
  ]
};

/**
 * Service schema for web development services
 */
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development & Design Services',
  description: 'Premium SaaS-style websites for service businesses in India',
  provider: {
    '@type': 'Person',
    name: 'Rajesh Shrirao'
  },
  serviceType: [
    'Web Development',
    'Web Design',
    'SaaS Development',
    'AI Automation',
    'Digital Product Development'
  ],
  areaServed: {
    '@type': 'Country',
    name: 'India'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SaaS Website Development',
          description: 'Custom SaaS-style websites for service businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design for Doctors',
          description: 'Professional websites for medical practitioners'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Automation Development',
          description: 'AI-powered automation solutions for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Product Development',
          description: 'Custom digital products and applications'
        }
      }
    ]
  }
};

/**
 * Website schema
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rajesh Shrirao Portfolio',
  description: 'Full-Stack Developer & Web Designer in Pune, India',
  url: 'https://rajeshshrirao.com',
  author: {
    '@type': 'Person',
    name: 'Rajesh Shrirao'
  },
  publisher: {
    '@type': 'Person',
    name: 'Rajesh Shrirao'
  },
  inLanguage: 'en-IN',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://rajeshshrirao.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

/**
 * Local Business schema for Pune, India location
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rajesh Shrirao - Web Development Services',
  description: 'Full-Stack Developer & Web Designer in Pune, India',
  url: 'https://rajeshshrirao.com',
  telephone: '+91-xxxxxxxxxx',
  email: 'contact@rajeshshrirao.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pune',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411xxx',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '18.5204',
    longitude: '73.8567'
  },
  areaServed: {
    '@type': 'City',
    name: 'Pune'
  },
  sameAs: [
    'https://linkedin.com/in/rajeshshrirao',
    'https://github.com/rajeshshrirao'
  ]
};