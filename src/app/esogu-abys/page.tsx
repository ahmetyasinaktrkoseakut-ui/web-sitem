import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Layers, Sparkles, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ESOGÜ ABYS | React ve Next.js ile Web Uygulaması Yapma',
  description: 'Kurumların kalite ve akreditasyon süreçlerini dijitalleştiren, yüksek performanslı ve modern arayüze sahip kurumsal süreç yönetim sistemi.',
};

export default function EsoguAbysPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-20 relative z-10 flex flex-col justify-between">
      <div className="space-y-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Ana Sayfaya Dön
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-accent-purple">
            <Layers className="w-3.5 h-3.5" />
            Kurumsal Web Uygulaması
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            ESOGÜ ABYS
          </h1>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden border border-zinc-850">
          <div className="relative h-64 sm:h-96 w-full bg-zinc-950/60 border-b border-zinc-800/80 overflow-hidden flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <Image 
              src="/esogu-abys.png" 
              alt="ESOGÜ ABYS"
              width={773}
              height={510}
              priority
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl border border-zinc-800/50 relative z-10"
            />
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-zinc-300 font-light leading-relaxed text-base sm:text-lg">
              Kurumların kalite güvencesi, değerlendirme ve akreditasyon süreçlerini uçtan uca dijitalleştiren ESOGÜ ABYS, modern yazılım standartlarıyla inşa edilmiştir. React ve Next.js mimarisinin sunduğu yüksek performans, güvenlik ve esnek veri modelleri ile kurumsal süreçlerin takibini kolaylaştırır.
            </p>

            <div className="space-y-3">
              <h3 className="font-mono text-xs text-accent-blue uppercase tracking-wider">// Öne Çıkan Özellikler</h3>
              <ul className="space-y-2 text-sm text-zinc-400 font-light">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  Yüksek Performanslı ve Güvenli Kurumsal Altyapı
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  Kalite ve Akreditasyon Süreçlerinin Dijitalleştirilmesi
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
