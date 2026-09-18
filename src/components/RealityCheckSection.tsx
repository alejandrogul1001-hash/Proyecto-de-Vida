import React from 'react';
import { 
  Flame, 
  HelpCircle, 
  AlertCircle, 
  Clock, 
  BookOpen, 
  RefreshCw, 
  Scissors, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Target
} from 'lucide-react';
import { ProjectLifeData } from '../types';

interface RealityCheckSectionProps {
  data: ProjectLifeData;
}

export const RealityCheckSection: React.FC<RealityCheckSectionProps> = ({ data }) => {
  return (
    <section id="decision" className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-800/40 text-xs font-semibold text-amber-400">
          <Flame className="w-3.5 h-3.5" />
          <span>Fase 4: Reflexión Sincera y Acción Inmediata</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Decisión, Esfuerzo y Acción Concreta
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          En la cátedra de proyectos aprendemos que no basta con planificar en papel: es indispensable evaluar con madurez si nuestras acciones diarias nos están acercando al objetivo.
        </p>
      </div>

      {/* Pregunta 11: ¿Qué estoy dispuesto/a a cambiar, aprender o sacrificar? */}
      <div className="space-y-6">
        <div className="text-center sm:text-left space-y-1">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
            Pregunta 11 · El Costo del Crecimiento
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            ¿Qué estoy dispuesto a Cambiar, Aprender o Sacrificar?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Para alcanzar nuestras metas, todo estudiante debe asumir compromisos reales de aprendizaje, cambio y esfuerzo:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Columna: Dispuesto a Aprender */}
          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">
                Dispuesto a Aprender
              </h4>
              <p className="text-xs text-slate-400">
                Competencias técnicas y humanas indispensables para mi desarrollo:
              </p>

              <div className="space-y-2 pt-2">
                {data.willingness.toLearn.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="text-[11px] text-cyan-400 font-medium pt-3 border-t border-slate-800/60 block">
              Adquisición de Nuevos Conocimientos
            </span>
          </div>

          {/* Columna: Dispuesto a Cambiar */}
          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">
                Dispuesto a Cambiar
              </h4>
              <p className="text-xs text-slate-400">
                Actitudes y hábitos que frenan mi rendimiento académico y personal:
              </p>

              <div className="space-y-2 pt-2">
                {data.willingness.toChange.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="text-[11px] text-blue-400 font-medium pt-3 border-t border-slate-800/60 block">
              Mejora de Hábitos Diarios
            </span>
          </div>

          {/* Columna: Dispuesto a Sacrificar */}
          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-rose-500/40 transition-all space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                <Scissors className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">
                Dispuesto a Sacrificar
              </h4>
              <p className="text-xs text-slate-400">
                Comodidades inmediatas para asegurar resultados duraderos:
              </p>

              <div className="space-y-2 pt-2">
                {data.willingness.toSacrifice.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="text-[11px] text-rose-400 font-medium pt-3 border-t border-slate-800/60 block">
              Priorizar mi Futuro y mis Metas
            </span>
          </div>
        </div>
      </div>

      {/* Pregunta 12: Si continúo haciendo exactamente lo mismo que hago hoy... (High impact confrontation card) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-950/40 via-slate-900/90 to-amber-950/40 border border-amber-900/50 shadow-2xl relative overflow-hidden">
        <div className="space-y-6 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>Pregunta 12 · La Interrogante Confrontativa</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-snug">
            ¿Si continúo haciendo exactamente lo mismo que hago hoy, mi vida me llevará al lugar donde quiero estar?
          </h3>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-200 text-base sm:text-lg leading-relaxed font-light text-left">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider mb-2">
              <span>Veredicto Honesto:</span>
              <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 text-xs">
                {data.realityCheck.verdict}
              </span>
            </div>
            <p className="italic text-slate-300">
              {data.realityCheck.honestAssessment}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            {data.realityCheck.gapAnalysis}
          </p>
        </div>
      </div>

      {/* Pregunta 13: Acción Concreta Inmediata (The Daily Execution System) */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/90 via-cyan-950/30 to-slate-900/90 border border-cyan-800/40 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>Pregunta 13 · Acción Inmediata</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              ¿Cuál será una Acción Concreta que Empezaré desde Ahora?
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
            <Clock className="w-4 h-4" />
            <span>Compromiso de Trabajo Diario</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-4">
          <h4 className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {data.concreteActionNow.action}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="block text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
                Horario y Frecuencia:
              </span>
              <p className="text-slate-300">
                {data.concreteActionNow.dailyCommitment}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="block text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
                Métrica Cuantificable de Éxito:
              </span>
              <p className="text-slate-300">
                {data.concreteActionNow.measurableMetric}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
