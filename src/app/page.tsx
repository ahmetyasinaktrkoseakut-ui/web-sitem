"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight,
  ExternalLink,
  Send,
  CheckCircle2,
  Menu,
  X,
  LifeBuoy,
  Code2,
  Cpu,
  Sparkles,
  Mail,
  MapPin
} from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xkoeyqwl", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Bir hata oluştu. Lütfen doğrudan e-posta ile iletişime geçin.");
      }
    } catch {
      alert("Bağlantı hatası. Lütfen doğrudan e-posta ile iletişime geçin.");
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  return (
    <div className="bg-surface-base font-sans text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-x-hidden">
      
      {/* Ambient Parlama Efektleri */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-accent-violet-glow blur-[128px]"></div>
        <div className="absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full bg-accent-cyan-glow blur-[140px]"></div>
      </div>

      {/* Navigasyon Header */}
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-xl bg-surface-glass/85 border-b border-white/[0.08] shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6">
          
          {/* Logo / İsim */}
          <Link href="#hero" className="flex items-center gap-3 group select-none">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
              Ahmet Yasin Aktürk
            </span>
          </Link>

          {/* Masaüstü Navigasyon */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            <a href="#biyografi" className="px-3.5 py-1.5 text-on-surface-variant hover:text-white hover:bg-surface-container/60 transition-colors rounded-lg">Biyografi</a>
            <a href="#calismalarim" className="px-3.5 py-1.5 text-on-surface-variant hover:text-white hover:bg-surface-container/60 transition-colors rounded-lg">Çalışmalarım</a>
            <a href="#kultur-sanat" className="px-3.5 py-1.5 text-on-surface-variant hover:text-white hover:bg-surface-container/60 transition-colors rounded-lg">Kültür &amp; Sanat</a>
            <a href="#yetkinlikler" className="px-3.5 py-1.5 text-on-surface-variant hover:text-white hover:bg-surface-container/60 transition-colors rounded-lg">Yetkinlikler</a>
            <a href="#iletisim" className="px-3.5 py-1.5 text-on-surface-variant hover:text-white hover:bg-surface-container/60 transition-colors rounded-lg">İletişim</a>
            <Link href="/destek" className="px-3 py-1.5 text-secondary hover:text-white hover:bg-surface-container/80 transition-colors rounded-lg text-xs flex items-center gap-1.5 font-medium">
              <LifeBuoy className="w-3.5 h-3.5" />
              Destek
            </Link>
          </nav>

          {/* CTA ve Profil Avatar */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="#iletisim" 
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-display text-sm font-semibold transition-all shadow-[0_0_20px_rgba(183,109,255,0.35)] hover:shadow-[0_0_28px_rgba(183,109,255,0.6)]"
            >
              İletişime Geç
            </a>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-surface-container flex items-center justify-center shadow-md">
              <Image 
                src="/ahmet-yasin.jpg" 
                alt="Ahmet Yasin Aktürk" 
                width={40} 
                height={40} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Mobil Menü Butonu */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-on-surface-variant hover:text-white"
              aria-label="Menüyü Aç"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobil Menü Paneli */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-b border-white/[0.08] bg-surface-container-lowest/95 backdrop-blur-xl px-6 py-5 space-y-4 text-sm font-medium">
            <a href="#biyografi" onClick={() => setIsMobileMenuOpen(false)} className="block text-on-surface hover:text-primary">Biyografi</a>
            <a href="#calismalarim" onClick={() => setIsMobileMenuOpen(false)} className="block text-on-surface hover:text-primary">Çalışmalarım</a>
            <a href="#kultur-sanat" onClick={() => setIsMobileMenuOpen(false)} className="block text-on-surface hover:text-primary">Kültür &amp; Sanat</a>
            <a href="#yetkinlikler" onClick={() => setIsMobileMenuOpen(false)} className="block text-on-surface hover:text-primary">Yetkinlikler</a>
            <a href="#iletisim" onClick={() => setIsMobileMenuOpen(false)} className="block text-on-surface hover:text-primary">İletişim</a>
            <Link href="/destek" onClick={() => setIsMobileMenuOpen(false)} className="block text-secondary hover:text-white">Fırtına AI Destek Merkezi</Link>
          </div>
        )}
      </header>

      {/* Ana İçerik */}
      <main className="relative z-10 w-full pt-20">
        <div className="flex flex-col w-full">
          <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-24">
            
            {/* HERO SECTION */}
            <section id="hero" className="relative pt-12 lg:pt-20 flex flex-col items-center text-center">
              {/* Glow Underlay behind Avatar */}
              <div className="absolute -top-10 w-72 h-72 rounded-full bg-primary-container/20 blur-[100px] pointer-events-none"></div>

              {/* Profile Avatar Container - Tamamen Renkli & Doğal */}
              <div className="relative mb-8 group">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary via-secondary to-primary-container opacity-60 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-surface-container-lowest overflow-hidden shadow-2xl border border-white/20">
                  <Image 
                    src="/ahmet-yasin.jpg" 
                    alt="Ahmet Yasin Aktürk" 
                    width={176} 
                    height={176} 
                    priority
                    className="w-full h-full object-cover rounded-full transition-all duration-500 hover:scale-105"
                  />
                </div>
                {/* Status Indicator */}
                <div className="absolute bottom-2 right-2 flex items-center justify-center p-1.5 rounded-full bg-surface-container-lowest border border-white/20 shadow-lg" title="Aktif & Projelere Açık">
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping absolute opacity-75"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 relative"></span>
                </div>
              </div>

              {/* Main Display Title - Şık, Karizmatik Tipografi */}
              <div className="relative mb-5 max-w-4xl">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                  Ahmet Yasin <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent font-extrabold">Aktürk</span>
                </h1>
              </div>

              {/* Role Heading */}
              <h2 className="font-display text-lg sm:text-2xl font-medium text-slate-300 max-w-2xl mb-5 leading-snug">
                Web - Mobil Uygulama Geliştirici &amp; Yapay Zeka İçerik Üreticisi
              </h2>

              {/* Description / Value Prop */}
              <p className="text-base sm:text-lg text-text-muted max-w-3xl mb-10 leading-relaxed font-normal">
                Kullanıcı odaklı modern web ve mobil uygulamalar geliştiriyor; estetik, hız ve yüksek performansı bir araya getiriyorum. Yazılım geliştirme süreçlerimi gelişmiş yapay zeka içerik üretme teknolojileriyle birleştirerek yenilikçi dijital çözümler tasarlıyorum.
              </p>

              {/* Action Button Group */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a 
                  href="#iletisim" 
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-display text-sm font-semibold shadow-[0_0_25px_rgba(183,109,255,0.4)] hover:shadow-[0_0_35px_rgba(183,109,255,0.7)] hover:scale-105 transition-all"
                >
                  <span>İletişime Geç</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a 
                  href="https://github.com/ahmetyasinaktrkoseakut-ui" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-container-high/80 hover:bg-surface-bright text-on-surface font-medium text-xs sm:text-sm transition-all hover:scale-105 shadow-md border border-white/[0.08]"
                >
                  <svg className="w-4 h-4 fill-current text-primary" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span>GitHub</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/ahmet-yasin-akt%C3%BCrk-a66644411/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-container-high/80 hover:bg-surface-bright text-on-surface font-medium text-xs sm:text-sm transition-all hover:scale-105 shadow-md border border-white/[0.08]"
                >
                  <svg className="w-4 h-4 fill-current text-secondary" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span>LinkedIn</span>
                </a>

                <a 
                  href="https://www.instagram.com/ahmet_y_akturk_61/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-container-high/80 hover:bg-surface-bright text-on-surface font-medium text-xs sm:text-sm transition-all hover:scale-105 shadow-md border border-white/[0.08]"
                >
                  <svg className="w-4 h-4 fill-current text-primary-fixed-dim" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"></rect><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"></circle><circle cx="17.5" cy="6.5" r="1.5"></circle></svg>
                  <span>Instagram</span>
                </a>
              </div>
            </section>

            {/* BIOGRAPHY SECTION */}
            <section id="biyografi" className="relative scroll-mt-24 reveal">
              <div className="mb-8">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">Biyografi</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-3"></div>
              </div>

              <div className="w-full">
                <div className="rounded-2xl bg-surface-glass border border-white/[0.08] backdrop-blur-xl p-8 lg:p-12 shadow-xl space-y-6">
                  <p className="text-base sm:text-lg text-on-surface leading-relaxed">
                    Eskişehir Osmangazi Üniversitesi'ndeki akademik yolculuğumla eş zamanlı olarak, karmaşık problemleri modern teknolojilerle temiz kullanıcı deneyimlerine dönüştürüyorum. Yüksek performanslı web ve mobil uygulamalar inşa ederken, kodun işlevselliğine ve sürekli yeni teknolojiler öğrenmeye odaklanıyorum.
                  </p>
                  <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                    Geleneksel yazılım geliştirmeyi bir adım ileriye taşıyarak yapay zeka araçlarını ve dil modellerini iş akışıma doğrudan entegre ediyorum. Yeni projeler geliştirmekle kalmıyor, gelişmiş AI sistemlerini kullanarak görsel, işitsel ve metinsel içerik üretimleri gerçekleştiriyorum. Kodun mantıksal derinliğini yapay zekanın sunduğu dinamik vizyonla birleştirerek uçtan uca, yenilikçi dijital çözümler tasarlıyorum.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-xl bg-surface-container text-xs text-white border border-white/[0.08] font-medium">
                      Temiz Mimari
                    </span>
                    <span className="px-4 py-2 rounded-xl bg-surface-container text-xs text-secondary border border-white/[0.08] font-medium">
                      AI Co-Creation
                    </span>
                    <span className="px-4 py-2 rounded-xl bg-surface-container text-xs text-tertiary border border-white/[0.08] font-medium">
                      Performans Odaklı
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* WORKS / ÇALIŞMALARIM SECTION */}
            <section id="calismalarim" className="relative scroll-mt-24 reveal">
              <div className="mb-8">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">Çalışmalarım</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-3"></div>
                <p className="text-sm text-text-muted mt-3">
                  Geliştirdiğim yapay zeka sistemleri, kurumsal uygulama ve hayata geçirdiğim ticari dijital web girişimleri
                </p>
              </div>

              {/* Primary Projects */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* 1. Fırtına AI Card */}
                <div className="rounded-2xl bg-surface-container-low border border-white/[0.08] p-7 shadow-xl hover:shadow-[0_0_30px_-5px_rgba(183,109,255,0.25)] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6 bg-surface-container-lowest border border-white/[0.06] flex items-center justify-center p-4">
                      <Image 
                        src="/firtina-ai.png" 
                        alt="Fırtına AI" 
                        width={512} 
                        height={512} 
                        className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                      />
                      <div className="absolute top-3 right-3 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-xs text-secondary font-semibold border border-white/[0.08]">
                          Mobil &amp; AI
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="text-xs text-emerald-400 font-medium">Canlıda</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      1. Fırtına AI
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6 font-normal">
                      Gelişmiş ve ücretsiz yapay zeka araçlarını tek merkezde toplayan, ve kendi içinden kullanma imkanı veren kullanıcı odaklı yeni nesil yapay zeka uygulaması.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 bg-surface-container-lowest/40 -mx-7 -mb-7 p-6 rounded-b-2xl border-t border-white/[0.06]">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high text-xs text-on-surface border border-white/[0.06]">
                        App Store
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high text-xs text-on-surface border border-white/[0.06]">
                        Google Play
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link href="/destek" className="text-xs text-text-dim hover:text-white transition-colors">
                        Destek
                      </Link>
                      <Link href="/firtina-ai" className="inline-flex items-center gap-1 text-primary text-xs hover:underline font-medium">
                        <span>İncele</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 2. ESOGÜ ABYS Card */}
                <div className="rounded-2xl bg-surface-container-low border border-white/[0.08] p-7 shadow-xl hover:shadow-[0_0_30px_-5px_rgba(76,215,246,0.25)] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6 bg-surface-container-lowest border border-white/[0.06] flex items-center justify-center p-4">
                      <Image 
                        src="/esogu-abys.png" 
                        alt="ESOGÜ ABYS Akreditasyon Sistemi" 
                        width={773} 
                        height={510} 
                        className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl border border-white/[0.08]"
                      />
                      <div className="absolute top-3 right-3 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-xs text-tertiary font-semibold border border-white/[0.08]">
                          Kurumsal SaaS
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      <span className="text-xs text-cyan-400 font-medium">Akademik</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                      2. ESOGÜ ABYS
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6 font-normal">
                      Kurumların kalite ve akreditasyon süreçlerini dijitalleştiren, modern yazılım mimarisine sahip kurumsal veri ve süreç yönetim sistemi.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 bg-surface-container-lowest/40 -mx-7 -mb-7 p-6 rounded-b-2xl border-t border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high text-xs text-text-muted border border-white/[0.06]">
                        Veri &amp; Kalite Mimari
                      </span>
                    </div>
                    <Link href="/esogu-abys" className="inline-flex items-center gap-1 text-secondary text-xs hover:underline font-medium">
                      <span>İncele</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* 3. Kurulan İşletmeler & Platformlar */}
              <div className="rounded-2xl bg-surface-container-high/60 border border-white/[0.08] backdrop-blur-xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-surface-container border border-white/[0.08] flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">3. Kurulan İşletmeler &amp; Platformlar</h3>
                    <p className="text-xs text-text-muted">Farklı sektörlerin ihtiyaçlarına yönelik uçtan uca tasarlayıp canlıya aldığım ticari web siteleri:</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {/* Item 1: Han Yöresel Lezzetler */}
                  <a 
                    href="https://hanyoresellezzetler.vercel.app/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-6 rounded-xl bg-surface-container-low border border-white/[0.06] hover:bg-surface-bright transition-all group flex flex-col justify-between shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-primary font-semibold">E-Ticaret / Gıda</span>
                        <ExternalLink className="w-4 h-4 text-text-dim group-hover:text-primary transition-colors" />
                      </div>
                      <h4 className="font-display text-base font-semibold text-white group-hover:text-primary transition-colors">Han Yöresel Lezzetler</h4>
                      <p className="text-xs text-text-muted mt-2 leading-relaxed">Özel yöresel ürünlerin dijital vitrini ve sipariş koordinasyon kanalı.</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-surface-container text-[11px] text-primary-fixed-dim">Next.js &amp; Tailwind</span>
                    </div>
                  </a>

                  {/* Item 2: Bizim Kafe Çayko */}
                  <a 
                    href="https://bizimkafecayko.vercel.app/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-6 rounded-xl bg-surface-container-low border border-white/[0.06] hover:bg-surface-bright transition-all group flex flex-col justify-between shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-secondary font-semibold">Gastronomi / Menü</span>
                        <ExternalLink className="w-4 h-4 text-text-dim group-hover:text-secondary transition-colors" />
                      </div>
                      <h4 className="font-display text-base font-semibold text-white group-hover:text-secondary transition-colors">Bizim Kafe Çayko</h4>
                      <p className="text-xs text-text-muted mt-2 leading-relaxed">Kafe içi dinamik QR menü entegrasyonu ve dijital rezervasyon platformu.</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-surface-container text-[11px] text-secondary">React &amp; Firebase</span>
                    </div>
                  </a>

                  {/* Item 3: Müşteri Portali */}
                  <a 
                    href="https://deft-cucurucho-cf2b29.netlify.app/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-6 rounded-xl bg-surface-container-low border border-white/[0.06] hover:bg-surface-bright transition-all group flex flex-col justify-between shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-tertiary font-semibold">B2B Portal</span>
                        <ExternalLink className="w-4 h-4 text-text-dim group-hover:text-tertiary transition-colors" />
                      </div>
                      <h4 className="font-display text-base font-semibold text-white group-hover:text-tertiary transition-colors">Müşteri Portali</h4>
                      <p className="text-xs text-text-muted mt-2 leading-relaxed">Hızlı ve hafif erişimli müşteri destek ve hesap kontrol arabirimi.</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-surface-container text-[11px] text-tertiary">HTML, CSS &amp; JS</span>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* CULTURE & ART (KÜLTÜR VE SANAT) SECTION */}
            <section id="kultur-sanat" className="relative scroll-mt-24 reveal">
              <div className="mb-8">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">Kültür ve Sanat</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-3"></div>
                <p className="text-sm text-text-muted mt-3">Edebi çalışmalarım, kültürel projelerim ve yayımlanmış eserlerim</p>
              </div>

              {/* Book Spotlight Feature Banner */}
              <div className="rounded-2xl bg-surface-container-low border border-white/[0.08] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent-violet-glow blur-[100px] pointer-events-none"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                  
                  {/* Book Cover Column */}
                  <div className="lg:col-span-4 flex justify-center">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-b from-primary/30 to-secondary/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                      <div className="relative w-56 sm:w-64 h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl bg-surface-container-lowest border border-white/[0.08]">
                        <Image 
                          src="/filistine-vefasizlik.jpg" 
                          alt="Filistin'e Vefasızlık" 
                          width={256} 
                          height={384} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Book Narrative Info Column */}
                  <div className="lg:col-span-8 flex flex-col space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3.5 py-1 rounded-full bg-primary-container/20 border border-primary/30 text-primary text-xs font-semibold">
                        Şiir Kitabı / Kasım 2024
                      </span>
                      <span className="px-3.5 py-1 rounded-full bg-surface-container border border-white/[0.06] text-text-muted text-xs">
                        Yazar: Ahmet Yasin Aktürk
                      </span>
                    </div>

                    <h3 className="font-display text-3xl font-bold text-white">
                      Filistin'e Vefasızlık
                    </h3>

                    <p className="text-base text-on-surface-variant leading-relaxed">
                      Filistin'de yaşanan insani dramı, Gazze'deki direnişi ve İslam coğrafyasının bu zulüm karşısındaki sessizliğini mercek altına alan edebi bir çığlık. Eserdeki şiirler, Mescid-i Aksa'nın ve Filistin halkının yalnızlığını, Müslüman toplumların "vefasızlığını" ve duyarsızlığını sarsıcı bir dille ele almaktadır.
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">
                      Bu eser, sadece edebi bir duruş sergilemekle kalmayıp aynı zamanda toplumsal bir farkındalık ve somut bir dayanışma amacı taşımaktadır.
                    </p>

                    {/* Donation Cause Badge */}
                    <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20 backdrop-blur-md flex items-center gap-3 shadow-inner">
                      <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
                      <p className="text-xs text-emerald-300 font-medium">
                        Kitabın satışından elde edilen tüm gelir Filistin'e yardım amaçlı bağışlanmaktadır.
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap gap-4">
                      <a 
                        href="https://cinius.shop/urun/filistine-vefasizlik/" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container-high border border-white/[0.08] hover:bg-surface-bright text-white font-display text-xs font-semibold transition-all hover:scale-105 shadow-md"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                        <span>Cinius Shop'ta İncele</span>
                      </a>
                      <a 
                        href="https://1000kitap.com/kitap/filistine-vefasizlik--458245" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container-high border border-white/[0.08] hover:bg-surface-bright text-white font-display text-xs font-semibold transition-all hover:scale-105 shadow-md"
                      >
                        <ExternalLink className="w-4 h-4 text-secondary" />
                        <span>1000Kitap'ta İncele</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* SKILLS / YETKİNLİKLER SECTION */}
            <section id="yetkinlikler" className="relative scroll-mt-24 reveal">
              <div className="mb-8">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">Yetkinlikler</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-3"></div>
                <p className="text-sm text-text-muted mt-3">Kullandığım Teknolojiler ve Üretim Araçları</p>
              </div>

              {/* Categorized Tech Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. Full-Stack Web Geliştirme */}
                <div className="p-7 rounded-2xl bg-surface-glass border border-white/[0.08] backdrop-blur-xl shadow-xl flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-surface-container border border-white/[0.08] flex items-center justify-center text-primary">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">Full-Stack Web Geliştirme</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-surface-container-low border border-white/[0.04] flex items-center gap-3 group-hover:bg-surface-container transition-colors">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-sm text-on-surface font-medium">React &amp; Next.js Arayüzleri</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low border border-white/[0.04] flex items-center gap-3 group-hover:bg-surface-container transition-colors">
                        <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                        <span className="text-sm text-on-surface font-medium">Modern Tailwind CSS Mimarisi</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low border border-white/[0.04] flex items-center gap-3 group-hover:bg-surface-container transition-colors">
                        <span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
                        <span className="text-sm text-on-surface font-medium">Supabase &amp; Firebase Veritabanı</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-text-dim text-xs">
                    <span>Modern Web Stack</span>
                    <span className="text-primary font-semibold">Performans &amp; Hız</span>
                  </div>
                </div>

                {/* 2. Yapay Zeka & Otomasyon */}
                <div className="p-7 rounded-2xl bg-surface-glass border border-white/[0.08] backdrop-blur-xl shadow-xl flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-surface-container border border-white/[0.08] flex items-center justify-center text-secondary">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">Yapay Zeka &amp; Otomasyon</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-surface-container-low border border-white/[0.04] flex items-center gap-3 group-hover:bg-surface-container transition-colors">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span className="text-sm text-on-surface font-medium">Prompt Engineering &amp; Fine-Tuning</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low border border-white/[0.04] flex items-center gap-3 group-hover:bg-surface-container transition-colors">
                        <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
                        <span className="text-sm text-on-surface font-medium">Akıllı AI Agents Sistemleri</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low border border-white/[0.04] flex items-center gap-3 group-hover:bg-surface-container transition-colors">
                        <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                        <span className="text-sm text-on-surface font-medium">Otonom Görev Zincirleri</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-text-dim text-xs">
                    <span>AI Mimarisi</span>
                    <span className="text-secondary font-semibold">LLMs &amp; Agents</span>
                  </div>
                </div>

                {/* 3. AI Medya & Entegrasyonlar */}
                <div className="p-7 rounded-2xl bg-surface-glass border border-white/[0.08] backdrop-blur-xl shadow-xl flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-surface-container border border-white/[0.08] flex items-center justify-center text-tertiary">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">AI Medya &amp; Entegrasyonlar</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-surface-container-low border border-white/[0.04] flex items-center gap-3 group-hover:bg-surface-container transition-colors">
                        <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                        <span className="text-sm text-on-surface font-medium">Görsel, İşitsel ve Metinsel İçerik Üretimi</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low border border-white/[0.04] flex items-center gap-3 group-hover:bg-surface-container transition-colors">
                        <span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
                        <span className="text-sm text-on-surface font-medium">API Entegrasyonları ve Süreç Otomasyonu</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-low border border-white/[0.04] flex items-center gap-3 group-hover:bg-surface-container transition-colors">
                        <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                        <span className="text-sm text-on-surface font-medium">Multi-Modal Generative Süreçler</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-text-dim text-xs">
                    <span>Yaratıcı Üretim</span>
                    <span className="text-tertiary font-semibold">Generative Tech</span>
                  </div>
                </div>

              </div>
            </section>

            {/* CONTACT / İLETİŞİM SECTION */}
            <section id="iletisim" className="relative mb-24 scroll-mt-24 reveal">
              <div className="mb-8">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">İletişim</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-3"></div>
                <p className="text-sm text-text-muted mt-3">
                  Yeni bir proje teklifi, geliştirme iş birliği veya sadece merhaba demek için bana mesaj gönderebilirsiniz. En kısa sürede geri dönüş sağlayacağım.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Form Alanı */}
                <div className="lg:col-span-7 rounded-2xl bg-surface-container-low border border-white/[0.08] p-8 shadow-xl relative">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs text-text-muted font-medium uppercase tracking-wider mb-2" htmlFor="name">
                          İsim Soyisim
                        </label>
                        <input 
                          id="name" 
                          required 
                          type="text" 
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ahmet Yılmaz" 
                          className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest border border-white/[0.08] text-on-surface placeholder:text-text-dim text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-text-muted font-medium uppercase tracking-wider mb-2" htmlFor="email">
                          E-posta Adresi
                        </label>
                        <input 
                          id="email" 
                          required 
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ornek@domain.com" 
                          className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest border border-white/[0.08] text-on-surface placeholder:text-text-dim text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-text-muted font-medium uppercase tracking-wider mb-2" htmlFor="message">
                        Mesajınız
                      </label>
                      <textarea 
                        id="message" 
                        required 
                        rows={5} 
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Projenizden veya vizyonunuzdan bahsedin..." 
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest border border-white/[0.08] text-on-surface placeholder:text-text-dim text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner resize-none"
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-between">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-display text-sm font-semibold shadow-[0_0_20px_rgba(183,109,255,0.35)] hover:shadow-[0_0_30px_rgba(183,109,255,0.6)] hover:scale-105 transition-all disabled:opacity-50 cursor-pointer"
                      >
                        <span>{isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>

                    {formSubmitted && (
                      <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Mesajınız başarıyla iletildi. En kısa sürede geri döneceğim!</span>
                      </div>
                    )}
                  </form>
                </div>

                {/* Direct Contact Metadata Sidebar */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="rounded-2xl bg-surface-glass border border-white/[0.08] backdrop-blur-xl p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-accent-cyan-glow blur-[80px]"></div>
                    <h3 className="text-base font-display font-bold text-white tracking-wide block mb-6">
                      Doğrudan İletişim
                    </h3>
                    
                    <div className="space-y-5 mb-8">
                      <div>
                        <span className="text-xs text-text-dim block font-medium">E-POSTA ADRESİ</span>
                        <a 
                          href="mailto:ahmet.41yasin@gmail.com" 
                          className="font-display text-base text-secondary hover:text-primary transition-colors flex items-center gap-2 mt-1 font-semibold"
                        >
                          <Mail className="w-4 h-4" />
                          <span>ahmet.41yasin@gmail.com</span>
                        </a>
                      </div>
                      <div>
                        <span className="text-xs text-text-dim block font-medium">KONUM &amp; ZAMAN DİLİMİ</span>
                        <p className="text-sm text-on-surface mt-1 flex items-center gap-2 font-medium">
                          <MapPin className="w-4 h-4 text-text-dim" />
                          <span>Eskişehir / Türkiye (UTC+3)</span>
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-text-dim block font-medium">FIRTIINA AI KULLANICI DESTEĞİ</span>
                        <Link 
                          href="/destek" 
                          className="text-xs text-primary hover:underline flex items-center gap-1.5 mt-1 font-medium"
                        >
                          <LifeBuoy className="w-3.5 h-3.5" />
                          <span>Destek Merkezi Sayfası &rarr;</span>
                        </Link>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/[0.06]">
                      <span className="text-xs text-text-dim block mb-3 uppercase tracking-wider font-medium">Sosyal Kanallar</span>
                      <div className="flex items-center gap-3">
                        <a 
                          href="https://github.com/ahmetyasinaktrkoseakut-ui" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-3 rounded-xl bg-surface-container border border-white/[0.08] hover:bg-surface-bright text-on-surface hover:text-primary transition-all shadow-md"
                          aria-label="GitHub"
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/ahmet-yasin-akt%C3%BCrk-a66644411/" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-3 rounded-xl bg-surface-container border border-white/[0.08] hover:bg-surface-bright text-on-surface hover:text-secondary transition-all shadow-md"
                          aria-label="LinkedIn"
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a 
                          href="https://www.instagram.com/ahmet_y_akturk_61/" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-3 rounded-xl bg-surface-container border border-white/[0.08] hover:bg-surface-bright text-on-surface hover:text-primary-fixed transition-all shadow-md"
                          aria-label="Instagram"
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"></rect><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"></circle><circle cx="17.5" cy="6.5" r="1.5"></circle></svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Availability Micro-Card */}
                  <div className="p-5 rounded-2xl bg-surface-container-high/40 border border-white/[0.08] backdrop-blur-md flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                      <div>
                        <span className="text-xs text-white font-semibold block">Yeni Projeler İçin Açık</span>
                        <span className="text-xs text-text-dim">Web, Mobil &amp; AI Çözümleri</span>
                      </div>
                    </div>
                    <a 
                      className="px-4 py-2 rounded-xl bg-surface-container border border-white/[0.08] text-xs font-semibold text-secondary hover:bg-secondary hover:text-on-secondary transition-all" 
                      href="mailto:ahmet.41yasin@gmail.com"
                    >
                      Görüşelim
                    </a>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-surface-container-lowest border-t border-white/[0.08] mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-1.5">
              <span className="font-display text-lg font-bold text-white tracking-tight">Ahmet Yasin Aktürk</span>
              <p className="text-xs text-text-dim">Web - Mobil Uygulama Geliştirici &amp; Yapay Zeka İçerik Üreticisi</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted">
              <a className="hover:text-white transition-colors" href="#biyografi">Biyografi</a>
              <a className="hover:text-white transition-colors" href="#calismalarim">Çalışmalarım</a>
              <a className="hover:text-white transition-colors" href="#kultur-sanat">Kültür &amp; Sanat</a>
              <a className="hover:text-white transition-colors" href="#yetkinlikler">Yetkinlikler</a>
              <a className="hover:text-white transition-colors" href="#iletisim">İletişim</a>
              <Link className="hover:text-secondary transition-colors" href="/destek">Destek</Link>
            </div>

            <div className="flex items-center gap-4">
              <a className="w-9 h-9 rounded-lg bg-surface-container border border-white/[0.06] flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all" href="https://github.com/ahmetyasinaktrkoseakut-ui" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a className="w-9 h-9 rounded-lg bg-surface-container border border-white/[0.06] flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all" href="https://www.linkedin.com/in/ahmet-yasin-akt%C3%BCrk-a66644411/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a className="w-9 h-9 rounded-lg bg-surface-container border border-white/[0.06] flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all" href="https://www.instagram.com/ahmet_y_akturk_61/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"></rect><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"></circle><circle cx="17.5" cy="6.5" r="1.5"></circle></svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-dim">
            <p>&copy; 2026 Ahmet Yasin Aktürk. Tüm hakları saklıdır.</p>
            <p className="text-text-muted">Kişisel Web Portfolyosu</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
