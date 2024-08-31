import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNavbar from './ui/navigation/main-nav';
import Footer from './ui/navigation/footer';
import Script from 'next/script';
import { Metadata } from 'next';
import MainNav from './ui/navigation/main-nav';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: "Tropical",
  description: "Professional landscaping services in Salinas, CA - Monterey, Santa Clara, Santa Cruz County, Bay Area, and Tricounty",
  alternates: {
    canonical: 'https://www.tropicallandscaping.tech',
  },
  icons: {
    icon: [
      {
        url: '/vector.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/vector.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tropical Landscaping",
    "description": "Professional landscaping services in Salinas, CA.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Salinas",
      "addressRegion": "CA",
      "postalCode": "93901",
      "addressCountry": "US"
    },
    "telephone": "+1-831-663-4616",
    "url": "https://www.tropicallandscaping.tech/",
    "logo": "https://www.tropicallandscaping.tech/logo.png"
  };

  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2TJXKRK8WP" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2TJXKRK8WP');
          `}
        </Script>
        <Script 
          id="schema-org" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body suppressHydrationWarning={true} className={`${inter.className} antialiased`}>
        <SessionProvider>
          <MainNav />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
