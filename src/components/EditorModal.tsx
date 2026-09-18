import React, { useState } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  Sparkles, 
  Check, 
  Edit3, 
  User, 
  HelpCircle, 
  Target, 
  Briefcase, 
  Milestone,
  Award
} from 'lucide-react';
import { ProjectLifeData } from '../types';

interface EditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectLifeData;
  onSave: (updatedData: ProjectLifeData) => void;
  onReset: () => void;
}

export const EditorModal: React.FC<EditorModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<ProjectLifeData>(data);
  const [activeTab, setActiveTab] = useState<'perfil' | 'identidad' | 'dimensiones' | 'estrategia' | 'compromiso'>('perfil');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync state if modal opens
  React.useEffect(() => {
    setFormData(data);
  }, [data, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Edit3 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Personalizar Mis Respuestas</h3>
              <p className="text-xs text-slate-400">Edita el texto del taller para que refleje exactamente tus palabras.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 px-6 gap-2 overflow-x-auto">
          {[
            { id: 'perfil', label: '1. Perfil & Cátedra', icon: User },
            { id: 'identidad', label: '2. Identidad & Fortalezas', icon: HelpCircle },
            { id: 'dimensiones', label: '3. Las 3 Dimensiones', icon: Briefcase },
            { id: 'estrategia', label: '4. 5 Años & Riesgos', icon: Milestone },
            { id: 'compromiso', label: '5. Compromiso Final', icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-3 border-b-2 text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-cyan-400 text-cyan-400 bg-cyan-950/30'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* TAB 1: PERFIL */}
          {activeTab === 'perfil' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Nombre Completo del Estudiante:</label>
                  <input
                    type="text"
                    value={formData.profile.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        profile: { ...formData.profile, name: e.target.value },
                        semesterCommitment: { ...formData.semesterCommitment, signedBy: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Carrera:</label>
                  <input
                    type="text"
                    value={formData.profile.career}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        profile: { ...formData.profile, career: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Semestre y Paralelo:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Sexto Semestre"
                      value={formData.profile.semester}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          profile: { ...formData.profile, semester: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                    />
                    <input
                      type="text"
                      placeholder="Paralelo 1"
                      value={formData.profile.parallel || 'Paralelo 1'}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          profile: { ...formData.profile, parallel: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Universidad / Institución:</label>
                  <input
                    type="text"
                    value={formData.profile.university}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        profile: { ...formData.profile, university: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Materia / Asignatura del Ingeniero:</label>
                  <input
                    type="text"
                    value={formData.profile.subject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        profile: { ...formData.profile, subject: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: IDENTIDAD & FORTALEZAS */}
          {activeTab === 'identidad' && (
            <div className="space-y-4">
              <div>
                <label className="block text-cyan-300 font-bold mb-1">
                  Pregunta 1: ¿Quién soy realmente?
                </label>
                <textarea
                  rows={4}
                  value={formData.whoAmI.core}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      whoAmI: { ...formData.whoAmI, core: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-cyan-300 font-bold mb-1">
                  Filosofía / Frase de Impacto:
                </label>
                <input
                  type="text"
                  value={formData.whoAmI.philosophy}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      whoAmI: { ...formData.whoAmI, philosophy: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-cyan-300 font-bold mb-1">
                  Pregunta 4: ¿Qué tipo de persona quiero llegar a ser?
                </label>
                <textarea
                  rows={3}
                  value={formData.targetPersona.statement}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      targetPersona: { ...formData.targetPersona, statement: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          )}

          {/* TAB 3: DIMENSIONES */}
          {activeTab === 'dimensiones' && (
            <div className="space-y-4">
              <div>
                <label className="block text-rose-300 font-bold mb-1">
                  Pregunta 5: ¿Qué quiero conseguir en mi vida personal?
                </label>
                <textarea
                  rows={3}
                  value={formData.personalGoal.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personalGoal: { ...formData.personalGoal, description: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-blue-300 font-bold mb-1">
                  Pregunta 6: ¿Qué quiero alcanzar profesionalmente? (Contabilidad, Auditoría, IA)
                </label>
                <textarea
                  rows={3}
                  value={formData.professionalGoal.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      professionalGoal: { ...formData.professionalGoal, description: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-emerald-300 font-bold mb-1">
                  Pregunta 7: ¿Qué nivel o meta económica deseo alcanzar?
                </label>
                <textarea
                  rows={3}
                  value={formData.economicGoal.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      economicGoal: { ...formData.economicGoal, description: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          )}

          {/* TAB 4: ESTRATEGIA */}
          {activeTab === 'estrategia' && (
            <div className="space-y-4">
              <div>
                <label className="block text-indigo-300 font-bold mb-1">
                  Pregunta 8: ¿Dónde quiero estar dentro de 5 años? (Una meta por cada año)
                </label>
                <div className="space-y-2">
                  {(formData.fiveYearRoadmap || []).map((stage, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-[11px] font-bold text-indigo-400 block">{stage.year}</span>
                      <input
                        type="text"
                        value={stage.focus}
                        onChange={(e) => {
                          const updated = [...(formData.fiveYearRoadmap || [])];
                          updated[idx] = { ...updated[idx], focus: e.target.value };
                          setFormData({ ...formData, fiveYearRoadmap: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-400"
                        placeholder={`Meta principal para ${stage.year}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-amber-300 font-bold mb-1">
                  Pregunta 9: ¿Qué sueño o meta importante todavía no he comenzado a perseguir?
                </label>
                <input
                  type="text"
                  value={formData.unstartedDream.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      unstartedDream: { ...formData.unstartedDream, title: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 mb-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Título del sueño"
                />
                <textarea
                  rows={2}
                  value={formData.unstartedDream.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      unstartedDream: { ...formData.unstartedDream, description: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Descripción"
                />
              </div>

              <div>
                <label className="block text-rose-300 font-bold mb-1">
                  Pregunta 10: ¿Qué obstáculos podrían impedirme alcanzar mis metas?
                </label>
                <p className="text-xs text-slate-400 mb-1">Mitigación del principal obstáculo:</p>
                <input
                  type="text"
                  value={formData.obstacles[0]?.obstacle || ''}
                  onChange={(e) => {
                    const newObs = [...formData.obstacles];
                    if (newObs[0]) newObs[0].obstacle = e.target.value;
                    setFormData({ ...formData, obstacles: newObs });
                  }}
                  className="w-full px-3 py-2 mb-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Obstáculo principal"
                />
                <textarea
                  rows={2}
                  value={formData.obstacles[0]?.mitigation || ''}
                  onChange={(e) => {
                    const newObs = [...formData.obstacles];
                    if (newObs[0]) newObs[0].mitigation = e.target.value;
                    setFormData({ ...formData, obstacles: newObs });
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Estrategia de mitigación"
                />
              </div>

              <div>
                <label className="block text-cyan-300 font-bold mb-1">
                  Pregunta 11: ¿Qué estoy dispuesto a cambiar, aprender o sacrificar?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div>
                    <span className="text-[11px] text-cyan-400 font-semibold block mb-1">Aprender (separar con comas):</span>
                    <textarea
                      rows={2}
                      value={(formData.willingness.toLearn || []).join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          willingness: {
                            ...formData.willingness,
                            toLearn: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                          }
                        })
                      }
                      className="w-full text-xs px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-blue-400 font-semibold block mb-1">Cambiar (separar con comas):</span>
                    <textarea
                      rows={2}
                      value={(formData.willingness.toChange || []).join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          willingness: {
                            ...formData.willingness,
                            toChange: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                          }
                        })
                      }
                      className="w-full text-xs px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-rose-400 font-semibold block mb-1">Sacrificar (separar con comas):</span>
                    <textarea
                      rows={2}
                      value={(formData.willingness.toSacrifice || []).join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          willingness: {
                            ...formData.willingness,
                            toSacrifice: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                          }
                        })
                      }
                      className="w-full text-xs px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-amber-300 font-bold mb-1">
                  Pregunta 12: ¿Si continúo haciendo lo mismo hoy, mi vida me llevará al lugar deseado?
                </label>
                <textarea
                  rows={3}
                  value={formData.realityCheck.honestAssessment}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      realityCheck: { ...formData.realityCheck, honestAssessment: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-cyan-300 font-bold mb-1">
                  Pregunta 13: Acción concreta desde ahora (El sistema diario):
                </label>
                <textarea
                  rows={2}
                  value={formData.concreteActionNow.action}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      concreteActionNow: { ...formData.concreteActionNow, action: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          )}

          {/* TAB 5: COMPROMISO */}
          {activeTab === 'compromiso' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40">
                <label className="block text-emerald-300 font-bold mb-1">
                  🚀 Compromiso del Semestre:
                </label>
                <p className="text-xs text-slate-400 mb-2">
                  Debe comenzar con la frase exacta requerida: “Durante este semestre me comprometo a…”
                </p>
                <textarea
                  rows={4}
                  value={formData.semesterCommitment.fullDeclaration}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      semesterCommitment: { ...formData.semesterCommitment, fullDeclaration: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-emerald-400 leading-relaxed font-serif italic"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <button
            onClick={onReset}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer sugeridos</span>
          </button>

          <div className="flex items-center gap-2">
            {savedSuccess && (
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1 animate-pulse">
                <Check className="w-3.5 h-3.5" />
                ¡Cambios guardados!
              </span>
            )}
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-400/20 transition-all flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Guardar y Aplicar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
