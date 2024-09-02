
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNavbar from './ui/navigation/main-nav';
import Footer from './ui/navigation/footer';
import Script from 'next/script';
import { Metadata } from 'next';
import MainNav from './ui/navigation/main-nav';
import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/dist/client/components/navigation';
import CanonicalLink from './components/CanonicalLink';


export const metadata: Metadata = {
  title: "Tropical Landscaping Company",
  description: "Professional, best landscaping services in Salinas, CA - Monterey, Santa Clara, Santa Cruz County, Bay Area, and Tricounty",
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
    "description": "Professional landscaping services in Salinas, CA - Santa Clara, Monterey, Santa Cruz County, Bay Area, Central Coast",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "16625 Blackie Rd",
      "addressLocality": "Prunedale",
      "addressRegion": "CA",
      "postalCode": "93907",
      "addressCountry": "US"
    },
    "telephone": "+1-831-663-4616",
    "url": "https://www.tropicallandscaping.tech", // Update schema with the dynamic URL
    "logo": "https://www.tropicallandscaping.tech/logo.png"
  };

  return (
    <html lang="en">
      <head>
        <CanonicalLink /> 
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
