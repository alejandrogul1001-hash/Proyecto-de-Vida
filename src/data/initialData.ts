import { ProjectLifeData } from '../types';

export const initialProjectLifeData: ProjectLifeData = {
  profile: {
    name: 'José Alejandro Gullqui',
    university: 'Escuela Superior Politécnica de Chimborazo (ESPOCH)',
    faculty: 'Facultad de Administración de Empresas (FADE)',
    school: 'Escuela de Contabilidad y Auditoría',
    career: 'Contabilidad y Auditoría',
    subject: 'Formulación y Evaluación de Proyectos',
    semester: 'Sexto Semestre',
    parallel: 'Paralelo 1',
    professorTitle: 'Docente',
    professorName: 'Ingeniero Hitalo Veloz',
    location: 'Riobamba, Chimborazo, Ecuador',
    tagline: 'Uniendo la contabilidad y las finanzas con la tecnología, la inteligencia artificial y el emprendimiento.',
  },

  // 1. ¿Quién soy realmente?
  whoAmI: {
    core: 'Soy un estudiante de Contabilidad y Auditoría en la ESPOCH, pero mi identidad va mucho más allá de los números. Soy una persona con una mente analítica que se encuentra fascinada entre las finanzas y la tecnología. Me gusta crear herramientas y disfrutar de la inteligencia artificial, el desarrollo de software y la tecnología móvil, buscando siempre entender cómo funcionan las cosas por dentro para poder construir soluciones útiles y reales.',
    identityPillars: [
      'Estudiante de Contabilidad y Auditoría en la ESPOCH con mente analítica.',
      'Fascinación genuina por la intersección entre las finanzas y la tecnología.',
      'Creador de herramientas: pasión por la inteligencia artificial, software y tecnología móvil.',
      'Curiosidad por entender cómo funcionan las cosas por dentro para construir soluciones.',
    ],
    philosophy: 'Unir de forma estratégica la domótica inteligente y el comercio exterior de tecnología con el rigor financiero y contable para consolidar una empresa innovadora y sostenible.',
  },

  // 2. ¿Cuáles considero que son mis principales fortalezas?
  strengths: [
    {
      id: 's1',
      title: 'Aprendizaje Autónomo y Fusión Disciplinaria',
      description: 'Mi mayor fortaleza es mi capacidad para aprender de manera autónoma y cruzar conocimientos: enlazo los fundamentos contables de mi carrera con la lógica para manejar herramientas de inteligencia artificial, bases de datos y desarrollo web.',
      category: 'tecnologica',
    },
    {
      id: 's2',
      title: 'Visión Comercial Práctica y Oportunidad',
      description: 'Tengo una visión comercial aterrizada a la realidad, identificando nichos de alta demanda en dispositivos tecnológicos, celulares y soluciones de domótica.',
      category: 'estrategica',
    },
    {
      id: 's3',
      title: 'Resiliencia y Enfoque en Soluciones',
      description: 'Frente a problemas y contratiempos, mantengo la serenidad y la resiliencia para enfrentarlos buscando siempre una solución práctica y viable.',
      category: 'humana',
    },
    {
      id: 's4',
      title: 'Lógica Computacional e Inteligencia Artificial',
      description: 'Capacidad de estructurar bases de datos, automatizaciones e integrar modelos de IA para optimizar procesos comerciales y operativos.',
      category: 'tecnologica',
    },
    {
      id: 's5',
      title: 'Criterio Financiero y Control Riguroso de Costos',
      description: 'Fundamentación sólida en Contabilidad y Auditoría en la ESPOCH para costear aranceles, evaluar presupuestos y asegurar la rentabilidad real de cada operación.',
      category: 'analitica',
    },
    {
      id: 's6',
      title: 'Curiosidad Constructiva',
      description: 'Deseo constante de desarmar conceptos, entender su arquitectura interna y reconstruirlos en herramientas que aporten valor.',
      category: 'analitica',
    },
  ],

  // 3. ¿Qué aspectos de mí necesito mejorar?
  growthAreas: [
    {
      id: 'g1',
      aspect: 'Superar la postergación y valorar el tiempo presente',
      strategy: 'A veces me dejo llevar por la idea de que "aún tengo tiempo" cuando no es así. En estos años universitarios es donde más debo aprovechar cada hora disponible, actuando con inmediatez.',
      status: 'prioridad',
      rootCause: 'Falsa sensación de tiempo infinito y postergación de tareas clave.',
    },
    {
      id: 'g2',
      aspect: 'Enfocar la curiosidad y evitar la dispersión de proyectos',
      strategy: 'Mi curiosidad me lleva a abarcar demasiados proyectos tecnológicos o ideas al mismo tiempo. Necesito mejorar mi enfoque y la gestión de mi tiempo, aprendiendo a priorizar estrictamente para no dejar proyectos a medias.',
      status: 'prioridad',
      rootCause: 'Abarcar múltiples frentes e ideas tecnológicas simultáneamente.',
    },
    {
      id: 'g3',
      aspect: 'Seguir perfeccionando mi nivel de inglés',
      strategy: 'El inglés es fundamental para el mundo tecnológico y comercial internacional; debo practicarlo de forma continua para negociar con proveedores extranjeros y leer documentación técnica.',
      status: 'prioridad',
      rootCause: 'Falta de inmersión diaria en el idioma técnico y de negocios.',
    },
    {
      id: 'g4',
      aspect: 'Mejorar mis hábitos en su totalidad forjando disciplina',
      strategy: 'Construir mi mejor versión a través de la disciplina diaria: sé que al inicio será difícil, pero cada día que pase con constancia y disciplina se hará más sencillo.',
      status: 'en_proceso',
      rootCause: 'Necesidad de consolidar rutinas fijas que venzan la pereza momentánea.',
    },
  ],

  // 4. ¿Qué tipo de persona quiero llegar a ser?
  targetPersona: {
    statement: 'Quiero ser un profesional integral, innovador y confiable. Alguien que no se limite a seguir los procesos tradicionales, sino que sea capaz de optimizarlos y automatizarlos. Quiero ser reconocido como una persona que tiene la habilidad de fusionar el mundo empresarial y financiero con la vanguardia tecnológica, manteniendo siempre la ética y la eficiencia. Además, ser conocido por mi forma de ser y calidad de persona: ser siempre humano, empático y humilde a pesar de las circunstancias.',
    virtues: [
      'Humildad y calidez humana inalterables a pesar del éxito.',
      'Empatía sincera y trato cercano con cada persona.',
      'Innovación constante: optimizar y automatizar procesos tradicionales.',
      'Ética profesional, transparencia y confiabilidad absoluta.',
    ],
    impactVision: 'Ser recordado no solo por mis logros empresariales o tecnológicos, sino por mi calidad humana: alguien humilde, empático y capaz de poner la tecnología al servicio de las personas.',
  },

  // 5. ¿Qué quiero conseguir en mi vida personal?
  personalGoal: {
    title: 'Equilibrio Mental, Familia y Pasión Libre por la Tecnología',
    description: 'Busco alcanzar un equilibrio donde pueda seguir aprendiendo de la inteligencia artificial sin sacrificar mi tranquilidad mental ni el tiempo invaluable con mi familia. Además, poder fusionar estos aprendizajes con mi carrera para saber cómo llevar un proyecto de manera contable y sobre todo rentable. Quiero tener la libertad de seguir aprendiendo sobre desarrollo y nuevas tecnologías, no solo por trabajo, sino como una pasión personal que me mantenga motivado.',
    milestones: [
      'Tranquilidad mental y salud física como bases irrenunciables.',
      'Tiempo de calidad protegido con mi familia sin sacrificar su bienestar.',
      'Fusionar el aprendizaje tecnológico con la contabilidad para asegurar rentabilidad.',
      'Libertad de aprender sobre desarrollo y nuevas tecnologías como pasión personal.',
    ],
    habits: [
      'Horarios disciplinados para evitar el agotamiento mental.',
      'Tiempo semanal sagrado y dedicado a mi familia.',
      'Estudio continuo de inteligencia artificial aplicada y desarrollo de software.',
      'Revisión y orden financiero personal con rigor contable.',
    ],
  },

  // 6. ¿Qué quiero alcanzar profesionalmente?
  professionalGoal: {
    title: 'Empresario e Importador de Tecnología y Domótica con Base Contable',
    description: 'No me veo únicamente detrás de un escritorio haciendo auditorías tradicionales o tal vez manejando un sistema contable como ayudante. Mi visión profesional es convertirme en un exitoso vendedor e importador de celulares y dispositivos tecnológicos, enfocándome en el mundo de la domótica (ya que las personas normalmente buscan mayor confort y comodidad) y en las automatizaciones para facilitar la vida a las personas. Quiero utilizar mis conocimientos en contabilidad y auditoría para estructurar y administrar mi propio negocio de importación de manera impecable, apoyándome en la inteligencia artificial y el comercio electrónico para escalar las ventas y optimizar la logística.',
    focusAreas: [
      'Importación directa y comercialización de smartphones y dispositivos tecnológicos.',
      'Soluciones integrales de domótica para el confort y la automatización de hogares y oficinas.',
      'Administración contable, financiera y tributaria impecable de mi propio negocio.',
      'Aplicación de inteligencia artificial y e-commerce para escalar ventas y logística.',
    ],
    milestones: [
      'Graduación en la ESPOCH como Licenciado/Ingeniero en Contabilidad y Auditoría.',
      'Constitución y estructuración legal de mi empresa importadora de tecnología.',
      'Plataforma de e-commerce propia con cotizador inteligente y catálogo activo.',
      'Primer showroom interactivo de domótica y automatizaciones inteligentes.',
    ],
  },

  // 7. ¿Qué nivel o meta económica deseo alcanzar?
  economicGoal: {
    title: 'Libertad Financiera, Independencia y Múltiples Fuentes de Ingresos',
    description: 'Deseo alcanzar la libertad financiera y la independencia económica a través de la creación de mi propia empresa comercial. Mi meta es generar múltiples fuentes de ingresos: una principal a través de la importación y venta de tecnología, y otras complementarias derivadas de consultorías o desarrollos tecnológicos, logrando un nivel de facturación que me permita reinvertir, expandirme y vivir con total comodidad y tranquilidad familiar.',
    targetAmount: 'Independencia Financiera con reinversión continua',
    strategy: 'Diversificación inteligente: importación de alta rotación (celulares), instalaciones de alto valor agregado (domótica) y desarrollo de herramientas tecnológicas, reinvirtiendo sistemáticamente para expandir capital.',
    investmentPhilosophy: '“La verdadera libertad económica se construye conociendo el costo real de cada centavo, reinvirtiendo con visión y ofreciendo soluciones tecnológicas que mejoren la vida de la gente.”',
    keyMetrics: [
      'Ingreso principal: importación y venta de smartphones y dispositivos inteligentes.',
      'Ingresos derivados: soluciones de domótica, consultorías y desarrollos tecnológicos.',
      'Reinversión activa de utilidades para apalancar compras de mayor volumen.',
      'Cultura de ahorro sistemático y reinversión de capital para el crecimiento del negocio.',
      'Respaldo económico sólido y duradero para mi bienestar y el de mi familia.',
    ],
  },

  // 8. ¿Dónde quiero estar dentro de 5 años?
  fiveYearRoadmap: [
    {
      year: 'Año 1 (2026)',
      stage: 'Sexto Semestre & Bases del Proyecto de Domótica',
      focus: 'Aprobar sexto semestre en la ESPOCH y comenzar con las bases de la formulación de mi proyecto de domótica y confort inteligente.',
      keyResults: [
        'Aprobar las asignaturas de 6to semestre en Contabilidad y Auditoría (ESPOCH).',
        'Formular las bases técnicas, de mercado y costeo de domótica en la cátedra del Ing. Hitalo Veloz.',
        'Investigación y validación inicial de dispositivos inteligentes, protocolos de automatización y proveedores.',
      ],
    },
    {
      year: 'Año 2 (2027)',
      stage: 'Séptimo Semestre, Desarrollo del Sistema & Primeras Importaciones',
      focus: 'Aprobar séptimo semestre en la ESPOCH, desarrollar el sistema tecnológico para el control integral de las importaciones y arrancar las primeras importaciones.',
      keyResults: [
        'Aprobar las asignaturas de 7mo semestre de la carrera en la ESPOCH.',
        'Desarrollo e implementación del sistema informático especializado para llevar el control logístico y arancelario de las importaciones.',
        'Iniciar las primeras importaciones directas para validar comercialmente dispositivos tecnológicos y soluciones de domótica.',
      ],
    },
    {
      year: 'Año 3 (2028)',
      stage: 'Graduación de la ESPOCH & Escalabilidad de Importaciones',
      focus: 'Culminar la carrera y graduarme de la ESPOCH como Licenciado/Ingeniero en Contabilidad y Auditoría, impulsando la escalabilidad comercial y volumen de importación.',
      keyResults: [
        'Obtención de mi título profesional en la ESPOCH con bases contables, tributarias y financieras de alto nivel.',
        'Escalabilidad en el volumen de importaciones directas de domótica y tecnología con mejores márgenes de rentabilidad.',
        'Reinversión sistemática de utilidades y automatización contable del negocio en crecimiento.',
      ],
    },
    {
      year: 'Año 4 (2029)',
      stage: 'Apertura de mi Primer Local & Oficinas de Instalaciones',
      focus: 'Abrir mi primer local comercial físico y oficinas técnicas para demostración interactiva, venta y servicios de instalación de domótica.',
      keyResults: [
        'Apertura e inauguración del primer local comercial y oficinas de instalaciones de domótica.',
        'Montaje del showroom interactivo donde los clientes comprueban el confort y la automatización en tiempo real.',
        'Contratación y capacitación de equipo técnico instalador para atender proyectos residenciales y corporativos.',
      ],
    },
    {
      year: 'Año 5 (2030 - 2031)',
      stage: 'Empresa Consolidada & Tranquilidad y Bienestar Familiar',
      focus: 'Consolidar la empresa de domótica e importaciones como referente del sector, logrando independencia financiera y brindando bienestar integral y tranquilidad a mi familia.',
      keyResults: [
        'Empresa formalmente posicionada, rentable y con operaciones comerciales automatizadas.',
        'Libertad e independencia financiera sólida generada por operaciones recurrentes.',
        'Tranquilidad, respaldo duradero y tiempo de calidad para mi familia.',
      ],
    },
  ],

  // 9. ¿Qué sueño o meta importante todavía no he comenzado a perseguir?
  unstartedDream: {
    title: 'Estructurar Formalmente mi Empresa Importadora y Lanzar la Marca',
    description: 'He investigado a fondo sobre dispositivos, celulares y domótica, y poseo la base contable de mi carrera. Sin embargo, el paso que aún no he comenzado de lleno es diseñar el plan de negocios definitivo, registrar la identidad de la marca, establecer los contactos directos con proveedores en el exterior y gestionar el capital inicial para el primer lote de importación.',
    whyNotYet: 'Antes me faltaba aterrizar la idea en un documento formal con costos y proyecciones, algo que ahora estoy aprendiendo a hacer.',
    whyPending: 'Falta de estructuración metodológica y temor al riesgo financiero inicial, superado ahora con los costos y análisis aprendidos en clase.',
    firstStep: 'Aprovechar este semestre en la materia del Ingeniero Hitalo Veloz para darle forma metodológica al proyecto, calculando con exactitud los costos, aranceles y la viabilidad del primer pedido.',
  },

  // 10. ¿Qué obstáculos podrían impedirme alcanzar mis metas?
  obstacles: [
    {
      obstacle: 'Temor al riesgo financiero que implica invertir capital propio',
      severity: 'alta',
      impact: 'Riesgo de liquidez y pérdida del capital inicial de inversión',
      mitigation: 'Superarlo con la preparación de la carrera: presupuestos detallados, análisis de costos reales y comenzar con un lote pequeño para validar el mercado con prudencia.',
    },
    {
      obstacle: 'Trámites y regulaciones aduaneras de comercio exterior',
      severity: 'alta',
      impact: 'Demoras en nacionalización y costos arancelarios imprevistos',
      mitigation: 'Estudiar con responsabilidad las normativas aduaneras, requisitos arancelarios y buscar orientación profesional para hacer todo de forma 100% legal y correcta.',
    },
    {
      obstacle: 'Carga académica y dispersión entre ideas creativas',
      severity: 'media',
      impact: 'Dispersión de esfuerzos y retrasos en los hitos del proyecto',
      mitigation: 'Organizar mi horario de manera responsable y utilizar los trabajos académicos como el motor directo para construir mi negocio, uniendo la teoría con la práctica.',
    },
    {
      obstacle: 'Postergación en tareas importantes por buscar el momento perfecto',
      severity: 'alta',
      impact: 'Pérdida de ventaja competitiva y frustración personal',
      mitigation: 'Ponerme metas semanales claras, cumplir con disciplina diaria y recordar que el momento de empezar a forjar mi futuro es ahora.',
    },
  ],

  // 11. ¿Qué estoy dispuesto/a a cambiar, aprender o sacrificar para conseguirlas?
  willingness: {
    toLearn: [
      'Sumergirme de lleno en el estudio de las normativas aduaneras, aranceles y procesos de importación en Ecuador.',
      'Perfeccionar habilidades en desarrollo de herramientas con inteligencia artificial para automatizar procesos y llevar números contables que me hagan competitivo.',
      'Mejorar de manera continua mi inglés comercial y técnico para negociar directamente con proveedores extranjeros.',
      'Aprender a fondo sobre domótica y automatizaciones para ofrecer soluciones de confort que realmente faciliten la vida de las personas.',
    ],
    toChange: [
      'Cambiar de mentalidad: pasar de verme solo como "estudiante" a asumir la postura de un "futuro emprendedor y empresario", haciéndome responsable de mis finanzas desde hoy.',
      'Erradicar la costumbre de postergar tareas importantes por confiarme falsamente en que "aún hay tiempo".',
      'Canalizar mi curiosidad para enfocarme y priorizar con disciplina, terminando cada proyecto antes de abrir uno nuevo.',
    ],
    toSacrifice: [
      'Sacrificar horas de ocio, comodidad o entretenimiento improductivo para invertirlas en la planificación de mi negocio.',
      'La comodidad de quedarme solo en la teoría académica para asumir el reto de ejecutar en la práctica real.',
      'Gastos innecesarios en el presente para proteger y capitalizar el fondo de mi primera importación.',
    ],
  },

  // 12. Si continúo haciendo exactamente lo mismo que hago hoy, ¿mi vida me llevará al lugar donde quiero estar?
  realityCheck: {
    willItTakeMeThere: false,
    honestAssessment: 'Si soy completamente sincero conmigo mismo: si continúo haciendo exactamente lo mismo que hago hoy, probablemente me llevaría a ser un buen contador o auditor, pero no me llevaría a ser el importador y creador tecnológico que realmente deseo ser. Si no empiezo a ejecutar acciones comerciales y a estructurar mi modelo de negocio ahora, me quedaré en la teoría y en la zona de confort del mundo académico.',
    verdict: 'Es momento de actuar',
    theCostOfInaction: 'Quedarme atrapado en la teoría académica y en la comodidad del rol de estudiante, dejando pasar los años decisivos de la universidad sin haber construido mi propia empresa.',
    gapAnalysis: 'La brecha no está en la capacidad intelectual, sino en el paso decisivo de la intención a la ejecución diaria: disciplina, programación del sistema y cálculo de viabilidad real.',
  },

  // 13. ¿Cuál será una acción concreta que empezaré a realizar desde ahora?
  concreteActionNow: {
    action: 'Comenzar la construcción del sistema donde se llevará de lleno todo el control de las importaciones con el fin de tener un valor competitivo en el mercado, además del estudio de mercado y el análisis de viabilidad financiera (costos, impuestos, aranceles) para la importación de tecnología y domótica, utilizando las herramientas de esta asignatura para darle forma real al proyecto.',
    dailyCommitment: 'Dedicar tiempo diario constante a la programación de la herramienta y al estudio de la estructura de costos de importación.',
    deadline: 'Durante el desarrollo del 6to Semestre en la cátedra de Proyectos de Inversión',
    measurableMetric: 'Tener el sistema base de importaciones funcionando con la hoja de costeo arancelario y el estudio de viabilidad completo.',
  },

  // Compromiso del semestre
  semesterCommitment: {
    phrase: 'Durante este semestre me comprometo a...',
    fullDeclaration: 'Durante este semestre me comprometo a utilizar los conocimientos de Proyectos de Inversión no solo para aprobar la materia, sino para formular el plan base de mi futuro negocio de importación y venta de tecnología, estructurando mi tiempo para avanzar cada semana sin excusas.',
    signedBy: 'José Alejandro Gullqui',
    date: 'Sexto Semestre · Escuela Superior Politécnica de Chimborazo',
    hashVerification: 'ESPOCH-FADE-PV-2026-OK',
  },
};
