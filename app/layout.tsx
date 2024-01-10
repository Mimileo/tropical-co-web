import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNavbar from './ui/navigation/sidenav';
import Footer from './ui/navigation/footer';
import Head from 'next/head';
import Script from 'next/script';


export const metadata = {
  title: "Tropical",
  description: "Landscaping",
  alternates: {
      canonical: 'https://www.tropicallandscaping.tech',
    },

  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/vector-logo.png',
        href: '/vector-logo.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/vector-logo.png',
        href: '/vector-logo.png',
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
       <Head>
      <title>Canonical Tag Example</title>
      <link
        rel="canonical"
        href="https://www.tropicallandscaping.tech/"
        key="canonical" />
    </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2TJXKRK8WP" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-2TJXKRK8WP');
        `}
      </Script>
    
      <body className={`${inter.className} antialiased`}>
        <SideNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}