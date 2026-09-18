import React, { useState, useEffect } from 'react';
import { initialProjectLifeData } from './data/initialData';
import { ProjectLifeData } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IdentitySection } from './components/IdentitySection';
import { DimensionsSection } from './components/DimensionsSection';
import { Roadmap5Years } from './components/Roadmap5Years';
import { RealityCheckSection } from './components/RealityCheckSection';
import { CommitmentCard } from './components/CommitmentCard';
import { Footer } from './components/Footer';
import { PresentationModal } from './components/PresentationModal';
import { EditorModal } from './components/EditorModal';
import { ExportSlidesModal } from './components/ExportSlidesModal';
import { ShareDocenteModal } from './components/ShareDocenteModal';
import { PrintableDossier } from './components/PrintableDossier';
import { PrintDossierModal } from './components/PrintDossierModal';
import { AlejandroPixelCompanion } from './components/AlejandroPixelCompanion';
import { CursorFollower } from './components/CursorFollower';
import { InteractiveParticleBackground } from './components/InteractiveParticleBackground';
import { DefenseQuestionsSection } from './components/DefenseQuestionsSection';
import { soundManager } from './utils/soundManager';

const LOCAL_STORAGE_KEY = 'espoch_proyecto_vida_data';

export default function App() {
  const [data, setData] = useState<ProjectLifeData>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.profile?.name && parsed.profile.name.includes('Guillqui')) {
          parsed.profile.name = parsed.profile.name.replace('Guillqui', 'Gullqui');
        }
        if (parsed.semesterCommitment?.signedBy && parsed.semesterCommitment.signedBy.includes('Guillqui')) {
          parsed.semesterCommitment.signedBy = parsed.semesterCommitment.signedBy.replace('Guillqui', 'Gullqui');
        }
        if (parsed.whoAmI?.philosophy && parsed.whoAmI.philosophy.includes('No me limito')) {
          parsed.whoAmI.philosophy = initialProjectLifeData.whoAmI.philosophy;
        }
        const hasNewRoadmap = parsed.fiveYearRoadmap && parsed.fiveYearRoadmap.length === 5 && parsed.fiveYearRoadmap[0]?.stage?.includes('Domótica');
        const fiveYearRoadmap = hasNewRoadmap
          ? parsed.fiveYearRoadmap
          : initialProjectLifeData.fiveYearRoadmap;

        return {
          ...initialProjectLifeData,
          ...parsed,
          profile: { ...initialProjectLifeData.profile, ...(parsed.profile || {}) },
          whoAmI: { ...initialProjectLifeData.whoAmI, ...(parsed.whoAmI || {}) },
          targetPersona: { ...initialProjectLifeData.targetPersona, ...(parsed.targetPersona || {}) },
          personalGoal: {
            ...initialProjectLifeData.personalGoal,
            ...(parsed.personalGoal || {}),
            habits: parsed.personalGoal?.habits || initialProjectLifeData.personalGoal.habits,
          },
          professionalGoal: {
            ...initialProjectLifeData.professionalGoal,
            ...(parsed.professionalGoal || {}),
            milestones: parsed.professionalGoal?.milestones || initialProjectLifeData.professionalGoal.milestones,
          },
          economicGoal: { ...initialProjectLifeData.economicGoal, ...(parsed.economicGoal || {}) },
          fiveYearRoadmap,
          unstartedDream: { ...initialProjectLifeData.unstartedDream, ...(parsed.unstartedDream || {}) },
          willingness: { ...initialProjectLifeData.willingness, ...(parsed.willingness || {}) },
          realityCheck: { ...initialProjectLifeData.realityCheck, ...(parsed.realityCheck || {}) },
          concreteActionNow: { ...initialProjectLifeData.concreteActionNow, ...(parsed.concreteActionNow || {}) },
          semesterCommitment: { ...initialProjectLifeData.semesterCommitment, ...(parsed.semesterCommitment || {}) },
        };
      }
    } catch (e) {
      console.error('Error loading saved data from localStorage', e);
    }
    return initialProjectLifeData;
  });

  const [isPresentationOpen, setIsPresentationOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isShareDocenteOpen, setIsShareDocenteOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Track active section on scroll
  useEffect(() => {
    const sections = ['inicio', 'identidad', 'dimensiones', 'vision5', 'decision', 'defensa-preguntas', 'compromiso'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut listener (P for presentation, E for editor)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if an input/textarea is focused
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'p' || e.key === 'P') {
        setIsPresentationOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Global subtle sound effects delegation for buttons and interactive cards
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('button, a, [role="button"], input[type="button"]');
      if (target) {
        soundManager.playHover();
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('button, a, [role="button"], input[type="button"]');
      if (target) {
        soundManager.playClick();
      }
    };

    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleSaveData = (updatedData: ProjectLifeData) => {
    setData(updatedData);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
    } catch (e) {
      console.error('Error saving data to localStorage', e);
    }
  };

  const handleResetData = () => {
    if (window.confirm('¿Deseas restaurar todas las respuestas a los valores sugeridos recomendados?')) {
      setData(initialProjectLifeData);
      try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } catch (e) {
        console.error('Error clearing localStorage', e);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#070a11] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Subtle Dynamic Interactive Particle Canvas (Reacts to cursor & connection physics) */}
      <InteractiveParticleBackground />

      {/* Interactive Cursor Follower */}
      <CursorFollower />

      {/* Official Printable Academic Dossier (rendered only during print/save-as-PDF) */}
      <PrintableDossier data={data} />

      {/* Dynamic Island Navigation Bar */}
      <Navbar
        onOpenPresentation={() => setIsPresentationOpen(true)}
        onOpenEditor={() => setIsEditorOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenShareDocente={() => setIsShareDocenteOpen(true)}
        onOpenPrintDossier={() => setIsPrintModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Landing Sections */}
      <main className="space-y-4 relative z-10">
        <HeroSection
          data={data}
          onOpenPresentation={() => setIsPresentationOpen(true)}
          onOpenEditor={() => setIsEditorOpen(true)}
          onOpenExport={() => setIsExportOpen(true)}
          onOpenShareDocente={() => setIsShareDocenteOpen(true)}
        />

        <IdentitySection data={data} />

        <DimensionsSection data={data} />

        <Roadmap5Years data={data} />

        <RealityCheckSection data={data} />

        {/* Defense Questions for Professor Hitalo Veloz */}
        <div id="defensa-preguntas">
          <DefenseQuestionsSection />
        </div>

        <CommitmentCard data={data} />
      </main>

      {/* Politécnico Institutional Footer */}
      <Footer
        profile={data.profile}
        onOpenPresentation={() => setIsPresentationOpen(true)}
        onOpenEditor={() => setIsEditorOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenShareDocente={() => setIsShareDocenteOpen(true)}
        onOpenPrintDossier={() => setIsPrintModalOpen(true)}
      />

      {/* Presentation Screen (Keynote / Apple Slides - 16 Slides 1:1) */}
      <PresentationModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
        data={data}
      />

      {/* In-app Data Customizer */}
      <EditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        data={data}
        onSave={handleSaveData}
        onReset={handleResetData}
      />

      {/* Google Slides / PPTX Exporter */}
      <ExportSlidesModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        data={data}
      />

      {/* Delivery to Docente Modal (Interactive link, PPTX, PDF Dossier) */}
      <ShareDocenteModal
        isOpen={isShareDocenteOpen}
        onClose={() => setIsShareDocenteOpen(false)}
        data={data}
        onOpenPresentation={() => setIsPresentationOpen(true)}
        onOpenPrintDossier={() => setIsPrintModalOpen(true)}
      />

      {/* Official Academic Print & PDF Modal (Direct Print & Standalone HTML) */}
      <PrintDossierModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        data={data}
      />

      {/* Interactive Pixel Avatar Companion & Module Redactor */}
      <AlejandroPixelCompanion data={data} />
    </div>
  );
}
