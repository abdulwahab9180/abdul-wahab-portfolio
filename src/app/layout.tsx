
import type { Metadata } from 'next';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://abdul-wahab-portfolio-three.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

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
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Wahab | Professional Portfolio',
    description:
      'Business, technology, e-commerce, consultancy and creative work.',
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
      <body>{children}</body>
    </html>
  );
}
