import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center z-10">
      
      {/* Background Glows */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      <div className="space-y-6 max-w-md w-full glass-card p-10 rounded-2xl border border-zinc-800/80 shadow-[0_0_50px_rgba(168,85,247,0.15)] relative">
        {/* Glow effect on card background */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-accent-purple/10 to-accent-blue/10 opacity-30 blur-xl"></div>
        
        {/* Neon 404 Text */}
        <h1 className="text-8xl font-black tracking-widest text-transparent [-webkit-text-stroke:2px_#a855f7] drop-shadow-[0_0_30px_rgba(168,85,247,0.85)] uppercase font-sans select-none animate-pulse">
          404
        </h1>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Aradığınız sayfa bulunamadı
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Gitmek istediğiniz sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. Lütfen adresi kontrol edin veya ana sayfaya dönün.
          </p>
        </div>

        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-100 text-zinc-950 font-medium hover:bg-zinc-200 transition-all shadow-lg shadow-white/5 text-sm w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>

      <div className="mt-8 text-xs font-mono text-zinc-600 uppercase tracking-widest select-none">
        Ahmet Yasin Aktürk • 2026
      </div>
    </div>
  );
}
