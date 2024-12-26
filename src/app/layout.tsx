import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const globalStyles = Inter({
  weight: ['400', '600', '700', '800'],
  preload: true,
  style: 'normal',
});

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      <body className={`${globalStyles.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
