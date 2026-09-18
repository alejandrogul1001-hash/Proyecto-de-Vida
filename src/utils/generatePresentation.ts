import PptxGenJS from 'pptxgenjs';
import { ProjectLifeData } from '../types';

export const exportToGoogleSlidesPptx = async (data: ProjectLifeData) => {
  const pptx = new PptxGenJS();

  // Configure presentation properties with HD Widescreen 16:9 dimensions (13.333 x 7.5 inches)
  // This matches native Google Slides and Microsoft PowerPoint 365 16:9 standards perfectly,
  // preventing text, shapes and cards from shifting or overflowing outside the slide canvas.
  pptx.defineLayout({ name: 'LAYOUT_16_9_WIDESCREEN', width: 13.333, height: 7.5 });
  pptx.layout = 'LAYOUT_16_9_WIDESCREEN';
  pptx.author = data.profile.name;
  pptx.company = data.profile.university;
  pptx.title = `Proyecto de Vida - ${data.profile.name}`;
  pptx.subject = `${data.profile.subject} · ${data.profile.career}`;

  // Theme Colors
  const BG_COLOR = '0B1120'; // Dark Slate
  const CARD_BG = '1E293B';
  const TEXT_WHITE = 'FFFFFF';
  const TEXT_MUTED = '94A3B8';
  const ACCENT_CYAN = '06B6D4';
  const ACCENT_GOLD = 'F59E0B';
  const ACCENT_GREEN = '10B981';
  const ACCENT_RED = 'EF4444';
  const ACCENT_INDIGO = '6366F1';

  // Helper for applying background to a slide with full 13.333 width
  const applySlideBackground = (slide: PptxGenJS.Slide) => {
    slide.background = { color: BG_COLOR };
    // Top banner indicator
    slide.addShape(pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: 13.333,
      h: 0.12,
      fill: { color: ACCENT_CYAN },
    });
  };

  // Helper for adding footer to slides with precise alignment
  const addSlideFooter = (slide: PptxGenJS.Slide, currentSlide: number, totalSlides: number) => {
    slide.addText(
      `${data.profile.university} · ${data.profile.career} | ${data.profile.name} | Docente: ${data.profile.professorName || 'Ing. Hitalo Veloz'}`,
      {
        x: 1.0,
        y: 6.9,
        w: 10.2,
        h: 0.35,
        fontSize: 9,
        color: TEXT_MUTED,
        fontFace: 'Arial',
      }
    );
    slide.addText(`${currentSlide} / ${totalSlides}`, {
      x: 11.3,
      y: 6.9,
      w: 1.0,
      h: 0.35,
      fontSize: 9,
      color: ACCENT_CYAN,
      align: 'right',
      fontFace: 'Arial',
    });
  };

  const TOTAL_SLIDES = 15;

  // -------------------------------------------------------------
  // SLIDE 1: PORTADA INSTITUCIONAL
  // -------------------------------------------------------------
  const slide1 = pptx.addSlide();
  applySlideBackground(slide1);

  slide1.addText(data.profile.university.toUpperCase(), {
    x: 1.0,
    y: 0.9,
    w: 11.3,
    h: 0.4,
    fontSize: 12,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
    charSpacing: 2,
  });

  slide1.addText(`${data.profile.faculty} · ${data.profile.school}`, {
    x: 1.0,
    y: 1.3,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: TEXT_MUTED,
    fontFace: 'Arial',
  });

  slide1.addText('PROYECTO DE VIDA', {
    x: 1.0,
    y: 2.0,
    w: 11.3,
    h: 0.8,
    fontSize: 36,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  slide1.addText('¿Quién soy y hacia dónde voy?', {
    x: 1.0,
    y: 2.8,
    w: 11.3,
    h: 0.6,
    fontSize: 24,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  slide1.addText(data.whoAmI.philosophy, {
    x: 1.0,
    y: 3.6,
    w: 11.3,
    h: 0.8,
    fontSize: 13,
    color: 'E2E8F0',
    italic: true,
    fontFace: 'Arial',
  });

  // Student & Professor Card Box
  slide1.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 4.8,
    w: 11.3,
    h: 1.8,
    fill: { color: CARD_BG },
    line: { color: '334155', width: 1 },
    rectRadius: 0.1,
  });

  slide1.addText(`Estudiante: ${data.profile.name} (${data.profile.semester})`, {
    x: 1.3,
    y: 5.0,
    w: 5.5,
    h: 0.4,
    fontSize: 13,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  slide1.addText(`Carrera: ${data.profile.career}`, {
    x: 1.3,
    y: 5.4,
    w: 5.5,
    h: 0.3,
    fontSize: 11,
    color: TEXT_MUTED,
    fontFace: 'Arial',
  });

  slide1.addText(`Asignatura: ${data.profile.subject}`, {
    x: 1.3,
    y: 5.8,
    w: 5.5,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_CYAN,
    fontFace: 'Arial',
  });

  slide1.addText(`Docente: ${data.profile.professorName || 'Ingeniero Hitalo Veloz'}`, {
    x: 7.0,
    y: 5.0,
    w: 5.0,
    h: 0.4,
    fontSize: 13,
    color: ACCENT_GOLD,
    bold: true,
    fontFace: 'Arial',
  });

  slide1.addText(`Período Académico: 2026 | Riobamba - Ecuador`, {
    x: 7.0,
    y: 5.4,
    w: 5.0,
    h: 0.3,
    fontSize: 11,
    color: TEXT_MUTED,
    fontFace: 'Arial',
  });

  addSlideFooter(slide1, 1, TOTAL_SLIDES);
  slide1.addNotes(
    `Estimado Ingeniero Hitalo Veloz, compañeros: Hoy comparto con ustedes mi proyecto de vida. En esta asignatura aprendemos a formular y evaluar proyectos de inversión con rigor; sin embargo, antes de evaluar cualquier proyecto externo, el primer proyecto que debemos aprender a diagnosticar y dirigir con propósito es nuestra propia vida. Esta es mi radiografía personal y mi compromiso formal.`
  );

  // -------------------------------------------------------------
  // SLIDE 2: PREGUNTA 1
  // -------------------------------------------------------------
  const slide2 = pptx.addSlide();
  applySlideBackground(slide2);

  slide2.addText('PREGUNTA 1 DE 13 · DIAGNÓSTICO DE IDENTIDAD', {
    x: 1.0,
    y: 0.8,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  slide2.addText('¿Quién soy realmente?', {
    x: 1.0,
    y: 1.2,
    w: 11.3,
    h: 0.6,
    fontSize: 24,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  slide2.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 2.0,
    w: 11.3,
    h: 2.2,
    fill: { color: CARD_BG },
    line: { color: '334155', width: 1 },
    rectRadius: 0.1,
  });

  slide2.addText(data.whoAmI.core, {
    x: 1.3,
    y: 2.2,
    w: 10.7,
    h: 1.8,
    fontSize: 14,
    color: 'E2E8F0',
    fontFace: 'Arial',
    lineSpacing: 22,
  });

  // 4 Identity Pillars
  data.whoAmI.identityPillars.forEach((pillar, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const xPos = 1.0 + col * 5.8;
    const yPos = 4.5 + row * 1.1;

    slide2.addShape(pptx.ShapeType.roundRect, {
      x: xPos,
      y: yPos,
      w: 5.5,
      h: 0.9,
      fill: { color: '172554' },
      line: { color: '1E3A8A', width: 1 },
      rectRadius: 0.1,
    });

    slide2.addText(`✔  ${pillar}`, {
      x: xPos + 0.2,
      y: yPos + 0.15,
      w: 5.1,
      h: 0.6,
      fontSize: 11,
      color: '93C5FD',
      fontFace: 'Arial',
    });
  });

  addSlideFooter(slide2, 2, TOTAL_SLIDES);
  slide2.addNotes(
    `Para responder quién soy con honestidad: no soy solo un estudiante sentado en un aula. Soy un politécnico de sexto semestre que busca integrar la contabilidad, los costos y el rigor financiero con la tecnología y la inteligencia artificial para crear soluciones útiles.`
  );

  // -------------------------------------------------------------
  // SLIDE 3: PREGUNTA 2
  // -------------------------------------------------------------
  const slide3 = pptx.addSlide();
  applySlideBackground(slide3);

  slide3.addText('PREGUNTA 2 DE 13 · CAPACIDADES Y VENTAJAS', {
    x: 1.0,
    y: 0.8,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  slide3.addText('¿Cuáles considero que son mis principales fortalezas?', {
    x: 1.0,
    y: 1.2,
    w: 11.3,
    h: 0.6,
    fontSize: 24,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  data.strengths.forEach((s, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const xPos = 1.0 + col * 5.8;
    const yPos = 2.1 + row * 2.3;

    slide3.addShape(pptx.ShapeType.roundRect, {
      x: xPos,
      y: yPos,
      w: 5.5,
      h: 2.1,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });

    slide3.addText(`[${s.category.toUpperCase()}]`, {
      x: xPos + 0.3,
      y: yPos + 0.2,
      w: 4.9,
      h: 0.3,
      fontSize: 10,
      color: ACCENT_CYAN,
      bold: true,
      fontFace: 'Arial',
    });

    slide3.addText(s.title, {
      x: xPos + 0.3,
      y: yPos + 0.5,
      w: 4.9,
      h: 0.4,
      fontSize: 13,
      color: TEXT_WHITE,
      bold: true,
      fontFace: 'Arial',
    });

    slide3.addText(s.description, {
      x: xPos + 0.3,
      y: yPos + 0.9,
      w: 4.9,
      h: 1.0,
      fontSize: 11,
      color: TEXT_MUTED,
      fontFace: 'Arial',
    });
  });

  addSlideFooter(slide3, 3, TOTAL_SLIDES);
  slide3.addNotes(
    `Mis fortalezas se dividen en aprendizaje autónomo tecnológico, visión comercial práctica para identificar productos viables, perseverancia ante la frustración y el criterio de control contable que me brinda mi formación en la ESPOCH.`
  );

  // -------------------------------------------------------------
  // SLIDE 4: PREGUNTA 3
  // -------------------------------------------------------------
  const slide4 = pptx.addSlide();
  applySlideBackground(slide4);

  slide4.addText('PREGUNTA 3 DE 13 · AUTOCRÍTICA CONSTRUCTIVA', {
    x: 1.0,
    y: 0.8,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_GOLD,
    bold: true,
    fontFace: 'Arial',
  });

  slide4.addText('¿Qué aspectos de mí necesito mejorar?', {
    x: 1.0,
    y: 1.2,
    w: 11.3,
    h: 0.6,
    fontSize: 24,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  data.growthAreas.forEach((g, idx) => {
    const yPos = 2.0 + idx * 1.2;

    slide4.addShape(pptx.ShapeType.roundRect, {
      x: 1.0,
      y: yPos,
      w: 11.3,
      h: 1.05,
      fill: { color: CARD_BG },
      line: { color: '451A03', width: 1 },
      rectRadius: 0.1,
    });

    slide4.addText(`Área a Mejorar: ${g.aspect}`, {
      x: 1.3,
      y: yPos + 0.12,
      w: 8.0,
      h: 0.35,
      fontSize: 12,
      color: ACCENT_GOLD,
      bold: true,
      fontFace: 'Arial',
    });

    slide4.addText(`Estado: ${g.status === 'prioridad' ? 'Prioridad Alta' : 'En Proceso'}`, {
      x: 9.2,
      y: yPos + 0.12,
      w: 2.8,
      h: 0.35,
      fontSize: 10,
      color: TEXT_MUTED,
      align: 'right',
      fontFace: 'Arial',
    });

    slide4.addText(`Estrategia de superación: ${g.strategy}`, {
      x: 1.3,
      y: yPos + 0.5,
      w: 10.7,
      h: 0.45,
      fontSize: 11,
      color: 'E2E8F0',
      fontFace: 'Arial',
    });
  });

  addSlideFooter(slide4, 4, TOTAL_SLIDES);
  slide4.addNotes(
    `Reconocer las debilidades es el primer paso de un buen formulador de proyectos. Debo superar la postergación en tareas complejas, enfocarme para no dispersarme en demasiadas ideas a la vez y fortalecer el dominio del inglés y la oratoria técnica.`
  );

  // -------------------------------------------------------------
  // SLIDE 5: PREGUNTA 4
  // -------------------------------------------------------------
  const slide5 = pptx.addSlide();
  applySlideBackground(slide5);

  slide5.addText('PREGUNTA 4 DE 13 · VISIÓN DEL CARÁCTER', {
    x: 1.0,
    y: 0.8,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  slide5.addText('¿Qué tipo de persona quiero llegar a ser?', {
    x: 1.0,
    y: 1.2,
    w: 11.3,
    h: 0.6,
    fontSize: 24,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  slide5.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 2.0,
    w: 11.3,
    h: 2.2,
    fill: { color: '0F172A' },
    line: { color: '1E3A8A', width: 1 },
    rectRadius: 0.1,
  });

  slide5.addText('DECLARACIÓN DE IDENTIDAD FUTURA', {
    x: 1.3,
    y: 2.2,
    w: 10.7,
    h: 0.3,
    fontSize: 10,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  slide5.addText(`“${data.targetPersona.statement}”`, {
    x: 1.3,
    y: 2.6,
    w: 10.7,
    h: 1.4,
    fontSize: 14,
    color: TEXT_WHITE,
    italic: true,
    fontFace: 'Arial',
    lineSpacing: 22,
  });

  // Virtues
  data.targetPersona.virtues.forEach((v, idx) => {
    const xPos = 1.0 + idx * 2.9;
    slide5.addShape(pptx.ShapeType.roundRect, {
      x: xPos,
      y: 4.5,
      w: 2.6,
      h: 0.9,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });
    slide5.addText(v, {
      x: xPos,
      y: 4.65,
      w: 2.6,
      h: 0.6,
      fontSize: 10,
      color: ACCENT_CYAN,
      bold: true,
      align: 'center',
      fontFace: 'Arial',
    });
  });

  slide5.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 5.6,
    w: 11.3,
    h: 1.0,
    fill: { color: CARD_BG },
    line: { color: '334155', width: 1 },
    rectRadius: 0.1,
  });

  slide5.addText(`Visión e Impacto en la Comunidad: ${data.targetPersona.impactVision}`, {
    x: 1.3,
    y: 5.85,
    w: 10.7,
    h: 0.6,
    fontSize: 11,
    color: 'E2E8F0',
    fontFace: 'Arial',
  });

  addSlideFooter(slide5, 5, TOTAL_SLIDES);
  slide5.addNotes(
    `Más allá de los títulos profesionales o del éxito comercial, la persona que quiero llegar a ser se define por su humildad, calidad humana y empatía. Aspiro a ser un referente de confianza que abra oportunidades para otros.`
  );

  // -------------------------------------------------------------
  // SLIDE 6: PREGUNTA 5
  // -------------------------------------------------------------
  const slide6 = pptx.addSlide();
  applySlideBackground(slide6);

  slide6.addText('PREGUNTA 5 DE 13 · DIMENSIÓN PERSONAL', {
    x: 1.0,
    y: 0.8,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: 'FB7185',
    bold: true,
    fontFace: 'Arial',
  });

  slide6.addText('¿Qué quiero conseguir en mi vida personal?', {
    x: 1.0,
    y: 1.2,
    w: 11.3,
    h: 0.6,
    fontSize: 24,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  slide6.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 2.0,
    w: 11.3,
    h: 2.2,
    fill: { color: CARD_BG },
    line: { color: '4C0519', width: 1 },
    rectRadius: 0.1,
  });

  slide6.addText(data.personalGoal.title, {
    x: 1.3,
    y: 2.3,
    w: 10.7,
    h: 0.5,
    fontSize: 16,
    color: 'FB7185',
    bold: true,
    fontFace: 'Arial',
  });

  slide6.addText(data.personalGoal.description, {
    x: 1.3,
    y: 2.9,
    w: 10.7,
    h: 1.1,
    fontSize: 12,
    color: 'E2E8F0',
    fontFace: 'Arial',
  });

  // Milestones / Habits
  slide6.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 4.5,
    w: 11.3,
    h: 2.1,
    fill: { color: CARD_BG },
    line: { color: '334155', width: 1 },
    rectRadius: 0.1,
  });

  slide6.addText('HÁBITOS DIARIOS Y PAUTAS DE SOSTENIBILIDAD PERSONAL:', {
    x: 1.3,
    y: 4.7,
    w: 10.7,
    h: 0.3,
    fontSize: 10,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  const personalItems = data.personalGoal.habits || data.personalGoal.milestones;
  personalItems.forEach((item, idx) => {
    slide6.addText(`✔  ${item}`, {
      x: 1.3,
      y: 5.1 + idx * 0.45,
      w: 10.7,
      h: 0.4,
      fontSize: 11,
      color: TEXT_MUTED,
      fontFace: 'Arial',
    });
  });

  addSlideFooter(slide6, 6, TOTAL_SLIDES);
  slide6.addNotes(
    `En lo personal, busco paz mental, equilibrio emocional y tiempo de calidad con mi familia. Ningún éxito empresarial justifica descuidar la salud física ni alejarse de las personas que nos apoyan.`
  );

  // -------------------------------------------------------------
  // SLIDE 7: PREGUNTA 6
  // -------------------------------------------------------------
  const slide7 = pptx.addSlide();
  applySlideBackground(slide7);

  slide7.addText('PREGUNTA 6 DE 13 · DIMENSIÓN PROFESIONAL', {
    x: 1.0,
    y: 0.8,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  slide7.addText('¿Qué quiero alcanzar profesionalmente?', {
    x: 1.0,
    y: 1.2,
    w: 11.3,
    h: 0.6,
    fontSize: 24,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  slide7.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 2.0,
    w: 11.3,
    h: 2.2,
    fill: { color: CARD_BG },
    line: { color: '164E63', width: 1 },
    rectRadius: 0.1,
  });

  slide7.addText(data.professionalGoal.title, {
    x: 1.3,
    y: 2.3,
    w: 10.7,
    h: 0.5,
    fontSize: 16,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  slide7.addText(data.professionalGoal.description, {
    x: 1.3,
    y: 2.9,
    w: 10.7,
    h: 1.1,
    fontSize: 12,
    color: 'E2E8F0',
    fontFace: 'Arial',
  });

  // Milestones / Focus Areas
  slide7.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 4.5,
    w: 11.3,
    h: 2.1,
    fill: { color: CARD_BG },
    line: { color: '334155', width: 1 },
    rectRadius: 0.1,
  });

  slide7.addText('LÍNEAS DE ENFOQUE Y EMPRENDIMIENTO:', {
    x: 1.3,
    y: 4.7,
    w: 10.7,
    h: 0.3,
    fontSize: 10,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  const profItems = data.professionalGoal.focusAreas || (data.professionalGoal.milestones ?? []);
  profItems.forEach((m, idx) => {
    slide7.addText(`${idx + 1}.  ${m}`, {
      x: 1.3,
      y: 5.1 + idx * 0.45,
      w: 10.7,
      h: 0.4,
      fontSize: 11,
      color: TEXT_MUTED,
      fontFace: 'Arial',
    });
  });

  addSlideFooter(slide7, 7, TOTAL_SLIDES);
  slide7.addNotes(
    `Profesionalmente, mi objetivo es graduarme como Ingeniero en Contabilidad y Auditoría en la ESPOCH y consolidar una empresa de importación y comercialización de tecnología con domótica y software de gestión.`
  );

  // -------------------------------------------------------------
  // SLIDE 8: PREGUNTA 7
  // -------------------------------------------------------------
  const slide8 = pptx.addSlide();
  applySlideBackground(slide8);

  slide8.addText('PREGUNTA 7 DE 13 · DIMENSIÓN ECONÓMICA', {
    x: 1.0,
    y: 0.8,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_GREEN,
    bold: true,
    fontFace: 'Arial',
  });

  slide8.addText('¿Qué nivel o meta económica deseo alcanzar?', {
    x: 1.0,
    y: 1.2,
    w: 11.3,
    h: 0.6,
    fontSize: 24,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  slide8.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 2.0,
    w: 11.3,
    h: 2.2,
    fill: { color: CARD_BG },
    line: { color: '064E3B', width: 1 },
    rectRadius: 0.1,
  });

  slide8.addText(data.economicGoal.title, {
    x: 1.3,
    y: 2.3,
    w: 6.5,
    h: 0.5,
    fontSize: 16,
    color: ACCENT_GREEN,
    bold: true,
    fontFace: 'Arial',
  });

  slide8.addText(`Filosofía: ${data.economicGoal.investmentPhilosophy}`, {
    x: 1.3,
    y: 2.8,
    w: 10.7,
    h: 0.4,
    fontSize: 11,
    color: ACCENT_GOLD,
    italic: true,
    fontFace: 'Arial',
  });

  slide8.addText(data.economicGoal.description, {
    x: 1.3,
    y: 3.3,
    w: 10.7,
    h: 0.8,
    fontSize: 12,
    color: 'E2E8F0',
    fontFace: 'Arial',
  });

  // Strategy / Metrics
  slide8.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 4.5,
    w: 11.3,
    h: 2.1,
    fill: { color: CARD_BG },
    line: { color: '334155', width: 1 },
    rectRadius: 0.1,
  });

  slide8.addText('INDICADORES Y PAUTAS FINANCIERAS CLAVE:', {
    x: 1.3,
    y: 4.7,
    w: 10.7,
    h: 0.3,
    fontSize: 10,
    color: ACCENT_GREEN,
    bold: true,
    fontFace: 'Arial',
  });

  data.economicGoal.keyMetrics.forEach((metric, idx) => {
    slide8.addText(`•  ${metric}`, {
      x: 1.3,
      y: 5.1 + idx * 0.45,
      w: 10.7,
      h: 0.4,
      fontSize: 11,
      color: TEXT_MUTED,
      fontFace: 'Arial',
    });
  });

  addSlideFooter(slide8, 8, TOTAL_SLIDES);
  slide8.addNotes(
    `Económicamente, aspiro a la independencia financiera generando flujos sólidos mediante mi negocio, reinvirtiendo con disciplina contable y generando empleo para nuestra gente.`
  );

  // -------------------------------------------------------------
  // SLIDE 9: PREGUNTA 8
  // -------------------------------------------------------------
  const slide9 = pptx.addSlide();
  applySlideBackground(slide9);

  slide9.addText('PREGUNTA 8 DE 13 · PROYECCIÓN TEMPORAL', {
    x: 1.0,
    y: 0.8,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_INDIGO,
    bold: true,
    fontFace: 'Arial',
  });

  slide9.addText('¿Dónde quiero estar dentro de 5 años? (2026 - 2031)', {
    x: 1.0,
    y: 1.2,
    w: 11.3,
    h: 0.6,
    fontSize: 24,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  data.fiveYearRoadmap.forEach((stage, idx) => {
    const yPos = 2.0 + idx * 0.95;

    slide9.addShape(pptx.ShapeType.roundRect, {
      x: 1.0,
      y: yPos,
      w: 11.3,
      h: 0.85,
      fill: { color: CARD_BG },
      line: { color: '312E81', width: 1 },
      rectRadius: 0.1,
    });

    slide9.addText(stage.year, {
      x: 1.3,
      y: yPos + 0.2,
      w: 1.8,
      h: 0.4,
      fontSize: 11,
      color: ACCENT_CYAN,
      bold: true,
      fontFace: 'Arial',
    });

    slide9.addText(stage.stage, {
      x: 3.2,
      y: yPos + 0.1,
      w: 8.8,
      h: 0.35,
      fontSize: 12,
      color: TEXT_WHITE,
      bold: true,
      fontFace: 'Arial',
    });

    slide9.addText(stage.focus, {
      x: 3.2,
      y: yPos + 0.45,
      w: 8.8,
      h: 0.35,
      fontSize: 10,
      color: TEXT_MUTED,
      fontFace: 'Arial',
    });
  });

  addSlideFooter(slide9, 9, TOTAL_SLIDES);
  slide9.addNotes(
    `Mi ruta temporal está planificada: 2026 formular el proyecto en la cátedra del Ing. Hitalo Veloz; 2027 titularme en la ESPOCH y realizar mi primera importación formal; 2028 abrir tienda física y digital; y 2031 consolidar la empresa y retribuir a mi comunidad.`
  );

  // -------------------------------------------------------------
  // SLIDE 10: PREGUNTA 9
  // -------------------------------------------------------------
  const slide10 = pptx.addSlide();
  applySlideBackground(slide10);

  slide10.addText('PREGUNTA 9 DE 13 · ASPIRACIÓN PENDIENTE', {
    x: 1.0,
    y: 0.8,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_GOLD,
    bold: true,
    fontFace: 'Arial',
  });

  slide10.addText('¿Qué sueño o meta importante todavía no he comenzado a perseguir?', {
    x: 1.0,
    y: 1.2,
    w: 11.3,
    h: 0.6,
    fontSize: 22,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  slide10.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 2.0,
    w: 11.3,
    h: 2.2,
    fill: { color: CARD_BG },
    line: { color: '78350F', width: 1 },
    rectRadius: 0.1,
  });

  slide10.addText(data.unstartedDream.title, {
    x: 1.3,
    y: 2.3,
    w: 10.7,
    h: 0.5,
    fontSize: 16,
    color: ACCENT_GOLD,
    bold: true,
    fontFace: 'Arial',
  });

  slide10.addText(data.unstartedDream.description, {
    x: 1.3,
    y: 2.9,
    w: 10.7,
    h: 1.1,
    fontSize: 12,
    color: 'E2E8F0',
    fontFace: 'Arial',
  });

  // Why not yet & First step
  slide10.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 4.5,
    w: 5.5,
    h: 2.1,
    fill: { color: CARD_BG },
    line: { color: '334155', width: 1 },
    rectRadius: 0.1,
  });

  slide10.addText('¿POR QUÉ ESTABA PENDIENTE?', {
    x: 1.3,
    y: 4.7,
    w: 4.9,
    h: 0.3,
    fontSize: 10,
    color: TEXT_MUTED,
    bold: true,
    fontFace: 'Arial',
  });

  slide10.addText(data.unstartedDream.whyNotYet, {
    x: 1.3,
    y: 5.1,
    w: 4.9,
    h: 1.3,
    fontSize: 11,
    color: 'CBD5E1',
    fontFace: 'Arial',
  });

  slide10.addShape(pptx.ShapeType.roundRect, {
    x: 6.8,
    y: 4.5,
    w: 5.5,
    h: 2.1,
    fill: { color: '082F49' },
    line: { color: '0284C7', width: 1 },
    rectRadius: 0.1,
  });

  slide10.addText('PRIMER PASO INMEDIATO:', {
    x: 7.1,
    y: 4.7,
    w: 4.9,
    h: 0.3,
    fontSize: 10,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  slide10.addText(data.unstartedDream.firstStep, {
    x: 7.1,
    y: 5.1,
    w: 4.9,
    h: 1.3,
    fontSize: 12,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  addSlideFooter(slide10, 10, TOTAL_SLIDES);
  slide10.addNotes(
    `El sueño pendiente es formalizar la personería de mi importadora e iniciar las compras directas. Ya no admitirá más postergación: mi primer paso concreto es elaborar el catálogo y cotizar los primeros lotes.`
  );

  // -------------------------------------------------------------
  // SLIDE 11: PREGUNTA 10
  // -------------------------------------------------------------
  const slide11 = pptx.addSlide();
  applySlideBackground(slide11);

  slide11.addText('PREGUNTA 10 DE 13 · GESTIÓN DE RIESGOS', {
    x: 1.0,
    y: 0.8,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_RED,
    bold: true,
    fontFace: 'Arial',
  });

  slide11.addText('¿Qué obstáculos podrían impedirme alcanzar mis metas?', {
    x: 1.0,
    y: 1.2,
    w: 11.3,
    h: 0.6,
    fontSize: 22,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  data.obstacles.forEach((obs, idx) => {
    const yPos = 2.0 + idx * 1.2;

    slide11.addShape(pptx.ShapeType.roundRect, {
      x: 1.0,
      y: yPos,
      w: 11.3,
      h: 1.05,
      fill: { color: CARD_BG },
      line: { color: '450A0A', width: 1 },
      rectRadius: 0.1,
    });

    slide11.addText(`Obstáculo: ${obs.obstacle}`, {
      x: 1.3,
      y: yPos + 0.12,
      w: 7.5,
      h: 0.35,
      fontSize: 12,
      color: ACCENT_RED,
      bold: true,
      fontFace: 'Arial',
    });

    slide11.addText(`Severidad: ${obs.severity.toUpperCase()}`, {
      x: 9.0,
      y: yPos + 0.12,
      w: 3.0,
      h: 0.35,
      fontSize: 10,
      color: TEXT_MUTED,
      align: 'right',
      fontFace: 'Arial',
    });

    slide11.addText(`Plan de Mitigación: ${obs.mitigation}`, {
      x: 1.3,
      y: yPos + 0.5,
      w: 10.7,
      h: 0.45,
      fontSize: 11,
      color: 'E2E8F0',
      fontFace: 'Arial',
    });
  });

  addSlideFooter(slide11, 11, TOTAL_SLIDES);
  slide11.addNotes(
    `Como aprendemos en formulación de proyectos, ningún riesgo se ignora: se mitiga. Mis obstáculos tienen un plan de respuesta concreto basado en el rigor técnico y contable.`
  );

  // -------------------------------------------------------------
  // SLIDE 12: PREGUNTA 11
  // -------------------------------------------------------------
  const slide12 = pptx.addSlide();
  applySlideBackground(slide12);

  slide12.addText('PREGUNTA 11 DE 13 · DISPOSICIÓN AL CAMBIO', {
    x: 1.0,
    y: 0.8,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  slide12.addText('¿Qué estoy dispuesto/a a cambiar, aprender o sacrificar?', {
    x: 1.0,
    y: 1.2,
    w: 11.3,
    h: 0.6,
    fontSize: 22,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  // 3 Columns: Aprender, Cambiar, Sacrificar
  const colData = [
    { title: 'APRENDER', items: data.willingness.toLearn, color: ACCENT_CYAN },
    { title: 'CAMBIAR', items: data.willingness.toChange, color: ACCENT_GOLD },
    { title: 'SACRIFICAR', items: data.willingness.toSacrifice, color: ACCENT_RED },
  ];

  colData.forEach((col, idx) => {
    const xPos = 1.0 + idx * 3.9;

    slide12.addShape(pptx.ShapeType.roundRect, {
      x: xPos,
      y: 2.0,
      w: 3.6,
      h: 4.6,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });

    slide12.addText(col.title, {
      x: xPos + 0.2,
      y: 2.3,
      w: 3.2,
      h: 0.4,
      fontSize: 13,
      color: col.color,
      bold: true,
      align: 'center',
      fontFace: 'Arial',
    });

    col.items.forEach((item, itemIdx) => {
      slide12.addText(`✔  ${item}`, {
        x: xPos + 0.25,
        y: 2.9 + itemIdx * 0.95,
        w: 3.1,
        h: 0.85,
        fontSize: 10,
        color: 'E2E8F0',
        fontFace: 'Arial',
      });
    });
  });

  addSlideFooter(slide12, 12, TOTAL_SLIDES);
  slide12.addNotes(
    `Todo logro exige renuncias conscientes. Estoy dispuesto a aprender comercio exterior e inglés técnico, cambiar la postergación por la disciplina diaria y sacrificar horas de ocio improductivo.`
  );

  // -------------------------------------------------------------
  // SLIDE 13: PREGUNTA 12
  // -------------------------------------------------------------
  const slide13 = pptx.addSlide();
  applySlideBackground(slide13);

  slide13.addText('PREGUNTA 12 DE 13 · CONFRONTACIÓN REALISTA', {
    x: 1.0,
    y: 0.8,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_RED,
    bold: true,
    fontFace: 'Arial',
  });

  slide13.addText('Si continúo haciendo lo mismo hoy, ¿mi vida me llevará al lugar donde quiero estar?', {
    x: 1.0,
    y: 1.2,
    w: 11.3,
    h: 0.7,
    fontSize: 20,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  // Big Decision Box
  slide13.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 2.1,
    w: 11.3,
    h: 2.4,
    fill: { color: '450A0A' },
    line: { color: '991B1B', width: 1 },
    rectRadius: 0.1,
  });

  slide13.addText(`VEREDICTO: ${data.realityCheck.verdict.toUpperCase()}`, {
    x: 1.3,
    y: 2.3,
    w: 10.7,
    h: 0.6,
    fontSize: 24,
    color: ACCENT_RED,
    bold: true,
    align: 'center',
    fontFace: 'Arial',
  });

  slide13.addText(`“${data.realityCheck.honestAssessment}”`, {
    x: 1.3,
    y: 3.0,
    w: 10.7,
    h: 1.3,
    fontSize: 13,
    color: 'FEE2E2',
    italic: true,
    align: 'center',
    fontFace: 'Arial',
  });

  // Gap analysis
  slide13.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 4.8,
    w: 11.3,
    h: 1.8,
    fill: { color: CARD_BG },
    line: { color: '334155', width: 1 },
    rectRadius: 0.1,
  });

  slide13.addText('ANÁLISIS DE BRECHA Y COSTO DE LA INACCIÓN:', {
    x: 1.3,
    y: 5.0,
    w: 10.7,
    h: 0.3,
    fontSize: 10,
    color: ACCENT_GOLD,
    bold: true,
    fontFace: 'Arial',
  });

  slide13.addText(data.realityCheck.gapAnalysis, {
    x: 1.3,
    y: 5.4,
    w: 10.7,
    h: 1.0,
    fontSize: 12,
    color: 'E2E8F0',
    fontFace: 'Arial',
  });

  addSlideFooter(slide13, 13, TOTAL_SLIDES);
  slide13.addNotes(
    `Esta es la pregunta más confrontativa de todo el proyecto. Si sigo con la misma inercia de hoy, no llegaré a ser el empresario e importador que deseo ser. Quedarme en la pasividad me costaría quedarme solo en la teoría.`
  );

  // -------------------------------------------------------------
  // SLIDE 14: PREGUNTA 13 (ACCIÓN CONCRETA & COMPROMISO)
  // -------------------------------------------------------------
  const slide14 = pptx.addSlide();
  applySlideBackground(slide14);

  slide14.addText('PREGUNTA 13 DE 13 · ACCIÓN CONCRETA & COMPROMISO', {
    x: 1.0,
    y: 0.75,
    w: 11.3,
    h: 0.3,
    fontSize: 11,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  slide14.addText('¿Cuál será una acción concreta que empezaré a realizar desde ahora?', {
    x: 1.0,
    y: 1.1,
    w: 11.3,
    h: 0.6,
    fontSize: 21,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  // Action Box
  slide14.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 1.8,
    w: 11.3,
    h: 1.6,
    fill: { color: '0C4A6E' },
    line: { color: '0284C7', width: 1 },
    rectRadius: 0.1,
  });

  slide14.addText('ACCIÓN ESTRATÉGICA INMEDIATA:', {
    x: 1.3,
    y: 1.95,
    w: 10.7,
    h: 0.25,
    fontSize: 9,
    color: ACCENT_CYAN,
    bold: true,
    fontFace: 'Arial',
  });

  slide14.addText(data.concreteActionNow.action, {
    x: 1.3,
    y: 2.25,
    w: 10.7,
    h: 0.95,
    fontSize: 12,
    color: TEXT_WHITE,
    bold: true,
    fontFace: 'Arial',
  });

  // 2 metric boxes
  const actionBoxes = [
    { label: 'COMPROMISO DIARIO', val: data.concreteActionNow.dailyCommitment },
    { label: 'MÉTRICA MEDIBLE', val: data.concreteActionNow.measurableMetric },
  ];

  actionBoxes.forEach((ad, idx) => {
    const xPos = 1.0 + idx * 5.8;
    slide14.addShape(pptx.ShapeType.roundRect, {
      x: xPos,
      y: 3.55,
      w: 5.5,
      h: 1.45,
      fill: { color: CARD_BG },
      line: { color: '334155', width: 1 },
      rectRadius: 0.1,
    });

    slide14.addText(ad.label, {
      x: xPos + 0.3,
      y: 3.7,
      w: 4.9,
      h: 0.25,
      fontSize: 9,
      color: ACCENT_CYAN,
      bold: true,
      fontFace: 'Arial',
    });

    slide14.addText(ad.val, {
      x: xPos + 0.3,
      y: 4.0,
      w: 4.9,
      h: 0.85,
      fontSize: 10.5,
      color: 'E2E8F0',
      fontFace: 'Arial',
    });
  });

  // Acta de Compromiso Banner in Slide 14
  slide14.addShape(pptx.ShapeType.roundRect, {
    x: 1.0,
    y: 5.15,
    w: 11.3,
    h: 1.65,
    fill: { color: '064E3B' },
    line: { color: '059669', width: 1 },
    rectRadius: 0.1,
  });

  slide14.addText(`ACTA DE COMPROMISO DEL SEMESTRE: “${data.semesterCommitment.fullDeclaration}”`, {
    x: 1.3,
    y: 5.3,
    w: 10.7,
    h: 0.85,
    fontSize: 10.5,
    color: TEXT_WHITE,
    italic: true,
    align: 'center',
    fontFace: 'Arial',
  });

  slide14.addText(`Estudiante: ${data.semesterCommitment.signedBy} | Docente: ${data.profile.professorName || 'Ing. Hitalo Veloz'} · ${data.semesterCommitment.date}`, {
    x: 1.3,
    y: 6.25,
    w: 10.7,
    h: 0.35,
    fontSize: 9.5,
    color: 'A7F3D0',
    bold: true,
    align: 'center',
    fontFace: 'Arial',
  });

  addSlideFooter(slide14, 14, TOTAL_SLIDES);
  slide14.addNotes(
    `Para culminar las 13 preguntas, fijo mi acción concreta inmediata: calcular la viabilidad y cotizaciones del primer lote de importación con los conocimientos de costos de esta cátedra, sellándolo con mi compromiso formal ante el Ing. Hitalo Veloz.`
  );

  // -------------------------------------------------------------
  // SLIDE 15: CIERRE & AGRADECIMIENTO POLITÉCNICO
  // -------------------------------------------------------------
  const slide15 = pptx.addSlide();
  applySlideBackground(slide15);

  slide15.addText('ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO', {
    x: 1.0,
    y: 1.5,
    w: 11.3,
    h: 0.4,
    fontSize: 14,
    color: ACCENT_CYAN,
    bold: true,
    align: 'center',
    fontFace: 'Arial',
    charSpacing: 2,
  });

  slide15.addText('Facultad de Administración de Empresas · Escuela de Contabilidad y Auditoría', {
    x: 1.0,
    y: 2.0,
    w: 11.3,
    h: 0.4,
    fontSize: 12,
    color: TEXT_MUTED,
    align: 'center',
    fontFace: 'Arial',
  });

  slide15.addText('“El mejor proyecto de inversión comienza en uno mismo.”', {
    x: 1.0,
    y: 2.8,
    w: 11.3,
    h: 0.8,
    fontSize: 26,
    color: TEXT_WHITE,
    bold: true,
    italic: true,
    align: 'center',
    fontFace: 'Arial',
  });

  slide15.addText(`Cátedra: Formulación y Evaluación de Proyectos | Sexto Semestre\nDocente: ${data.profile.professorName || 'Ingeniero Hitalo Veloz'}`, {
    x: 1.0,
    y: 3.8,
    w: 11.3,
    h: 0.8,
    fontSize: 14,
    color: ACCENT_GOLD,
    align: 'center',
    fontFace: 'Arial',
  });

  slide15.addShape(pptx.ShapeType.roundRect, {
    x: 3.6,
    y: 5.0,
    w: 6.0,
    h: 1.0,
    fill: { color: CARD_BG },
    line: { color: '334155', width: 1 },
    rectRadius: 0.1,
  });

  slide15.addText('¡Muchas gracias por su atención!', {
    x: 3.6,
    y: 5.3,
    w: 6.0,
    h: 0.4,
    fontSize: 14,
    color: ACCENT_CYAN,
    bold: true,
    align: 'center',
    fontFace: 'Arial',
  });

  addSlideFooter(slide15, 15, TOTAL_SLIDES);
  slide15.addNotes(
    `Muchas gracias por su atención, estimado Ingeniero Hitalo Veloz y compañeros. Quedo a su completa disposición para preguntas, sugerencias y recomendaciones para seguir fortaleciendo este proyecto.`
  );

  // Generate and download PPTX file directly in browser
  const fileName = `Proyecto_de_Vida_${data.profile.name.replace(/\s+/g, '_')}_ESPOCH.pptx`;
  await pptx.writeFile({ fileName });
};

// Export alias for compatibility
export const generatePptxFile = exportToGoogleSlidesPptx;
