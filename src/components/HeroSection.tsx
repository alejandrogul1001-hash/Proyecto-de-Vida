import React, { useRef } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  UserCheck,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ProjectLifeData } from '../types';
import { soundManager } from '../utils/soundManager';

interface HeroSectionProps {
  data: ProjectLifeData;
  onOpenPresentation?: () => void;
  onOpenEditor?: () => void;
  onOpenExport?: () => void;
  onOpenShareDocente?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  data,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  // Multi-layered Parallax transformations for depth and fluidity
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const capsuleY = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  const scrollTo = (id: string) => {
    soundManager.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[78vh] pt-24 pb-6 px-4 md:px-8 flex flex-col justify-center overflow-hidden"
    >
      {/* Parallax Subtle Background Glows */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none will-change-transform" 
      />
      <motion.div 
        style={{ y: bgY }}
        className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none will-change-transform" 
      />

      <motion.div 
        style={{ opacity: heroOpacity }}
        className="relative max-w-6xl mx-auto w-full text-center space-y-8 will-change-transform"
      >
        {/* Main Headline with Parallax Float */}
        <motion.div style={{ y: textY }} className="space-y-4 will-change-transform">
          <div className="inline-block px-4 py-1.5 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-xs sm:text-sm font-semibold tracking-widest text-cyan-300 uppercase shadow-sm">
            {data.profile.subject} · Actividad Individual
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
            ¿Quién soy y <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              hacia dónde voy?
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            <span className="italic text-slate-200">
              “Antes de formular un proyecto de inversión en el mercado, es indispensable aprender a formular y auditar también nuestro propio proyecto de vida”.
            </span>
          </p>
        </motion.div>

        {/* Student & Professor Credential Capsule with Parallax Float */}
        <motion.div 
          style={{ y: capsuleY }}
          className="max-w-3xl mx-auto p-5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800/90 flex flex-col md:flex-row items-center justify-between gap-5 text-left shadow-2xl will-change-transform"
        >
          <div className="text-center sm:text-left">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
              {data.profile.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
              {data.profile.career} · {data.profile.semester} · {data.profile.parallel || 'Paralelo 1'}
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs text-slate-400 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-6 w-full md:w-auto justify-between md:justify-start bg-slate-950/40 px-4 py-2.5 rounded-xl border border-slate-800/60">
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Docente de la Cátedra</span>
              <span className="text-slate-100 font-semibold text-xs sm:text-sm flex items-center gap-1.5 mt-0.5">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                {data.profile.professorName || 'Ingeniero Hitalo Veloz'}
              </span>
            </div>
            <div className="text-right md:text-left border-l border-slate-800 pl-5">
              <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Asignatura</span>
              <span className="text-cyan-300 font-medium text-xs">Formulación y Evaluación de Proyectos</span>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid with Parallax Float */}
        <motion.div 
          style={{ y: cardsY }}
          className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left will-change-transform"
        >
          <div 
            onClick={() => scrollTo('identidad')}
            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs text-cyan-400 font-medium mb-1">
              <span>Eje I</span>
              <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
              Identidad & Fortalezas
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Autoconocimiento, ética profesional y áreas de mejora continua.
            </p>
          </div>

          <div 
            onClick={() => scrollTo('dimensiones')}
            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/70 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs text-blue-400 font-medium mb-1">
              <span>Eje II</span>
              <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
              Las 3 Dimensiones
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Aspiración personal, rigor profesional en auditoría y meta económica.
            </p>
          </div>

          <div 
            onClick={() => scrollTo('vision5')}
            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900/70 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs text-indigo-400 font-medium mb-1">
              <span>Eje III</span>
              <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
              Horizonte 5 Años
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Hoja de ruta temporal, mitigación de riesgos y el sueño pendiente.
            </p>
          </div>

          <div 
            onClick={() => scrollTo('compromiso')}
            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-900/70 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs text-emerald-400 font-medium mb-1">
              <span>Eje IV & V</span>
              <Award className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
              Compromiso Semestre
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Declaración solemne, acción inmediata y pacto de excelencia académica.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
