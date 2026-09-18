import React, { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
import { EspochLogo, FadeContabilidadLogo } from './Logos';

interface NavbarProps {
  onOpenPresentation?: () => void;
  onOpenEditor?: () => void;
  onOpenExport?: () => void;
  onOpenShareDocente?: () => void;
  onOpenPrintDossier?: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        id="main-navigation-bar"
        className={`fixed top-2.5 sm:top-3 left-0 right-0 z-40 px-3 sm:px-6 md:px-8 transition-all duration-300 ${
          scrolled ? 'py-1' : 'py-2 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center px-3 sm:px-6 py-2 rounded-2xl bg-[#0f172a]/92 backdrop-blur-2xl border border-slate-800/90 shadow-2xl shadow-cyan-950/50">
          
          {/* Centered Group: ESPOCH Brand + José Alejandro + Docente Hitalo Veloz (Adaptive Mobile & Desktop) */}
          <div className="w-full flex items-center justify-center flex-wrap sm:flex-nowrap gap-2.5 sm:gap-6 text-center">
            
            {/* 1. ESPOCH Logo & Brand */}
            <div 
              onClick={scrollToTop}
              className="flex items-center gap-2 cursor-pointer group shrink-0"
              title="Ir al inicio"
            >
              <EspochLogo size="sm" className="rounded-lg shadow-sm" />
              <div className="hidden xs:flex flex-col text-left">
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase text-red-400 leading-tight">ESPOCH</span>
                <span className="text-[8px] sm:text-[9px] text-slate-400 leading-tight">Riobamba</span>
              </div>
            </div>

            <div className="h-4 sm:h-5 w-px bg-slate-800 hidden xs:block shrink-0" />

            {/* 2. José Alejandro Gullqui */}
            <div 
              onClick={scrollToTop}
              className="flex items-center gap-2 cursor-pointer group shrink-0"
            >
              <FadeContabilidadLogo size="sm" className="rounded-full shadow-sm" />
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                  José Alejandro Gullqui
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 leading-tight">
                  Contabilidad y Auditoría · 6to Semestre
                </span>
              </div>
            </div>

            <div className="h-4 sm:h-5 w-px bg-slate-800 hidden md:block shrink-0" />

            {/* 3. Docente Hitalo Veloz Capsule */}
            <div className="hidden sm:flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-xl bg-slate-900/95 border border-cyan-500/25 shadow-sm shrink-0">
              <div className="flex items-center justify-center w-5 h-5 rounded-lg bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 shrink-0">
                <GraduationCap className="w-3 h-3" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] leading-tight">
                  <span className="text-slate-400">Docente:</span>
                  <strong className="text-slate-100 font-semibold">
                    Ing. Hitalo Veloz
                  </strong>
                </div>
                <span className="text-[8px] sm:text-[9px] text-cyan-300 font-medium leading-tight">
                  Formulación y Evaluación de Proyectos
                </span>
              </div>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};
