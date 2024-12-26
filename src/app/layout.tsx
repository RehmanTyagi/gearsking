import type { Metadata } from 'next';
import { Geist, Poppins } from 'next/font/google';
import './globals.css';

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title:
    'Gearsking: Refurbished & New Laptops, Computers, Spare Parts | Expert On-Site Repair Services',
  description:
    'Gearsking - Your one-stop solution for refurbished and new laptops, computers, and spare parts. Offering reliable on-site repair services and high-quality accessories at competitive prices. Shop now for the best deals on IT products and services!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${poppins.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
