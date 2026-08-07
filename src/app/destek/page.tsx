"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, LifeBuoy, HeartHandshake } from 'lucide-react';
import { ThreeDCard } from '@/components/ThreeDCard';

export default function DestekPage() {
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
              <LifeBuoy className="w-3.5 h-3.5" />
              Destek Merkezi
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white translate-z-md">
              Fırtına AI Kullanıcı Destek Merkezi
            </h1>
          </div>

          <div className="reveal-3d active">
            <ThreeDCard 
              glowColor="rgba(168, 85, 247, 0.25)"
              className="glass-card rounded-2xl overflow-hidden border border-zinc-850 p-6 sm:p-8 space-y-6 preserve-3d"
            >
              <div className="space-y-4 translate-z-md">
                <p className="text-zinc-300 font-light leading-relaxed text-base sm:text-lg">
                  Fırtına AI uygulaması ile ilgili sorularınız, teknik destek ve geri bildirim talepleriniz için bize doğrudan e-posta gönderebilirsiniz:
                </p>

                <div className="p-4 sm:p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-accent-purple/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 translate-z-lg group">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-accent-purple/10 border border-accent-purple/30 text-accent-purple">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-500 font-mono block uppercase">✉️ E-posta Adresimiz</span>
                      <a 
                        href="mailto:ahmetyasinakturk@gmail.com" 
                        className="text-base sm:text-lg font-mono text-white hover:text-accent-purple transition-colors font-semibold"
                      >
                        ahmetyasinakturk@gmail.com
                      </a>
                    </div>
                  </div>
                  <a 
                    href="mailto:ahmetyasinakturk@gmail.com" 
                    className="px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-950 text-xs font-medium transition-all text-center flex items-center justify-center gap-2 shadow-md"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    E-posta Gönder
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-400 font-light translate-z-sm">
                <HeartHandshake className="w-4 h-4 text-accent-purple" />
                <span>Mesajlarınıza en kısa sürede dönüş sağlamaktayız.</span>
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
