import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  FileText, 
  GraduationCap, 
  Award,
  CheckCircle2,
  Cpu,
  DollarSign,
  HeartHandshake,
  Calendar,
  AlertTriangle,
  TrendingUp,
  Target,
  Compass,
  ShieldCheck,
  ListFilter,
  Layers
} from 'lucide-react';
import { ProjectLifeData } from '../types';
import { EspochLogo, FadeContabilidadLogo } from './Logos';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectLifeData;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState(true);
  const [showSlideList, setShowSlideList] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Slides structure: 15 individual slides (Portada + Preguntas 1 a 13 + Cierre)
  const slides = [
    // Diapositiva 1: Portada Institucional
    {
      id: 1,
      badge: 'Carátula Institucional · ESPOCH FADE',
      questionNumber: 'Portada',
      title: 'Proyecto de Vida: ¿Quién soy y hacia dónde voy?',
      subtitle: 'Formulación y Evaluación de Proyectos · Sexto Semestre',
      speakerNotes: 'Estimado Ingeniero Hitalo Veloz, compañeros: Hoy comparto con ustedes mi proyecto de vida estructurado en las 13 preguntas esenciales. En esta cátedra estamos aprendiendo las metodologías para formular y evaluar proyectos de inversión; sin embargo, antes de evaluar cualquier número o proyecto externo, el primer proyecto que debemos aprender a diagnosticar, ordenar y dirigir con propósito es nuestra propia vida. Esta es mi radiografía personal y mi visión hacia el futuro.',
      content: (
        <div className="space-y-6 text-center max-w-2xl mx-auto py-2">
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col items-center p-2 rounded-xl bg-slate-900 border border-slate-800">
              <EspochLogo size="md" className="rounded-lg shadow-sm" />
              <span className="text-[10px] font-bold text-red-400 mt-1 uppercase tracking-wider">ESPOCH</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-xl bg-slate-900 border border-slate-800">
              <FadeContabilidadLogo size="md" className="rounded-full shadow-sm" />
              <span className="text-[10px] font-bold text-blue-300 mt-1 uppercase tracking-wider">FADE</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-semibold text-cyan-300">
            <GraduationCap className="w-4 h-4" />
            <span>{data.profile.university} · {data.profile.faculty}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Proyecto de Vida: <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              ¿Quién soy y hacia dónde voy?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light italic max-w-xl mx-auto">
            {data.whoAmI.philosophy}
          </p>
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 max-w-md mx-auto text-left shadow-xl space-y-1.5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-white">{data.profile.name}</p>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                {data.profile.semester} · {data.profile.parallel || 'Paralelo 1'}
              </span>
            </div>
            <p className="text-xs text-slate-400">{data.profile.career}</p>
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Cátedra: Formulación y Evaluación de Proyectos</span>
              <span className="text-cyan-300 font-medium">Docente: {data.profile.professorName || 'Ing. Hitalo Veloz'}</span>
            </div>
          </div>
        </div>
      ),
    },

    // Diapositiva 2: Pregunta 1
    {
      id: 2,
      badge: 'Pregunta 1 de 13 · Diagnóstico de Identidad',
      questionNumber: 'Pregunta 1',
      title: '¿Quién soy realmente?',
      subtitle: 'El punto de partida y autoconocimiento de mi perfil',
      speakerNotes: 'Para responder con total honestidad quién soy: no soy solo un estudiante sentado en un aula. Soy un politécnico de sexto semestre que busca integrar la contabilidad, los costos y el rigor financiero con la tecnología, la sensibilidad creativa y la inteligencia artificial para crear soluciones útiles.',
      content: (
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Declaración Esencial:</span>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {data.whoAmI.core}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(data.whoAmI.identityPillars || []).map((p, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // Diapositiva 3: Pregunta 2
    {
      id: 3,
      badge: 'Pregunta 2 de 13 · Capacidades y Ventajas',
      questionNumber: 'Pregunta 2',
      title: '¿Cuáles considero que son mis principales fortalezas?',
      subtitle: 'Competencias técnicas, creativas, analíticas y humanas identificadas',
      speakerNotes: 'Mis principales fortalezas para emprender y formular proyectos son: capacidad de autoaprendizaje tecnológico, sensibilidad creativa y estética, visión práctica comercial para productos de alta demanda como celulares y domótica, resiliencia ante la frustración y el criterio de control contable que me otorga la FADE.',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-5xl mx-auto">
          {(data.strengths || []).map((s) => (
            <div key={s.id} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 shadow-lg">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                  s.category === 'artistica' 
                    ? 'bg-fuchsia-950 text-fuchsia-300 border-fuchsia-800'
                    : s.category === 'analitica'
                    ? 'bg-blue-950 text-blue-300 border-blue-800'
                    : s.category === 'humana'
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                    : s.category === 'estrategica'
                    ? 'bg-purple-950 text-purple-300 border-purple-800'
                    : 'bg-cyan-950 text-cyan-300 border-cyan-800'
                }`}>
                  {s.category === 'artistica' ? 'Creativa & Arte' : s.category}
                </span>
                <ShieldCheck className="w-4 h-4 text-slate-500" />
              </div>
              <h4 className="text-sm font-bold text-white">{s.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      ),
    },

    // Diapositiva 4: Pregunta 3
    {
      id: 4,
      badge: 'Pregunta 3 de 13 · Autocrítica Constructiva',
      questionNumber: 'Pregunta 3',
      title: '¿Qué aspectos de mí necesito mejorar?',
      subtitle: 'Identificación de áreas de crecimiento y plan de acción correctivo',
      speakerNotes: 'Reconocer lo que debo mejorar es fundamental. Debo superar la postergación en tareas complejas, canalizar la dispersión creativa para concluir proyectos con excelencia y fortalecer el dominio del inglés técnico y comercial.',
      content: (
        <div className="space-y-3.5 max-w-3xl mx-auto">
          {(data.growthAreas || []).map((g) => (
            <div key={g.id} className="p-4 rounded-2xl bg-slate-900/90 border border-amber-900/40 space-y-2 shadow-lg">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{g.aspect}</span>
                </h4>
                <span className="text-[10px] text-slate-500">Causa: {g.rootCause}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <strong className="text-cyan-400">Estrategia de superación:</strong> {g.strategy}
              </p>
            </div>
          ))}
        </div>
      ),
    },

    // Diapositiva 5: Pregunta 4
    {
      id: 5,
      badge: 'Pregunta 4 de 13 · Visión del Carácter',
      questionNumber: 'Pregunta 4',
      title: '¿Qué tipo de persona quiero llegar a ser?',
      subtitle: 'El perfil humano, moral y ético que orienta mi vida',
      speakerNotes: 'Más allá de los títulos o el dinero que pueda generar, la persona que quiero llegar a ser se define por su humildad, su empatía y su calidad humana. Quiero ser alguien en quien las personas puedan confiar plenamente, aportando valor a mi entorno.',
      content: (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-blue-900/50 shadow-2xl text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Declaración de Identidad Futura:</span>
            <blockquote className="text-lg sm:text-2xl font-serif italic text-slate-100 leading-relaxed">
              “{data.targetPersona.statement}”
            </blockquote>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(data.targetPersona.virtues || []).map((v, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
                <span className="text-xs font-bold text-cyan-300">{v}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
            <span className="font-bold text-cyan-400">Impacto en la Comunidad:</span> {data.targetPersona.impactVision}
          </div>
        </div>
      ),
    },

    // Diapositiva 6: Pregunta 5
    {
      id: 6,
      badge: 'Pregunta 5 de 13 · Dimensión Personal',
      questionNumber: 'Pregunta 5',
      title: '¿Qué quiero conseguir en mi vida personal?',
      subtitle: 'Salud, equilibrio familiar, expresión creativa y bienestar integral',
      speakerNotes: 'En lo personal, busco paz mental, equilibrio emocional, cultivar mi gusto por el diseño y la música, y tiempo de calidad con mi familia. Ningún éxito laboral compensa descuidar la salud física ni alejarse de las personas que nos apoyan.',
      content: (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-rose-900/40 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-5 h-5" />
              <span>Objetivo de Vida Personal</span>
            </div>
            <h4 className="text-xl font-bold text-white">{data.personalGoal.title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{data.personalGoal.description}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-300">Hábitos Diarios para Lograrlo:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(data.personalGoal.habits || data.personalGoal.milestones || []).map((h, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 text-xs text-slate-300 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },

    // Diapositiva 7: Pregunta 6
    {
      id: 7,
      badge: 'Pregunta 6 de 13 · Dimensión Profesional',
      questionNumber: 'Pregunta 6',
      title: '¿Qué quiero alcanzar profesionalmente?',
      subtitle: 'Graduación politécnica y creación de mi empresa tecnológica y domótica',
      speakerNotes: 'Profesionalmente, mi meta es graduarme con honores como Ingeniero en Contabilidad y Auditoría en la ESPOCH y consolidar una empresa de importación y comercialización de tecnología con domótica, armonía estética y software de gestión.',
      content: (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-900/40 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-5 h-5" />
              <span>Meta de Carrera y Emprendimiento</span>
            </div>
            <h4 className="text-xl font-bold text-white">{data.professionalGoal.title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{data.professionalGoal.description}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Hitos Profesionales:</span>
            <div className="space-y-2">
              {(data.professionalGoal.milestones || data.professionalGoal.focusAreas || []).map((m, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900 text-xs sm:text-sm text-slate-300 border border-slate-800">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 text-[10px] font-bold flex items-center justify-center border border-cyan-800 shrink-0">
                    {i + 1}
                  </span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },

    // Diapositiva 8: Pregunta 7
    {
      id: 8,
      badge: 'Pregunta 7 de 13 · Dimensión Económica',
      questionNumber: 'Pregunta 7',
      title: '¿Qué nivel o meta económica deseo alcanzar?',
      subtitle: 'Independencia financiera sostenible y generación de empleo',
      speakerNotes: 'Económicamente, aspiro a alcanzar la independencia financiera generando ingresos sólidos mediante mi negocio, administrando los costos con prudencia contable y reinvirtiendo en el crecimiento del capital.',
      content: (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-900/40 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <DollarSign className="w-5 h-5" />
                <span>Independencia Financiera</span>
              </div>
              <span className="text-xs font-bold text-emerald-300 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800">
                Meta: {data.economicGoal.targetAmount || '$2,500 - $5,000 / mes'}
              </span>
            </div>
            <h4 className="text-xl font-bold text-white">{data.economicGoal.title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{data.economicGoal.description}</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs sm:text-sm">
            <span className="font-bold text-emerald-400 uppercase tracking-wider block text-xs">Estrategia de Capitalización y Reinversión:</span>
            <p className="text-slate-300 leading-relaxed">{data.economicGoal.strategy || data.economicGoal.investmentPhilosophy}</p>
          </div>
        </div>
      ),
    },

    // Diapositiva 9: Pregunta 8
    {
      id: 9,
      badge: 'Pregunta 8 de 13 · Proyección Temporal',
      questionNumber: 'Pregunta 8',
      title: '¿Dónde quiero estar dentro de 5 años? (2026 - 2031)',
      subtitle: 'Ruta secuencial desde las aulas de la ESPOCH hasta la consolidación',
      speakerNotes: 'Mi ruta está sincronizada con mi avance universitario: Año 1 (2026) aprobar sexto semestre en la ESPOCH y empezar las bases de formulación del proyecto de domótica con el Ing. Hitalo Veloz; Año 2 (2027) cursar séptimo semestre, desarrollar el sistema para la gestión de importaciones e iniciar las primeras importaciones; Año 3 (2028) graduarme en la ESPOCH y escalar el volumen de importación; Año 4 (2029) abrir mi primer local comercial y oficinas de instalaciones de domótica; y Año 5 (2030-2031) consolidar la empresa como referente del mercado y garantizar la tranquilidad de mi familia.',
      content: (
        <div className="space-y-2.5 max-w-4xl mx-auto">
          {(data.fiveYearRoadmap || []).map((stage, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4 shadow-sm hover:border-slate-700 transition-colors">
              <span className="px-3 py-1 rounded-lg bg-indigo-950 text-indigo-300 font-bold text-xs shrink-0 border border-indigo-800">
                {stage.year}
              </span>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-white">{stage.stage}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{stage.focus}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },

    // Diapositiva 10: Pregunta 9
    {
      id: 10,
      badge: 'Pregunta 9 de 13 · Aspiración Pendiente',
      questionNumber: 'Pregunta 9',
      title: '¿Qué sueño o meta importante todavía no he comenzado a perseguir?',
      subtitle: 'La iniciativa clave que no admitirá más postergación',
      speakerNotes: 'El sueño que no había comenzado de lleno es formalizar la personería de mi importadora e iniciar los pedidos directos con proveedores del exterior. El primer paso concreto es elaborar el catálogo con diseño estético y cotizar los primeros lotes.',
      content: (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-800/40 shadow-xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Aspiración Central:</span>
            <h4 className="text-xl font-bold text-white">{data.unstartedDream.title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{data.unstartedDream.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase">¿Por qué estaba pendiente?</span>
              <p className="text-xs sm:text-sm text-slate-300">{data.unstartedDream.whyPending || data.unstartedDream.whyNotYet}</p>
            </div>
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/60 space-y-1">
              <span className="text-xs font-bold text-cyan-300 uppercase">Primer Paso Inmediato:</span>
              <p className="text-xs sm:text-sm text-cyan-100 font-medium">{data.unstartedDream.firstStep}</p>
            </div>
          </div>
        </div>
      ),
    },

    // Diapositiva 11: Pregunta 10
    {
      id: 11,
      badge: 'Pregunta 10 de 13 · Gestión de Riesgos',
      questionNumber: 'Pregunta 10',
      title: '¿Qué obstáculos podrían impedirme alcanzar mis metas?',
      subtitle: 'Identificación de riesgos y medidas concretas de mitigación',
      speakerNotes: 'En formulación de proyectos aprendemos que no se pueden ignorar los riesgos. Mis obstáculos son el temor a la pérdida de capital, la volatilidad cambiaria o aduanera y la dispersión. Frente a cada uno he formulado un plan de mitigación.',
      content: (
        <div className="space-y-3 max-w-4xl mx-auto">
          {(data.obstacles || []).map((obs, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
              <div className="space-y-1 max-w-md">
                <span className="text-[10px] uppercase font-bold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-900">
                  Obstáculo {idx + 1}
                </span>
                <h4 className="text-sm font-bold text-white">{obs.obstacle}</h4>
                <p className="text-xs text-slate-400">{obs.impact || `Severidad: ${obs.severity}`}</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300 sm:max-w-xs">
                <span className="text-cyan-400 font-bold block mb-1">Mitigación:</span>
                {obs.mitigation}
              </div>
            </div>
          ))}
        </div>
      ),
    },

    // Diapositiva 12: Pregunta 11
    {
      id: 12,
      badge: 'Pregunta 11 de 13 · Disposición al Cambio',
      questionNumber: 'Pregunta 11',
      title: '¿Qué estoy dispuesto/a a cambiar, aprender o sacrificar para conseguirlas?',
      subtitle: 'El costo voluntario y consciente de alcanzar mi visión',
      speakerNotes: 'Ningún proyecto florece sin sacrificios reales. Estoy dispuesto a aprender comercio exterior e inglés técnico, cambiar la postergación por la disciplina y sacrificar horas de entretenimiento improductivo.',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-900/40 space-y-3">
            <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>Aprender</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {(data.willingness.toLearn || []).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-900/40 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Cambiar</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {(data.willingness.toChange || []).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-rose-900/40 space-y-3">
            <h4 className="text-sm font-bold text-rose-300 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Sacrificar</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {(data.willingness.toSacrifice || []).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },

    // Diapositiva 13: Pregunta 12
    {
      id: 13,
      badge: 'Pregunta 12 de 13 · Confrontación Realista',
      questionNumber: 'Pregunta 12',
      title: 'Si continúo haciendo exactamente lo mismo que hago hoy, ¿mi vida me llevará al lugar donde quiero estar?',
      subtitle: 'Autoevaluación crítica y el costo de la inacción',
      speakerNotes: 'Esta es la pregunta más confrontativa del proyecto. Si sigo haciendo exactamente lo mismo de hoy, mi respuesta sincera es NO. No voy a llegar. Quedarme en la pasividad me costaría perder años de ventaja y quedarme solo en la teoría.',
      content: (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-2xl bg-red-950/20 border border-red-800/50 shadow-2xl text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">Respuesta Sincera:</span>
            <p className="text-3xl sm:text-5xl font-extrabold text-red-400">
              {data.realityCheck.verdict || (data.realityCheck.willItTakeMeThere ? 'SÍ' : 'NO')}
            </p>
            <p className="text-sm sm:text-base text-slate-200 italic max-w-xl mx-auto pt-2">
              “{data.realityCheck.honestAssessment}”
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs sm:text-sm">
            <span className="font-bold text-amber-400 uppercase tracking-wider block text-xs">El Verdadero Costo de la Inacción:</span>
            <p className="text-slate-300 leading-relaxed">{data.realityCheck.theCostOfInaction || data.realityCheck.gapAnalysis}</p>
          </div>
        </div>
      ),
    },

    // Diapositiva 14: Pregunta 13
    {
      id: 14,
      badge: 'Pregunta 13 de 13 · Acción Concreta & Compromiso',
      questionNumber: 'Pregunta 13',
      title: '¿Cuál será una acción concreta que empezaré a realizar desde ahora?',
      subtitle: 'La transición de la teoría al primer paso medible y compromiso del semestre',
      speakerNotes: 'Para culminar las 13 preguntas, he fijado mi acción concreta inmediata y mi compromiso formal: calcular la viabilidad y cotizaciones del primer lote de importación en la materia del Ing. Hitalo Veloz, sellándolo con mi compromiso ético.',
      content: (
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-800/60 shadow-xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Acción Estratégica Inmediata:</span>
            <h4 className="text-base sm:text-lg font-bold text-white leading-relaxed">{data.concreteActionNow.action}</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-slate-500 font-bold uppercase block text-[10px]">Compromiso Diario</span>
              <p className="text-slate-200 font-medium">{data.concreteActionNow.dailyCommitment}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-slate-500 font-bold uppercase block text-[10px]">Plazo Límite</span>
              <p className="text-cyan-300 font-medium">{data.concreteActionNow.deadline || 'Fin del Sexto Semestre'}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-slate-500 font-bold uppercase block text-[10px]">Métrica Medible</span>
              <p className="text-emerald-400 font-medium">{data.concreteActionNow.measurableMetric}</p>
            </div>
          </div>

          {/* Acta de Compromiso del Semestre integrada como rúbrica solemne */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Acta de Compromiso del Semestre ante el Docente</span>
            </div>
            <p className="text-xs sm:text-sm italic text-slate-200 leading-relaxed">
              “{data.semesterCommitment.fullDeclaration}”
            </p>
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1.5 border-t border-emerald-900/40">
              <span>{data.semesterCommitment.date}</span>
              <span className="text-cyan-300 font-medium">Docente: {data.profile.professorName || 'Ing. Hitalo Veloz'}</span>
              <span className="text-emerald-400 font-bold">{data.semesterCommitment.signedBy}</span>
            </div>
          </div>
        </div>
      ),
    },

    // Diapositiva 15: Cierre Institucional
    {
      id: 15,
      badge: 'Cierre de la Exposición',
      questionNumber: 'Cierre',
      title: 'Conclusión & Agradecimiento Politécnico',
      subtitle: 'ESPOCH · Facultad de Administración de Empresas',
      speakerNotes: 'Muchas gracias por su atención, estimado Ingeniero Hitalo Veloz y compañeros politécnicos. Quedo a su completa disposición para cualquier pregunta, observación o sugerencia constructiva.',
      content: (
        <div className="space-y-6 text-center max-w-2xl mx-auto py-4">
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col items-center p-2 rounded-xl bg-slate-900 border border-slate-800">
              <EspochLogo size="md" className="rounded-lg shadow-sm" />
              <span className="text-[10px] font-bold text-red-400 mt-1 uppercase tracking-wider">ESPOCH</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-xl bg-slate-900 border border-slate-800">
              <FadeContabilidadLogo size="md" className="rounded-full shadow-sm" />
              <span className="text-[10px] font-bold text-blue-300 mt-1 uppercase tracking-wider">FADE</span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            “El mejor proyecto de inversión comienza en uno mismo.”
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Cátedra de Formulación y Evaluación de Proyectos · Carrera de Contabilidad y Auditoría
          </p>

          <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 text-cyan-300 text-xs font-semibold max-w-sm mx-auto">
            Espacio abierto para comentarios y preguntas del docente
          </div>
        </div>
      ),
    },
  ];

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, slides.length, onClose]);

  if (!isOpen) return null;

  const current = slides[currentSlide];

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      id="presentation-fullscreen-modal"
      className="fixed inset-0 z-50 bg-[#070a11]/98 backdrop-blur-2xl flex flex-col text-slate-100 overflow-hidden animate-fade-in"
    >
      {/* Top Header Bar */}
      <div className="px-6 py-3 border-b border-slate-800/80 flex items-center justify-between gap-4 bg-[#0b0f17]/90">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-300 hidden sm:inline">
            Modo Exposición Magistral
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-400 font-bold border border-slate-700">
            {currentSlide + 1} / {slides.length}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-300 font-semibold hidden md:inline">
            {current.questionNumber}
          </span>
        </div>

        {/* Slide Selector Button */}
        <div className="relative">
          <button
            onClick={() => setShowSlideList(!showSlideList)}
            className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 transition-all"
            title="Ver índice de diapositivas"
          >
            <ListFilter className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Índice de Preguntas</span>
          </button>

          {/* Slide list dropdown */}
          {showSlideList && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-72 sm:w-80 max-h-80 overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-2 z-50 space-y-1 text-xs">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1">
                Seleccionar Pregunta
              </p>
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setShowSlideList(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl transition-all flex items-center gap-2 ${
                    currentSlide === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <span className="w-5 text-center text-[10px] text-slate-500">{idx + 1}</span>
                  <span className="truncate">{s.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Live Presentation Timer */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900 border border-slate-800">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-mono font-bold text-white">
            {formatTimer(timerSeconds)}
          </span>
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className="p-1 text-slate-400 hover:text-white transition-colors"
            title={isTimerRunning ? 'Pausar cronómetro' : 'Iniciar cronómetro'}
          >
            {isTimerRunning ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
          </button>
          <button
            onClick={() => {
              setIsTimerRunning(false);
              setTimerSeconds(0);
            }}
            className="p-1 text-slate-400 hover:text-white transition-colors"
            title="Reiniciar cronómetro"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        {/* Actions right */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1.5 ${
              showSpeakerNotes 
                ? 'bg-cyan-950 text-cyan-300 border-cyan-800' 
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Notas del Orador</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Cerrar presentación (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Stage */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-12 py-6 overflow-y-auto relative">
        <div className="max-w-5xl mx-auto w-full space-y-6">
          {/* Slide Heading */}
          <div className="text-center space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">
              {current.badge}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {current.title}
            </h3>
            {current.subtitle && (
              <p className="text-xs sm:text-sm text-slate-400 font-light">
                {current.subtitle}
              </p>
            )}
          </div>

          {/* Slide Body */}
          <div className="min-h-[300px] flex items-center justify-center">
            {current.content}
          </div>
        </div>
      </div>

      {/* Speaker Notes Drawer */}
      {showSpeakerNotes && current.speakerNotes && (
        <div className="px-6 py-3 bg-slate-950/90 border-t border-slate-800/80 max-h-32 overflow-y-auto">
          <div className="max-w-4xl mx-auto flex items-start gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60 shrink-0">
              Guion para exponer al Ingeniero
            </span>
            <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              “{current.speakerNotes}”
            </p>
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="px-6 py-3 border-t border-slate-800 flex items-center justify-between bg-[#0b0f17]">
        <button
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          className="px-4 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        {/* Slide Progress Dots / Indicators */}
        <div className="hidden sm:flex items-center gap-1.5 max-w-md overflow-x-auto py-1">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === i 
                  ? 'w-6 bg-cyan-400' 
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              title={`${s.questionNumber}: ${s.title}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))}
          disabled={currentSlide === slides.length - 1}
          className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5 shadow-md shadow-cyan-400/20"
        >
          <span>Siguiente</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
