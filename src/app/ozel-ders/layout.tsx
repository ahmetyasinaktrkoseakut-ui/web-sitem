import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yapay Zeka Özel Ders & Birebir Mentorluk | Ahmet Yasin Aktürk",
  description: "Mobil uygulama geliştiricisi ve üretken yapay zeka uzmanı Ahmet Yasin Aktürk'ten sıfırdan canlıya proje odaklı, uygulamalı yapay zeka ve yazılım özel dersi. Online ve Eskişehir'de yüz yüze.",
  keywords: [
    "Yapay Zeka Özel Ders",
    "Yapay Zeka Eğitimi",
    "Ahmet Yasin Aktürk",
    "Prompt Mühendisliği",
    "Eskişehir Yapay Zeka Dersi",
    "Online Yapay Zeka Dersi",
    "Üretken Yapay Zeka",
    "LLM Eğitimi",
    "Midjourney",
    "Google Veo",
    "Suno",
    "Full-Stack Yazılım Dersi"
  ],
  alternates: {
    canonical: "https://www.ahmetyasinakturk.com/ozel-ders",
  },
  openGraph: {
    title: "Yapay Zeka Özel Ders & Birebir Mentorluk | Ahmet Yasin Aktürk",
    description: "Sıfırdan canlıya proje geliştirme odaklı, uygulamalı yapay zeka ve yazılım özel dersi. Online ve yüz yüze.",
    url: "https://www.ahmetyasinakturk.com/ozel-ders",
    siteName: "Ahmet Yasin Aktürk",
    locale: "tr_TR",
    type: "website",
  },
};

export default function OzelDersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "Uygulama Odaklı Üretken Yapay Zeka ve Yazılım Geliştirme Özel Dersi",
        "description": "Mobil uygulama geliştiricisi ve üretken yapay zeka uzmanı Ahmet Yasin Aktürk'ten sıfırdan canlıya proje odaklı, uygulamalı yapay zeka ve yazılım özel dersi.",
        "provider": {
          "@type": "Person",
          "name": "Ahmet Yasin Aktürk",
          "url": "https://www.ahmetyasinakturk.com"
        },
        "educationalCredentialAwarded": "Canlı Portfolyo ve Proje Deneyimi",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["online", "onsite"],
          "location": "Eskişehir, Türkiye",
          "courseWorkload": "PT1H"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Özel Ders Alanı İlanı",
            "url": "https://www.ozeldersalani.com/ogretmen7ynhme"
          },
          {
            "@type": "Offer",
            "name": "Superprof İlanı",
            "url": "https://www.superprof.com.tr/ileri-duzey-yapay-zeka-urun-gelistiricisiyim-yapay-zeka-ile-gorsel-video-muzik-yazilim-gelistirme-uygulama-odakli.html"
          }
        ]
      },
      {
        "@type": "Person",
        "name": "Ahmet Yasin Aktürk",
        "jobTitle": "Mobil Uygulama Geliştiricisi & Üretken Yapay Zeka Uzmanı",
        "url": "https://www.ahmetyasinakturk.com",
        "sameAs": [
          "https://www.ozeldersalani.com/ogretmen7ynhme",
          "https://www.superprof.com.tr/ileri-duzey-yapay-zeka-urun-gelistiricisiyim-yapay-zeka-ile-gorsel-video-muzik-yazilim-gelistirme-uygulama-odakli.html",
          "https://github.com/ahmetyasinaktrkoseakut-ui",
          "https://www.linkedin.com/in/ahmet-yasin-akt%C3%BCrk-a66644411/"
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
