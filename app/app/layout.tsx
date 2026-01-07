import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'AfriBiobank - Empowering Africa\'s Medical Research',
  description: 'Africa\'s premier medical imaging biobank, enabling breakthrough research, AI development, and improved healthcare outcomes across the continent.',
  keywords: [
    'medical imaging',
    'biobank',
    'Africa',
    'healthcare',
    'AI',
    'machine learning',
    'federated learning',
    'DICOM',
    'radiology'
  ],
  authors: [{ name: 'AfriBiobank Team' }],
  creator: 'AfriBiobank',
  publisher: 'AfriBiobank',
  metadataBase: new URL('https://afribiobank.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://afribiobank.org',
    title: 'AfriBiobank - Empowering Africa\'s Medical Research',
    description: 'Africa\'s premier medical imaging biobank, enabling breakthrough research, AI development, and improved healthcare outcomes.',
    siteName: 'AfriBiobank',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AfriBiobank Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AfriBiobank - Empowering Africa\'s Medical Research',
    description: 'Africa\'s premier medical imaging biobank',
    creator: '@afribiobank',
    images: ['/twitter-image.png'],
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
  icons: {
    icon: [
      { url: '/afribiobank_logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/afribiobank_logo.svg',
    apple: '/afribiobank_logo.svg',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
