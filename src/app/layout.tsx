import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { VisitorNotifier } from "@/components/VisitorNotifier";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ahmetyasinakturk.com'),
  title: 'Ahmet Yasin Aktürk',
  description: 'Kullanıcı odaklı modern web platformları kuruyor, Next.js ve yapay zeka entegrasyonları ile yüksek performanslı dijital çözümler tasarlıyorum.',
  authors: [{ name: "Ahmet Yasin Aktürk" }],
  keywords: ['Ahmet Yasin Aktürk', 'Full-Stack Geliştirici', 'Yapay Zeka', 'Next.js', 'React', 'Fırtına AI', 'Yapay Zeka Üreticisi', 'Eskişehir Geliştirici', 'React Developer', 'AI Developer'],
  robots: "index, follow",
  verification: {
    google: "iGYiogkYheT0pvWzNcstyb0ZYG-gW5ZjOT_pn0f6n68",
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Ahmet Yasin Aktürk',
    description: 'Kullanıcı odaklı modern web platformları kuruyor, Next.js ve yapay zeka entegrasyonları ile yüksek performanslı dijital çözümler tasarlıyorum.',
    url: 'https://ahmetyasinakturk.com',
    siteName: 'Ahmet Yasin Aktürk',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Ahmet Yasin Aktürk | Full-Stack Geliştirici & Yapay Zeka Üreticisi',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmet Yasin Aktürk',
    description: 'Kullanıcı odaklı modern web platformları kuruyor, Next.js ve yapay zeka entegrasyonları ile yüksek performanslı dijital çözümler tasarlıyorum.',
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth antialiased`}
    >
      <body className="bg-surface-base text-on-surface font-sans min-h-screen selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
        <VisitorNotifier />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
