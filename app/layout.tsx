import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SniperExpress — Ship Smarter. Pay Less.",
  description: "Pakistan's precision courier aggregator. Same Leopards pickup, better rates. Up to Rs.85 cheaper per shipment.",
  keywords: "courier aggregator pakistan, leopards cheaper rates, shipping cost reduction, ecommerce courier",
  openGraph: {
    title: "SniperExpress — Ship Smarter. Pay Less.",
    description: "Pakistan's precision courier aggregator. Up to Rs.85 cheaper per shipment.",
    url: "https://sniperexpress.com",
    siteName: "SniperExpress",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
