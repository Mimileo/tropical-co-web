import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNavbar from './ui/navigation/sidenav';
import Footer from './ui/navigation/footer';


export const metadata = {
  title: "Tropical",
  description: "Landscaping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SideNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}