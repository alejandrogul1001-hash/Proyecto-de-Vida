import React, { useState } from 'react';
import { 
  Settings, 
  Download, 
  Presentation, 
  Printer, 
  Edit3, 
  X, 
  Volume2,
  VolumeX
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { soundManager } from '../utils/soundManager';

interface FooterSettingsWheelProps {
  onOpenShareDocente: () => void;
  onOpenExport: () => void;
  onOpenPresentation: () => void;
  onOpenEditor: () => void;
  onOpenPrintDossier?: () => void;
}

export const FooterSettingsWheel: React.FC<FooterSettingsWheelProps> = ({
  onOpenExport,
  onOpenPresentation,
  onOpenEditor,
  onOpenPrintDossier,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(soundManager.isEnabled());

  const handlePrintPdf = () => {
    setIsOpen(false);
    if (onOpenPrintDossier) {
      onOpenPrintDossier();
    } else {
      window.print();
    }
  };

  const toggleSound = () => {
    const newState = soundManager.toggle();
    setSoundOn(newState);
  };

  return (
    <div className="relative inline-block">
      {/* Configuration Gear Wheel Button */}
      <button
        id="footer-settings-wheel-btn"
        onClick={() => {
          soundManager.playClick();
          setIsOpen(!isOpen);
        }}
        className={`group relative p-3 sm:px-4 sm:py-2.5 rounded-2xl border transition-all duration-300 flex items-center gap-2.5 shadow-xl ${
          isOpen
            ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-cyan-500/30'
            : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700/80 text-slate-200 hover:text-white hover:border-cyan-500/50 shadow-slate-950/50'
        }`}
        title="Herramientas de Cátedra, Audio y Entregables"
      >
        <Settings 
          className={`w-5 h-5 transition-transform duration-500 ${
            isOpen ? 'rotate-90 text-slate-950' : 'text-cyan-400 group-hover:rotate-45'
          }`} 
        />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Herramientas & Entregables
        </span>
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse hidden sm:inline" />
      </button>

      {/* Pop-up Wheel Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for easy dismissal */}
            <div 
              className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="fixed sm:absolute bottom-6 sm:bottom-14 right-4 sm:right-0 z-50 w-[calc(100vw-32px)] sm:w-88 max-w-sm rounded-3xl bg-slate-900/98 backdrop-blur-2xl border border-cyan-500/40 shadow-2xl shadow-cyan-950/50 overflow-hidden text-left"
            >
              {/* Header */}
              <div className="p-4 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Settings className="w-4 h-4 animate-spin-slow" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide uppercase">
                      Panel de Herramientas
                    </h4>
                    <p className="text-[10px] text-slate-400">
                      Entregables para Cátedra y Audio
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Options list */}
              <div className="p-3 space-y-2.5 max-h-[75vh] overflow-y-auto">
                
                {/* Audio Effects Toggle */}
                <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Efectos de Sonido Sutiles</span>
                      <span className="text-[10px] text-slate-400">Hover y clics inmersivos</span>
                    </div>
                  </div>
                  <button
                    onClick={toggleSound}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                      soundOn 
                        ? 'bg-cyan-500 text-slate-950 shadow-sm' 
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {soundOn ? 'Activado' : 'Silenciado'}
                  </button>
                </div>

                {/* 1. Imprimir / Guardar en PDF (A4 Formal) */}
                <button
                  id="wheel-print-pdf-btn"
                  onClick={() => {
                    soundManager.playClick();
                    handlePrintPdf();
                  }}
                  className="w-full p-3 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/50 transition-all flex items-start gap-3 group text-left"
                >
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <Printer className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-200 block group-hover:text-blue-300 transition-colors">
                      Imprimir o Guardar Dossier (PDF A4)
                    </span>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                      Dossier académico formal con membrete, 13 preguntas y firma.
                    </p>
                  </div>
                </button>

                {/* 2. Descargar Diapositivas (.pptx) */}
                <button
                  id="wheel-export-slides-btn"
                  onClick={() => {
                    setIsOpen(false);
                    soundManager.playClick();
                    onOpenExport();
                  }}
                  className="w-full p-3 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/50 transition-all flex items-start gap-3 group text-left"
                >
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-200 block group-hover:text-cyan-300 transition-colors">
                      Descargar Diapositivas (.pptx)
                    </span>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                      Presentación completa de 16 láminas para PowerPoint / Keynote.
                    </p>
                  </div>
                </button>

                {/* 3. Modo Presentación Clave */}
                <button
                  id="wheel-presentation-btn"
                  onClick={() => {
                    setIsOpen(false);
                    soundManager.playClick();
                    onOpenPresentation();
                  }}
                  className="w-full p-3 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-purple-500/50 transition-all flex items-start gap-3 group text-left"
                >
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <Presentation className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-200 block group-hover:text-purple-300 transition-colors">
                      Modo Presentación (Pantalla Completa)
                    </span>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                      Diapositivas interactivas dentro de la misma web (tecla P).
                    </p>
                  </div>
                </button>

                {/* 4. Editar Respuestas del Proyecto */}
                <button
                  id="wheel-edit-data-btn"
                  onClick={() => {
                    setIsOpen(false);
                    soundManager.playClick();
                    onOpenEditor();
                  }}
                  className="w-full p-3 rounded-2xl bg-amber-950/30 hover:bg-amber-950/50 border border-amber-800/40 hover:border-amber-500/60 transition-all flex items-start gap-3 group text-left"
                >
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                    <Edit3 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-200 block group-hover:text-white transition-colors">
                      Editar / Personalizar Respuestas
                    </span>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                      Modificar metas, hábitos y textos del proyecto de vida.
                    </p>
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
