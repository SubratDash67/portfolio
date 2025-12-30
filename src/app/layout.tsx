import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { ScrollProgress } from "@/components/ui";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Subrat Dash — ML Systems Engineer",
    template: "%s | Subrat Dash",
  },
  description:
    "Engineering student building data-driven software systems with focus on machine learning pipelines, analytical backends, and deployment-aware design.",
  keywords: [
    "Machine Learning",
    "Software Engineer",
    "ML Systems",
    "Backend Engineering",
    "Python",
    "Data Science",
  ],
  authors: [{ name: "Subrat Dash" }],
  creator: "Subrat Dash",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Subrat Dash Portfolio",
    title: "Subrat Dash — ML Systems Engineer",
    description:
      "Engineering student building data-driven software systems with focus on machine learning pipelines, analytical backends, and deployment-aware design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subrat Dash — ML Systems Engineer",
    description:
      "Engineering student building data-driven software systems with focus on machine learning pipelines, analytical backends, and deployment-aware design.",
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text-secondary`}
      >
        <ScrollProgress />
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
