import React from 'react';
import { ProjectLifeData } from '../types';
import { EspochLogo, FadeContabilidadLogo } from './Logos';

interface PrintableDossierProps {
  data: ProjectLifeData;
}

export const PrintableDossier: React.FC<PrintableDossierProps> = ({ data }) => {
  return (
    <div id="printable-academic-dossier" className="hidden print:block text-slate-900 bg-white p-8 max-w-4xl mx-auto font-sans leading-normal">
      {/* Membrete Institucional Oficial */}
      <div className="border-b-2 border-slate-900 pb-6 mb-8 text-center space-y-2">
        <div className="flex items-center justify-between px-6 mb-4">
          <EspochLogo size="lg" />
          <div className="text-center">
            <h1 className="text-lg font-extrabold uppercase tracking-wide text-slate-950">
              Escuela Superior Politécnica de Chimborazo
            </h1>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700">
              Facultad de Administración de Empresas · Escuela de Contabilidad y Auditoría
            </h2>
            <p className="text-xs text-slate-600 font-medium mt-1">
              Cátedra: Formulación y Evaluación de Proyectos
            </p>
          </div>
          <FadeContabilidadLogo size="lg" />
        </div>

        <div className="bg-slate-100 p-4 rounded-lg border border-slate-300 text-left grid grid-cols-2 gap-3 text-xs">
          <div>
            <p><span className="font-bold text-slate-900">Actividad:</span> Proyecto de Vida: ¿Quién soy y hacia dónde voy?</p>
            <p><span className="font-bold text-slate-900">Estudiante:</span> {data.profile.name}</p>
            <p><span className="font-bold text-slate-900">Nivel / Semestre:</span> {data.profile.semester} · {data.profile.parallel || 'Paralelo 1'}</p>
          </div>
          <div>
            <p><span className="font-bold text-slate-900">Docente Titular:</span> {data.profile.professorName || 'Ingeniero Hitalo Veloz'}</p>
            <p><span className="font-bold text-slate-900">Carrera:</span> {data.profile.career}</p>
            <p><span className="font-bold text-slate-900">Fecha de Emisión:</span> {data.semesterCommitment.date}</p>
          </div>
        </div>
      </div>

      {/* Introducción / Filosofía */}
      <div className="mb-6 p-4 border-l-4 border-slate-800 bg-slate-50 italic text-sm text-slate-700">
        “{data.whoAmI.philosophy}”
      </div>

      {/* Desarrollo de las 13 Preguntas */}
      <div className="space-y-6 text-xs">
        {/* Pregunta 1 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            1. ¿Quién soy realmente?
          </h3>
          <p className="text-slate-800 text-justify mb-2 leading-relaxed">
            {data.whoAmI.core}
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2">
            {data.whoAmI.identityPillars.map((pillar, i) => (
              <li key={i}>{pillar}</li>
            ))}
          </ul>
        </section>

        {/* Pregunta 2 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            2. ¿Cuáles considero que son mis principales fortalezas?
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {data.strengths.map((s) => (
              <div key={s.id} className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                <p className="font-bold text-slate-900">{s.title} ({s.category})</p>
                <p className="text-slate-700 mt-1">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pregunta 3 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            3. ¿Qué aspectos de mí necesito mejorar?
          </h3>
          <div className="space-y-2">
            {data.growthAreas.map((g) => (
              <div key={g.id} className="p-2 bg-slate-50 border border-slate-200 rounded">
                <p className="font-bold text-slate-900">{g.aspect}</p>
                <p className="text-slate-700"><span className="font-semibold">Estrategia:</span> {g.strategy}</p>
                {g.rootCause && (
                  <p className="text-slate-500 text-[11px]"><span className="font-semibold">Causa Raíz:</span> {g.rootCause}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Pregunta 4 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            4. ¿Qué tipo de persona quiero llegar a ser?
          </h3>
          <p className="text-slate-800 text-justify mb-2 leading-relaxed italic">
            “{data.targetPersona.statement}”
          </p>
          <p className="text-slate-700"><span className="font-semibold">Visión de Impacto y Valores:</span> {data.targetPersona.impactVision}</p>
        </section>

        {/* Pregunta 5 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            5. ¿Qué quiero conseguir en mi vida personal?
          </h3>
          <p className="font-semibold text-slate-900">{data.personalGoal.title}</p>
          <p className="text-slate-700 mt-1 mb-2">{data.personalGoal.description}</p>
          <p className="text-slate-600 font-medium">Hábitos clave: {(data.personalGoal.habits || data.personalGoal.milestones || []).join(', ')}</p>
        </section>

        {/* Pregunta 6 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            6. ¿Qué quiero alcanzar profesionalmente?
          </h3>
          <p className="font-semibold text-slate-900">{data.professionalGoal.title}</p>
          <p className="text-slate-700 mt-1 mb-2">{data.professionalGoal.description}</p>
          <ul className="list-disc list-inside text-slate-600 pl-2">
            {(data.professionalGoal.milestones || data.professionalGoal.focusAreas || []).map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </section>

        {/* Pregunta 7 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            7. ¿Qué nivel o meta económica deseo alcanzar?
          </h3>
          <p className="font-semibold text-slate-900">
            {data.economicGoal.title}
            {data.economicGoal.targetAmount ? ` (Meta: ${data.economicGoal.targetAmount})` : ''}
          </p>
          <p className="text-slate-700 mt-1">{data.economicGoal.description}</p>
          <p className="text-slate-600 mt-1">
            <span className="font-semibold">Estrategia financiera:</span> {data.economicGoal.strategy || data.economicGoal.investmentPhilosophy}
          </p>
        </section>

        {/* Pregunta 8 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            8. ¿Dónde quiero estar dentro de 5 años? (Línea de Tiempo 2026 - 2031)
          </h3>
          <div className="space-y-1.5">
            {data.fiveYearRoadmap.map((stage, idx) => (
              <div key={idx} className="flex gap-4 p-2 bg-slate-50 border border-slate-200 rounded">
                <span className="font-bold text-slate-900 w-16 shrink-0">{stage.year}</span>
                <div>
                  <p className="font-semibold text-slate-800">{stage.stage}</p>
                  <p className="text-slate-600">{stage.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pregunta 9 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            9. ¿Qué sueño o meta importante todavía no he comenzado a perseguir?
          </h3>
          <p className="font-semibold text-slate-900">{data.unstartedDream.title}</p>
          <p className="text-slate-700 mt-1">{data.unstartedDream.description}</p>
          <p className="text-slate-600 mt-1">
            <span className="font-semibold">Razón por la que estaba pendiente:</span> {data.unstartedDream.whyPending || data.unstartedDream.whyNotYet}
          </p>
          <p className="text-slate-800 font-semibold mt-1">
            <span className="font-bold text-slate-900">Primer paso concreto:</span> {data.unstartedDream.firstStep}
          </p>
        </section>

        {/* Pregunta 10 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            10. ¿Qué obstáculos podrían impedirme alcanzar mis metas?
          </h3>
          <div className="space-y-2">
            {data.obstacles.map((o, idx) => (
              <div key={idx} className="p-2 bg-slate-50 border border-slate-200 rounded">
                <p className="font-bold text-slate-900">
                  {o.obstacle} <span className="text-slate-500 font-normal">({o.impact || `Severidad: ${o.severity}`})</span>
                </p>
                <p className="text-slate-700 mt-0.5"><span className="font-semibold">Plan de Mitigación:</span> {o.mitigation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pregunta 11 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            11. ¿Qué estoy dispuesto/a a cambiar, aprender o sacrificar?
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-2 bg-slate-50 border border-slate-200 rounded">
              <p className="font-bold text-slate-900 mb-1">Aprender</p>
              <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                {(data.willingness?.toLearn || []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-2 bg-slate-50 border border-slate-200 rounded">
              <p className="font-bold text-slate-900 mb-1">Cambiar</p>
              <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                {(data.willingness?.toChange || []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-2 bg-slate-50 border border-slate-200 rounded">
              <p className="font-bold text-slate-900 mb-1">Sacrificar</p>
              <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                {(data.willingness?.toSacrifice || []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pregunta 12 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            12. Si continúo haciendo exactamente lo mismo que hago hoy, ¿mi vida me llevará al lugar donde quiero estar?
          </h3>
          <div className="p-3 bg-red-50 border border-red-200 rounded text-slate-800 space-y-1">
            <p className="font-bold text-red-900">
              Diagnóstico Honesto: {data.realityCheck.verdict || (data.realityCheck.willItTakeMeThere ? 'Sí' : 'No')}
            </p>
            <p>{data.realityCheck.honestAssessment}</p>
            <p className="text-slate-600 font-medium">
              {data.realityCheck.theCostOfInaction ? `Costo de Inacción: ${data.realityCheck.theCostOfInaction}` : `Análisis: ${data.realityCheck.gapAnalysis}`}
            </p>
          </div>
        </section>

        {/* Pregunta 13 */}
        <section className="break-inside-avoid border-b border-slate-200 pb-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
            13. ¿Cuál será una acción concreta que empezaré a realizar desde ahora?
          </h3>
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-slate-800 space-y-1 mb-4">
            <p className="font-bold text-emerald-950">{data.concreteActionNow.action}</p>
            <p><span className="font-semibold">Compromiso Diario:</span> {data.concreteActionNow.dailyCommitment}</p>
            <p><span className="font-semibold">Métrica Medible:</span> {data.concreteActionNow.measurableMetric}</p>
            {data.concreteActionNow.deadline && (
              <p><span className="font-semibold">Fecha Límite Primer Hito:</span> {data.concreteActionNow.deadline}</p>
            )}
          </div>

          {/* Acta de Compromiso del Semestre */}
          <div className="p-4 border-2 border-slate-900 rounded bg-slate-50 text-center space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-700">
              Acta de Compromiso del Semestre ante el Docente
            </h4>
            <p className="text-sm italic font-serif text-slate-900 font-medium">
              “{data.semesterCommitment.fullDeclaration}”
            </p>
            <div className="pt-6 flex justify-around items-end text-xs text-slate-800">
              <div className="text-center">
                <div className="w-48 border-b border-slate-900 mx-auto mb-1"></div>
                <p className="font-bold">{data.semesterCommitment.signedBy}</p>
                <p className="text-slate-600">Estudiante Politécnico (ESPOCH)</p>
              </div>
              <div className="text-center">
                <div className="w-48 border-b border-slate-900 mx-auto mb-1"></div>
                <p className="font-bold">{data.profile.professorName || 'Ingeniero Hitalo Veloz'}</p>
                <p className="text-slate-600">Docente Titular de Cátedra</p>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2">
              {data.semesterCommitment.hashVerification ? `Validación de Integridad: ${data.semesterCommitment.hashVerification} · ` : ''}{data.semesterCommitment.date}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
