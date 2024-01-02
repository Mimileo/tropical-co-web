import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNavbar from './ui/navigation/sidenav';
import Footer from './ui/navigation/footer';
import Head from 'next/head';


export const metadata = {
  title: "Tropical",
  description: "Landscaping",
    alternates: {
        canonical: 'https:/https://www.tropicallandscaping.tech',
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
      <body className={`${inter.className} antialiased`}>
        <SideNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}