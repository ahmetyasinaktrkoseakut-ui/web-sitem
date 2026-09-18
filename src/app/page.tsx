"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Menu, 
  X, 
  Cpu, 
  Layers, 
  Code2, 
  ArrowRight,
  Database,
  Smartphone,
  BookOpen,
  LifeBuoy
} from "lucide-react";
import { ThreeDCard } from "@/components/ThreeDCard";

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

    const revealElements = document.querySelectorAll(".reveal, .reveal-3d");
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
    } catch (error) {
      alert("Bağlantı hatası. Lütfen doğrudan e-posta ile iletişime geçin.");
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="relative min-h-screen text-zinc-100 selection:bg-white/20 selection:text-white">
      
      {/* Üst Navigasyon */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.07] bg-[#070709]/80 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="#hero" className="flex items-center gap-3 group select-none">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-zinc-900 group-hover:border-white/50 transition-colors">
              <Image 
                src="/ahmet-yasin.jpg" 
                alt="Ahmet Yasin Aktürk" 
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                Ahmet Yasin Aktürk
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                Software & AI
              </span>
            </div>
          </Link>
          
          {/* Masaüstü Menü */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors duration-200">Biyografi</a>
            <a href="#projects" className="hover:text-white transition-colors duration-200">Projeler</a>
            <a href="#culture-art" className="hover:text-white transition-colors duration-200">Kültür & Sanat</a>
            <a href="#skills" className="hover:text-white transition-colors duration-200">Yetkinlikler</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">İletişim</a>
            <Link href="/destek" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-300 hover:text-white hover:border-white/30 transition-all">
              <LifeBuoy className="w-3.5 h-3.5" />
              <span>Destek</span>
            </Link>
          </nav>

          {/* Mobil Menü Butonu */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Menüyü Aç"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobil Açılır Menü */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-white/[0.08] bg-[#090a0f] px-6 py-5 space-y-4 text-sm font-medium text-zinc-300">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-white">Biyografi</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-white">Projeler</a>
            <a href="#culture-art" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-white">Kültür & Sanat</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-white">Yetkinlikler</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-white">İletişim</a>
            <Link href="/destek" onClick={() => setIsMobileMenuOpen(false)} className="block text-accent-blue hover:text-white">Destek Merkezi</Link>
          </div>
        )}
      </header>

      {/* Ana İçerik */}
      <main className="max-w-5xl mx-auto px-6 relative z-10 pt-20">
        
        {/* Hero Bölümü */}
        <section id="hero" className="min-h-[82vh] flex flex-col justify-center py-16 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            
            {/* Canlı Durum Rozeti */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/[0.08] text-xs text-zinc-300 shadow-sm mx-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 beacon-dot"></span>
              <span className="font-mono text-[11px] text-zinc-400">Yeni Projelere & Girişimlere Açık</span>
            </div>

            {/* Profil Görseli */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto group">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/[0.15] bg-zinc-900 shadow-2xl shadow-black/80 ring-4 ring-white/[0.03]">
                <Image 
                  src="/ahmet-yasin.jpg" 
                  alt="Ahmet Yasin Aktürk" 
                  width={160}
                  height={160}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* İsim ve Başlık */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                Ahmet Yasin Aktürk
              </h1>
              <p className="text-base sm:text-xl font-medium text-zinc-400 tracking-tight">
                Full-Stack Geliştirici &middot; Yapay Zeka Sistemleri &middot; Dijital Girişimci
              </p>
            </div>

            {/* Tanıtım Metni */}
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
              Kullanıcı odaklı modern web ve mobil mimariler geliştiriyor; en güncel yapay zeka modellerini doğrudan çalışan ürünlere dönüştürüyorum. Temiz kod, yüksek hız ve estetik tasarım prensipleriyle uçtan uca dijital çözümler üretiyorum.
            </p>

            {/* Butonlar & Bağlantılar */}
            <div className="pt-2 flex flex-wrap gap-3 items-center justify-center">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10 text-xs sm:text-sm"
              >
                İletişime Geç
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="https://github.com/ahmetyasinaktrkoseakut-ui" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-zinc-300 hover:text-white hover:border-white/20 transition-all flex items-center gap-2 text-xs sm:text-sm font-medium"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>

              <a 
                href="https://www.linkedin.com/in/ahmet-yasin-akt%C3%BCrk-a66644411/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-zinc-300 hover:text-white hover:border-white/20 transition-all flex items-center gap-2 text-xs sm:text-sm font-medium"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>

              <a 
                href="https://www.instagram.com/ahmet_y_akturk_61/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/[0.08] text-zinc-300 hover:text-white hover:border-white/20 transition-all flex items-center gap-2 text-xs sm:text-sm font-medium"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Biyografi Bölümü */}
        <section id="about" className="py-20 border-t border-white/[0.07] scroll-mt-16 reveal">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="md:w-1/3">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">// 01 &middot; Biyografi</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Akademik Temel & Mühendislik Vizyonu</h2>
            </div>
            <div className="md:w-2/3 space-y-5 text-zinc-300 font-normal leading-relaxed text-sm sm:text-base">
              <p>
                Eskişehir Osmangazi Üniversitesi'ndeki eğitim sürecimle eş zamanlı olarak yazılım dünyasındaki yenilikleri üretim odaklı bir yaklaşımla hayata geçiriyorum. Yüksek performanslı web mimarileri, yerel mobil uygulamalar ve kurumsal veri yönetim sistemleri inşa ederken, kodun okunabilirliğine ve sağlam mimari temellere odaklanıyorum.
              </p>
              <p>
                Geliştirdiğim projelerde büyük dil modelleri (LLM), yapay zeka ajanları ve otomasyon araçlarını iş akışının merkezine koyuyorum. Amacım yalnızca teknik kod yazmak değil; kullanıcı deneyimini maksimuma çıkaran, estetik ve sürdürülebilir dijital ürünler tasarlamaktır.
              </p>
            </div>
          </div>
        </section>

        {/* Çalışmalarım / Projeler Bölümü */}
        <section id="projects" className="py-20 border-t border-white/[0.07] scroll-mt-16 reveal">
          <div className="space-y-2 mb-10">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">// 02 &middot; Çalışmalarım</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Öne Çıkan Projeler & Platformlar</h2>
            <p className="text-zinc-400 text-sm">
              Mobil yapay zeka uygulamaları, kurumsal yazılım sistemleri ve canlıdaki ticari girişimler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* 1. Fırtına AI (Büyük Kart) */}
            <ThreeDCard className="premium-card rounded-2xl md:col-span-2 flex flex-col group">
              <Link href="/firtina-ai" className="block flex-grow">
                <div className="relative h-60 sm:h-72 w-full bg-zinc-950/80 border-b border-white/[0.06] overflow-hidden flex items-center justify-center p-6">
                  <Image 
                    src="/firtina-ai.png" 
                    alt="Fırtına AI"
                    width={480}
                    height={480}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl shadow-xl"
                  />
                </div>
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-mono text-zinc-500 block uppercase">Yapay Zeka &middot; Mobil Uygulama</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-zinc-200 transition-colors">1. Fırtına AI</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-[11px] font-medium text-zinc-200">
                        App Store
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-[11px] font-medium text-zinc-200">
                        Google Play
                      </span>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm font-normal leading-relaxed">
                    Gelişmiş ve ücretsiz yapay zeka araçlarını tek merkezde toplayan, kullanıcıların kendi içinde metin, görsel ve işitsel içerik üretmesine imkan tanıyan yeni nesil mobil yapay zeka uygulaması.
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                    <span>İncele ve Detayları Gör</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ThreeDCard>

            {/* 2. ESOGÜ ABYS (Tek Kart) */}
            <ThreeDCard className="premium-card rounded-2xl md:col-span-1 flex flex-col group">
              <Link href="/esogu-abys" className="block flex-grow">
                <div className="relative h-60 sm:h-72 w-full bg-zinc-950/80 border-b border-white/[0.06] overflow-hidden flex items-center justify-center p-6">
                  <Image 
                    src="/esogu-abys.png" 
                    alt="ESOGÜ ABYS"
                    width={400}
                    height={300}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg shadow-lg border border-white/10"
                  />
                </div>
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 block uppercase">Kurumsal Yazılım &middot; Web</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-zinc-200 transition-colors">2. ESOGÜ ABYS</h3>
                  </div>
                  <p className="text-zinc-400 text-sm font-normal leading-relaxed">
                    Kurumların akreditasyon ve kalite güvencesi süreçlerini dijitalleştiren modern veri ve süreç yönetim sistemi.
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                    <span>Sistem Detayları</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ThreeDCard>

            {/* 3. Canlı Ticari Platformlar */}
            <ThreeDCard className="premium-card rounded-2xl p-6 sm:p-7 md:col-span-3 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">// Canlı Ticari Projeler</span>
                  <h3 className="text-lg font-bold text-white">3. Kurulan İşletmeler & Web Girişimleri</h3>
                </div>
                <Layers className="w-5 h-5 text-zinc-500" />
              </div>
              <p className="text-zinc-400 text-sm">
                Farklı sektörlerin ihtiyaçlarına yönelik uçtan uca geliştirip canlı yayına aldığım dijital işletme platformları:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <a 
                  href="https://hanyoresellezzetler.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06] hover:border-white/20 transition-all group flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-zinc-200 group-hover:text-white">Han Yöresel Lezzetler</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">Next.js & Tailwind</span>
                </a>

                <a 
                  href="https://bizimkafecayko.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06] hover:border-white/20 transition-all group flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-zinc-200 group-hover:text-white">Bizim Kafe Çayko</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">React & Firebase</span>
                </a>

                <a 
                  href="https://deft-cucurucho-cf2b29.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06] hover:border-white/20 transition-all group flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-zinc-200 group-hover:text-white">Müşteri Portali</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">Web Dashboard</span>
                </a>
              </div>
            </ThreeDCard>

          </div>
        </section>

        {/* Kültür ve Sanat Bölümü */}
        <section id="culture-art" className="py-20 border-t border-white/[0.07] scroll-mt-16 reveal">
          <div className="space-y-2 mb-10">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">// 03 &middot; Edebiyat & Kültür</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Filistin'e Vefasızlık</h2>
            <p className="text-zinc-400 text-sm">
              Edebi çalışmalarım, yayınlanmış şiir kitabım ve sosyal dayanışma projesi.
            </p>
          </div>

          <ThreeDCard className="premium-card rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              
              {/* Kitap Kapağı */}
              <div className="flex justify-center">
                <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl max-w-[200px] w-full">
                  <Image 
                    src="/filistine-vefasizlik.jpg" 
                    alt="Filistin'e Vefasızlık"
                    width={200}
                    height={300}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Kitap Açıklaması */}
              <div className="md:col-span-2 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Filistin'e Vefasızlık</h3>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">Yazar: Ahmet Yasin Aktürk</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-zinc-300">
                    Şiir &middot; Kasım 2024
                  </span>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base font-normal leading-relaxed">
                  Filistin'de yaşanan insani dramı, Gazze'deki onurlu direnişi ve İslam dünyasının bu zulüm karşısındaki sessizliğini mercek altına alan edebi bir haykırış. Eserdeki şiirler, toplumsal bir farkındalık ve vicdani bir dayanışma çağrısıdır.
                </p>

                <div className="p-3.5 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-xs text-emerald-300 font-medium">
                    Kitabın satışından elde edilen tüm gelir Filistin'e insani yardım amaçlı bağışlanmaktadır.
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a 
                    href="https://cinius.shop/urun/filistine-vefasizlik/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 hover:border-white/30 text-xs font-medium text-zinc-200 hover:text-white transition-all flex items-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Cinius Shop'ta İncele
                  </a>
                  <a 
                    href="https://1000kitap.com/kitap/filistine-vefasizlik--458245" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 hover:border-white/30 text-xs font-medium text-zinc-200 hover:text-white transition-all flex items-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    1000Kitap'ta Oku
                  </a>
                </div>
              </div>

            </div>
          </ThreeDCard>
        </section>

        {/* Yetkinlikler Bölümü */}
        <section id="skills" className="py-20 border-t border-white/[0.07] scroll-mt-16 reveal">
          <div className="space-y-2 mb-10">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">// 04 &middot; Yetkinlikler</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Teknoloji & Araç Kiti</h2>
            <p className="text-zinc-400 text-sm">
              Modern yazılım geliştirme ve yapay zeka süreçlerinde kullandığım temel teknolojiler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Frontend & Mobil */}
            <ThreeDCard className="premium-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2.5 text-zinc-200 pb-2 border-b border-white/[0.06]">
                <Code2 className="w-4 h-4 text-accent-blue" />
                <h3 className="font-semibold text-sm">Frontend & Mobil</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center justify-between p-2 rounded-lg bg-zinc-950/40 border border-white/[0.04]">
                  <span>React & Next.js 16</span>
                  <span className="text-[10px] font-mono text-zinc-500">App Router</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-zinc-950/40 border border-white/[0.04]">
                  <span>Tailwind CSS</span>
                  <span className="text-[10px] font-mono text-zinc-500">Responsive & UI</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-zinc-950/40 border border-white/[0.04]">
                  <span>TypeScript & JavaScript</span>
                  <span className="text-[10px] font-mono text-zinc-500">Tip Güvenliği</span>
                </li>
              </ul>
            </ThreeDCard>

            {/* Yapay Zeka & LLM */}
            <ThreeDCard className="premium-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2.5 text-zinc-200 pb-2 border-b border-white/[0.06]">
                <Cpu className="w-4 h-4 text-accent-purple" />
                <h3 className="font-semibold text-sm">Yapay Zeka & Otomasyon</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center justify-between p-2 rounded-lg bg-zinc-950/40 border border-white/[0.04]">
                  <span>LLM & Ajan Sistemleri</span>
                  <span className="text-[10px] font-mono text-zinc-500">AI Agents</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-zinc-950/40 border border-white/[0.04]">
                  <span>Prompt Mühendisliği</span>
                  <span className="text-[10px] font-mono text-zinc-500">Optimizasyon</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-zinc-950/40 border border-white/[0.04]">
                  <span>Multi-Modal İçerik Üretimi</span>
                  <span className="text-[10px] font-mono text-zinc-500">Metin, Görsel, Ses</span>
                </li>
              </ul>
            </ThreeDCard>

            {/* Backend & Bulut */}
            <ThreeDCard className="premium-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2.5 text-zinc-200 pb-2 border-b border-white/[0.06]">
                <Database className="w-4 h-4 text-emerald-400" />
                <h3 className="font-semibold text-sm">Backend & Bulut Altyapısı</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center justify-between p-2 rounded-lg bg-zinc-950/40 border border-white/[0.04]">
                  <span>Supabase & Firebase</span>
                  <span className="text-[10px] font-mono text-zinc-500">Veritabanı & Auth</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-zinc-950/40 border border-white/[0.04]">
                  <span>REST API Entegrasyonu</span>
                  <span className="text-[10px] font-mono text-zinc-500">Servis Bağlantıları</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-zinc-950/40 border border-white/[0.04]">
                  <span>Vercel & Git İş Akışları</span>
                  <span className="text-[10px] font-mono text-zinc-500">CI/CD & Dağıtım</span>
                </li>
              </ul>
            </ThreeDCard>

          </div>
        </section>

        {/* İletişim Bölümü */}
        <section id="contact" className="py-20 border-t border-white/[0.07] scroll-mt-16 reveal">
          <div className="space-y-2 mb-10">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">// 05 &middot; İletişim</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Birlikte Yeni Şeyler Üretelim</h2>
            <p className="text-zinc-400 text-sm">
              Proje teklifleri, ortak geliştirme fikirleri veya sorularınız için mesaj bırakabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Form Alanı */}
            <div className="md:col-span-2 relative">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-mono text-zinc-500 uppercase mb-2">İsim Soyisim</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-900/60 border border-white/[0.08] focus:border-white/30 text-zinc-100 px-4 py-3 rounded-xl outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-mono text-zinc-500 uppercase mb-2">E-posta Adresi</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-900/60 border border-white/[0.08] focus:border-white/30 text-zinc-100 px-4 py-3 rounded-xl outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono text-zinc-500 uppercase mb-2">Mesajınız</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900/60 border border-white/[0.08] focus:border-white/30 text-zinc-100 px-4 py-3 rounded-xl outline-none transition-colors text-sm resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold transition-all w-full sm:w-auto text-sm flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Başarı Bildirimi */}
              {formSubmitted && (
                <div className="absolute top-0 left-0 w-full h-full bg-zinc-950/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center space-y-4 animate-fadeIn z-30">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                  <div className="text-center space-y-1">
                    <h4 className="text-zinc-100 font-semibold text-lg">Mesajınız Alındı!</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm">En kısa sürede e-posta adresiniz üzerinden geri dönüş sağlayacağım.</p>
                  </div>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-lg text-xs font-mono text-zinc-300"
                  >
                    Yeni Mesaj Yaz
                  </button>
                </div>
              )}
            </div>

            {/* Doğrudan İletişim Kartı */}
            <div className="space-y-4">
              <div className="premium-card rounded-2xl p-6 space-y-5">
                <span className="text-[11px] font-mono text-zinc-500 uppercase block tracking-wider">// Doğrudan İletişim</span>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-mono">E-posta</span>
                    <a 
                      href="mailto:ahmet.41yasin@gmail.com" 
                      className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-white transition-colors flex items-center gap-1.5 mt-1"
                    >
                      <Mail className="w-3.5 h-3.5 text-zinc-400" />
                      ahmet.41yasin@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-mono">Fırtına AI Kullanıcı Desteği</span>
                    <Link 
                      href="/destek"
                      className="text-xs font-mono text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 mt-1 underline underline-offset-4 decoration-white/20"
                    >
                      <LifeBuoy className="w-3.5 h-3.5 text-zinc-400" />
                      Destek Merkezi Sayfası &rarr;
                    </Link>
                  </div>

                  <div className="pt-2 border-t border-white/[0.06]">
                    <span className="text-[10px] text-zinc-500 block uppercase font-mono mb-2">Sosyal Kanallar</span>
                    <div className="flex gap-2">
                      <a 
                        href="https://github.com/ahmetyasinaktrkoseakut-ui" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2.5 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                        aria-label="GitHub"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/ahmet-yasin-akt%C3%BCrk-a66644411/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2.5 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                      <a 
                        href="https://www.instagram.com/ahmet_y_akturk_61/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2.5 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                        aria-label="Instagram"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Alt Bilgi (Footer) */}
      <footer className="py-12 mt-12 border-t border-white/[0.06] text-center text-xs text-zinc-500 font-mono">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 Ahmet Yasin Aktürk. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4 text-[11px] text-zinc-400">
            <Link href="/destek" className="hover:text-white transition-colors">Fırtına AI Destek</Link>
            <span>&middot;</span>
            <Link href="/esogu-abys" className="hover:text-white transition-colors">ESOGÜ ABYS</Link>
            <span>&middot;</span>
            <a href="#hero" className="hover:text-white transition-colors">Yukarı Çık &uarr;</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
