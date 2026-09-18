import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Presentation, 
  CheckCircle2,
  FolderUp,
  FileText
} from 'lucide-react';
import { ProjectLifeData } from '../types';
import { exportToGoogleSlidesPptx } from '../utils/generatePresentation';

interface ExportSlidesModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectLifeData;
}

export const ExportSlidesModal: React.FC<ExportSlidesModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedSlideIndex, setCopiedSlideIndex] = useState<number | null>(null);
  const [isDownloadingPptx, setIsDownloadingPptx] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const slidesData = [
    {
      questionNumber: 'Portada Institucional',
      title: `Proyecto de Vida: ¿Quién soy y hacia dónde voy?`,
      subtitle: `${data.profile.university} · ${data.profile.faculty} · ${data.profile.career} (${data.profile.semester} - ${data.profile.parallel || 'Paralelo 1'})`,
      bullets: [
        `Estudiante: ${data.profile.name} (${data.profile.semester} - ${data.profile.parallel || 'Paralelo 1'})`,
        `Docente: ${data.profile.professorName || 'Ingeniero Hitalo Veloz'}`,
        `Asignatura: ${data.profile.subject}`,
        `Filosofía: "${data.whoAmI.philosophy}"`
      ],
      speakerNotes: `Estimado Ingeniero Hitalo Veloz, compañeros: Hoy comparto con ustedes mi proyecto de vida. En esta asignatura aprendemos a formular proyectos con rigor; por eso, aplico estos principios para ordenar mi visión de futuro, mis metas en tecnología y domótica, y el compromiso con mi carrera.`
    },
    {
      questionNumber: 'Pregunta 1',
      title: `¿Quién soy realmente?`,
      subtitle: `Diagnóstico de Identidad y Vocación Formativa`,
      bullets: [
        data.whoAmI.core,
        ...data.whoAmI.identityPillars
      ],
      speakerNotes: `Soy un politécnico de sexto semestre que busca unir la contabilidad, los costos y el rigor financiero con la tecnología, la inteligencia artificial y el desarrollo de software para crear soluciones prácticas.`
    },
    {
      questionNumber: 'Pregunta 2',
      title: `¿Cuáles considero que son mis principales fortalezas?`,
      subtitle: `Capacidades Técnicas, Analíticas y Humanas`,
      bullets: data.strengths.map(s => `[${s.category}] ${s.title}: ${s.description}`),
      speakerNotes: `Mis fortalezas combinan el aprendizaje autónomo, la visión práctica comercial en productos de alta demanda como celulares y domótica, la resiliencia y el criterio contable adquirido en la ESPOCH.`
    },
    {
      questionNumber: 'Pregunta 3',
      title: `¿Qué aspectos de mí necesito mejorar?`,
      subtitle: `Autocrítica y Plan de Acción de Superación`,
      bullets: data.growthAreas.map(g => `${g.aspect} (Causa: ${g.rootCause}) -> Estrategia: ${g.strategy}`),
      speakerNotes: `Reconozco con madurez que debo superar la postergación en tareas complejas, enfocarme en un proyecto a la vez para no dispersarme y seguir perfeccionando mi inglés técnico.`
    },
    {
      questionNumber: 'Pregunta 4',
      title: `¿Qué tipo de persona quiero llegar a ser?`,
      subtitle: `Valores Cardinales y Visión del Carácter`,
      bullets: [
        `Declaración de identidad: "${data.targetPersona.statement}"`,
        `Virtudes fundamentales: ${(data.targetPersona.virtues || []).join(' · ')}`,
        `Impacto en la comunidad: ${data.targetPersona.impactVision}`
      ],
      speakerNotes: `Más allá de cualquier meta económica, aspiro a ser recordado por mi humildad, empatía y trato humano, siendo alguien en quien mi familia, socios y clientes puedan confiar ciegamente.`
    },
    {
      questionNumber: 'Pregunta 5',
      title: `¿Qué quiero conseguir en mi vida personal?`,
      subtitle: `Salud, Equilibrio y Bienestar Familiar`,
      bullets: [
        `Meta central: ${data.personalGoal.title}`,
        data.personalGoal.description,
        `Hábitos diarios: ${(data.personalGoal.habits || data.personalGoal.milestones || []).join(', ')}`
      ],
      speakerNotes: `En lo personal, busco paz mental, salud y tiempo de calidad con mi familia. Ningún éxito empresarial justifica descuidar la salud física ni alejarse de las personas que nos apoyan.`
    },
    {
      questionNumber: 'Pregunta 6',
      title: `¿Qué quiero alcanzar profesionalmente?`,
      subtitle: `Graduación Politécnica y Emprendimiento Tecnológico`,
      bullets: [
        `Meta profesional: ${data.professionalGoal.title}`,
        data.professionalGoal.description,
        ...(data.professionalGoal.milestones || data.professionalGoal.focusAreas || []).map((m, i) => `Hito ${i + 1}: ${m}`)
      ],
      speakerNotes: `Mi meta profesional es titularme como Ingeniero en Contabilidad y Auditoría en la ESPOCH y consolidar una empresa de importación y venta de tecnología con software propio.`
    },
    {
      questionNumber: 'Pregunta 7',
      title: `¿Qué nivel o meta económica deseo alcanzar?`,
      subtitle: `Independencia Financiera Sostenible y Reinversión`,
      bullets: [
        `Objetivo: ${data.economicGoal.title}`,
        `Monto de referencia: ${data.economicGoal.targetAmount || '$2,500 - $5,000 / mes'}`,
        `Estrategia de capitalización: ${data.economicGoal.strategy || data.economicGoal.investmentPhilosophy}`
      ],
      speakerNotes: `Económicamente, busco independencia financiera mediante mi propio negocio, administrando los costos con prudencia contable y reinvirtiendo con disciplina.`
    },
    {
      questionNumber: 'Pregunta 8',
      title: `¿Dónde quiero estar dentro de 5 años? (2026 - 2031)`,
      subtitle: `Línea de Tiempo Formativa y Empresarial`,
      bullets: (data.fiveYearRoadmap || []).map(r => `${r.year} (${r.stage}): ${r.focus}`),
      speakerNotes: `Mi plan abarca: Año 1 aprobar 6to semestre y formular bases de domótica; Año 2 7mo semestre, desarrollar el sistema de importaciones e iniciar importaciones; Año 3 graduación en la ESPOCH y escalar importaciones; Año 4 abrir mi primer local y oficinas de instalaciones; y Año 5 empresa formalmente consolidada.`
    },
    {
      questionNumber: 'Pregunta 9',
      title: `¿Qué sueño o meta importante todavía no he comenzado a perseguir?`,
      subtitle: `Iniciativa Central y Primer Paso Inmediato`,
      bullets: [
        `Sueño pendiente: ${data.unstartedDream.title}`,
        `Descripción: ${data.unstartedDream.description}`,
        `¿Por qué estaba pendiente?: ${data.unstartedDream.whyPending || data.unstartedDream.whyNotYet}`,
        `Primer paso concreto: ${data.unstartedDream.firstStep}`
      ],
      speakerNotes: `Mi sueño pendiente es formalizar legalmente mi empresa de importaciones e iniciar los pedidos directos. Hoy doy el primer paso cotizando y catalogando los productos.`
    },
    {
      questionNumber: 'Pregunta 10',
      title: `¿Qué obstáculos podrían impedirme alcanzar mis metas?`,
      subtitle: `Gestión de Riesgos y Planes de Mitigación`,
      bullets: (data.obstacles || []).map(o => `Obstáculo: ${o.obstacle} (${o.impact || `Severidad: ${o.severity}`}) -> Plan de Mitigación: ${o.mitigation}`),
      speakerNotes: `En formulación de proyectos aprendemos que ningún riesgo se ignora: el miedo al riesgo de capital, las aduanas y la falta de tiempo se mitigan con preparación contable y orden.`
    },
    {
      questionNumber: 'Pregunta 11',
      title: `¿Qué estoy dispuesto/a a cambiar, aprender o sacrificar?`,
      subtitle: `El Costo Consciente de Alcanzar la Visión`,
      bullets: [
        `Aprender: ${(data.willingness?.toLearn || []).join(' · ')}`,
        `Cambiar: ${(data.willingness?.toChange || []).join(' · ')}`,
        `Sacrificar: ${(data.willingness?.toSacrifice || []).join(' · ')}`
      ],
      speakerNotes: `Todo logro exige renuncias conscientes: aprender comercio exterior e inglés técnico, cambiar la postergación por la disciplina y sacrificar horas de entretenimiento pasivo.`
    },
    {
      questionNumber: 'Pregunta 12',
      title: `Si continúo haciendo lo mismo hoy, ¿mi vida me llevará al lugar donde quiero estar?`,
      subtitle: `Autoevaluación Sincera y Costo de la Inacción`,
      bullets: [
        `Diagnóstico honesto: ${data.realityCheck.verdict || (data.realityCheck.willItTakeMeThere ? 'SÍ' : 'NO')}`,
        data.realityCheck.honestAssessment,
        `El costo de la inacción: ${data.realityCheck.theCostOfInaction || data.realityCheck.gapAnalysis}`
      ],
      speakerNotes: `Si sigo haciendo exactamente lo mismo de hoy, mi respuesta es NO. No voy a llegar. Quedarme en la pasividad me costaría perder años de ventaja y quedarme solo en la teoría.`
    },
    {
      questionNumber: 'Pregunta 13',
      title: `¿Cuál será una acción concreta que empezaré a realizar desde ahora?`,
      subtitle: `La Transición de la Teoría al Primer Paso Medible & Compromiso del Semestre`,
      bullets: [
        `Acción concreta: ${data.concreteActionNow.action}`,
        `Compromiso diario: ${data.concreteActionNow.dailyCommitment}`,
        `Plazo límite: ${data.concreteActionNow.deadline || 'Fin del Sexto Semestre'}`,
        `Métrica verificable: ${data.concreteActionNow.measurableMetric}`,
        `Acta de compromiso: “${data.semesterCommitment.fullDeclaration}” (${data.semesterCommitment.signedBy} · Docente: ${data.profile.professorName || 'Ing. Hitalo Veloz'})`
      ],
      speakerNotes: `Para culminar las 13 preguntas, inicio de inmediato calculando la viabilidad y cotizaciones del primer lote de importación con los conocimientos de costos de esta cátedra, sellándolo con mi compromiso formal ante el Ing. Hitalo Veloz.`
    },
    {
      questionNumber: 'Cierre Institucional',
      title: `Conclusión & Agradecimiento Politécnico`,
      subtitle: `ESPOCH · FADE Contabilidad y Auditoría`,
      bullets: [
        `"El mejor proyecto de inversión comienza en uno mismo."`,
        `Cátedra: Formulación y Evaluación de Proyectos`,
        `Docente: ${data.profile.professorName || 'Ingeniero Hitalo Veloz'}`,
        `Espacio abierto para preguntas y retroalimentación constructiva.`
      ],
      speakerNotes: `Muchas gracias por su atención, estimado Ingeniero Hitalo Veloz y compañeros. Quedo a su completa disposición para cualquier pregunta o recomendación.`
    }
  ];

  const handleDownloadPptx = async () => {
    try {
      setIsDownloadingPptx(true);
      await exportToGoogleSlidesPptx(data);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('Error al generar presentación:', err);
      alert('Hubo un error al generar la presentación. Por favor intenta de nuevo.');
    } finally {
      setIsDownloadingPptx(false);
    }
  };

  const generateFullMarkdown = () => {
    return slidesData.map((s, idx) => {
      return `---
# DIAPOSITIVA ${idx + 1}: ${s.title}
*${s.subtitle}*

${s.bullets.map(b => `- ${b}`).join('\n')}

> **NOTAS DEL ORADOR (SPEAKER NOTES):**
> ${s.speakerNotes}
`;
    }).join('\n\n');
  };

  const handleCopyAll = () => {
    navigator.clipboard.writeText(generateFullMarkdown());
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const handleCopySingle = (index: number) => {
    const s = slidesData[index];
    const text = `# ${s.title}\n*${s.subtitle}*\n\n${s.bullets.map(b => `- ${b}`).join('\n')}\n\nNotas del orador:\n${s.speakerNotes}`;
    navigator.clipboard.writeText(text);
    setCopiedSlideIndex(index);
    setTimeout(() => setCopiedSlideIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-4xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden text-slate-100">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Presentación para Google Slides & PowerPoint</h3>
              <p className="text-xs text-slate-400">15 Diapositivas ordenadas exactamente pregunta por pregunta (Preguntas 1 a 13 + Cierre)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Direct Download Banner */}
        <div className="p-5 bg-gradient-to-r from-cyan-950/70 via-slate-900 to-blue-950/70 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                Descarga Nativa Directa
              </span>
              <span className="text-xs text-slate-300 font-medium">16 Diapositivas 1 a 1 + Notas del Orador</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Descarga el archivo <span className="text-cyan-300 font-semibold">.pptx</span> y ábrelo directamente en Google Slides (subiéndolo a Google Drive) o en PowerPoint con cada pregunta idéntica a la landing page.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={handleDownloadPptx}
              disabled={isDownloadingPptx}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-60 cursor-pointer"
            >
              {isDownloadingPptx ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Generando archivo...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  <span>¡Descarga Iniciada!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Descargar Presentación (.pptx)</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyAll}
              className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white transition-all flex items-center gap-1.5 border border-slate-700/60"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedAll ? 'Copiado' : 'Copiar Todo'}</span>
            </button>
          </div>
        </div>

        {/* How to use in Google Slides guide */}
        <div className="px-6 py-2.5 bg-slate-950/90 border-b border-slate-800/80 flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
          <span className="font-semibold text-slate-300 flex items-center gap-1">
            <FolderUp className="w-3.5 h-3.5 text-cyan-400" />
            Para abrir en Google Slides:
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold flex items-center justify-center">1</span>
            Haz clic en <strong>Descargar Presentación (.pptx)</strong>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold flex items-center justify-center">2</span>
            Sube el archivo a tu <strong>Google Drive</strong>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold flex items-center justify-center">3</span>
            Haz doble clic y pulsa <strong>"Abrir con Presentaciones de Google"</strong>
          </span>
        </div>

        {/* Slide List Preview */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {slidesData.map((slide, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {slide.questionNumber}
                  </span>
                  <h4 className="text-sm font-bold text-white">{slide.title}</h4>
                </div>
                <button
                  onClick={() => handleCopySingle(idx)}
                  className="p-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  {copiedSlideIndex === idx ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-cyan-400" />}
                  <span>{copiedSlideIndex === idx ? 'Copiada' : 'Copiar diapositiva'}</span>
                </button>
              </div>

              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                {slide.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-amber-300/90 italic">
                <span className="font-bold text-amber-400 not-italic">Guion para exponer al docente: </span>
                {slide.speakerNotes}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <span>También puedes pulsar la tecla <strong>P</strong> para ver las diapositivas en pantalla completa dentro de la web.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
