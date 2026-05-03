import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayeul de Charentenay — Data Product Owner IA",
  description:
    "Data PO IA chez Orange Business · Co-fondateur IA-Opti (ESSEC Ventures) · ESSEC BBA. 5 projets IA en prod. Disponible CDI Paris janvier 2027.",
  openGraph: {
    title: "Mayeul de Charentenay — Builder IA & Data Product Owner",
    description:
      "Alternant Data PO IA chez Orange Business et co-fondateur d'IA-Opti (sélectionné ESSEC Ventures). 5 projets IA en production. Disponible CDI Paris en janvier 2027.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/photo-mayeul.jpg", width: 400, height: 400, alt: "Mayeul de Charentenay" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayeul de Charentenay — Builder IA",
    description:
      "Data PO IA chez Orange · Co-fondateur IA-Opti · Disponible CDI Paris janvier 2027.",
    images: ["/photo-mayeul.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.className} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
