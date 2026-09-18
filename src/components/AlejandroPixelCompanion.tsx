import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Sparkles, 
  X, 
  ChevronRight, 
  Lightbulb, 
  Terminal, 
  Bot, 
  RotateCcw,
  CheckCircle2,
  Cpu,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectLifeData } from '../types';
import alejandroPortrait from '../assets/images/alejandro_portrait_1789703412340.jpg';

interface AlejandroPixelCompanionProps {
  data: ProjectLifeData;
  onNavigateToSection?: (sectionId: string) => void;
}

const CONTEXT_MESSAGES = [
  {
    tag: 'Presentación',
    text: '¡Hola! Soy Alejandro. Bienvenido a la defensa y exposición interactiva de mi Proyecto de Vida.',
    module: 'Hero / Inicio',
  },
  {
    tag: 'Domótica & Negocio',
    text: 'Mi visión central: no sólo vender equipos, sino diseñar ambientes automatizados con software propio de importación.',
    module: 'Identidad & Visión',
  },
  {
    tag: 'Rigor ESPOCH',
    text: 'La contabilidad y auditoría son el superpoder de mi empresa: control exacto de aranceles, fletes y margen neto real.',
    module: 'Formación 6to Semestre',
  },
  {
    tag: 'Ruta 2026 - 2031',
    text: 'Aprobamos 6to semestre este año, en 2027 desarrollamos el sistema y en 2029 inauguramos nuestro showroom comercial.',
    module: 'Mi Vida en 5 Años',
  },
  {
    tag: 'Cátedra Ing. Veloz',
    text: 'Formular un proyecto con el Ing. Hitalo Veloz me enseñó que la técnica debe respaldarse con disciplina y viabilidad financiera.',
    module: 'Formulación y Evaluación',
  },
  {
    tag: 'Viabilidad Económica',
    text: 'Eliminar intermediarios importando directo desde fábrica nos permite ofrecer márgenes del 42% con precios justos en Riobamba.',
    module: 'Defensa Económica',
  },
];

const MODULE_SUMMARIES: Record<string, { title: string; text: string }> = {
  identidad: {
    title: 'Síntesis: Identidad y Vocación Politécnica',
    text: 'Soy estudiante de sexto semestre de Contabilidad y Auditoría en la ESPOCH. Integro el análisis financiero con el diseño de sistemas inteligentes para liderar soluciones de domótica e importaciones directas de tecnología.',
  },
  domotica: {
    title: 'Síntesis: El Proyecto de Domótica',
    text: 'Consiste en la automatización de iluminación, seguridad y confort para hogares y oficinas. Unificamos sensores IoT accesibles con soporte técnico local y precios competitivos gracias a la importación directa sin intermediarios.',
  },
  sistema: {
    title: 'Síntesis: Sistema de Gestión de Importaciones',
    text: 'Software especializado desarrollado en 7mo semestre para calcular aranceles, fletes internacionales y prorrateo de costos unitarios de importación con precisión contable y trazabilidad aduanera.',
  },
  timeline: {
    title: 'Síntesis: Mi Vida en Cinco Años (2026 - 2031)',
    text: 'Plan en 5 etapas secuenciales: 1) Formulación del proyecto en 6to semestre; 2) Desarrollo del software e inicio de importaciones; 3) Graduación en la ESPOCH y escalabilidad; 4) Apertura del primer local y oficinas técnicas; 5) Consolidación de la empresa y bienestar familiar.',
  },
  catedra: {
    title: 'Síntesis: Rigor de Cátedra · Ing. Hitalo Veloz',
    text: 'La cátedra de Formulación y Evaluación de Proyectos brinda las herramientas metodológicas para evaluar la viabilidad de mercado, técnica, financiera y tributaria del negocio, convirtiendo una idea emprendedora en una inversión cuantificable y sostenible.',
  },
};

export const AlejandroPixelCompanion: React.FC<AlejandroPixelCompanionProps> = ({ 
  data,
  onNavigateToSection 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(true);
  const [selectedModule, setSelectedModule] = useState<string>('timeline');
  const [redactedText, setRedactedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);

  // Typewriter effect when redact button is clicked
  const handleRedactModule = (moduleKey: string) => {
    setSelectedModule(moduleKey);
    setIsTyping(true);
    setRedactedText('');
    const fullText = MODULE_SUMMARIES[moduleKey]?.text || '';
    let index = 0;

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setRedactedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 18);
  };

  return (
    <>
      {/* Floating Pixel Avatar Button & Speech Bubble */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none select-none">
        {/* Animated Speech Bubble */}
        <AnimatePresence>
          {showSpeechBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="pointer-events-auto mb-3 max-w-xs sm:max-w-sm p-3.5 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-indigo-500/40 shadow-2xl text-left cursor-pointer group hover:border-indigo-400 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-800">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  Bienvenida de Cátedra
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 group-hover:text-indigo-300 transition-colors">
                    Clic para interactuar →
                  </span>
                  <button
                    id="dismiss-speech-bubble-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowSpeechBubble(false);
                    }}
                    className="p-1 -mr-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Cerrar mensaje"
                    aria-label="Cerrar mensaje"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <p className="text-xs text-slate-100 mt-1.5 leading-relaxed font-medium">
                "Hola, soy Alejandro. Bienvenido, ingeniero Hitalo Veloz. Este es mi proyecto de vida."
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Student Avatar Button Container */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            id="alejandro-avatar-btn"
            onClick={() => {
              setIsOpen(!isOpen);
              if (!isOpen && !redactedText) {
                handleRedactModule('timeline');
              }
            }}
            className="group relative flex items-center gap-3 p-1.5 pr-4 rounded-full bg-slate-900/95 backdrop-blur-xl border-2 border-indigo-500/50 hover:border-cyan-400 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 active:scale-95"
            title="Abrir asistente de Alejandro"
          >
            {/* Authentic Real Student Photo */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/80 shadow-md ring-2 ring-indigo-600/30">
              <img
                src={alejandroPortrait}
                alt="Alejandro Gullqui"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900" />
            </div>

            {/* Label and Badge */}
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                  Alejandro
                </span>
                <Sparkles className="w-3 h-3 text-amber-400" />
              </div>
              <span className="text-[10px] text-slate-400 font-medium block">
                {isOpen ? 'Cerrar asistente' : 'Clic para interactuar'}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Interactive Modal / Redaction Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-4 bottom-24 sm:right-6 sm:left-auto sm:w-[480px] z-50 p-5 rounded-3xl bg-slate-900/98 backdrop-blur-2xl border border-indigo-500/50 shadow-2xl text-left overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl overflow-hidden border border-cyan-400/80 shrink-0 shadow-md">
                  <img
                    src={alejandroPortrait}
                    alt="Alejandro Gullqui"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Alejandro</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800">
                      Asistente de Exposición
                    </span>
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Estudiante 6to Semestre · Domótica & Negocios
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Cerrar panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Interactive Tabs */}
            <div className="py-3 border-b border-slate-800 space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                Selecciona qué módulo deseas redactar o sintetizar:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => handleRedactModule('timeline')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all border ${
                    selectedModule === 'timeline'
                      ? 'bg-indigo-950/80 border-indigo-500 text-indigo-200'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  ⏱️ Mi Vida en 5 Años
                </button>
                <button
                  onClick={() => handleRedactModule('domotica')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all border ${
                    selectedModule === 'domotica'
                      ? 'bg-indigo-950/80 border-indigo-500 text-indigo-200'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  🏠 Proyecto Domótica
                </button>
                <button
                  onClick={() => handleRedactModule('sistema')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all border ${
                    selectedModule === 'sistema'
                      ? 'bg-indigo-950/80 border-indigo-500 text-indigo-200'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  💻 Sistema Importación
                </button>
                <button
                  onClick={() => handleRedactModule('catedra')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all border ${
                    selectedModule === 'catedra'
                      ? 'bg-indigo-950/80 border-indigo-500 text-indigo-200'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  ⚖️ Rigor Cátedra Veloz
                </button>
                <button
                  onClick={() => handleRedactModule('identidad')}
                  className={`col-span-2 px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all border ${
                    selectedModule === 'identidad'
                      ? 'bg-indigo-950/80 border-indigo-500 text-indigo-200'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  🎓 Identidad y Vocación ESPOCH
                </button>
              </div>
            </div>

            {/* Typewriter Terminal Area */}
            <div className="py-3 flex-1 overflow-y-auto space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-cyan-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  {MODULE_SUMMARIES[selectedModule]?.title}
                </span>
                {isTyping && (
                  <span className="text-[10px] text-amber-400 animate-pulse font-mono">
                    Redactando...
                  </span>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 font-sans text-xs sm:text-sm text-slate-200 leading-relaxed min-h-[110px] shadow-inner relative">
                <p>
                  {redactedText || MODULE_SUMMARIES[selectedModule]?.text}
                  {isTyping && <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-1 animate-pulse" />}
                </p>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => handleRedactModule(selectedModule || 'timeline')}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3 h-3 text-cyan-400" />
                <span>Volver a redactar</span>
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  const el = document.getElementById('vision5');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-bold hover:brightness-110 shadow-md shadow-indigo-600/30 flex items-center gap-1.5 transition-all"
              >
                <span>Ir a Mi Vida en 5 Años</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
