import type { Metadata } from "next";
import { Geist, Geist_Mono, Alex_Brush } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});


export const metadata: Metadata = {
  title: "Ahmet Yasin Aktürk | Full-Stack Geliştirici & Yapay Zeka Üreticisi",
  description: "Ahmet Yasin Aktürk'ün modern, minimalist ve karanlık temalı kişisel portfolyosu. Full-Stack yazılım geliştirme ve yapay zeka entegrasyonu odaklı profesyonel çalışmalar.",
  authors: [{ name: "Ahmet Yasin Aktürk" }],
  keywords: ["Ahmet Yasin Aktürk", "Full-Stack Geliştirici", "Yapay Zeka Üreticisi", "Next.js Portfolyo", "Eskişehir Geliştirici", "React Developer", "AI Developer"],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} ${alexBrush.variable} scroll-smooth antialiased`}
    >
      <body className="bg-background text-foreground font-sans min-h-screen selection:bg-accent-purple/30 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}
