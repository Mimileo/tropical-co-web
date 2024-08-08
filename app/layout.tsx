import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNavbar from './ui/navigation/main-nav';
import Footer from './ui/navigation/footer';
import Script from 'next/script';
import { Metadata } from 'next'
import MainNav from './ui/navigation/main-nav';
import { SessionProvider } from 'next-auth/react';


export const metadata: Metadata = {
  title: "Tropical",
  description: "Landscaping",
  alternates: {
      canonical: 'https://www.tropicallandscaping.tech',
    },

  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/vector.svg.',
        href: '/vector.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/vector.svg',
        href: '/vector.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2TJXKRK8WP" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-2TJXKRK8WP');
        `}
      </Script>
    
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