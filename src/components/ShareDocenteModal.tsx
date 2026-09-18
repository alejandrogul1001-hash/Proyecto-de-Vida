import React, { useState } from 'react';
import { 
  X, 
  Share2, 
  Copy, 
  Check, 
  Download, 
  FileText, 
  ExternalLink, 
  Presentation, 
  GraduationCap, 
  Send,
  Sparkles,
  Info
} from 'lucide-react';
import { ProjectLifeData } from '../types';
import { generatePptxFile } from '../utils/generatePresentation';
import { EspochLogo, FadeContabilidadLogo } from './Logos';

interface ShareDocenteModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectLifeData;
  onOpenPresentation: () => void;
  onOpenPrintDossier?: () => void;
}

export const ShareDocenteModal: React.FC<ShareDocenteModalProps> = ({
  isOpen,
  onClose,
  data,
  onOpenPresentation,
  onOpenPrintDossier,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [isGeneratingPptx, setIsGeneratingPptx] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href.split('#')[0] : '';

  const formalMessage = `Estimado Ingeniero Hitalo Veloz,

Reciba un cordial y atento saludo. 

Por medio del presente mensaje, me permito compartir con usted el desarrollo de mi actividad académica "Proyecto de Vida: ¿Quién soy y hacia dónde voy?", correspondiente a la cátedra de Formulación y Evaluación de Proyectos (Sexto Semestre, Escuela de Contabilidad y Auditoría - FADE, ESPOCH).

Puede acceder y revisar el proyecto completo de manera interactiva a través del siguiente enlace:
${currentUrl}

El proyecto incluye el diagnóstico personal de las preguntas formuladas, las tres dimensiones estratégicas, el plan de acción temporal a 5 años y el compromiso formal de cátedra.

Agradezco de antemano su valiosa guía formativa en nuestra preparación profesional.

Atentamente,
${data.profile.name}
Estudiante de ${data.profile.career} (${data.profile.semester} - ${data.profile.parallel || 'Paralelo 1'})
Escuela Superior Politécnica de Chimborazo (ESPOCH)`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(formalMessage);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleDownloadPptx = async () => {
    setIsGeneratingPptx(true);
    try {
      await generatePptxFile(data);
    } catch (e) {
      console.error('Error generating PPTX', e);
      alert('Hubo un inconveniente al generar la presentación. Por favor intenta de nuevo.');
    } finally {
      setIsGeneratingPptx(false);
    }
  };

  const handlePrintPdf = () => {
    onClose();
    if (onOpenPrintDossier) {
      onOpenPrintDossier();
    } else {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Opciones de Entrega
                </span>
                <span className="text-xs text-slate-400">Docente: {data.profile.professorName || 'Ing. Hitalo Veloz'}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
                ¿Cómo entregar o compartir este Proyecto con el Ingeniero?
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
            <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Tienes <strong className="text-white">3 métodos recomendados</strong> para hacer llegar tu trabajo al Ingeniero Hitalo Veloz. Puedes enviarle el <strong className="text-cyan-300">enlace web en vivo</strong> (para que lo revise interactivamente), descargar las <strong className="text-cyan-300">diapositivas (.pptx)</strong> para Google Slides/PowerPoint, o generar un <strong className="text-cyan-300">informe académico en PDF</strong>.
            </p>
          </div>

          {/* Método 1: Enlace Web Interactivo */}
          <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-4 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center border border-cyan-500/30">
                  1
                </span>
                <h3 className="text-sm font-bold text-white">
                  Enlace Web Interactivo (Recomendado)
                </h3>
              </div>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full">
                Vista Completa
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              El Ingeniero podrá abrir el enlace desde su teléfono móvil o laptop, revisar las 13 preguntas interactivas, ver tu línea de tiempo a 5 años e incluso iniciar el modo de diapositivas en pantalla completa.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleCopyLink}
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                {copiedLink ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
                <span>{copiedLink ? '¡Enlace copiado al portapapeles!' : 'Copiar Enlace Web'}</span>
              </button>

              <button
                onClick={handleCopyMessage}
                className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 flex items-center justify-center gap-2 transition-all"
              >
                {copiedMessage ? <Check className="w-4 h-4 text-emerald-400" /> : <Send className="w-4 h-4 text-cyan-400" />}
                <span>{copiedMessage ? '¡Mensaje formal copiado!' : 'Copiar Mensaje Formal para WhatsApp/Correo'}</span>
              </button>
            </div>
          </div>

          {/* Método 2: Descargar Diapositivas PPTX */}
          <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-4 hover:border-indigo-500/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center border border-indigo-500/30">
                  2
                </span>
                <h3 className="text-sm font-bold text-white">
                  Diapositivas (.pptx) para Google Slides & PowerPoint
                </h3>
              </div>
              <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-950/80 border border-indigo-800 px-2 py-0.5 rounded-full">
                15 Diapositivas 1 a 1
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Descarga la presentación con cada pregunta exactamente igual que en la landing (Preguntas 1 a la 13 individuales + Cierre), notas de orador para cada una y membrete institucional. Puedes subirla a Google Drive para abrirla en Google Slides o adjuntarla en el aula virtual.
            </p>

            <button
              onClick={handleDownloadPptx}
              disabled={isGeneratingPptx}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isGeneratingPptx ? 'Construyendo diapositivas...' : 'Descargar Presentación (.pptx)'}</span>
            </button>
          </div>

          {/* Método 3: Informe Académico PDF */}
          <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-4 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center border border-emerald-500/30">
                  3
                </span>
                <h3 className="text-sm font-bold text-white">
                  Informe Académico Formal en PDF (Dossier ESPOCH)
                </h3>
              </div>
              <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full">
                Para Entregar o Imprimir
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Genera un documento universitario formal con membrete oficial de la ESPOCH y FADE, carátula con los datos del docente y estudiante, las 13 preguntas desarrolladas y el acta de compromiso firmada.
            </p>

            <button
              onClick={handlePrintPdf}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
            >
              <FileText className="w-4 h-4" />
              <span>Imprimir / Guardar como PDF</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <EspochLogo size="sm" />
            <span className="text-xs text-slate-400">ESPOCH · FADE Contabilidad y Auditoría</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
