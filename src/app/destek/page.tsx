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
              <LifeBuoy className="w-3.5 h-3.5 text-zinc-400" />
              Destek Merkezi
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Fırtına AI Kullanıcı Destek Merkezi
            </h1>
          </div>

          <div className="reveal-3d active">
            <ThreeDCard className="premium-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="space-y-5">
                <p className="text-zinc-300 font-normal leading-relaxed text-sm sm:text-base">
                  Fırtına AI uygulaması ile ilgili sorularınız, teknik destek ve geri bildirim talepleriniz için bize doğrudan e-posta gönderebilirsiniz:
                </p>

                <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/60 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-200">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500 font-mono block uppercase">✉️ E-posta Adresimiz</span>
                      <a 
                        href="mailto:ahmetyasinakturk@gmail.com" 
                        className="text-base sm:text-lg font-mono text-white hover:text-zinc-300 transition-colors font-semibold"
                      >
                        ahmetyasinakturk@gmail.com
                      </a>
                    </div>
                  </div>
                  <a 
                    href="mailto:ahmetyasinakturk@gmail.com" 
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold transition-all text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    E-posta Gönder
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-zinc-400">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>Mesajlarınıza en kısa sürede geri dönüş sağlanmaktadır.</span>
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
