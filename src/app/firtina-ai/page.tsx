"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Cpu, Sparkles, Smartphone, LifeBuoy } from 'lucide-react';
import { ThreeDCard } from '@/components/ThreeDCard';

export default function FirtinaAiPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal, .reveal-3d");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-white/20 selection:text-white">
      <main className="min-h-screen max-w-3xl mx-auto px-6 py-20 relative z-10 flex flex-col justify-between">
        <div className="space-y-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors duration-200 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            &larr; Ana Sayfaya Dön
          </Link>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
              <Cpu className="w-3.5 h-3.5 text-zinc-400" />
              Mobil Yapay Zeka Uygulaması
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Fırtına AI
            </h1>
            <p className="text-zinc-400 text-sm">
              Çok Modlu Yapay Zeka Araçları & İçerik Üretim Ekosistemi
            </p>
          </div>

          <div className="reveal-3d active">
            <ThreeDCard className="premium-card rounded-2xl overflow-hidden">
              <div className="relative h-64 sm:h-96 w-full bg-zinc-950/80 border-b border-white/[0.06] overflow-hidden flex items-center justify-center p-6">
                <Image 
                  src="/firtina-ai.png" 
                  alt="Fırtına AI"
                  width={512}
                  height={512}
                  priority
                  className="h-full w-auto object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-zinc-300 font-normal leading-relaxed text-sm sm:text-base">
                  Gelişmiş ve ücretsiz yapay zeka araçlarını tek bir merkezde toplayan Fırtına AI, kullanıcıların harici hiçbir karmaşık arayüze ihtiyaç duymadan doğrudan içerik üretmesini sağlar. Büyük dil modelleri (LLM) entegrasyonu sayesinde metin analizi, görsel oluşturma ve ses işleme gibi gelişmiş işlevleri yerel ortamda sunar.
                </p>

                <div className="space-y-3 pt-2 border-t border-white/[0.06]">
                  <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-wider">// Temel Yetenekler</h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                    <li className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-950/40 border border-white/[0.04]">
                      <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>Çok Modlu İçerik Üretimi (Metin, Görsel ve Ses İşleme)</span>
                    </li>
                    <li className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-950/40 border border-white/[0.04]">
                      <Smartphone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>App Store ve Google Play Mağazalarında Canlı Yayın</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <Link 
                    href="/destek" 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-zinc-200 hover:text-white hover:bg-white/[0.1] transition-all"
                  >
                    <LifeBuoy className="w-3.5 h-3.5 text-zinc-400" />
                    Kullanıcı Destek Merkezi &rarr;
                  </Link>
                </div>
              </div>
            </ThreeDCard>
          </div>
        </div>

        <footer className="text-center py-10 mt-10 border-t border-white/[0.06]">
          <p className="text-xs text-zinc-500 font-mono">
            &copy; 2026 Ahmet Yasin Aktürk. Tüm hakları saklıdır.
          </p>
        </footer>
      </main>
    </div>
  );
}
