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
    "Data Product Owner IA chez Orange, ESSEC BBA Global. Outils IA, dashboards, automatisations.",
  openGraph: {
    title: "Mayeul de Charentenay — Data Product Owner IA",
    description:
      "Data Product Owner IA chez Orange, ESSEC BBA Global. Outils IA, dashboards, automatisations.",
    type: "website",
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
