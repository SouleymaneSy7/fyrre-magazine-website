import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
