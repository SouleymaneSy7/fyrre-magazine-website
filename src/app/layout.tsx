import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import SkipToContent from "@/components/common/SkipToContents";

const generalSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/general-sans-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/general-sans-regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/general-sans-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/general-sans-medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/general-sans-semi-bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Fyrre - Modern Magazine & Digital Content Hub",
  description:
    "Discover Fyrre - Your destination for curated articles, insightful blogs, and engaging podcasts. A clean, modern platform delivering quality content across multiple formats.",
  keywords: [
    "Fyrre",
    "digital magazine",
    "online blog",
    "podcast platform",
    "content hub",
    "digital media",
    "articles",
  ],
  authors: [{ name: "Souleymane Sy" }],
  openGraph: {
    title: "Fyrre - Modern Magazine & Digital Content Hub",
    description: "Your destination for curated articles, blogs, and podcasts",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} antialiased`}>
        <SkipToContent />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
