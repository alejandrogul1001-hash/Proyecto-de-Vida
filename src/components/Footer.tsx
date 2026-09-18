import React from 'react';
import { ArrowUp, Edit3, UserCheck, Settings } from 'lucide-react';
import { StudentProfile } from '../types';
import { EspochLogo, FadeContabilidadLogo } from './Logos';
import { FooterSettingsWheel } from './FooterSettingsWheel';

interface FooterProps {
  profile: StudentProfile;
  onOpenPresentation: () => void;
  onOpenEditor: () => void;
  onOpenExport: () => void;
  onOpenShareDocente: () => void;
  onOpenPrintDossier?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onOpenPresentation,
  onOpenEditor,
  onOpenExport,
  onOpenShareDocente,
  onOpenPrintDossier,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070a11] py-10 px-4 md:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Logos (Separados) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <div className="flex flex-col items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                <EspochLogo size="md" className="rounded-lg shadow-sm" />
                <span className="text-[9px] font-bold text-red-400 mt-0.5 uppercase tracking-wider">ESPOCH</span>
              </div>
              <div className="flex flex-col items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800">
                <FadeContabilidadLogo size="md" className="rounded-full shadow-sm" />
                <span className="text-[9px] font-bold text-blue-300 mt-0.5 uppercase tracking-wider">FADE</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {profile.university}
              </h4>
              <p className="text-xs text-slate-400">
                {profile.faculty} · {profile.career} ({profile.semester})
              </p>
              <p className="text-[11px] text-cyan-400 mt-0.5 flex flex-wrap items-center justify-center sm:justify-start gap-1">
                <UserCheck className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>Docente: <strong>{profile.professorName || 'Ingeniero Hitalo Veloz'}</strong></span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-300">Asignatura: {profile.subject || 'Formulación y Evaluación de Proyectos'}</span>
              </p>
            </div>
          </div>

          {/* Configuration Wheel & Shortcuts */}
          <div className="flex items-center gap-3 text-xs">
            {/* Rueda de Configuración con Entregar al Ingeniero, PDF, Diapositivas y Google Slides */}
            <FooterSettingsWheel
              onOpenShareDocente={onOpenShareDocente}
              onOpenExport={onOpenExport}
              onOpenPresentation={onOpenPresentation}
              onOpenEditor={onOpenEditor}
              onOpenPrintDossier={onOpenPrintDossier}
            />

            {/* Volver arriba */}
            <button
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Volver al inicio"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

