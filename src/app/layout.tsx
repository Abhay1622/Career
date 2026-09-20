import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import '@/styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SEO Analyst Portfolio | Organic Growth & Search Architecture',
  description:
    'High-end personal portfolio and verified case studies of an SEO Analyst specializing in Technical SEO, Core Web Vitals, Black-Hat Recovery, Location Pages, and High-Intent Keyword Domination.',
  keywords: [
    'SEO Analyst',
    'Technical SEO Specialist',
    'Search Engine Optimization',
    'Core Web Vitals Optimization',
    'Black-Hat SEO Recovery',
    'Toxic Backlink Disavowal',
    'Local SEO Geo-Pages',
    'On-Page SEO',
    'Keyword Research',
    'Organic Growth Portfolio',
  ],
  authors: [{ name: 'SEO Analyst' }],
  creator: 'SEO Analyst',
  openGraph: {
    title: 'SEO Analyst Portfolio | Organic Growth & Search Architecture',
    description:
      'Verified SEO case studies: 10x traffic scale post-penalty, Top 2 & Position 1 software rankings, and programmatic multi-city local pages.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SEO Analyst Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Analyst Portfolio | Organic Growth & Search Architecture',
    description:
      'Verified SEO case studies: 10x traffic scale post-penalty, Top 2 & Position 1 software rankings, and programmatic multi-city local pages.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'SEO Analyst',
    jobTitle: 'SEO Analyst & Organic Growth Strategist',
    knowsAbout: [
      'Search Engine Optimization',
      'Technical SEO',
      'Core Web Vitals',
      'On-Page SEO',
      'Keyword Research',
      'Toxic Backlink Cleanup',
      'Local SEO',
      'High-Authority Link Building',
    ],
    description:
      'Experienced SEO professional focused on sustainable search visibility, technical architecture, and verified organic rankings.',
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} data-theme="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <AuroraBackground />
          <Navbar />
          <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
