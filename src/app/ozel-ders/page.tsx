"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  Code2, 
  Cpu, 
  Video, 
  Clock, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  Layers, 
  Terminal,
  HelpCircle
} from "lucide-react";

export default function OzelDersPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", lessonType: "online" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xkoeyqwl", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          lessonType: formData.lessonType,
          message: formData.message,
          subject: "Yapay Zeka Özel Ders Talebi",
        }),
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "", lessonType: "online" });
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
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-surface-glass/85 border-b border-white/[0.08] shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Ana Sayfaya Dön</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
              Ahmet Yasin Aktürk
            </span>
          </div>

          <a 
            href="#iletisim" 
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-display text-xs sm:text-sm font-semibold transition-all shadow-md"
          >
            Ders Talebi Gönder
          </a>
        </div>
      </header>

      {/* Ana Gövde */}
      <main className="relative z-10 w-full pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col gap-20">
          
          {/* HERO BÖLÜMÜ */}
          <section className="flex flex-col items-center text-center pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/80 border border-white/[0.08] backdrop-blur-md mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-xs text-secondary font-medium tracking-wide">
                BİREBİR &amp; UYGULAMA ODAKLI ÖZEL DERS
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight mb-6">
              İleri Düzey <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">Yapay Zeka</span> &amp; Yazılım Geliştirme Eğitimi
            </h1>

            <p className="text-base sm:text-lg text-text-muted max-w-3xl mb-8 leading-relaxed">
              Mobil Uygulama Geliştiricisi, içerik üreticisi ve Üretken Yapay Zeka Uzmanı Ahmet Yasin Aktürk'ten; sıfırdan canlıya proje geliştirme odaklı, teorik ezberlerden uzak, uygulamalı yapay zeka ve yazılım mentorluğu.
            </p>

            {/* Hızlı Bilgi Rozetleri */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs text-on-surface">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container border border-white/[0.08]">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Online &amp; Eskişehir Yüz Yüze</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container border border-white/[0.08]">
                <Clock className="w-4 h-4 text-secondary" />
                <span>60 Dakikalık Birebir Seanslar</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container border border-white/[0.08]">
                <MessageSquare className="w-4 h-4 text-tertiary" />
                <span>Ders Dışı 7/24 Mesaj Desteği</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container border border-white/[0.08]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Doğrulanmış Eğitmen Profili</span>
              </div>
            </div>

            {/* İlan Platform Butonları (Özel Ders Alanı & Superprof) */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-2xl">
              <a 
                href="https://www.ozeldersalani.com/ogretmen7ynhme" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 min-w-[240px] inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-surface-container-high hover:bg-surface-bright text-white font-display text-sm font-semibold transition-all border border-blue-500/30 hover:border-blue-400 shadow-lg group"
              >
                <span>Özel Ders Alanı Profilim</span>
                <ExternalLink className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a 
                href="https://www.superprof.com.tr/ileri-duzey-yapay-zeka-urun-gelistiricisiyim-yapay-zeka-ile-gorsel-video-muzik-yazilim-gelistirme-uygulama-odakli.html" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 min-w-[240px] inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-surface-container-high hover:bg-surface-bright text-white font-display text-sm font-semibold transition-all border border-rose-500/30 hover:border-rose-400 shadow-lg group"
              >
                <span>Superprof Profilim</span>
                <ExternalLink className="w-4 h-4 text-rose-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </section>

          {/* TANITIM VİDEOSU VİTRİNİ */}
          <section className="rounded-2xl bg-surface-container-low border border-white/[0.08] p-6 sm:p-10 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden bg-surface-container-lowest border border-white/[0.08] shadow-inner">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/iRSVfy6nU_g" 
                  title="Ahmet Yasin Aktürk - Yapay Zeka Özel Ders Tanıtımı" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-xs text-primary font-medium">
                  <Video className="w-3.5 h-3.5" />
                  Eğitmen Tanıtımı
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Derslerin İşlenişi ve Vizyonu
                </h2>
                <p className="text-sm text-text-muted leading-relaxed">
                  Derslerimde slayt ezberletmek yerine doğrudan öğrencinin bilgisayarında ekran paylaşımıyla pratik yapıyoruz. Bir fikri alıp çalışan, canlıya alınmış bir web sitesine, mobil uygulamaya veya yapay zeka ürün içeriğine nasıl dönüştüreceğinizi adım adım birlikte uyguluyoruz.
                </p>
                <div className="pt-2">
                  <a 
                    href="#platformlar" 
                    className="inline-flex items-center gap-1.5 text-secondary hover:text-white text-xs font-semibold"
                  >
                    Platformlardaki İlan Detaylarını İncele &rarr;
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* SİZE NELER KAZANDIRABİLİRİM? (KAZANIMLAR) */}
          <section className="space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Size Neler Kazandırabilirim?
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-3"></div>
              <p className="text-sm text-text-muted mt-2">
                Eğitim sonunda sadece ders notu değil; CV'nize ve GitHub profilinize ekleyebileceğiniz somut ürünler elde edersiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-7 rounded-2xl bg-surface-glass border border-white/[0.08] backdrop-blur-xl shadow-lg space-y-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">Sıfırdan Canlıya Ürün Çıkarma Yetkinliği</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Bir fikri alıp arayüz tasarımından veritabanı mimarisine kadar uçtan uca kodlayıp gerçek kullanıcılara sunma (deploy) becerisi kazanırsınız.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-surface-glass border border-white/[0.08] backdrop-blur-xl shadow-lg space-y-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">İleri Seviye Yapay Zeka &amp; Prompt Mühendisliği</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Sadece basit sohbet botlarını değil; metin, görsel, video ve müzik üreten güncel yapay zeka araçlarını (LLM'ler, Google Veo, Suno, Udio vb.) profesyonel düzeyde kullanma ve iş akışlarına entegre etme yetkinliği.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-surface-glass border border-white/[0.08] backdrop-blur-xl shadow-lg space-y-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-tertiary">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">Çalışan Projelerden Oluşan Profesyonel Portfolyo</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Eğitim sonunda GitHub hesabınızda sergileyebileceğiniz ve doğrudan portfolyonuza ekleyebileceğiniz çalışan mobil/web uygulamaları, görsel ve işitsel üretimler.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-surface-glass border border-white/[0.08] backdrop-blur-xl shadow-lg space-y-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">Hata Analizi ve Bağımsız Sorun Çözme</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Karşılaştığınız kod ve çıktı hatalarını paniğe kapılmadan analiz etme, resmi dökümantasyonları okuma ve yapay zeka desteğiyle tek başınıza sonuca ulaşma özgüveni.
                </p>
              </div>

            </div>
          </section>

          {/* DERSLERİ NASIL İŞLERİM? (METODOLOJİ) */}
          <section className="space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Dersleri Nasıl İşlerim?
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-3"></div>
              <p className="text-sm text-text-muted mt-2">
                Derslerimi sıkıcı slayt sunumları üzerinden değil, %100 uygulamalı ve interaktif bir atölye formatında işlerim:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-surface-container-low border border-white/[0.08] space-y-4">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center font-display font-bold text-primary text-sm">
                  01
                </div>
                <h3 className="font-display text-base font-bold text-white">Seviye Analizi &amp; Hedef Belirleme</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  İlk derste mevcut bilginizi ölçer, ne üretmek istediğinizi netleştirir ve hedefinize özel haftalık bir yol haritası çıkarırız.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-low border border-white/[0.08] space-y-4">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center font-display font-bold text-secondary text-sm">
                  02
                </div>
                <h3 className="font-display text-base font-bold text-white">Canlı İçerik Üretimi &amp; Kodlama</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Ekran paylaşımıyla konunun temel mantığını anlattıktan sonra kontrolü size bırakır; takıldığınız her noktada anında müdahale ederim.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-low border border-white/[0.08] space-y-4">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center font-display font-bold text-tertiary text-sm">
                  03
                </div>
                <h3 className="font-display text-base font-bold text-white">Uygulama Görevi &amp; Çıktı Kritiği</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Her dersin sonunda somut bir geliştirme görevi verir; bir sonraki derste kodun ve çıktının nasıl daha performanslı olabileceğinin kritiğini yaparız.
                </p>
              </div>

            </div>
          </section>

          {/* EĞİTMEN HAKKINDA & CANLI REFERANSLAR */}
          <section className="rounded-2xl bg-surface-container-high/60 border border-white/[0.08] backdrop-blur-xl p-8 lg:p-10 shadow-xl space-y-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
              Teorisyen Değil, Aktif Geliştiriciyim
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Yıllar öncesinin durağan müfredatını değil; günlük hayatında aktif olarak mobil uygulamalar (<strong>EsKampüs</strong>, <strong>Fırtına AI</strong>), halihazırda 3 fakültenin kullandığı <strong>ESOGÜ ABYS</strong> sistemi ve canlı ticari web platformları üreten bir geliştiricinin güncel deneyimlerini aktarıyorum.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-3.5 py-1.5 rounded-lg bg-surface-container text-xs text-primary border border-white/[0.06]">
                React &amp; Next.js
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-surface-container text-xs text-secondary border border-white/[0.06]">
                Flutter &amp; React Native
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-surface-container text-xs text-tertiary border border-white/[0.06]">
                Generative AI &amp; Prompt Engineering
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-surface-container text-xs text-white border border-white/[0.06]">
                Google Veo, Suno, Udio, LLM'ler
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-surface-container text-xs text-emerald-400 border border-white/[0.06]">
                Firebase &amp; Supabase
              </span>
            </div>
          </section>

          {/* PLATFORMLAR BÖLÜMÜ */}
          <section id="platformlar" className="space-y-8 scroll-mt-24">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Özel Ders İlanlarım ve Doğrulanmış Profiller
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-3"></div>
              <p className="text-sm text-text-muted mt-2">
                Dilediğiniz platform üzerinden profilimi inceleyebilir, yorumlara göz atabilir ve güvenli randevu oluşturabilirsiniz:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Özel Ders Alanı Kartı */}
              <div className="p-8 rounded-2xl bg-surface-container-low border border-blue-500/30 shadow-xl flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-950/60 text-blue-400 text-xs font-semibold border border-blue-500/30">
                      Özel Ders Alanı
                    </span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-4 h-4" />
                      Doğrulanmış Öğretmen
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    ahmet yasin a. (Yapay Zeka)
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Eskişehir / Tepebaşı &amp; Online yapay zeka dersleri. 60 dakikalık birebir uygulamalı çalışma.
                  </p>
                </div>
                <a 
                  href="https://www.ozeldersalani.com/ogretmen7ynhme" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display text-sm font-semibold transition-all shadow-md"
                >
                  <span>Özel Ders Alanı'nda İncele</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Superprof Kartı */}
              <div className="p-8 rounded-2xl bg-surface-container-low border border-rose-500/30 shadow-xl flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-rose-950/60 text-rose-400 text-xs font-semibold border border-rose-500/30">
                      Superprof
                    </span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-4 h-4" />
                      Doğrulanmış Profil
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Ahmet Yasin (Superprof)
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    İleri düzey yapay zeka ürün geliştiricisi; görsel, video, müzik, yazılım geliştirme odaklı özel ders ilanı.
                  </p>
                </div>
                <a 
                  href="https://www.superprof.com.tr/ileri-duzey-yapay-zeka-urun-gelistiricisiyim-yapay-zeka-ile-gorsel-video-muzik-yazilim-gelistirme-uygulama-odakli.html" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-display text-sm font-semibold transition-all shadow-md"
                >
                  <span>Superprof'ta İncele</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </section>

          {/* İLETİŞİM / DOĞRUDAN DERS TALEBİ FORMU */}
          <section id="iletisim" className="rounded-2xl bg-surface-glass border border-white/[0.08] backdrop-blur-xl p-8 lg:p-12 shadow-2xl scroll-mt-24">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Doğrudan Ders Talebinde Bulunun
                </h2>
                <p className="text-xs sm:text-sm text-text-muted">
                  Komisyonsuz doğrudan iletişime geçmek ve seviyenize uygun yol haritasını planlamak için formu doldurun; en geç 24 saat içinde dönüş yapayım.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      placeholder="Adınız Soyadınız" 
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
                  <label className="block text-xs text-text-muted font-medium uppercase tracking-wider mb-2" htmlFor="lessonType">
                    Tercih Edilen Ders Formatı
                  </label>
                  <select 
                    id="lessonType" 
                    value={formData.lessonType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest border border-white/[0.08] text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                  >
                    <option value="online">Online Eğitim (Google Meet / Zoom üzerinden ekran paylaşımı)</option>
                    <option value="yuzyuze">Yüz Yüze Eğitim (Eskişehir / Tepebaşı)</option>
                    <option value="farketmez">Her İkisi de Uygun</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-text-muted font-medium uppercase tracking-wider mb-2" htmlFor="message">
                    Öğrenmek İstediğiniz Konu &amp; Hedefiniz
                  </label>
                  <textarea 
                    id="message" 
                    required 
                    rows={4} 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Örn: Yapay zeka ile görsel/video üretimi öğrenmek istiyorum / Bir mobil uygulama fikrim var ve baştan sona geliştirmek istiyorum..." 
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest border border-white/[0.08] text-on-surface placeholder:text-text-dim text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-display text-sm font-semibold shadow-[0_0_20px_rgba(183,109,255,0.35)] hover:shadow-[0_0_30px_rgba(183,109,255,0.6)] hover:scale-[1.01] transition-all disabled:opacity-50 cursor-pointer"
                >
                  <span>{isSubmitting ? "Gönderiliyor..." : "Ders Talebini İlet"}</span>
                  <Send className="w-4 h-4" />
                </button>

                {formSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Ders talebiniz başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğim!</span>
                  </div>
                )}
              </form>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-surface-container-lowest border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-dim">
            <p>&copy; 2026 Ahmet Yasin Aktürk. Tüm hakları saklıdır.</p>
            <div className="flex items-center gap-4">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <Link href="/destek" className="hover:text-secondary transition-colors">Destek</Link>
              <a href="https://www.ozeldersalani.com/ogretmen7ynhme" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Özel Ders Alanı</a>
              <a href="https://www.superprof.com.tr/ileri-duzey-yapay-zeka-urun-gelistiricisiyim-yapay-zeka-ile-gorsel-video-muzik-yazilim-gelistirme-uygulama-odakli.html" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors">Superprof</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
