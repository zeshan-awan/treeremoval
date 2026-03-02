import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { FloatingCtas } from "@/components/layout/FloatingCtas";
import { SITE_NAME, defaultSEO } from "@/lib/seoConfig";

export const metadata: Metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  metadataBase: new URL("https://www.emergencytreeremovalhp.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    siteName: SITE_NAME,
    url: "https://www.emergencytreeremovalhp.com",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingCtas />
      </body>
    </html>
  );
}

