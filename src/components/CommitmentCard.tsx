import React, { useState } from 'react';
import { 
  Award, 
  Check, 
  Copy, 
  Printer, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap,
  Calendar,
  PenTool,
  UserCheck
} from 'lucide-react';
import { ProjectLifeData } from '../types';
import { EspochLogo, FadeContabilidadLogo } from './Logos';

interface CommitmentCardProps {
  data: ProjectLifeData;
}

export const CommitmentCard: React.FC<CommitmentCardProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const [sealed, setSealed] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(data.semesterCommitment.fullDeclaration);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="compromiso" className="py-24 px-4 md:px-8 max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-xs font-semibold text-emerald-400">
          <Award className="w-3.5 h-3.5" />
          <span>Fase 5: Compromiso Académico y Personal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Compromiso del Semestre
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Un proyecto de vida cobra verdadero sentido cuando asumimos el compromiso sincero de ponerlo en práctica día a día con dedicación y constancia.
        </p>
      </div>

      {/* Diploma / Certificate Container */}
      <div 
        id="diploma-commitment-card"
        className={`relative p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-b from-[#0d121e] via-[#090d15] to-[#06090f] border transition-all duration-500 shadow-2xl overflow-hidden ring-1 ${
          sealed 
            ? 'border-emerald-500/50 shadow-emerald-950/40 ring-emerald-500/30' 
            : 'border-slate-800/90 ring-white/5 shadow-cyan-950/20'
        }`}
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative space-y-8 text-center">
          {/* Institution Header with Official Logos (Separados) */}
          <div className="space-y-4 border-b border-slate-800/80 pb-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <EspochLogo size="md" className="rounded-xl shadow-md border border-red-500/30" />
                <div className="text-center sm:text-left">
                  <span className="block text-xs font-extrabold uppercase tracking-wider text-red-400">ESPOCH</span>
                  <span className="block text-[11px] text-slate-400">Escuela Superior Politécnica de Chimborazo</span>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-slate-800" />

              <div className="flex items-center gap-3">
                <div className="text-center sm:text-right">
                  <span className="block text-xs font-extrabold uppercase tracking-wider text-cyan-400">FADE</span>
                  <span className="block text-[11px] text-slate-400">Contabilidad y Auditoría</span>
                </div>
                <FadeContabilidadLogo size="md" className="rounded-full shadow-md border border-slate-400/40" />
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="text-amber-400 font-semibold uppercase tracking-wider text-[11px]">
                Actividad de Aprendizaje: Formulación y Evaluación de Proyectos
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300 font-medium flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                Docente: {data.profile.professorName || 'Ingeniero Hitalo Veloz'}
              </span>
            </div>
          </div>

          {/* Golden Badge */}
          <div className="flex justify-center">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
              sealed 
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 scale-110 shadow-lg shadow-emerald-500/30' 
                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
            }`}>
              <ShieldCheck className="w-7 h-7" />
            </div>
          </div>

          {/* Core Quote / Statement with Playfair Display font */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 block">
              Declaración Oficial de Rendición de Cuentas:
            </span>
            <blockquote className="text-lg sm:text-2xl font-['Playfair_Display',Georgia,serif] italic text-slate-100 leading-relaxed font-normal">
              “{data.semesterCommitment.fullDeclaration}”
            </blockquote>
          </div>

          {/* Signatures & Accreditation Footer */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Fecha & Periodo Académico:
              </span>
              <p className="text-xs font-semibold text-slate-200">
                {data.semesterCommitment.date}
              </p>
              <p className="text-[11px] text-slate-400">
                {data.profile.semester} · {data.profile.parallel || 'Paralelo 1'}
              </p>
            </div>

            {/* Authentic Calligraphic Signature Block */}
            <div className="text-center space-y-1">
              <div className="font-['Caveat',cursive] text-2xl sm:text-3xl text-amber-300 font-bold tracking-wide border-b border-amber-500/40 pb-1 mx-auto max-w-[220px]">
                {data.semesterCommitment.signedBy}
              </div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Firma del Estudiante Politécnico
              </span>
              <p className="text-[10px] text-cyan-400 font-medium">
                {data.profile.career} · ESPOCH
              </p>
            </div>

            <div className="sm:text-right space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Estado del Compromiso:
              </span>
              <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border transition-all ${
                sealed 
                  ? 'bg-emerald-950/90 text-emerald-300 border-emerald-600 shadow-sm shadow-emerald-500/20' 
                  : 'bg-slate-800/90 text-slate-300 border-slate-700'
              }`}>
                <Check className="w-3.5 h-3.5" />
                <span>{sealed ? 'Compromiso Sellado' : 'Listo para Ratificar'}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
