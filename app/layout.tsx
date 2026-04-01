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
    title: "Mayeul de Charentenay — Builder IA",
    description:
      "Je vibe-code des outils IA qui tournent en prod. Data PO IA chez Orange, ESSEC BBA Global.",
    type: "website",
    images: [{ url: "/photo-mayeul.jpg", width: 400, height: 400 }],
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
