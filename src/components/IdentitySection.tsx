import React, { useState, useRef } from 'react';
import { 
  UserCheck, 
  Zap, 
  TrendingUp, 
  Target, 
  Shield, 
  Cpu, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  AlertCircle,
  HelpCircle,
  Home,
  Boxes,
  Calculator
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ProjectLifeData, StrengthItem } from '../types';
import domoticaSmartHomeImg from '../assets/images/domotica_smart_home_1789701894714.jpg';
import alejandroPortrait from '../assets/images/alejandro_portrait_1789703412340.jpg';

interface IdentitySectionProps {
  data: ProjectLifeData;
}

export const IdentitySection: React.FC<IdentitySectionProps> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Cinematic Multi-Layer Scroll Parallax (Differential Velocity + Opacity + Scale Depth)
  // Layer 0: Deep Atmospheric Ambient Glow
  const yGlow = useTransform(scrollYProgress, [0, 0.5, 1], [-80, 0, 80]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.75, 0.15]);

  // Layer 1: Section Header (Phase 1 Diagnostic)
  const headerY = useTransform(scrollYProgress, [0, 0.22, 0.85, 1], [40, 0, 0, -30]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.18, 0.85, 1], [0.35, 1, 1, 0.35]);

  // Layer 2A: Question 1 Core Text Block (moves slower, fades gently)
  const card1TextY = useTransform(scrollYProgress, [0.05, 0.28, 0.75, 0.95], [35, 0, 0, -25]);
  const card1TextOpacity = useTransform(scrollYProgress, [0.05, 0.22, 0.8, 0.95], [0.55, 1, 1, 0.55]);

  // Layer 2B: Question 1 Visual Card (Domótica / IoT) - Faster travel, higher opacity peak & scale
  const card1ImageY = useTransform(scrollYProgress, [0.05, 0.28, 0.75, 0.95], [65, 0, 0, -50]);
  const card1ImageOpacity = useTransform(scrollYProgress, [0.05, 0.22, 0.8, 0.95], [0.65, 1, 1, 0.65]);
  const card1ImageScale = useTransform(scrollYProgress, [0.05, 0.28, 0.75, 0.95], [0.94, 1, 1, 0.96]);

  // Layer 3: Question 2 Strengths Header & Filters
  const strengthsHeaderY = useTransform(scrollYProgress, [0.2, 0.38, 0.8, 1], [30, 0, 0, -20]);
  const strengthsHeaderOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.85, 1], [0.5, 1, 1, 0.6]);

  // Layer 3B: Strengths Grid Cards
  const strengthsGridY = useTransform(scrollYProgress, [0.25, 0.45, 0.85, 1], [50, 0, 0, -35]);
  const strengthsGridOpacity = useTransform(scrollYProgress, [0.25, 0.42, 0.88, 1], [0.55, 1, 1, 0.65]);

  // Layer 4A: Question 3 (Growth Areas / Self-criticism)
  const growthCardY = useTransform(scrollYProgress, [0.38, 0.62, 0.9, 1], [40, 0, 0, -25]);
  const growthCardOpacity = useTransform(scrollYProgress, [0.38, 0.55, 0.9, 1], [0.6, 1, 1, 0.7]);

  // Layer 4B: Question 4 (Target Persona & Alejandro Portrait) - Faster parallax & depth scale
  const targetCardY = useTransform(scrollYProgress, [0.38, 0.62, 0.9, 1], [70, 0, 0, -45]);
  const targetCardOpacity = useTransform(scrollYProgress, [0.38, 0.55, 0.9, 1], [0.55, 1, 1, 0.65]);
  const portraitScale = useTransform(scrollYProgress, [0.38, 0.6, 0.9, 1], [0.92, 1, 1, 0.96]);

  const filteredStrengths = selectedCategory === 'todas'
    ? data.strengths
    : data.strengths.filter((s) => s.category === selectedCategory);

  const getCategoryBadge = (category: StrengthItem['category']) => {
    switch (category) {
      case 'analitica':
        return { label: 'Analítica', color: 'bg-blue-950/60 text-blue-300 border-blue-800/60' };
      case 'tecnologica':
        return { label: 'Tecnológica / IA', color: 'bg-cyan-950/60 text-cyan-300 border-cyan-800/60' };
      case 'artistica':
        return { label: 'Creativa & Artística', color: 'bg-fuchsia-950/60 text-fuchsia-300 border-fuchsia-800/60' };
      case 'humana':
        return { label: 'Ética & Valores', color: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60' };
      case 'estrategica':
        return { label: 'Estratégica', color: 'bg-purple-950/60 text-purple-300 border-purple-800/60' };
    }
  };

  return (
    <section ref={sectionRef} id="identidad" className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Section Header with Parallax & Opacity */}
      <motion.div 
        style={{ y: headerY, opacity: headerOpacity }} 
        className="text-center max-w-3xl mx-auto space-y-3 will-change-transform"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-semibold text-cyan-400">
          <UserCheck className="w-3.5 h-3.5" />
          <span>Fase 1: Diagnóstico Personal y Formativo</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Identidad, Fortalezas y Propósito
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          El primer paso para aprender a formular un proyecto es conocernos a nosotros mismos, identificando nuestras capacidades y el valor que queremos aportar.
        </p>
      </motion.div>

      {/* Pregunta 1: ¿Quién soy realmente? (Full width Hero Card) */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden">
        <motion.div 
          style={{ y: yGlow, opacity: opacityGlow }} 
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none will-change-transform" 
        />
        
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Block with Cinematic Motion */}
          <motion.div 
            style={{ y: card1TextY, opacity: card1TextOpacity }}
            className="lg:col-span-7 space-y-6 will-change-transform"
          >
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Pregunta 1 · El Núcleo de Identidad</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              ¿Quién soy realmente?
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {data.whoAmI.core}
            </p>
            
            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {data.whoAmI.identityPillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Focus Card: Domótica & Sistema de Importaciones with Parallax (Speed + Opacity + Scale) */}
          <motion.div 
            style={{ y: card1ImageY, opacity: card1ImageOpacity, scale: card1ImageScale }}
            className="lg:col-span-5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm overflow-hidden flex flex-col shadow-xl will-change-transform"
          >
            <div className="relative h-44 w-full overflow-hidden group">
              <img 
                src={domoticaSmartHomeImg} 
                alt="Proyecto de Domótica y Tecnología Inteligente"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 backdrop-blur-md">
                  Enfoque Práctico del Proyecto
                </span>
              </div>
              <div className="absolute bottom-2.5 left-3 right-3">
                <h4 className="text-sm font-bold text-white drop-shadow-md">
                  Domótica, Automatización & Importaciones
                </h4>
              </div>
            </div>

            <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <Home className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Domótica:</strong> Confort, iluminación y automatizaciones IoT.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <Boxes className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong>Sistema Propio:</strong> Control arancelario y logística de importaciones.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-xl bg-slate-950/60 border border-slate-800">
                  <Calculator className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Rigor ESPOCH:</strong> Evaluación de costos y rentabilidad real.</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>{data.profile.career}</span>
                <span className="text-cyan-400 font-semibold">{data.profile.university.split(' ')[0]}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pregunta 2: Principales Fortalezas */}
      <div className="space-y-6">
        <motion.div 
          style={{ y: strengthsHeaderY, opacity: strengthsHeaderOpacity }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 will-change-transform"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>Pregunta 2 · Mis Activos Estratégicos</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Principales Fortalezas
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Competencias analíticas, creativas, tecnológicas y humanas que impulsan mi visión.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
            {[
              { id: 'todas', label: 'Todas' },
              { id: 'analitica', label: 'Analítica' },
              { id: 'tecnologica', label: 'IA & Tecnología' },
              { id: 'artistica', label: 'Creatividad & Arte' },
              { id: 'humana', label: 'Ética & Valores' },
              { id: 'estrategica', label: 'Estrategia' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Strengths Grid with Parallax and Opacity */}
        <motion.div 
          style={{ y: strengthsGridY, opacity: strengthsGridOpacity }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 will-change-transform"
        >
          {filteredStrengths.map((strength) => {
            const badge = getCategoryBadge(strength.category);
            return (
              <div
                key={strength.id}
                className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all space-y-3 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${badge.color}`}>
                      {badge.label}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {strength.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Capacidad formativa</span>
                  <span className="text-cyan-400/80 font-medium">Habilidad para mi futuro</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Grid: Pregunta 3 (Aspectos a Mejorar) & Pregunta 4 (Tipo de Persona) with Parallax */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Pregunta 3: Aspectos a mejorar */}
        <motion.div 
          style={{ y: growthCardY, opacity: growthCardOpacity }}
          className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6 will-change-transform"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>Pregunta 3 · Madurez y Autocrítica</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Aspectos que Necesito Mejorar
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Identificar la debilidad es el 50% de la solución. Cada brecha tiene su plan de acción:
            </p>
          </div>

          <div className="space-y-3">
            {data.growthAreas.map((item) => (
              <div 
                key={item.id}
                className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-slate-200">
                    {item.aspect}
                  </h4>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${
                    item.status === 'prioridad'
                      ? 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                      : 'bg-blue-950/60 text-blue-300 border-blue-800/60'
                  }`}>
                    {item.status === 'prioridad' ? 'Prioridad Inmediata' : 'En Optimización'}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="text-cyan-400 font-semibold shrink-0">Estrategia:</span>
                  <span>{item.strategy}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pregunta 4: ¿Qué tipo de persona quiero llegar a ser? */}
        <motion.div 
          style={{ y: targetCardY, opacity: targetCardOpacity }}
          className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-blue-950/30 to-slate-900/90 border border-blue-900/40 space-y-6 flex flex-col justify-between shadow-xl will-change-transform"
        >
          <div className="space-y-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Pregunta 4 · La Visión del Ser</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                ¿Qué tipo de persona quiero llegar a ser?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                El éxito profesional carece de valor si no está sustentado por una calidad moral intachable.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 text-sm sm:text-base text-slate-200 leading-relaxed">
              {data.targetPersona.statement}
            </div>

            {/* Core virtues list */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">
                Pilares de Carácter Deseados:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.targetPersona.virtues.map((v, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-800/40 border border-slate-700/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Portrait Validation Badge */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
              <motion.div 
                style={{ scale: portraitScale }}
                className="relative w-12 h-12 rounded-xl overflow-hidden border border-cyan-400/60 shrink-0 will-change-transform"
              >
                <img
                  src={alejandroPortrait}
                  alt={data.profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              <div className="space-y-0.5 text-left">
                <span className="text-xs font-bold text-white block">
                  {data.profile.name}
                </span>
                <p className="text-[11px] text-cyan-400 font-medium">
                  {data.profile.career} · {data.profile.semester}
                </p>
                <span className="text-[10px] text-slate-400 block">
                  Docente Cátedra: {data.profile.professorName}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
            <span className="text-blue-400 font-semibold">Legado buscado:</span> {data.targetPersona.impactVision}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
