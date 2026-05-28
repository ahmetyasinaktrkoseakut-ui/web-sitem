import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Cpu, Sparkles, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fırtına AI |Ücretsiz Yapay Zeka Araçları ile İçerik Üretimi',
  description: ' Ücretsiz Gelişmiş yapay zeka araçları ve büyük dil modelleri (LLM) kullanarak metin, görsel ve işitsel içerik üretmenize kendi içinde olanak sağlayan Yapay zeka Uygulaması.',
};

export default function FirtinaAiPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-20 relative z-10 flex flex-col justify-between">
      <div className="space-y-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Ana Sayfaya Dön
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-accent-purple">
            <Cpu className="w-3.5 h-3.5" />
            Yapay Zeka Uygulaması
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Fırtına AI
          </h1>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden border border-zinc-850">
          <div className="relative h-64 sm:h-96 w-full bg-zinc-900/60 border-b border-zinc-800/80">
            <Image 
              src="/firtina-ai.png" 
              alt="Fırtına AI"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-zinc-300 font-light leading-relaxed text-base sm:text-lg">
              Gelişmiş ve ücretsiz yapay zeka araçlarını tek bir merkezde toplayan Fırtına AI, kullanıcıların harici hiçbir sunucu veya karmaşık arayüze ihtiyaç duymadan doğrudan içerik üretmesini sağlar. Büyük dil modelleri (LLM) entegrasyonu sayesinde metinsel analizler, görsel oluşturma araçları ve ses deşifre gibi gelişmiş işlevleri kendi içinde sunar.
            </p>

            <div className="space-y-3">
              <h3 className="font-mono text-xs text-accent-blue uppercase tracking-wider">// Öne Çıkan Özellikler</h3>
              <ul className="space-y-2 text-sm text-zinc-400 font-light">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  Gelişmiş Metin, Görsel ve İşitsel İçerik Üretimi
                </li>
                <li className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  App Store ve Google Play Mağazalarında Aktif Mobil Yayın
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-10 mt-10">
        <p className="text-xs text-zinc-500 font-mono">
          © 2026 Ahmet Yasin Aktürk. Tüm hakları saklıdır.
        </p>
      </footer>
    </main>
  );
}
