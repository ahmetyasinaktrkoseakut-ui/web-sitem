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
  title: 'Ahmet Yasin Aktürk | Full-Stack Geliştirici & Yapay Zeka Üreticisi',
  description: 'Kullanıcı odaklı modern web platformları kuruyor, Next.js ve yapay zeka entegrasyonları ile yüksek performanslı dijital çözümler tasarlıyorum.',
  authors: [{ name: "Ahmet Yasin Aktürk" }],
  keywords: ['Ahmet Yasin Aktürk', 'Full-Stack Geliştirici', 'Yapay Zeka', 'Next.js', 'React', 'Fırtına AI', 'Yapay Zeka Üreticisi', 'Eskişehir Geliştirici', 'React Developer', 'AI Developer'],
  robots: "index, follow",
  verification: {
    google: "iGYiogkYheT0pvWzNcstyb0ZYG-gW5ZjOT_pn0f6n68",
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
      className={`${geistSans.variable} ${geistMono.variable} ${alexBrush.variable} scroll-smooth antialiased`}
    >
      <body className="bg-background text-foreground font-sans min-h-screen selection:bg-accent-purple/30 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}
