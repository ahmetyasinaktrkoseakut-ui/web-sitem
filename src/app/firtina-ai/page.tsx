"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Cpu, Sparkles, Smartphone } from 'lucide-react';
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
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal-3d");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-accent-purple/30 selection:text-purple-200 overflow-hidden">
      {/* Arka Plan Glow Efektleri */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      
      {/* 3D Izgara */}
      <div className="grid-3d-wrap">
        <div className="grid-3d"></div>
      </div>

      {/* Yüzen 3D Cam Küreler */}
      <div className="absolute top-[15vh] left-[6%] w-20 h-20 glass-sphere sphere-float-slow opacity-40 hidden md:block" />
      <div className="absolute top-[60vh] right-[8%] w-24 h-24 glass-sphere sphere-float-medium opacity-30 hidden md:block" />

      <main className="min-h-screen max-w-3xl mx-auto px-6 py-20 relative z-10 flex flex-col justify-between">
        <div className="space-y-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 group intro-3d-stagger">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Ana Sayfaya Dön
          </Link>

          <div className="space-y-4 intro-3d-title">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-accent-purple">
              <Cpu className="w-3.5 h-3.5" />
              Yapay Zeka Uygulaması
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white translate-z-md">
              Fırtına AI
            </h1>
          </div>

          <div className="reveal-3d active">
            <ThreeDCard 
              glowColor="rgba(6, 182, 212, 0.25)"
              className="glass-card rounded-2xl overflow-hidden border border-zinc-850 preserve-3d"
            >
              <div className="relative h-64 sm:h-96 w-full bg-zinc-950/60 border-b border-zinc-800/80 overflow-hidden flex items-center justify-center p-6 preserve-3d">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <Image 
                  src="/firtina-ai.png" 
                  alt="Fırtına AI"
                  width={512}
                  height={512}
                  priority
                  className="h-full w-auto object-contain rounded-xl shadow-2xl relative z-10 translate-z-lg"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-6 translate-z-md">
                <p className="text-zinc-300 font-light leading-relaxed text-base sm:text-lg">
                  Gelişmiş ve ücretsiz yapay zeka araçlarını tek bir merkezde toplayan Fırtına AI, kullanıcıların harici hiçbir sunucu veya karmaşık arayüze ihtiyaç duymadan doğrudan içerik üretmesini sağlar. Büyük dil modelleri (LLM) entegrasyonu sayesinde metinsel analizler, görsel oluşturma araçları ve ses deşifre gibi gelişmiş işlevleri kendi içinde sunar.
                </p>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs text-accent-blue uppercase tracking-wider">// Öne Çıkan Özellikler</h3>
                  <ul className="space-y-2 text-sm text-zinc-400 font-light">
                    <li className="flex items-center gap-2 translate-z-sm">
                      <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      Gelişmiş Metin, Görsel ve İşitsel İçerik Üretimi
                    </li>
                    <li className="flex items-center gap-2 translate-z-sm">
                      <Smartphone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      App Store ve Google Play Mağazalarında Aktif Mobil Yayın
                    </li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                  <Link 
                    href="/destek" 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-purple/10 border border-accent-purple/30 text-xs font-mono text-purple-300 hover:text-white hover:bg-accent-purple/20 transition-all"
                  >
                    Fırtına AI Destek Merkezi &rarr;
                  </Link>
                </div>
              </div>
            </ThreeDCard>
          </div>
        </div>

        <footer className="text-center py-10 mt-10">
          <p className="text-xs text-zinc-500 font-mono">
            © 2026 Ahmet Yasin Aktürk. Tüm hakları saklıdır.
          </p>
        </footer>
      </main>
    </div>
  );
}
