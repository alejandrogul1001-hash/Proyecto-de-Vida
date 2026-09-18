import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Briefcase, 
  DollarSign, 
  CheckCircle2, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Coins, 
  GraduationCap,
  Sparkles,
  Layers
} from 'lucide-react';
import { ProjectLifeData } from '../types';
import techImportsImg from '../assets/images/tech_imports_system_1789701905528.jpg';

interface DimensionsSectionProps {
  data: ProjectLifeData;
}

export const DimensionsSection: React.FC<DimensionsSectionProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'todas' | 'personal' | 'profesional' | 'economica'>('todas');

  return (
    <section id="dimensiones" className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-xs font-semibold text-blue-400">
          <Layers className="w-3.5 h-3.5" />
          <span>Fase 2: Mis Metas en Tres Dimensiones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Las Tres Dimensiones del Futuro
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Para que un proyecto de vida tenga sentido y sostenibilidad, debe existir una armonía real entre el bienestar familiar, el crecimiento profesional y la tranquilidad económica.
        </p>

        {/* Tab Controls for Mobile / Quick focus */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
          <button
            onClick={() => setActiveTab('todas')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'todas'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Vista Integral (Las 3 Dimensiones)
          </button>
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'personal'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            1. Vida Personal
          </button>
          <button
            onClick={() => setActiveTab('profesional')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'profesional'
                ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            2. Vida Profesional
          </button>
          <button
            onClick={() => setActiveTab('economica')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'economica'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            3. Meta Económica
          </button>
        </div>
      </div>

      {/* Grid of Dimensions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dimensión Personal */}
        {(activeTab === 'todas' || activeTab === 'personal') && (
          <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-rose-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between space-y-6 shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-950/60 text-rose-300 border border-rose-800/60">
                  Pregunta 5 · Dimensión 1
                </span>
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                  {data.personalGoal.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {data.personalGoal.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Metas Personales Clave:
                </span>
                <div className="space-y-2">
                  {data.personalGoal.milestones.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
              <span>Equilibrio & Salud</span>
              <span className="text-rose-400 font-medium">Base de la sostenibilidad</span>
            </div>
          </div>
        )}

        {/* Dimensión Profesional (Contabilidad y Auditoría 4.0 & AI) */}
        {(activeTab === 'todas' || activeTab === 'profesional') && (
          <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between space-y-6 shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                  Pregunta 6 · Dimensión 2
                </span>
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {data.professionalGoal.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {data.professionalGoal.description}
                </p>
              </div>

              {/* Visual Showcase Banner */}
              <div className="relative h-28 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-md">
                <img 
                  src={techImportsImg} 
                  alt="Sistema de importaciones y catálogo de tecnología" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <span className="absolute bottom-2 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-950/90 text-cyan-300 border border-cyan-800/80 backdrop-blur-sm">
                  Domótica & Cadena de Importaciones
                </span>
              </div>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Hitos Profesionales:
                </span>
                <div className="space-y-2">
                  {data.professionalGoal.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40">
                      <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Formación ESPOCH</span>
              <span className="text-cyan-400 font-medium">Contabilidad + Importación & Domótica</span>
            </div>
          </div>
        )}

        {/* Dimensión Económica (Inversión & Libertad Financiera) */}
        {(activeTab === 'todas' || activeTab === 'economica') && (
          <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between space-y-6 shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
                  Pregunta 7 · Dimensión 3
                </span>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {data.economicGoal.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {data.economicGoal.description}
                </p>
              </div>

              {/* Economic Quote */}
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs italic text-emerald-200">
                {data.economicGoal.investmentPhilosophy}
              </div>

              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Metas Financieras Concretas:
                </span>
                <div className="space-y-2">
                  {data.economicGoal.keyMetrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40">
                      <Coins className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Criterio Financiero</span>
              <span className="text-emerald-400 font-medium">Inversión Prudente y Rentable</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
