import React, { useState, useRef } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  Scale, 
  Cpu, 
  TrendingUp, 
  BookOpen,
  UserCheck
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import politecnicoLabImage from '../assets/images/politecnico_tech_lab_1789703427729.jpg';

interface QuestionItem {
  id: string;
  category: string;
  question: string;
  shortAnswer: string;
  fullDefense: string;
  academicImpact: string;
}

const DEFENSE_QUESTIONS: QuestionItem[] = [
  {
    id: 'q1',
    category: 'Articulación Profesional',
    question: '¿Por qué un estudiante de Contabilidad y Auditoría de la ESPOCH decide emprender en domótica y tecnología?',
    shortAnswer: 'Porque la gran mayoría de emprendimientos tecnológicos quiebran no por el producto, sino por no saber costear importaciones, controlar inventarios ni cuidar su dinero.',
    fullDefense: 'Estudiar Contabilidad y Auditoría en la ESPOCH me da una base real para no emprender a ciegas: sé calcular el costo exacto de traer cada producto (flete, seguro, aranceles e impuestos), sé controlar las finanzas y sé cuándo un negocio es verdaderamente rentable. La tecnología y la domótica son lo que me apasiona vender e instalar, pero la contabilidad es la columna vertebral que hace que el negocio sea sostenible y perdure en el tiempo.',
    academicImpact: 'Aplicación práctica de Contabilidad de Costos y Formulación de Proyectos.',
  },
  {
    id: 'q2',
    category: 'Metodología de Cátedra',
    question: '¿Cómo aseguro la viabilidad del proyecto aplicando lo aprendido con el Ing. Hitalo Veloz?',
    shortAnswer: 'Haciendo números reales antes de arriesgar dinero: investigando la demanda en Riobamba, costeando al centavo y calculando el punto de equilibrio.',
    fullDefense: 'Como nos enseña el Ing. Hitalo Veloz, un proyecto no se sostiene con entusiasmo, sino con datos y método. Por eso, antes de traer el primer lote, analizo si en Riobamba y Chimborazo hay familias y negocios dispuestos a instalar domótica, calculo todos los costos de importación y determino cuántos dispositivos necesito vender al mes para cubrir gastos y generar ganancia real con margen seguro.',
    academicImpact: 'Estudio de mercado, costos y punto de equilibrio de la cátedra.',
  },
  {
    id: 'q3',
    category: 'Innovación & Software',
    question: '¿Por qué desarrollar un software propio de importaciones en lugar de usar hojas de cálculo convencionales?',
    shortAnswer: 'Porque un sistema propio evita errores al calcular impuestos aduaneros y me permite controlar cada pedido de forma rápida y ordenada.',
    fullDefense: 'Llevar importaciones en hojas de cálculo sueltas es riesgoso porque una fórmula mal puesta puede hacer que pierda dinero en impuestos o fletes. Desarrollar mi propio sistema me permite registrar cada pedido, calcular automáticamente los costos por producto y tener todo el inventario ordenado desde el primer día.',
    academicImpact: 'Uso de tecnología práctica para organizar la contabilidad del negocio.',
  },
  {
    id: 'q4',
    category: 'Impacto Regional & Ética',
    question: '¿Qué impacto genera este proyecto para Riobamba y para la ESPOCH?',
    shortAnswer: 'Demuestra que desde la ESPOCH podemos emprender con tecnología accesible, modernizando hogares y dando trabajo a compañeros técnicos.',
    fullDefense: 'En Riobamba muchas personas creen que la domótica es un lujo inalcanzable porque intermediarios de otras ciudades cobran precios muy altos. Mi meta es traer soluciones confiables a precios justos, brindar asesoría cercana y trabajar en equipo con técnicos de nuestra propia politécnica para las instalaciones.',
    academicImpact: 'Emprendimiento politécnico real con impacto en nuestra ciudad.',
  },
];

export const DefenseQuestionsSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('q1');
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bannerImgY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const bannerTextY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 max-w-6xl mx-auto space-y-12">
      {/* Visual Header with Polytechnic Tech Lab Image & Parallax */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <motion.img
            style={{ y: bannerImgY }}
            src={politecnicoLabImage}
            alt="Laboratorio de Innovación Politécnica ESPOCH"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-110 opacity-60 will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />

          {/* Text inside banner with subtle parallax */}
          <motion.div 
            style={{ y: bannerTextY }}
            className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 will-change-transform"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-xs font-semibold text-indigo-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Defensa de Cátedra · Evaluación y Rigor Politécnico</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Preguntas Clave de Cátedra & Justificación del Proyecto
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-light">
                Respuestas estructuradas ante el docente de la cátedra, <strong className="text-cyan-300 font-medium">Ingeniero Hitalo Veloz</strong>, fundamentadas en el plan de vida y la viabilidad técnica y financiera.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-700 text-xs text-slate-300 shadow-lg">
              <UserCheck className="w-4 h-4 text-cyan-400" />
              <span>Docente Evaluador: <strong>Ing. Hitalo Veloz</strong></span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {DEFENSE_QUESTIONS.map((item, index) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-950/20'
                  : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? '' : item.id)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-800/40">
                      0{index + 1} · {item.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                      {item.academicImpact}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 pt-0.5">
                    {item.shortAnswer}
                  </p>
                </div>

                <div className={`p-2 rounded-xl border shrink-0 transition-transform duration-300 ${
                  isOpen 
                    ? 'bg-cyan-950 border-cyan-700 text-cyan-300 rotate-180' 
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/80 space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                      <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200">
                        <strong className="text-cyan-300 block mb-1 text-xs uppercase tracking-wider font-bold">
                          Fundamento Metodológico y Defensa:
                        </strong>
                        <p>{item.fullDefense}</p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-1">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                          <CheckCircle2 className="w-4 h-4" /> Criterio validado para formulación de proyectos
                        </span>
                        <span className="text-indigo-300 font-semibold bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/40">
                          {item.academicImpact}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
