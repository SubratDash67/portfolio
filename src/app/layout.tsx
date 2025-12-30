import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SUBRAT DASH — ML SYSTEMS ENGINEER",
    template: "%s | SUBRAT DASH",
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
    title: "SUBRAT DASH — ML SYSTEMS ENGINEER",
    description:
      "Engineering student building data-driven software systems with focus on machine learning pipelines, analytical backends, and deployment-aware design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUBRAT DASH — ML SYSTEMS ENGINEER",
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
      <head>
        <style>{`
          :root {
            --font-display: ${oswald.style.fontFamily};
            --font-mono: ${jetbrainsMono.style.fontFamily};
          }
        `}</style>
      </head>
      <body
        className={`${oswald.variable} ${jetbrainsMono.variable} antialiased`}
        style={{
          fontFamily: "var(--font-mono)",
        }}
      >
        {/* Noise Overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
