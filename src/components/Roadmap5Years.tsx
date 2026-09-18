import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Rocket, 
  Building2, 
  Trophy, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  Milestone,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectLifeData } from '../types';
import domoticaSmartHomeImg from '../assets/images/domotica_smart_home_1789701894714.jpg';
import techImportsImg from '../assets/images/tech_imports_system_1789701905528.jpg';
import domoticaShowroomImg from '../assets/images/domotica_showroom_office_1789701915811.jpg';

interface Roadmap5YearsProps {
  data: ProjectLifeData;
}

const yearIcons = [
  GraduationCap,
  Award,
  Rocket,
  Building2,
  Trophy
];

export const Roadmap5Years: React.FC<Roadmap5YearsProps> = ({ data }) => {
  const [currentYearIndex, setCurrentYearIndex] = useState<number>(0);

  const roadmapItems = (data.fiveYearRoadmap && data.fiveYearRoadmap.length > 0)
    ? data.fiveYearRoadmap
    : [
        {
          year: 'Año 1 (2026)',
          stage: 'Sexto Semestre & Bases del Proyecto de Domótica',
          focus: 'Aprobar sexto semestre en la ESPOCH y comenzar con las bases de la formulación de mi proyecto de domótica y confort inteligente.',
          keyResults: [
            'Aprobar las asignaturas de 6to semestre en Contabilidad y Auditoría (ESPOCH).',
            'Formular las bases técnicas, de mercado y costeo de domótica en la cátedra del Ing. Hitalo Veloz.',
            'Investigación y validación inicial de dispositivos inteligentes, protocolos de automatización y proveedores.',
          ],
        },
        {
          year: 'Año 2 (2027)',
          stage: 'Séptimo Semestre, Desarrollo del Sistema & Primeras Importaciones',
          focus: 'Aprobar séptimo semestre en la ESPOCH, desarrollar el sistema tecnológico para el control integral de las importaciones y arrancar las primeras importaciones.',
          keyResults: [
            'Aprobar las asignaturas de 7mo semestre de la carrera en la ESPOCH.',
            'Desarrollo e implementación del sistema informático especializado para llevar el control logístico y arancelario de las importaciones.',
            'Iniciar las primeras importaciones directas para validar comercialmente dispositivos tecnológicos y soluciones de domótica.',
          ],
        },
        {
          year: 'Año 3 (2028)',
          stage: 'Graduación de la ESPOCH & Escalabilidad de Importaciones',
          focus: 'Culminar la carrera y graduarme de la ESPOCH como Licenciado/Ingeniero en Contabilidad y Auditoría, impulsando la escalabilidad comercial y volumen de importación.',
          keyResults: [
            'Obtención de mi título profesional en la ESPOCH con bases contables, tributarias y financieras de alto nivel.',
            'Escalabilidad en el volumen de importaciones directas de domótica y tecnología con mejores márgenes de rentabilidad.',
            'Reinversión sistemática de utilidades y automatización contable del negocio en crecimiento.',
          ],
        },
        {
          year: 'Año 4 (2029)',
          stage: 'Apertura de mi Primer Local & Oficinas de Instalaciones',
          focus: 'Abrir mi primer local comercial físico y oficinas técnicas para demostración interactiva, venta y servicios de instalación de domótica.',
          keyResults: [
            'Apertura e inauguración del primer local comercial y oficinas de instalaciones de domótica.',
            'Montaje del showroom interactivo donde los clientes comprueban el confort y la automatización en tiempo real.',
            'Contratación y capacitación de equipo técnico instalador para atender proyectos residenciales y corporativos.',
          ],
        },
        {
          year: 'Año 5 (2030 - 2031)',
          stage: 'Empresa Consolidada & Tranquilidad y Bienestar Familiar',
          focus: 'Consolidar la empresa de domótica e importaciones como referente del sector, logrando independencia financiera y brindando bienestar integral y tranquilidad a mi familia.',
          keyResults: [
            'Empresa formalmente posicionada, rentable y con operaciones comerciales automatizadas.',
            'Libertad e independencia financiera sólida generada por operaciones recurrentes.',
            'Tranquilidad, respaldo duradero y tiempo de calidad para mi familia.',
          ],
        },
      ];

  const totalYears = roadmapItems.length;
  const currentStage = roadmapItems[currentYearIndex] || roadmapItems[0];
  const CurrentIcon = yearIcons[currentYearIndex] || Rocket;

  const handlePrev = () => {
    setCurrentYearIndex((prev) => (prev > 0 ? prev - 1 : totalYears - 1));
  };

  const handleNext = () => {
    setCurrentYearIndex((prev) => (prev < totalYears - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation support
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalYears]);

  return (
    <section id="vision5" className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/50 border border-indigo-700/50 text-xs font-semibold text-indigo-300 shadow-sm">
          <Milestone className="w-3.5 h-3.5 text-cyan-400" />
          <span>Pregunta 8 · Plan Estratégico (2026 - 2031)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Mi Vida en Cinco Años
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Ruta secuencial desde las aulas de la ESPOCH hasta la graduación y la consolidación definitiva de mi empresa de domótica e importaciones directas.
        </p>
      </div>

      {/* PANTALLA GRANDE (Large Screen Stage Showcase) */}
      <div className="rounded-3xl bg-slate-900/95 border border-slate-800 space-y-8 shadow-2xl backdrop-blur-xl relative overflow-hidden p-6 sm:p-10 lg:p-12">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/3 w-[500px] h-[350px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Stepper Navigation Bar: 5 Years Tabs */}
        <div className="space-y-3 relative z-10">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
              Etapa {currentYearIndex + 1} de {totalYears}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Navega con los botones o usa las flechas del teclado <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[10px]">→</kbd>
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {roadmapItems.map((item, idx) => {
              const isActive = currentYearIndex === idx;
              const isPassed = currentYearIndex > idx;
              return (
                <button
                  key={idx}
                  id={`roadmap-step-large-btn-${idx + 1}`}
                  onClick={() => setCurrentYearIndex(idx)}
                  className={`p-2.5 sm:p-3.5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between gap-1.5 relative overflow-hidden group ${
                    isActive
                      ? 'bg-gradient-to-br from-indigo-900/90 via-slate-900 to-indigo-950 border-indigo-500 shadow-lg shadow-indigo-950/60 ring-2 ring-indigo-500/40'
                      : isPassed
                      ? 'bg-slate-950/60 border-indigo-900/40 text-slate-300 hover:border-slate-700'
                      : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-md ${
                      isActive
                        ? 'bg-indigo-500 text-white shadow-sm'
                        : isPassed
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      Año {idx + 1}
                    </span>
                    {isPassed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 hidden sm:block" />
                    ) : (
                      <span className="text-[10px] text-slate-500 hidden sm:block">
                        {item.year.replace(/Año \d+ /, '')}
                      </span>
                    )}
                  </div>
                  <span className={`text-xs sm:text-sm font-bold truncate block ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    {idx === 0 && 'Bases Domótica'}
                    {idx === 1 && 'Sistema & Import.'}
                    {idx === 2 && 'Grado ESPOCH'}
                    {idx === 3 && 'Local & Oficinas'}
                    {idx === 4 && 'Consolidación'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Continuous Progress Track */}
          <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 h-full rounded-full transition-all duration-500 ease-out shadow-sm"
              style={{ width: `${((currentYearIndex + 1) / totalYears) * 100}%` }}
            />
          </div>
        </div>

        {/* Cinematic Main Stage */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentYearIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Year Visual Banner */}
              {currentYearIndex === 0 && (
                <div className="rounded-3xl overflow-hidden border border-cyan-800/60 relative h-60 sm:h-72 lg:h-80 shadow-2xl group">
                  <img 
                    src={domoticaSmartHomeImg} 
                    alt="Bases de domótica inteligente y confort IoT"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-700 shadow-md">
                        Año 1 · 2026 · Cátedra Formulación de Proyectos
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                        Domótica Residencial & Confort Inteligente
                      </h3>
                    </div>
                    <span className="text-xs text-slate-200 bg-slate-900/90 px-3.5 py-1.5 rounded-xl border border-slate-700 backdrop-blur-md shrink-0 font-medium">
                      Docente: Ing. Hitalo Veloz
                    </span>
                  </div>
                </div>
              )}

              {currentYearIndex === 1 && (
                <div className="rounded-3xl overflow-hidden border border-blue-800/60 relative h-60 sm:h-72 lg:h-80 shadow-2xl group">
                  <img 
                    src={techImportsImg} 
                    alt="Sistema de importaciones y logística de tecnología"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg bg-blue-950 text-blue-300 border border-blue-700 shadow-md">
                        Año 2 · 2027 · Desarrollo de Software Contable
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                        Sistema Informático & Primeras Importaciones Directas
                      </h3>
                    </div>
                    <span className="text-xs text-slate-200 bg-slate-900/90 px-3.5 py-1.5 rounded-xl border border-slate-700 backdrop-blur-md shrink-0 font-medium">
                      7mo Semestre ESPOCH
                    </span>
                  </div>
                </div>
              )}

              {currentYearIndex === 2 && (
                <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 border border-indigo-600/70 shadow-2xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-indigo-500/20 border-2 border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0 shadow-lg shadow-indigo-900/40">
                    <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                  <div className="space-y-2 text-center md:text-left flex-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg bg-indigo-950 text-indigo-300 border border-indigo-700 shadow-sm">
                      Año 3 · 2028 · Hito de Titulación Politécnica
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      Investidura de Grado en la ESPOCH & Escalabilidad Mayor
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                      El título profesional en Contabilidad y Auditoría respalda jurídicamente la firma importadora, optimizando la estructura tributaria y financiera para importar a gran escala.
                    </p>
                  </div>
                </div>
              )}

              {currentYearIndex === 3 && (
                <div className="rounded-3xl overflow-hidden border border-amber-800/60 relative h-60 sm:h-72 lg:h-80 shadow-2xl group">
                  <img 
                    src={domoticaShowroomImg} 
                    alt="Apertura de local comercial y oficinas de instalaciones"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg bg-amber-950 text-amber-300 border border-amber-700 shadow-md">
                        Año 4 · 2029 · Infraestructura & Local Físico
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                        Primer Local Comercial & Oficinas de Instalaciones Técnicas
                      </h3>
                    </div>
                    <span className="text-xs text-slate-200 bg-slate-900/90 px-3.5 py-1.5 rounded-xl border border-slate-700 backdrop-blur-md shrink-0 font-medium">
                      Showroom Interactivo
                    </span>
                  </div>
                </div>
              )}

              {currentYearIndex === 4 && (
                <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 border border-emerald-600/70 shadow-2xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0 shadow-lg shadow-emerald-900/40">
                    <Trophy className="w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                  <div className="space-y-2 text-center md:text-left flex-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-700 shadow-sm">
                      Año 5 · 2030 - 2031 · Consolidación & Independencia
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      Empresa Consolidada & Tranquilidad y Bienestar Familiar
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                      Operaciones comerciales automatizadas, flujo de caja libre positivo e independencia financiera, asegurando calidad de vida y respaldo a mi familia.
                    </p>
                  </div>
                </div>
              )}

              {/* Stage Title and Focus Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-indigo-950/50 border border-indigo-800/60 shadow-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0">
                      <CurrentIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-indigo-400 uppercase tracking-wider block">
                        {currentStage.year}
                      </span>
                      <h4 className="text-lg sm:text-2xl font-bold text-white leading-tight">
                        {currentStage.stage}
                      </h4>
                    </div>
                  </div>
                  <span className="text-xs text-indigo-300 bg-indigo-950/80 px-3 py-1.5 rounded-xl border border-indigo-800/60 w-fit shrink-0">
                    Enfoque Estratégico
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                    Meta Principal para este Año:
                  </span>
                  <p className="text-slate-100 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                    {currentStage.focus}
                  </p>
                </div>
              </div>

              {/* 3 Detailed Strategic Action Pillars */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Acciones Clave y Resultados Programados:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {currentStage.keyResults.map((kr, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-start gap-3 shadow-md hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{kr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM CONTROLS: Large Prominent Forward Button */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-5 relative z-10">
          {/* Previous Button */}
          <button
            id="roadmap-prev-btn"
            onClick={handlePrev}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Año Anterior</span>
          </button>

          {/* Step Dots */}
          <div className="flex items-center gap-2.5">
            {roadmapItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentYearIndex(idx)}
                aria-label={`Ir a la etapa del Año ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentYearIndex === idx
                    ? 'w-10 h-3 bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-md shadow-indigo-500/50'
                    : 'w-3 h-3 bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* LARGE PROMINENT BUTTON: Pasar al Siguiente Año */}
          <button
            id="roadmap-next-large-btn"
            onClick={handleNext}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-blue-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-blue-500 text-sm sm:text-base font-bold text-white transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/40 hover:scale-105 active:scale-95 border border-indigo-400/30"
          >
            <span>
              {currentYearIndex === totalYears - 1 
                ? 'Volver a Empezar (Año 1)' 
                : `Pasar al Siguiente Año (Año ${currentYearIndex + 2})`}
            </span>
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Grid: Pregunta 9 (Sueño no comenzado) & Pregunta 10 (Obstáculos) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Pregunta 9: El Sueño Pendiente */}
        <div className="lg:col-span-5 p-7 rounded-3xl bg-gradient-to-br from-slate-900/90 via-amber-950/20 to-slate-900/90 border border-amber-900/40 space-y-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-950/60 text-amber-300 border border-amber-800/60">
                Pregunta 9 · La Meta Latente
              </span>
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Rocket className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                El Sueño que Aún no he Comenzado a Perseguir
              </h3>
              <h4 className="text-base font-semibold text-amber-300 mt-2">
                {data.unstartedDream.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {data.unstartedDream.description}
              </p>
            </div>

            {/* Why not yet */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                ¿Por qué aún no ha iniciado?
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {data.unstartedDream.whyNotYet}
              </p>
            </div>
          </div>

          {/* First Step */}
          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/50 space-y-1">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
              Primer Paso Concreto (Este Semestre):
            </span>
            <p className="text-xs sm:text-sm font-medium text-white">
              {data.unstartedDream.firstStep}
            </p>
          </div>
        </div>

        {/* Pregunta 10: Obstáculos y Mitigaciones */}
        <div className="lg:col-span-7 p-7 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block">
                Pregunta 10 · Obstáculos y Cómo Superarlos
              </span>
              <h3 className="text-2xl font-bold text-white">
                ¿Qué Obstáculos Podrían Impedir mis Metas?
              </h3>
            </div>
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm">
            En la formulación de proyectos aprendemos que anticipar los riesgos es fundamental. Para cada dificultad identificada, he establecido una respuesta práctica:
          </p>

          <div className="space-y-3">
            {data.obstacles.map((obs, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                    <h4 className="text-xs sm:text-sm font-bold text-slate-200">
                      {obs.obstacle}
                    </h4>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${
                    obs.severity === 'alta'
                      ? 'bg-rose-950/60 text-rose-300 border-rose-800/60'
                      : 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                  }`}>
                    Riesgo {obs.severity}
                  </span>
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded-lg">
                  <span className="text-emerald-400 font-bold shrink-0">Plan de Mitigación:</span>
                  <span>{obs.mitigation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
