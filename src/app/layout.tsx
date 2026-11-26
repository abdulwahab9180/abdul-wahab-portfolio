
import type { Metadata } from 'next';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://abdul-wahab-portfolio-three.vercel.app';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Abdul Wahab',
  url: siteUrl,
  image: `${siteUrl}/images/abdul-wahab-hero.jpg`,
  description:
    'Abdul Wahab is a business and technology professional working across business leadership, web development, e-commerce, travel consultancy, SEO and creative services.',
  jobTitle: [
    'Co-Director at G&M Co.',
    'Assistant Director at Red Productions',
    'Web Developer',
    'Digital Professional',
  ],
  sameAs: [
    'https://www.linkedin.com/in/abdul-wahab-7581bb2aa/',
    'https://github.com/abdulwahab9180',
  ],
  knowsAbout: [
    'Web Development',
    'Next.js',
    'React',
    'WordPress',
    'Shopify',
    'WooCommerce',
    'Search Engine Optimization',
    'E-commerce',
    'Graphic Design',
    'Video Editing',
    'Travel Consultancy',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gujranwala',
    addressCountry: 'PK',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  alternates: {
    canonical: '/',
  },

  title: 'Abdul Wahab | Business, Technology & Creative Professional',

  description:
    'Abdul Wahab is a Co-Director and 50% Business Partner at G&M Co., Assistant Director at Red Productions, and a multidisciplinary professional working across business solutions, web development, e-commerce, travel consultancy, SEO and creative services.',

  keywords: [
    'Abdul Wahab',
    'G&M Co.',
    'Business Partner Pakistan',
    'Co-Director',
    'Web Developer Gujranwala',
    'Next.js Developer',
    'Shopify',
    'WooCommerce',
    'SEO Specialist',
    'Red Consultant',
    'Travel Consultancy',
    'Graphic Design',
    'Video Editing',
  ],

  verification: {
    google: 'pUnttVKsDK6XwbDOgySrno62giQlB9THb4mttP0LU_4',
  },

  openGraph: {
    title: 'Abdul Wahab | Business, Technology & Creative Portfolio',
    description:
      'Business leadership, digital platforms, e-commerce, consultancy and creative work.',
    type: 'website',
    url: siteUrl,
    siteName: 'Abdul Wahab Portfolio',
    images: [
      {
        url: '/images/abdul-wahab-hero.jpg',
        alt: 'Abdul Wahab - Professional Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Wahab | Professional Portfolio',
    description:
      'Business, technology, e-commerce, consultancy and creative work.',
    images: ['/images/abdul-wahab-hero.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  );
}
