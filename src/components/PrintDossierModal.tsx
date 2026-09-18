import React, { useRef, useState } from 'react';
import { 
  Printer, 
  Download, 
  X, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
  User,
  GraduationCap
} from 'lucide-react';
import { ProjectLifeData } from '../types';
import { EspochLogo, FadeContabilidadLogo } from './Logos';

interface PrintDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectLifeData;
}

export const PrintDossierModal: React.FC<PrintDossierModalProps> = ({ isOpen, onClose, data }) => {
  const [isPrinting, setIsPrinting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const printPreviewRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  // Function to print via a clean detached window (Bypasses iframe sandboxing restrictions)
  const handlePrintCleanWindow = () => {
    setIsPrinting(true);

    try {
      const printWindow = window.open('', '_blank', 'width=900,height=800');
      if (!printWindow) {
        // Fallback to in-window print if popups are blocked
        window.print();
        setIsPrinting(false);
        return;
      }

      const dossierElement = printPreviewRef.current;
      const dossierHtml = dossierElement ? dossierElement.innerHTML : '';

      printWindow.document.open();
      printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Dossier Académico Oficial - ${data.profile.name} - ESPOCH</title>
          <style>
            @page {
              size: A4 portrait;
              margin: 14mm 12mm 14mm 12mm;
            }
            * {
              box-sizing: border-box;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              color: #0f172a;
              background-color: #ffffff;
              margin: 0;
              padding: 0;
              font-size: 11.5px;
              line-height: 1.5;
            }
            .dossier-container {
              max-width: 100%;
              margin: 0 auto;
              padding: 0;
            }
            .header-banner {
              border-bottom: 2.5px solid #0f172a;
              padding-bottom: 12px;
              margin-bottom: 16px;
              text-align: center;
            }
            .header-title-box {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 12px;
            }
            .inst-title {
              font-size: 14px;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              color: #020617;
              margin: 0;
            }
            .inst-sub {
              font-size: 11px;
              font-weight: 600;
              text-transform: uppercase;
              color: #334155;
              margin: 3px 0;
            }
            .inst-course {
              font-size: 10.5px;
              font-weight: 600;
              color: #0369a1;
              margin: 0;
            }
            .metadata-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 8px;
              background-color: #f8fafc;
              border: 1px solid #cbd5e1;
              border-radius: 6px;
              padding: 8px 12px;
              text-align: left;
              font-size: 10.5px;
              margin-top: 8px;
            }
            .meta-item strong {
              color: #0f172a;
            }
            .philosophy-quote {
              background-color: #f1f5f9;
              border-left: 4px solid #0284c7;
              padding: 8px 12px;
              font-style: italic;
              font-size: 11px;
              color: #1e293b;
              margin-bottom: 16px;
              border-radius: 0 4px 4px 0;
            }
            .question-block {
              page-break-inside: avoid;
              break-inside: avoid;
              border-bottom: 1px solid #e2e8f0;
              padding-bottom: 12px;
              margin-bottom: 12px;
            }
            .question-title {
              font-size: 12px;
              font-weight: 700;
              color: #0369a1;
              text-transform: uppercase;
              letter-spacing: 0.3px;
              margin: 0 0 6px 0;
            }
            .question-body {
              color: #1e293b;
              text-align: justify;
              margin: 0 0 6px 0;
              line-height: 1.5;
            }
            .card-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 8px;
              margin-top: 6px;
            }
            .card-grid-3 {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 8px;
              margin-top: 6px;
            }
            .mini-card {
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 4px;
              padding: 6px 8px;
            }
            .mini-card-title {
              font-weight: 700;
              color: #0f172a;
              font-size: 10.5px;
              margin: 0 0 2px 0;
            }
            .roadmap-step {
              display: flex;
              gap: 10px;
              padding: 6px 8px;
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 4px;
              margin-bottom: 4px;
            }
            .roadmap-year {
              font-weight: 800;
              color: #0369a1;
              width: 70px;
              flex-shrink: 0;
            }
            .commitment-box {
              page-break-inside: avoid;
              break-inside: avoid;
              border: 2px solid #0f172a;
              background-color: #f8fafc;
              border-radius: 8px;
              padding: 16px;
              text-align: center;
              margin-top: 16px;
            }
            .signatures {
              display: flex;
              justify-content: space-around;
              align-items: flex-end;
              margin-top: 36px;
            }
            .sig-line {
              width: 180px;
              border-top: 1px solid #0f172a;
              margin: 0 auto 4px auto;
            }
            .alert-pill {
              display: inline-block;
              font-size: 9.5px;
              font-weight: 700;
              text-transform: uppercase;
              padding: 2px 6px;
              border-radius: 4px;
              border: 1px solid #cbd5e1;
              background: #fff;
            }
            @media print {
              .no-print { display: none !important; }
            }
          </style>
        </head>
        <body>
          <div class="dossier-container">
            ${dossierHtml}
          </div>
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 400);
            };
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
    } catch (e) {
      console.warn('Fallback standard print', e);
      window.print();
    } finally {
      setIsPrinting(false);
    }
  };

  // Download standalone printable HTML file
  const handleDownloadHtml = () => {
    const dossierElement = printPreviewRef.current;
    if (!dossierElement) return;

    const fullHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Dossier Académico - ${data.profile.name} - ESPOCH</title>
  <style>
    @page { size: A4 portrait; margin: 14mm 12mm; }
    * { box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    body { font-family: system-ui, -apple-system, sans-serif; color: #0f172a; background: #fff; margin: 0; padding: 20px; font-size: 12px; line-height: 1.5; }
    .dossier-container { max-width: 800px; margin: 0 auto; }
    .header-banner { border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 16px; text-align: center; }
    .metadata-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; margin-top: 10px; text-align: left; }
    .philosophy-quote { background: #f1f5f9; border-left: 4px solid #0284c7; padding: 10px; font-style: italic; margin-bottom: 16px; }
    .question-block { page-break-inside: avoid; break-inside: avoid; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 12px; }
    .question-title { font-size: 13px; font-weight: bold; color: #0369a1; text-transform: uppercase; margin-bottom: 6px; }
    .card-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .card-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
    .mini-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 8px; }
    .commitment-box { border: 2px solid #0f172a; background: #f8fafc; border-radius: 8px; padding: 16px; text-align: center; margin-top: 20px; page-break-inside: avoid; }
    .signatures { display: flex; justify-content: space-around; margin-top: 40px; }
    .sig-line { width: 180px; border-top: 1px solid #0f172a; margin: 0 auto 4px auto; }
  </style>
</head>
<body>
  <div class="dossier-container">
    ${dossierElement.innerHTML}
  </div>
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Dossier_Academico_${data.profile.name.replace(/\s+/g, '_')}_ESPOCH.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-hidden">
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Dossier Académico Oficial · Modo Impresión y PDF</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 uppercase tracking-wider font-semibold">
                  A4 Formal
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Formato politécnico universitario con membrete, preguntas 1 a 13 y firma ante el Ing. Hitalo Veloz
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Controls Bar */}
        <div className="px-6 py-3.5 bg-slate-950/90 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Selecciona <strong>"Guardar como PDF"</strong> en la ventana de impresión para obtener el documento digital.</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrintCleanWindow}
              disabled={isPrinting}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar en PDF (Ctrl + P)</span>
            </button>

            <button
              onClick={handleDownloadHtml}
              className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-800/90 hover:bg-slate-700 hover:text-white transition-all flex items-center gap-1.5 border border-slate-700/60 cursor-pointer"
            >
              {downloadSuccess ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4 text-slate-400" />}
              <span>{downloadSuccess ? '¡Descargado!' : 'Descargar Archivo (.html)'}</span>
            </button>
          </div>
        </div>

        {/* Document Preview Area (Paper Simulation) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/60 flex justify-center">
          <div 
            ref={printPreviewRef}
            className="w-full max-w-3xl bg-white text-slate-900 rounded-xl shadow-2xl p-6 sm:p-10 text-xs font-sans leading-relaxed border border-slate-300"
          >
            {/* Header / Institutional Banner */}
            <div className="header-banner border-b-2 border-slate-900 pb-5 mb-6 text-center">
              <div className="header-title-box flex items-center justify-between mb-4 px-2">
                <EspochLogo size="md" />
                <div className="text-center px-4">
                  <h1 className="inst-title text-base font-extrabold uppercase tracking-wide text-slate-950">
                    Escuela Superior Politécnica de Chimborazo
                  </h1>
                  <h2 className="inst-sub text-xs font-bold uppercase tracking-wider text-slate-700 mt-0.5">
                    Facultad de Administración de Empresas · Escuela de Contabilidad y Auditoría
                  </h2>
                  <p className="inst-course text-xs text-sky-800 font-semibold mt-1">
                    Cátedra: Formulación y Evaluación de Proyectos
                  </p>
                </div>
                <FadeContabilidadLogo size="md" />
              </div>

              {/* Identification Table */}
              <div className="metadata-grid grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 border border-slate-300 rounded-lg p-3 text-left text-xs">
                <div className="space-y-1">
                  <p><strong className="text-slate-950">Actividad Académica:</strong> Proyecto de Vida (13 Preguntas Clave)</p>
                  <p><strong className="text-slate-950">Estudiante Politécnico:</strong> {data.profile.name}</p>
                  <p><strong className="text-slate-950">Nivel / Semestre:</strong> {data.profile.semester} · {data.profile.parallel || 'Paralelo 1'}</p>
                </div>
                <div className="space-y-1">
                  <p><strong className="text-slate-950">Docente Titular:</strong> {data.profile.professorName || 'Ingeniero Hitalo Veloz'}</p>
                  <p><strong className="text-slate-950">Carrera Universitaria:</strong> {data.profile.career}</p>
                  <p><strong className="text-slate-950">Fecha de Validación:</strong> {data.semesterCommitment.date}</p>
                </div>
              </div>
            </div>

            {/* Philosophy Motto */}
            <div className="philosophy-quote bg-sky-50/70 border-l-4 border-sky-600 p-3 italic text-xs text-slate-800 mb-6 rounded-r">
              “{data.whoAmI.philosophy}”
            </div>

            {/* 13 Questions Body */}
            <div className="space-y-5">
              {/* 1. ¿Quién soy realmente? */}
              <div className="question-block border-b border-slate-200 pb-4">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  1. ¿Quién soy realmente?
                </h3>
                <p className="question-body text-slate-800 text-justify mb-2 leading-relaxed">
                  {data.whoAmI.core}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {data.whoAmI.identityPillars.map((pillar, i) => (
                    <div key={i} className="p-2 bg-slate-50 border border-slate-200 rounded text-[11px] text-slate-700 flex items-center gap-1.5">
                      <span className="text-sky-600 font-bold">✔</span>
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Principales fortalezas */}
              <div className="question-block border-b border-slate-200 pb-4">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  2. ¿Cuáles considero que son mis principales fortalezas?
                </h3>
                <div className="card-grid grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {data.strengths.map((s) => (
                    <div key={s.id} className="mini-card p-2.5 bg-slate-50 border border-slate-200 rounded">
                      <p className="mini-card-title font-bold text-slate-900 text-xs">{s.title}</p>
                      <span className="text-[10px] uppercase font-bold text-sky-700 block mb-1">Categoría: {s.category}</span>
                      <p className="text-slate-600 text-[11px] leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Aspectos a mejorar */}
              <div className="question-block border-b border-slate-200 pb-4">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  3. ¿Qué aspectos de mí necesito mejorar?
                </h3>
                <div className="space-y-2">
                  {data.growthAreas.map((g) => (
                    <div key={g.id} className="p-2.5 bg-amber-50/40 border border-amber-200/80 rounded">
                      <div className="flex justify-between items-center mb-1">
                        <strong className="text-slate-900 text-xs">{g.aspect}</strong>
                        <span className="alert-pill text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-white border border-amber-300 text-amber-900">
                          {g.status === 'prioridad' ? 'Prioridad Inmediata' : 'En Proceso'}
                        </span>
                      </div>
                      <p className="text-slate-700 text-[11px]"><strong className="text-slate-900">Estrategia de superación:</strong> {g.strategy}</p>
                      {g.rootCause && (
                        <p className="text-slate-500 text-[10px] mt-0.5"><strong>Causa raíz identificada:</strong> {g.rootCause}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Tipo de persona */}
              <div className="question-block border-b border-slate-200 pb-4">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  4. ¿Qué tipo de persona quiero llegar a ser?
                </h3>
                <p className="question-body text-slate-800 text-justify mb-2 leading-relaxed italic bg-slate-50 p-2.5 border border-slate-200 rounded">
                  “{data.targetPersona.statement}”
                </p>
                <p className="text-slate-700 text-[11px]"><strong className="text-slate-900">Visión de Impacto:</strong> {data.targetPersona.impactVision}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {data.targetPersona.virtues.map((v, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300 text-[10px] font-semibold">
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5. Vida personal */}
              <div className="question-block border-b border-slate-200 pb-4">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  5. ¿Qué quiero conseguir en mi vida personal?
                </h3>
                <p className="font-bold text-slate-900 text-xs">{data.personalGoal.title}</p>
                <p className="text-slate-700 mt-1 mb-1.5 text-[11px] leading-relaxed">{data.personalGoal.description}</p>
                <p className="text-slate-600 text-[11px]"><strong className="text-slate-900">Hábitos clave:</strong> {(data.personalGoal.habits || data.personalGoal.milestones || []).join(' · ')}</p>
              </div>

              {/* 6. Profesional */}
              <div className="question-block border-b border-slate-200 pb-4">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  6. ¿Qué quiero alcanzar profesionalmente?
                </h3>
                <p className="font-bold text-slate-900 text-xs">{data.professionalGoal.title}</p>
                <p className="text-slate-700 mt-1 mb-1.5 text-[11px] leading-relaxed">{data.professionalGoal.description}</p>
                <ul className="list-disc list-inside text-slate-700 pl-1 space-y-0.5 text-[11px]">
                  {(data.professionalGoal.milestones || data.professionalGoal.focusAreas || []).map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ul>
              </div>

              {/* 7. Económica */}
              <div className="question-block border-b border-slate-200 pb-4">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  7. ¿Qué nivel o meta económica deseo alcanzar?
                </h3>
                <p className="font-bold text-slate-900 text-xs">
                  {data.economicGoal.title} {data.economicGoal.targetAmount ? `(${data.economicGoal.targetAmount})` : ''}
                </p>
                <p className="text-slate-700 mt-1 mb-1.5 text-[11px] leading-relaxed">{data.economicGoal.description}</p>
                <p className="text-slate-600 text-[11px]"><strong className="text-slate-900">Filosofía de reinversión:</strong> {data.economicGoal.strategy || data.economicGoal.investmentPhilosophy}</p>
              </div>

              {/* 8. Línea de tiempo a 5 años (2026 - 2031) */}
              <div className="question-block border-b border-slate-200 pb-4">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  8. ¿Dónde quiero estar dentro de 5 años? (Línea de Tiempo 2026 - 2031)
                </h3>
                <div className="space-y-1.5 mt-2">
                  {data.fiveYearRoadmap.map((stage, idx) => (
                    <div key={idx} className="roadmap-step flex items-start gap-3 p-2 bg-slate-50 border border-slate-200 rounded text-[11px]">
                      <span className="roadmap-year font-bold text-sky-800 w-20 shrink-0">{stage.year}</span>
                      <div>
                        <strong className="text-slate-900 block">{stage.stage}</strong>
                        <span className="text-slate-600 leading-tight">{stage.focus}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 9. Sueño aún no comenzado */}
              <div className="question-block border-b border-slate-200 pb-4">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  9. ¿Qué sueño o meta importante todavía no he comenzado a perseguir?
                </h3>
                <p className="font-bold text-slate-900 text-xs">{data.unstartedDream.title}</p>
                <p className="text-slate-700 mt-1 mb-1.5 text-[11px] leading-relaxed">{data.unstartedDream.description}</p>
                <p className="text-slate-600 text-[11px] mb-1">
                  <strong className="text-slate-900">Motivo de espera:</strong> {data.unstartedDream.whyPending || data.unstartedDream.whyNotYet}
                </p>
                <p className="text-sky-900 font-semibold text-[11px]">
                  <strong>Primer paso concreto:</strong> {data.unstartedDream.firstStep}
                </p>
              </div>

              {/* 10. Obstáculos y mitigación */}
              <div className="question-block border-b border-slate-200 pb-4">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  10. ¿Qué obstáculos podrían impedirme alcanzar mis metas?
                </h3>
                <div className="space-y-1.5 mt-2">
                  {data.obstacles.map((o, idx) => (
                    <div key={idx} className="p-2 bg-slate-50 border border-slate-200 rounded text-[11px]">
                      <div className="flex justify-between items-center mb-0.5">
                        <strong className="text-slate-900">{o.obstacle}</strong>
                        <span className="text-[10px] text-slate-500 font-medium">({o.impact || `Severidad: ${o.severity}`})</span>
                      </div>
                      <p className="text-slate-600"><strong className="text-slate-800">Plan de Mitigación:</strong> {o.mitigation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 11. Disposición al cambio */}
              <div className="question-block border-b border-slate-200 pb-4">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  11. ¿Qué estoy dispuesto/a a cambiar, aprender o sacrificar?
                </h3>
                <div className="card-grid-3 grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                  <div className="mini-card p-2 bg-slate-50 border border-slate-200 rounded text-[11px]">
                    <strong className="text-slate-900 block border-b border-slate-200 pb-1 mb-1">Aprender</strong>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                      {(data.willingness?.toLearn || []).map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="mini-card p-2 bg-slate-50 border border-slate-200 rounded text-[11px]">
                    <strong className="text-slate-900 block border-b border-slate-200 pb-1 mb-1">Cambiar</strong>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                      {(data.willingness?.toChange || []).map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="mini-card p-2 bg-slate-50 border border-slate-200 rounded text-[11px]">
                    <strong className="text-slate-900 block border-b border-slate-200 pb-1 mb-1">Sacrificar</strong>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                      {(data.willingness?.toSacrifice || []).map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 12. Chequeo de Realidad */}
              <div className="question-block border-b border-slate-200 pb-4">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  12. Si continúo haciendo exactamente lo mismo que hago hoy, ¿mi vida me llevará al lugar donde quiero estar?
                </h3>
                <div className="p-2.5 bg-red-50/60 border border-red-200 rounded text-[11px] space-y-1">
                  <p><strong className="text-red-950">Veredicto Honesto:</strong> {data.realityCheck.verdict || (data.realityCheck.willItTakeMeThere ? 'Sí' : 'No')}</p>
                  <p className="text-slate-800">{data.realityCheck.honestAssessment}</p>
                  <p className="text-slate-600 font-medium">{data.realityCheck.theCostOfInaction ? `Costo de Inacción: ${data.realityCheck.theCostOfInaction}` : `Análisis: ${data.realityCheck.gapAnalysis}`}</p>
                </div>
              </div>

              {/* 13. Acción Concreta y Compromiso ante el Ingeniero */}
              <div className="question-block pb-2">
                <h3 className="question-title text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                  13. ¿Cuál será una acción concreta que empezaré a realizar desde ahora?
                </h3>
                <div className="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded text-[11px] space-y-1 mb-4">
                  <p className="font-bold text-emerald-950 text-xs">{data.concreteActionNow.action}</p>
                  <p><strong className="text-slate-900">Compromiso Diario:</strong> {data.concreteActionNow.dailyCommitment}</p>
                  <p><strong className="text-slate-900">Métrica Medible:</strong> {data.concreteActionNow.measurableMetric}</p>
                  {data.concreteActionNow.deadline && (
                    <p><strong className="text-slate-900">Fecha Límite Primer Hito:</strong> {data.concreteActionNow.deadline}</p>
                  )}
                </div>

                {/* Acta de Compromiso del Semestre */}
                <div className="commitment-box border-2 border-slate-900 rounded-lg p-5 bg-slate-50 text-center space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-800">
                    Acta de Compromiso Académico del Semestre
                  </h4>
                  <p className="text-xs italic font-serif text-slate-900 font-medium px-4">
                    “{data.semesterCommitment.fullDeclaration}”
                  </p>
                  
                  <div className="signatures flex justify-around items-end pt-8 text-[11px] text-slate-800">
                    <div className="text-center">
                      <div className="sig-line w-44 border-b border-slate-900 mx-auto mb-1"></div>
                      <p className="font-bold">{data.semesterCommitment.signedBy}</p>
                      <p className="text-slate-600 text-[10px]">Estudiante Politécnico (ESPOCH)</p>
                    </div>
                    <div className="text-center">
                      <div className="sig-line w-44 border-b border-slate-900 mx-auto mb-1"></div>
                      <p className="font-bold">{data.profile.professorName || 'Ingeniero Hitalo Veloz'}</p>
                      <p className="text-slate-600 text-[10px]">Docente Titular de Cátedra</p>
                    </div>
                  </div>

                  <p className="text-[9.5px] text-slate-400 pt-2">
                    {data.semesterCommitment.hashVerification ? `Hash de Autenticidad: ${data.semesterCommitment.hashVerification} · ` : ''}{data.semesterCommitment.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Escuela Superior Politécnica de Chimborazo · FADE</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            Cerrar Vista Previa
          </button>
        </div>

      </div>
    </div>
  );
};
