"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Terminal, 
  Mail, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Menu, 
  X, 
  Cpu, 
  Layers, 
  Code2, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
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
      // E-postanıza mesaj düşmesi için Formspree API entegrasyonu.
      // E-postanız olan ahmet.41yasin@gmail.com adresine yönlendirilmiştir.
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

    // Toast'u 5 saniye sonra kapat
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="relative min-h-screen selection:bg-accent-purple/30 selection:text-purple-200">
      
      {/* Arka Plan Glow Efektleri */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      {/* Navigasyon Header */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800/40 bg-zinc-950/65 backdrop-blur-md transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex flex-col items-start leading-none group py-1 select-none">
            <span className="text-xs sm:text-sm font-black tracking-[0.1em] text-transparent [-webkit-text-stroke:0.8px_#a855f7] drop-shadow-[0_0_4px_rgba(168,85,247,0.7)] font-sans uppercase">
              AHMET YASİN
            </span>
            <span className="text-[10px] sm:text-xs font-script text-white/90 self-end -mt-0.5 ml-3 transform -rotate-2">
              Aktürk
            </span>
          </a>
          
          {/* Masaüstü Navigasyon */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-zinc-100 transition-colors duration-200">Biyografi</a>
            <a href="#projects" className="hover:text-zinc-100 transition-colors duration-200">Çalışmalarım</a>
            <a href="#culture-art" className="hover:text-zinc-100 transition-colors duration-200">Kültür & Sanat</a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors duration-200">Yetkinlikler</a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors duration-200">İletişim</a>
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

        {/* Mobil Navigasyon Paneli */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-800/80 bg-zinc-950 px-6 py-4 space-y-4 text-zinc-400 animate-fadeIn">
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-white transition-colors duration-200"
            >
              Biyografi
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-white transition-colors duration-200"
            >
              Çalışmalarım
            </a>
            <a 
              href="#culture-art" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-white transition-colors duration-200"
            >
              Kültür & Sanat
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-white transition-colors duration-200"
            >
              Yetkinlikler
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-white transition-colors duration-200"
            >
              İletişim
            </a>
          </div>
        )}
      </header>

      {/* Ana İçerik */}
      <main className="max-w-4xl mx-auto px-6 relative z-10 pt-16">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center py-20 relative text-center reveal">
          <div className="space-y-8 max-w-3xl mx-auto">

            {/* Ortalanmış Profil Fotoğrafı ve Neon Parlama Hareketi */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full p-1 bg-gradient-to-tr from-accent-purple via-zinc-800 to-accent-blue shadow-[0_0_30px_rgba(168,85,247,0.35)] select-none hover:shadow-[0_0_40px_rgba(168,85,247,0.55)] transition-all duration-500 hover:scale-[1.03] group">
              <div className="w-full h-full rounded-full overflow-hidden border border-zinc-950/80 bg-zinc-900">
                <Image 
                  src="/ahmet-yasin.jpg" 
                  alt="Ahmet Yasin Aktürk" 
                  width={176}
                  height={176}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
              {/* Arka plan glow efekti */}
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-accent-purple to-accent-blue opacity-50 blur-md"></div>
            </div>

            {/* Neon İsim ve El Yazısı Soyisim Bloğu */}
            <div className="relative inline-block text-center mx-auto select-none pb-4">
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-[0.12em] text-transparent [-webkit-text-stroke:1.8px_#a855f7] drop-shadow-[0_0_20px_rgba(168,85,247,0.9)] uppercase font-sans leading-none">
                AHMET YASİN
              </h1>
              <span className="absolute -bottom-3 right-0 sm:right-4 font-script text-4xl sm:text-5xl text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] transform -rotate-6 tracking-wider">
                Aktürk
              </span>
            </div>

            {/* Ünvan ve Açıklama Metni */}
            <div className="space-y-4 pt-2">
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-purple-400 to-accent-purple inline-block">
                Web - Mobil Uygulama Geliştirici & Yapay Zeka İçerik Üreticisi
              </h2>
              <p className="text-zinc-350 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Kullanıcı odaklı modern web ve mobil uygulamalar geliştiriyor; estetik, hız ve yüksek performansı bir araya getiriyorum. Yazılım geliştirme süreçlerimi gelişmiş yapay zeka içerik üretme teknolojileriyle birleştirerek yenilikçi dijital çözümler tasarlıyorum.
              </p>
            </div>

            {/* Sosyal Medya & Eylem Butonları */}
            <div className="pt-4 flex flex-wrap gap-4 items-center justify-center">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-zinc-100 text-zinc-950 font-medium hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg shadow-white/5 text-sm"
              >
                İletişime Geç
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="https://github.com/ahmetyasinaktrkoseakut-ui" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>

              <a 
                href="https://www.linkedin.com/in/ahmet-yasin-akt%C3%BCrk-a66644411/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>

              <a 
                href="https://www.instagram.com/ahmet_y_akturk_61/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Hakkımda (About) Section */}
        <section id="about" className="py-20 border-t border-zinc-900 scroll-mt-16 reveal">
          <h3 className="text-xs uppercase font-mono text-zinc-500 tracking-[0.2em] mb-6">Biyografi</h3>
          
          <div className="max-w-3xl space-y-6 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
            <p>
              Eskişehir Osmangazi Üniversitesi'ndeki akademik yolculuğumla eş zamanlı olarak, karmaşık problemleri modern teknolojilerle temiz kullanıcı deneyimlerine dönüştürüyorum. Yüksek performanslı web ve mobil uygulamalar inşa ederken, kodun işlevselliğine ve sürekli yeni teknolojiler öğrenmeye odaklanıyorum.
            </p>
            <p>
              Geleneksel yazılım geliştirmeyi bir adım ileriye taşıyarak yapay zeka araçlarını ve dil modellerini iş akışıma doğrudan entegre ediyorum. Yeni projeler geliştirmekle kalmıyor, gelişmiş AI sistemlerini kullanarak görsel, işitsel ve metinsel içerik üretimleri gerçekleştiriyorum. Kodun mantıksal derinliğini yapay zekanın sunduğu dinamik vizyonla birleştirerek uçtan uca, yenilikçi dijital çözümler tasarlıyorum.
            </p>
          </div>
        </section>

        {/* Projeler Section */}
        <section id="projects" className="py-20 border-t border-zinc-900 scroll-mt-16 reveal">
          <div className="space-y-2 mb-10">
            <h4 className="text-3xl font-bold tracking-tight text-white">Çalışmalarım</h4>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Geliştirdiğim yapay zeka sistemleri, kurumsal uygulama ve hayata geçirdiğim ticari dijital web girişimleri
            </p>
          </div>

          {/* Projeler Bento Grid Yapısı */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* 1. Fırtına AI */}
            <Link href="/firtina-ai" className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-all duration-300 md:col-span-2 cursor-pointer">
              <div className="relative h-56 w-full bg-zinc-900/60 border-b border-zinc-800/80 overflow-hidden">
                <Image 
                  src="/firtina-ai.png" 
                  alt="Fırtına AI"
                  width={600}
                  height={350}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h5 className="text-lg font-bold text-white">1. Fırtına AI</h5>
                    <div className="flex items-center gap-1.5 select-none">
                      {/* App Store Rozeti */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950/90 border border-zinc-800 text-[10px] font-bold text-zinc-200 shadow-sm hover:border-accent-purple/40 hover:text-white transition-all">
                        <svg className="w-3 h-3 fill-current text-accent-purple" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.96 1.1.09 2.23-.57 2.94-1.39z"/>
                        </svg>
                        App Store
                      </span>
                      {/* Google Play Rozeti */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950/90 border border-zinc-800 text-[10px] font-bold text-zinc-200 shadow-sm hover:border-accent-blue/40 hover:text-white transition-all">
                        <svg className="w-2.5 h-2.5 fill-current text-accent-blue" viewBox="0 0 24 24">
                          <path d="M3.609 1.814L13.792 12 3.61 22.186A2.227 2.227 0 0 1 3 20.573V3.427c0-.623.235-1.196.609-1.613zm11.29 9.172l3.417-3.417a2.203 2.203 0 0 1 0 3.124l-3.417 3.417a2.203 2.203 0 0 1 0-3.124zm-1.89-1.89L4.478 2.656C4.851 2.239 5.424 2 6.047 2c.623 0 1.196.235 1.613.609l5.349 5.349zm0 5.808l-5.349 5.349A2.227 2.227 0 0 1 6.047 22c-.623 0-1.196-.235-1.613-.609l8.571-6.442z"/>
                        </svg>
                        Google Play
                      </span>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    Gelişmiş ve ücretsiz yapay zeka araçlarını tek merkezde toplayan, ve kendi içinden kullanma imkanı veren kullanıcı odaklı yeni nesil yapay zeka uygulaması.
                  </p>
                </div>
              </div>
            </Link>

            {/* 2. ESOGÜ ABYS */}
            <Link href="/esogu-abys" className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-all duration-300 md:col-span-1 cursor-pointer">
              <div className="relative h-56 w-full bg-zinc-900/60 border-b border-zinc-800/80 overflow-hidden">
                <Image 
                  src="/esogu-abys.png" 
                  alt="ESOGÜ ABYS Akreditasyon Sistemi"
                  width={400}
                  height={350}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between space-y-3">
                <div className="space-y-2">
                  <h5 className="text-lg font-bold text-white">2. ESOGÜ ABYS</h5>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    Kurumların kalite ve akreditasyon süreçlerini dijitalleştiren, modern yazılım mimarisine sahip kurumsal veri ve süreç yönetim sistemi.
                  </p>
                </div>
              </div>
            </Link>

            {/* 3. Kurulan İşletmeler & Platformlar */}
            <div className="glass-card rounded-2xl p-6 flex flex-col h-full justify-between md:col-span-3 space-y-6 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-accent-purple shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-lg font-bold text-white">3. Kurulan İşletmeler & Platformlar</h5>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    Farklı sektörlerin ihtiyaçlarına yönelik uçtan uca tasarlayıp canlıya aldığım ticari web siteleri:
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <a 
                  href="https://hanyoresellezzetler.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-accent-purple/50 text-zinc-300 hover:text-white transition-all group space-y-2"
                >
                  <div className="flex items-center justify-between w-full text-xs font-mono">
                    <span className="font-semibold">Han Yöresel Lezzetler</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[10px] text-zinc-500 font-sans group-hover:text-zinc-400 transition-colors">Next.js & Tailwind</span>
                </a>
                <a 
                  href="https://bizimkafecayko.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-accent-purple/50 text-zinc-300 hover:text-white transition-all group space-y-2"
                >
                  <div className="flex items-center justify-between w-full text-xs font-mono">
                    <span className="font-semibold">Bizim Kafe Çayko</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[10px] text-zinc-500 font-sans group-hover:text-zinc-400 transition-colors">React & Firebase</span>
                </a>
                <a 
                  href="https://deft-cucurucho-cf2b29.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-accent-purple/50 text-zinc-300 hover:text-white transition-all group space-y-2"
                >
                  <div className="flex items-center justify-between w-full text-xs font-mono">
                    <span className="font-semibold">Müşteri Portali</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-[10px] text-zinc-500 font-sans group-hover:text-zinc-400 transition-colors">HTML, CSS & JS</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Kültür ve Sanat Section */}
        <section id="culture-art" className="py-20 border-t border-zinc-900 scroll-mt-16 reveal">
          <div className="space-y-2 mb-10">
            <h4 className="text-3xl font-bold tracking-tight text-white">Kültür ve Sanat</h4>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Edebi çalışmalarım, kültürel projelerim ve yayımlanmış eserlerim
            </p>
          </div>

          {/* Kitap Bento Grid Yapısı */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Kitap Kapak Görseli */}
            <div className="glass-card rounded-2xl overflow-hidden p-6 flex justify-center items-center group hover:-translate-y-1 transition-all duration-300 md:col-span-1">
              <div className="relative rounded-lg overflow-hidden border border-zinc-800/80 shadow-[0_0_20px_rgba(0,0,0,0.6)] max-w-[200px] w-full">
                <Image 
                  src="/filistine-vefasizlik.jpg" 
                  alt="Filistin'e Vefasızlık Kitap Kapağı"
                  width={200}
                  height={300}
                  className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Kitap Detayları ve Açıklama */}
            <div className="glass-card rounded-2xl p-6 md:col-span-2 flex flex-col justify-between h-full space-y-6 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                  <div>
                    <h5 className="text-xl font-bold text-white">Filistin'e Vefasızlık</h5>
                    <p className="text-xs text-accent-purple font-mono mt-1">Yazar: Ahmet Yasin Aktürk</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-xs font-semibold text-purple-300">
                    Şiir Kitabı / Kasım 2024
                  </span>
                </div>
                
                <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                  Filistin'de yaşanan insani dramı, Gazze'deki direnişi ve İslam coğrafyasının bu zulüm karşısındaki sessizliğini mercek altına alan edebi bir çığlık. Eserdeki şiirler, Mescid-i Aksa'nın ve Filistin halkının yalnızlığını, Müslüman toplumların "vefasızlığını" ve duyarsızlığını sarsıcı bir dille ele almaktadır. 
                </p>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Bu eser, sadece edebi bir duruş sergilemekle kalmayıp aynı zamanda toplumsal bir farkındalık ve somut bir dayanışma amacı taşımaktadır.
                </p>

                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] flex-shrink-0"></div>
                  <span className="text-xs text-emerald-300 font-medium leading-relaxed">
                    Kitabın satışından elde edilen tüm gelir Filistin'e yardım amaçlı bağışlanmaktadır.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="https://cinius.shop/urun/filistine-vefasizlik/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-2 text-xs font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Cinius Shop'ta İncele
                </a>
                <a 
                  href="https://1000kitap.com/kitap/filistine-vefasizlik--458245" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-2 text-xs font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  1000Kitap'ta İncele
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Yetkinlikler (Skills) Section */}
        <section id="skills" className="py-20 border-t border-zinc-900 scroll-mt-16 reveal">
          <h3 className="text-xs uppercase font-mono text-zinc-500 tracking-[0.2em] mb-4">Yetkinlikler</h3>
          <h4 className="text-3xl font-bold text-white tracking-tight mb-10">Kullandığım Teknolojiler</h4>

          {/* Yetenekler Bento Grid Yapısı */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Kart 1: Full-Stack Web Geliştirme (Geniş Kart) */}
            <div className="glass-card rounded-2xl p-6 md:col-span-2 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group">
              <div className="space-y-4">
                <h5 className="font-mono text-xs text-accent-purple border-b border-zinc-850 pb-2 flex items-center gap-1.5 uppercase tracking-wider">
                  <Code2 className="w-3.5 h-3.5" />
                  Full-Stack Web Geliştirme
                </h5>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-850/60 flex items-center space-x-3 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_8px_rgba(168,85,247,0.8)] flex-shrink-0"></div>
                    <span className="text-xs text-zinc-200 font-medium leading-relaxed">React & Next.js Arayüzleri</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-850/60 flex items-center space-x-3 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_8px_rgba(168,85,247,0.8)] flex-shrink-0"></div>
                    <span className="text-xs text-zinc-200 font-medium leading-relaxed">Modern Tailwind CSS Arayüzleri</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-850/60 flex items-center space-x-3 shadow-inner sm:col-span-2">
                    <div className="w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_8px_rgba(168,85,247,0.8)] flex-shrink-0"></div>
                    <span className="text-xs text-zinc-200 font-medium leading-relaxed">Supabase & Firebase Veritabanı Altyapısı</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kart 2: Yapay Zeka & Otomasyon (Dar Kart) */}
            <div className="glass-card rounded-2xl p-6 md:col-span-1 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group">
              <div className="space-y-4">
                <h5 className="font-mono text-xs text-accent-blue border-b border-zinc-850 pb-2 flex items-center gap-1.5 uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5" />
                  Yapay Zeka & Otomasyon
                </h5>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-850/60 flex items-center space-x-3 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(6,182,212,0.8)] flex-shrink-0"></div>
                    <span className="text-xs text-zinc-200 font-medium leading-relaxed">Prompt Engineering</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-850/60 flex items-center space-x-3 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(6,182,212,0.8)] flex-shrink-0"></div>
                    <span className="text-xs text-zinc-200 font-medium leading-relaxed">Akıllı AI Agents Sistemleri</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kart 3: AI İçerik Üretimi ve Sistemler (Tam Genişlik Kart) */}
            <div className="glass-card rounded-2xl p-6 md:col-span-3 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group">
              <div className="space-y-4">
                <h5 className="font-mono text-xs text-zinc-400 border-b border-zinc-850 pb-2 flex items-center gap-1.5 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  AI Medya & Entegrasyonlar
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-850/60 flex items-center space-x-3 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)] flex-shrink-0"></div>
                    <span className="text-xs text-zinc-200 font-medium leading-relaxed">AI İçerik Üretimi (Görsel, İşitsel ve Metin)</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-850/60 flex items-center space-x-3 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)] flex-shrink-0"></div>
                    <span className="text-xs text-zinc-200 font-medium leading-relaxed">API Entegrasyonları ve Süreç Otomasyonu</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* İletişim (Contact) Section */}
        <section id="contact" className="py-20 border-t border-zinc-900 scroll-mt-16 reveal">
          <h4 className="text-3xl font-bold text-white tracking-tight mb-4">İletişim</h4>
          <p className="text-zinc-400 font-light mb-10 max-w-lg leading-relaxed text-sm sm:text-base">
            Yeni bir proje teklifi, geliştirme iş birliği veya sadece merhaba demek için bana mesaj gönderebilirsiniz. En kısa sürede geri dönüş sağlayacağım.
          </p>

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
                      className="w-full bg-zinc-900/40 border border-zinc-800/80 focus:border-accent-purple text-zinc-200 px-4 py-3 rounded-lg outline-none transition-colors text-sm"
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
                      className="w-full bg-zinc-900/40 border border-zinc-800/80 focus:border-accent-purple text-zinc-200 px-4 py-3 rounded-lg outline-none transition-colors text-sm"
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
                    className="w-full bg-zinc-900/40 border border-zinc-800/80 focus:border-accent-purple text-zinc-200 px-4 py-3 rounded-lg outline-none transition-colors text-sm resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-medium transition-all w-full sm:w-auto text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Toast Başarı Bildirimi */}
              {formSubmitted && (
                <div className="absolute top-0 left-0 w-full h-full bg-zinc-950/90 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center space-y-4 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                  <div className="text-center space-y-1">
                    <h5 className="text-zinc-100 font-semibold text-lg">Mesajınız İletildi!</h5>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light">En kısa sürede size e-posta ile dönüş yapacağım. Teşekkürler!</p>
                  </div>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-300"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              )}
            </div>

            {/* Doğrudan İletişim Detayları */}
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 space-y-5">
                <h5 className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">// Doğrudan İletişim</h5>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-mono">E-posta adresi</span>
                    <a 
                      href="mailto:ahmet.41yasin@gmail.com" 
                      className="text-xs sm:text-sm font-mono text-zinc-300 hover:text-accent-purple transition-colors flex items-center gap-1.5 mt-0.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      ahmet.41yasin@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-mono">Sosyal Kanallar</span>
                    <div className="flex gap-3 mt-2.5">
                      <a 
                        href="https://github.com/ahmetyasinaktrkoseakut-ui" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-white transition-all"
                        aria-label="GitHub"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/ahmet-yasin-akt%C3%BCrk-a66644411/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-white transition-all"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                      <a 
                        href="https://www.instagram.com/ahmet_y_akturk_61/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-white transition-all"
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
      <footer className="py-12 mt-10 relative z-10 text-center">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center">
          <p className="text-xs sm:text-sm font-medium tracking-wider text-zinc-500 uppercase font-mono">
            © 2026 Ahmet Yasin Aktürk. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>

    </div>
  );
}
