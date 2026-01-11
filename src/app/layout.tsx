import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-special",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "360 Property UAE",
  description:
    "Professional snagging, inspection, and property services for apartments, villas, and townhouses across all seven emirates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${libreBaskerville.variable} antialiased bg-[#fbf9f5]`}
      >
        {children}
      </body>
    </html>
  );
}
