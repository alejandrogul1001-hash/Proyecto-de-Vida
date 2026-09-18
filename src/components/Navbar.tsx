import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Download, 
  Sparkles,
  ChevronRight,
  GraduationCap,
  Share2,
  Printer,
  Volume2,
  VolumeX
} from 'lucide-react';
import { EspochLogo, FadeContabilidadLogo } from './Logos';
import { soundManager } from '../utils/soundManager';

interface NavbarProps {
  onOpenPresentation?: () => void;
  onOpenEditor?: () => void;
  onOpenExport: () => void;
  onOpenShareDocente?: () => void;
  onOpenPrintDossier?: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenExport,
  onOpenShareDocente,
  onOpenPrintDossier,
  activeSection,
}) => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'identidad', label: 'Identidad' },
    { id: 'dimensiones', label: 'Metas 3D' },
    { id: 'vision5', label: 'Plan 5 Años' },
    { id: 'decision', label: 'Decisión' },
    { id: 'defensa-preguntas', label: 'Defensa Cátedra' },
    { id: 'compromiso', label: 'Compromiso' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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
        className={`fixed top-3 left-0 right-0 z-40 px-4 md:px-8 transition-all duration-300 ${
          scrolled ? 'py-1' : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800/80 shadow-2xl shadow-cyan-950/20">
          {/* Brand / ESPOCH & FADE Logos (Separados e Institucionales) */}
          <div 
            onClick={() => scrollTo('inicio')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Logo ESPOCH */}
            <div className="flex items-center gap-2 group-hover:opacity-95 transition-opacity">
              <EspochLogo size="sm" className="rounded-lg shadow-sm" />
              <div className="hidden sm:flex flex-col">
                <span className="text-[11px] font-extrabold tracking-wider uppercase text-red-400">ESPOCH</span>
                <span className="text-[9px] text-slate-400">Riobamba</span>
              </div>
            </div>

            <div className="h-5 w-px bg-slate-800 hidden sm:block" />

            {/* Logo Carrera FADE */}
            <div className="flex items-center gap-2">
              <FadeContabilidadLogo size="sm" className="rounded-full shadow-sm" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  José Alejandro Gullqui
                </span>
                <span className="text-[10px] text-slate-400">
                  Contabilidad y Auditoría · 6to Semestre
                </span>
              </div>
            </div>
          </div>

          {/* Academic Cátedra Capsule (Docente: Ingeniero Hitalo Veloz | Formulación y Evaluación de Proyectos) */}
          <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-slate-900/95 border border-cyan-500/25 shadow-md shadow-cyan-950/30">
            <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 shrink-0">
              <GraduationCap className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5 text-xs leading-tight">
                <span className="text-slate-400 font-normal">Docente:</span>
                <strong className="text-slate-100 font-semibold tracking-wide">
                  Ingeniero Hitalo Veloz
                </strong>
              </div>
              <span className="text-[10px] text-cyan-300 font-medium leading-tight tracking-tight">
                Formulación y Evaluación de Proyectos
              </span>
            </div>
          </div>

          {/* Center Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive 
                      ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Deliver to Docente & Print / PDF */}
          <div className="flex items-center gap-2">
            {/* Print / PDF Button */}
            {onOpenPrintDossier && (
              <button
                id="navbar-print-btn"
                onClick={onOpenPrintDossier}
                title="Imprimir o guardar en PDF el Dossier Académico Formal (A4)"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-cyan-300 hover:text-cyan-200 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/60 transition-all shadow-sm shrink-0"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Imprimir / PDF</span>
              </button>
            )}

            {/* Share / Deliver to Docente Button */}
            {onOpenShareDocente && (
              <button
                id="share-docente-btn"
                onClick={onOpenShareDocente}
                title="Opciones de entrega y compartir con el Ingeniero Veloz (Link, PPTX, PDF)"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-emerald-300 hover:text-emerald-200 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/60 transition-all shadow-sm shrink-0"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Entregar al Docente</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Academic Banner for Ingeniero Hitalo Veloz & Subject */}
        <div className="max-w-7xl mx-auto mt-1 md:hidden flex items-center justify-between px-3.5 py-1 rounded-xl bg-slate-950/90 backdrop-blur-md border border-cyan-800/30 text-[10px] text-slate-300 shadow-md">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-slate-400">Docente:</span>
            <span className="font-semibold text-slate-100">Ing. Hitalo Veloz</span>
          </div>
          <span className="text-cyan-300 font-medium truncate ml-2">
            Formulación y Evaluación de Proyectos
          </span>
        </div>
      </header>
    </>
  );
};
