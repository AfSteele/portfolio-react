import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aspen Steele Portfolio",
  description: "Aspen Steele's portfolio – web apps, projects, and more.",
  keywords: ["Aspen Steele", "portfolio", "web developer", "projects"],
  openGraph: {
    title: "Aspen Steele Portfolio",
    description: "Aspen Steele's portfolio – web apps, projects, and more.",
    url: "https://yourdomain.com",
    siteName: "Aspen Steele Portfolio",
    images: [
      {
        url: "/aspen-logo.png",
        width: 1200,
        height: 630,
        alt: "Aspen Steele Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspen Steele Portfolio",
    description: "Aspen Steele's portfolio – web apps, projects, and more.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
