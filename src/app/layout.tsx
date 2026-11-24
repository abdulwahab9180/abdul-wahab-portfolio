import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-vercel-project.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Abdul Wahab | Co-Director, Business Partner & Digital Professional',
  description: 'Abdul Wahab is a business partner and Co-Director at G&M Co., Assistant Director at Red Productions, and a multidisciplinary professional working across business solutions, travel consultancy, web development, e-commerce, SEO and creative services in Pakistan.',
  keywords: ['Abdul Wahab', 'G&M Co.', 'Co-Director', 'Business Partner Pakistan', 'Digital Business', 'Web Developer Gujranwala', 'Next.js Developer', 'Shopify', 'WooCommerce', 'SEO Specialist', 'Red Consultant', 'Travel Consultancy', 'Graphic Design', 'Video Editing'],
  openGraph: { title: 'Abdul Wahab | Business, Technology & Creative Portfolio', description: 'Business leadership, digital platforms, e-commerce, consultancy and creative work.', type: 'website', url: siteUrl, siteName: 'Abdul Wahab Portfolio' },
  twitter: { card: 'summary_large_image', title: 'Abdul Wahab | Professional Portfolio', description: 'Business, technology, e-commerce, consultancy and creative work.' },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
