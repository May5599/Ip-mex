import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import SiteHeader from "./ui/SiteHeader";
import SiteFooter from "./ui/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "IP-MEX® | Intellectual Property Law Firm | Ottawa, Ontario",
  description: "IP-MEX® is an intellectual property law firm in Ottawa, Ontario. Registered patent agents, trademark agents, and IP lawyers providing patent strategy, trademark registration, and IP legal counsel across Canada and the USA.",
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
