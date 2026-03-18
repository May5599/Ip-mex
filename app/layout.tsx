import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Viewport } from "next";
import SiteHeader from "./ui/SiteHeader";
import SiteFooter from "./ui/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "IP-MEX | Canadian Patent & Trademark Law Firm",
  description: "IP-MEX Inc. is a leading intellectual property law firm in Canada specializing in patent strategy, trademark protection, and IP litigation support. Serving clients across North America.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-neutral-900 font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />

      </body>
    </html>
  );
}
