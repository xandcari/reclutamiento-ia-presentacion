/* Datos fijos y textos del sitio, en español e inglés. Todo lo que aparece en pantallas de ejemplo son datos FICTICIOS.
   Las cifras de ahorro de tiempo o de preferencia de las personas NO figuran: no se midieron. */
window.DATA = {
  email: "contacto@ejemplo.com",   // dato genérico de ejemplo: reemplazar por el de contacto real antes de usarlo con clientes
  stats: [
    { id: "tests", n: 807 },
    { id: "groups", n: 4 },
    { id: "roles", n: 3 },
    { id: "real", n: 0 }
  ],
  /* "hoy" = funciona y está probado · "hoy*" = funciona en el canal de prueba, con salvedades · "ruta" = todavía no existe */
  steps: [
    { id: "link", tag: "hoy" },
    { id: "chat", tag: "hoy*" },
    { id: "filter", tag: "hoy" },
    { id: "ranking", tag: "hoy" },
    { id: "agenda", tag: "hoy*" },
    { id: "interview", tag: "hoy" }
  ],
  guards: [
    { id: "scope", tag: "hoy" },
    { id: "cv", tag: "hoy" },
    { id: "cost", tag: "ruta" }
  ],
  groups: ["ok", "rev", "pen", "no"],
  phases: [
    { id: "p1", status: "building" },
    { id: "p2", status: "design" },
    { id: "p3", status: "idea" }
  ]
};

window.T = {};

/* ═════════════════════════════ ESPAÑOL ═════════════════════════════ */
window.T.es = {
  meta: {
    title: "Nira — reclutamiento con chatbot: la IA asiste, las decisiones son de personas",
    desc: "Nira: plataforma de reclutamiento con chatbot para consultoras de RR. HH., reclutadores y PyMEs. Preselección de perfiles, ranking explicable y agenda de entrevistas."
  },
  ui: {
    skip: "Ir al contenido", menu: "Menú", lang: "Idioma", theme: "Tema", copy: "Copiar", copied: "¡Copiado!", top: "Volver arriba",
    themeNames: { light: "Claro", dark: "Oscuro", rose: "Rosa", cream: "Crema" },
    today: "Funciona hoy", testChannel: "Funciona hoy en el canal de prueba", concept: "Maqueta de concepto", roadmap: "Hoja de ruta"
  },
  nav: { home: "Inicio", journey: "Recorrido", panel: "Panel y colores", bot: "Bot y agenda", ai: "IA y video", report: "Informe y confianza", roadmap: "Hoja de ruta", contact: "Contacto" },
  hero: {
    badge: "Presentación del producto · en desarrollo",
    kicker: "Presentamos",
    role: "Agilidad, inteligencia, cercanía y eficiencia",
    tagline: "Plataforma de reclutamiento con chatbot para consultoras de RR. HH., reclutadores independientes y PyMEs: la persona se postula por chat, Nira ordena y explica el ranking, y la agenda de entrevistas se coordina sola. La IA asiste; las decisiones son de personas.",
    cta1: "Ver el recorrido", cta2: "Hablemos", cta3: "Presentación interactiva"
  },
  stats: {
    tests: "pruebas automáticas que pasan",
    groups: "grupos de evaluación, con color y con texto",
    roles: "roles con permisos separados: admin, reclutador y empresa",
    real: "mensajes reales enviados: todo corre en un canal de prueba"
  },
  journey: {
    title: "Del caos de postulaciones a la entrevista que vale",
    intro: "El primer módulo es la preselección de perfiles: Nira atiende a cada postulante, ordena la información y te entrega un ranking para que entrevistes solo a quienes corresponde.",
    problemTitle: "El desafío",
    problems: [
      { h: "Caos de postulaciones masivas", p: "Cientos de CV y mensajes por correo, LinkedIn y portales. No hay tiempo de responder a todos." },
      { h: "Filtro manual exhaustivo", p: "Horas leyendo CV y escribiendo mensajes para validar lo básico: zona, disponibilidad, pretensión." },
      { h: "Entrevistas con perfiles que no ajustan", p: "Personas que no cumplen los requisitos y una entrevista perdida para ambas partes." }
    ],
    solutionTitle: "Cómo funciona, paso a paso",
    steps: {
      link: { h: "1 · Enlace o QR", p: "Creás la búsqueda desde una plantilla y obtenés un enlace único o un QR para tu aviso." },
      chat: { h: "2 · Chatbot", p: "La persona se postula conversando, una pregunta por vez y con su consentimiento." },
      filter: { h: "3 · Filtrado", p: "Nira pregunta lo clave (zona, disponibilidad, experiencia, pretensión) y lee el CV si es un PDF con texto." },
      ranking: { h: "4 · Ranking explicable", p: "Un Top de candidatos ordenado por grupo y puntaje, con la evidencia de cada criterio." },
      agenda: { h: "5 · Agenda", p: "A quienes invitás, Nira les ofrece turnos y coordina la entrevista, sin dobles reservas." },
      interview: { h: "6 · Entrevista humana", p: "Una persona entrevista a los finalistas y toma la decisión final." }
    },
    tags: { "hoy": "Funciona hoy", "hoy*": "Hoy, con salvedades", "ruta": "Hoja de ruta" },
    notes: "Salvedades: la conversación corre hoy en un canal de prueba (WhatsApp real y chat web todavía no), y los turnos son propios de Nira (la integración con Google Calendar u Outlook todavía no está).",
    compareTitle: "Antes y con Nira",
    compare: {
      before: "Antes", after: "Con Nira",
      rows: [
        ["Preselección a mano, CV por CV", "Ranking explicable de las personas que cumplen lo pedido"],
        ["Responder una por una las mismas preguntas", "El chatbot atiende a toda hora y recoge los datos clave"],
        ["Idas y vueltas para coordinar horarios", "La persona elige su turno por el chat, sin dobles reservas"],
        ["Entrevistar a perfiles que no ajustan", "Entrevistas solo con finalistas"]
      ]
    },
    guardsTitle: "Cómo cuidamos la conversación",
    guards: {
      scope: { h: "Si preguntan algo que no sabemos, no inventamos", p: "Ante una pregunta fuera de alcance, el bot responde que esa información se verá en la entrevista y vuelve a la pregunta pendiente." },
      cv: { h: "Si el CV falla, la charla completa los datos", p: "Si el archivo no se puede leer o la persona no lo manda, las preguntas del chat dejan registrada la información esencial." },
      cost: { h: "Costos de WhatsApp: empezar por un camino liviano", p: "La API oficial cobra por conversación y exige plantillas. La idea es arrancar con un chat web o un proveedor intermedio hasta tener volumen." }
    }
  },
  panel: {
    title: "Un panel para quien decide",
    intro: "Las personas de RR. HH. ven de un vistazo quién avanza, por qué y qué falta. Esta pantalla es una maqueta; hoy existe un panel simple para probar la app, con tablero por estados y métricas.",
    tag: "Maqueta de concepto · datos ficticios",
    mock: { brand: "Nira", menu: ["Búsquedas", "Postulaciones", "Tablero", "Métricas"], confidence: { alta: "Confianza alta", media: "Confianza media", baja: "Confianza baja" }, decider: "Lo decide una persona" },
    scaleTitle: "Una escala de colores amigable para RR. HH.",
    groups: {
      ok: { h: "Cumple los mínimos", p: "Verde azulado: listo para entrevistar." },
      rev: { h: "Revisión manual", p: "Azul: hay un dato que una persona debe mirar." },
      pen: { h: "Falta información", p: "Ámbar: se le puede pedir a la persona." },
      no: { h: "No cumple un excluyente", p: "Coral suave, no rojo alarma: se explica con respeto." }
    },
    principles: [
      "El color acompaña al texto, nunca lo reemplaza: cada grupo dice su nombre.",
      "Sin semáforo rojo y verde: los grupos se distinguen por tono y por luminosidad.",
      "El color no decide: ningún grupo descarta a nadie solo."
    ],
    candidates: [
      { name: "María L.", g: "ok", score: "82–91", conf: "alta" },
      { name: "Tomás R.", g: "rev", score: "64–78", conf: "media" },
      { name: "Lucía F.", g: "pen", score: "55–90", conf: "baja" },
      { name: "Diego P.", g: "no", score: "—", conf: null }
    ],
    kpis: { ok: "Cumplen los mínimos", rev: "Revisión manual", pen: "Falta información" }
  },
  bot: {
    title: "El chatbot que postula y agenda",
    intro: "La persona se postula chateando con Nira y, cuando la invitan, elige su turno de entrevista con un número.",
    tag: "Funciona hoy en el canal de prueba",
    chat: [
      { me: false, t: "Tu entrevista: 1) vie 23/10 10:00, 2) vie 23/10 10:30. Elegí con el número." },
      { me: true, t: "2" },
      { me: false, t: "Listo, tu turno quedó confirmado." },
      { me: true, t: "CANCELAR TURNO" },
      { me: false, t: "Listo, cancelé tu turno. Escribí TURNO para elegir otro." }
    ],
    points: [
      { h: "Una pregunta por vez", p: "Y retoma donde quedó si la persona vuelve después." },
      { h: "Consentimiento primero", p: "No guarda nada sin permiso, y cada permiso se puede retirar." },
      { h: "Turnos sin dobles reservas", p: "Individuales o grupales, con confirmación y recordatorio." },
      { h: "BAJA cuando quiera", p: "Libera su turno y deja de recibir mensajes." }
    ],
    note: "Conversación de ejemplo. Con WhatsApp real hacen falta credenciales de Meta (o un proveedor intermedio) y plantillas aprobadas para avisar fuera de las 24 horas."
  },
  ai: {
    title: "IA y video, con límites claros",
    intro: "Nira nace como asistente: ordena y explica; las decisiones son de personas. Lo que sigue amplía lo que ya funciona.",
    tabAi: "IA como asistente", tabVideo: "Video de presentación",
    tag: "Hoja de ruta · todavía no existe",
    items: [
      { h: "Lee cualquier CV", p: "Fotos y PDF escaneados, además de los PDF con texto que ya se leen hoy. La persona confirma cada dato." },
      { h: "Resume y explica", p: "Redacta en lenguaje claro por qué una persona quedó en cada grupo, sin cambiar el puntaje." },
      { h: "Prepara la entrevista", p: "Sugiere preguntas para verificar lo que quedó pendiente en la ficha." }
    ],
    rulesTitle: "Reglas que no se negocian",
    rules: "El puntaje lo calculan reglas deterministas, nunca un modelo de lenguaje. La IA no usa edad, género, aspecto ni otras características protegidas, no decide contrataciones y solo analiza con consentimiento."
  },
  video: {
    tag: "Fase 2 · maqueta de concepto",
    mock: { q: "Pregunta 1 de 3", ask: "Contanos cómo atendiste a un cliente difícil.", cam: "Vista de cámara", attempt: "Intento 2 de 3", again: "Grabar de nuevo", send: "Enviar", written: "Prefiero responder por escrito" },
    steps: [
      "La persona recibe la invitación por el chat",
      "Hasta 3 preguntas, de hasta 45 segundos",
      "Hasta 3 intentos por pregunta, con contador",
      "Revisa su video y recién ahí lo envía",
      "Siempre puede responder por escrito"
    ],
    rulesTitle: "Solo cuenta lo que dice",
    rules: "Se evalúa el contenido. Nunca el rostro, la voz ni el acento. Con consentimiento y almacenamiento privado."
  },
  report: {
    title: "Lo que ve la empresa cliente",
    intro: "Para una consultora que presenta candidatos: un informe con solo lo pertinente, con criterios y su evidencia, sin chat ni datos de contacto salvo autorización.",
    tag: "Funciona hoy · datos ficticios",
    candidates: [
      { name: "Candidato A", g: "ok", line: "Puntaje 82–91 · confianza alta. Experiencia de 2 años, confirmada por la persona." },
      { name: "Candidato B", g: "pen", line: "Puntaje 55–90 · confianza baja. Falta verificar una certificación." }
    ],
    points: [
      { h: "Anónimo por defecto", p: "Nombre, contacto y CV solo si el equipo lo habilita y la persona lo autorizó." },
      { h: "La autorización se revisa siempre", p: "Si la persona escribe BAJA, sus datos dejan de verse en el informe." },
      { h: "Sin chat ni textos libres", p: "Solo criterios con su evidencia y las observaciones del equipo." },
      { h: "Imprimible como PDF", p: "Hoy desde el navegador; el PDF generado por el servidor es un próximo paso." }
    ]
  },
  trust: {
    title: "Pensado para datos de personas",
    items: [
      { h: "Cada empresa, aislada", p: "Un cliente nunca ve datos de otro, y solo ve lo que se le publica." },
      { h: "Consentimiento por finalidad", p: "Guardar datos, analizar con IA y compartir con la empresa se autorizan por separado." },
      { h: "Archivos privados y cifrados", p: "Los CV y los teléfonos no se publican ni se sirven como archivos abiertos." },
      { h: "Auditoría de punta a punta", p: "Quién hizo qué queda registrado, sin guardar datos personales en el registro." }
    ],
    note: "Los textos de consentimiento son un borrador: falta la revisión legal (Ley 25.326) antes de operar con personas reales."
  },
  roadmap: {
    title: "Por módulos, empezando por la preselección",
    intro: "Sin fechas comprometidas: dependen de las credenciales de WhatsApp, de elegir proveedor de IA y de lo que muestre el piloto.",
    status: { building: "Hoy", design: "Siguiente", idea: "Más adelante" },
    phases: {
      p1: { name: "Módulo 1 · Preselección", desc: "Búsquedas desde plantillas, chatbot, ranking explicable con Top 10, tablero por estados, métricas, informe para el cliente y agenda de turnos. Falta: WhatsApp real, chat web y lectura de imágenes.", tags: ["plantillas", "ranking", "agenda", "métricas"] },
      p2: { name: "Módulo 2 · Video", desc: "Video de presentación de 3 preguntas de 45 segundos, con alternativa escrita y transcripción con consentimiento.", tags: ["video", "consentimiento"] },
      p3: { name: "Escala", desc: "Google Calendar y Outlook, cobro por suscripción con débito automático, analítica y comparación de campañas.", tags: ["calendarios", "suscripción", "analítica"] }
    }
  },
  plans: {
    title: "Suscripción mensual: tres formas de empezar",
    intro: "Borrador a definir con los primeros clientes: abono mensual por SaaS, con el cobro por adelantado. Los valores se calculan con los costos reales de WhatsApp, IA y almacenamiento.",
    items: [
      { name: "Piloto", price: "[USD __ / mes]", desc: "Una búsqueda de prueba sin costo (propuesta) para ver el ranking con datos reales, y después abono mensual." },
      { name: "Equipo", price: "[USD __ / mes]", desc: "Más búsquedas, tablero, métricas, informes para el cliente y agenda de entrevistas." },
      { name: "Consultora", price: "[USD __ / mes]", desc: "Varias empresas clientes con su identidad visual, video, analítica y límites a medida." }
    ]
  },
  contact: {
    title: "Probemos Nira con una búsqueda real",
    lead: "Una búsqueda de tu consultora o PyME, WhatsApp conectado y textos legales revisados. Después medimos cuánto tiempo se ahorra y cómo lo vive cada persona, con datos propios.",
    note: "Dato de contacto genérico, de ejemplo."
  },
  footer: "Sitio estático con datos ficticios · no usa cookies ni envía datos: solo recuerda tu idioma y tema en este navegador"
};

/* ═════════════════════════════ ENGLISH ═════════════════════════════ */
window.T.en = {
  meta: {
    title: "Nira — chatbot recruiting: AI assists, people decide",
    desc: "Nira: a chatbot recruiting platform for HR consultancies, independent recruiters and small businesses. Candidate pre-screening, explainable ranking and interview scheduling."
  },
  ui: {
    skip: "Skip to content", menu: "Menu", lang: "Language", theme: "Theme", copy: "Copy", copied: "Copied!", top: "Back to top",
    themeNames: { light: "Light", dark: "Dark", rose: "Rose", cream: "Cream" },
    today: "Works today", testChannel: "Works today in the test channel", concept: "Concept mockup", roadmap: "Roadmap"
  },
  nav: { home: "Home", journey: "Journey", panel: "Panel & colors", bot: "Bot & scheduling", ai: "AI & video", report: "Report & trust", roadmap: "Roadmap", contact: "Contact" },
  hero: {
    badge: "Product presentation · in development",
    kicker: "Introducing",
    role: "Agility, intelligence, closeness and efficiency",
    tagline: "A chatbot recruiting platform for HR consultancies, independent recruiters and small businesses: people apply by chat, Nira organizes and explains the ranking, and interview scheduling takes care of itself. AI assists; people decide.",
    cta1: "See the journey", cta2: "Let's talk", cta3: "Interactive presentation"
  },
  stats: {
    tests: "automated tests passing",
    groups: "evaluation groups, shown with color and text",
    roles: "roles with separate permissions: admin, recruiter and company",
    real: "real messages sent: everything runs in a test channel"
  },
  journey: {
    title: "From application chaos to the interview that matters",
    intro: "The first module is candidate pre-screening: Nira talks to every applicant, organizes the information and hands you a ranking so you interview only the right people.",
    problemTitle: "The challenge",
    problems: [
      { h: "Mass application chaos", p: "Hundreds of résumés and messages by email, LinkedIn and job boards. No time to answer everyone." },
      { h: "Exhaustive manual screening", p: "Hours reading résumés and writing messages just to check the basics: location, availability, salary expectation." },
      { h: "Interviews with profiles that do not fit", p: "People who do not meet the requirements, and a wasted interview for both sides." }
    ],
    solutionTitle: "How it works, step by step",
    steps: {
      link: { h: "1 · Link or QR", p: "You create the search from a template and get a unique link or QR code for your ad." },
      chat: { h: "2 · Chatbot", p: "People apply by chatting, one question at a time and with their consent." },
      filter: { h: "3 · Screening", p: "Nira asks the key questions (location, availability, experience, salary expectation) and reads the résumé if it is a text PDF." },
      ranking: { h: "4 · Explainable ranking", p: "A shortlist ordered by group and score, with the evidence behind every criterion." },
      agenda: { h: "5 · Scheduling", p: "For the people you invite, Nira offers time slots and arranges the interview, with no double bookings." },
      interview: { h: "6 · Human interview", p: "A person interviews the finalists and makes the final decision." }
    },
    tags: { "hoy": "Works today", "hoy*": "Today, with caveats", "ruta": "Roadmap" },
    notes: "Caveats: the conversation runs today in a test channel (real WhatsApp and web chat are not there yet), and the time slots are Nira's own (Google Calendar or Outlook integration is not there yet).",
    compareTitle: "Before and with Nira",
    compare: {
      before: "Before", after: "With Nira",
      rows: [
        ["Screening by hand, résumé by résumé", "An explainable ranking of the people who meet the requirements"],
        ["Answering the same questions one by one", "The chatbot answers any time and collects the key data"],
        ["Back-and-forth to agree on times", "The person picks a slot in the chat, with no double bookings"],
        ["Interviewing profiles that do not fit", "Interviews only with finalists"]
      ]
    },
    guardsTitle: "How we look after the conversation",
    guards: {
      scope: { h: "If they ask something we do not know, we do not make it up", p: "For an out-of-scope question, the bot says that information will come up in the interview and goes back to the pending question." },
      cv: { h: "If the résumé fails, the chat fills the gaps", p: "If the file cannot be read or the person does not send one, the chat questions record the essential information." },
      cost: { h: "WhatsApp costs: start with a lighter path", p: "The official API charges per conversation and requires templates. The plan is to start with a web chat or an intermediary provider until there is volume." }
    }
  },
  panel: {
    title: "A panel for those who decide",
    intro: "HR people see at a glance who moves forward, why and what is missing. This screen is a mockup; today there is a simple panel to try the app, with a status board and metrics.",
    tag: "Concept mockup · fictional data",
    mock: { brand: "Nira", menu: ["Searches", "Applications", "Board", "Metrics"], confidence: { alta: "High confidence", media: "Medium confidence", baja: "Low confidence" }, decider: "A person decides" },
    scaleTitle: "A color scale that is friendly for HR",
    groups: {
      ok: { h: "Meets the minimums", p: "Teal: ready to interview." },
      rev: { h: "Manual review", p: "Blue: a person needs to look at a data point." },
      pen: { h: "Information missing", p: "Amber: the person can be asked for it." },
      no: { h: "Fails a knockout criterion", p: "Soft coral, not alarm red: explained with respect." }
    },
    principles: [
      "Color accompanies the text and never replaces it: every group states its name.",
      "No red-and-green traffic light: groups differ in hue and in lightness.",
      "Color does not decide: no group rejects anyone on its own."
    ],
    candidates: [
      { name: "María L.", g: "ok", score: "82–91", conf: "alta" },
      { name: "Tomás R.", g: "rev", score: "64–78", conf: "media" },
      { name: "Lucía F.", g: "pen", score: "55–90", conf: "baja" },
      { name: "Diego P.", g: "no", score: "—", conf: null }
    ],
    kpis: { ok: "Meet the minimums", rev: "Manual review", pen: "Information missing" }
  },
  bot: {
    title: "The chatbot that applies and schedules",
    intro: "People apply by chatting with Nira and, once invited, pick their interview slot with a number.",
    tag: "Works today in the test channel",
    chat: [
      { me: false, t: "Your interview: 1) Fri 23/10 10:00, 2) Fri 23/10 10:30. Reply with the number." },
      { me: true, t: "2" },
      { me: false, t: "Done, your slot is confirmed." },
      { me: true, t: "CANCELAR TURNO" },
      { me: false, t: "Done, I cancelled your slot. Type TURNO to pick another one." }
    ],
    points: [
      { h: "One question at a time", p: "And it resumes where it left off if the person comes back later." },
      { h: "Consent first", p: "It stores nothing without permission, and every permission can be withdrawn." },
      { h: "No double bookings", p: "Individual or group, with confirmation and a reminder." },
      { h: "Opt out any time", p: "It frees the slot and stops all messages." }
    ],
    note: "Sample conversation. Real WhatsApp needs Meta credentials (or an intermediary provider) and approved templates to message people after the 24-hour window. The bot's commands are in Spanish today."
  },
  ai: {
    title: "AI and video, with clear limits",
    intro: "Nira is built as an assistant: it organizes and explains; people decide. What comes next extends what already works.",
    tabAi: "AI as an assistant", tabVideo: "Video introduction",
    tag: "Roadmap · does not exist yet",
    items: [
      { h: "Reads any résumé", p: "Photos and scanned PDFs, in addition to the text PDFs already read today. The person confirms every detail." },
      { h: "Summarizes and explains", p: "Writes in plain language why a person landed in each group, without changing the score." },
      { h: "Prepares the interview", p: "Suggests questions to verify what was left pending on the profile." }
    ],
    rulesTitle: "Non-negotiable rules",
    rules: "The score is computed by deterministic rules, never by a language model. AI does not use age, gender, appearance or other protected characteristics, does not make hiring decisions and only analyzes with consent."
  },
  video: {
    tag: "Phase 2 · concept mockup",
    mock: { q: "Question 1 of 3", ask: "Tell us how you handled a difficult customer.", cam: "Camera view", attempt: "Attempt 2 of 3", again: "Record again", send: "Send", written: "I prefer to answer in writing" },
    steps: [
      "The person receives the invitation in the chat",
      "Up to 3 questions, up to 45 seconds each",
      "Up to 3 attempts per question, with a counter",
      "They review their video and only then send it",
      "They can always answer in writing"
    ],
    rulesTitle: "Only what is said counts",
    rules: "Content is evaluated. Never the face, voice or accent. With consent and private storage."
  },
  report: {
    title: "What the client company sees",
    intro: "For a consultancy presenting candidates: a report with only what is relevant, criteria with their evidence, and no chat or contact details unless authorized.",
    tag: "Works today · fictional data",
    candidates: [
      { name: "Candidate A", g: "ok", line: "Score 82–91 · high confidence. 2 years of experience, confirmed by the person." },
      { name: "Candidate B", g: "pen", line: "Score 55–90 · low confidence. A certification still needs checking." }
    ],
    points: [
      { h: "Anonymous by default", p: "Name, contact and résumé only if the team enables it and the person authorized it." },
      { h: "Authorization is always rechecked", p: "If the person opts out, their data stops showing in the report." },
      { h: "No chat or free text", p: "Only criteria with their evidence and the team's notes." },
      { h: "Printable as PDF", p: "Today from the browser; a server-generated PDF is a next step." }
    ]
  },
  trust: {
    title: "Built for people's data",
    items: [
      { h: "Every company, isolated", p: "A client never sees another client's data, and only sees what is published to them." },
      { h: "Consent per purpose", p: "Storing data, analyzing with AI and sharing with the company are authorized separately." },
      { h: "Private, encrypted files", p: "Résumés and phone numbers are never published or served as open files." },
      { h: "End-to-end audit trail", p: "Who did what is recorded, without storing personal data in the log." }
    ],
    note: "The consent texts are a draft: they need legal review (Argentine Law 25.326) before operating with real people."
  },
  roadmap: {
    title: "By modules, starting with pre-screening",
    intro: "No committed dates: they depend on WhatsApp credentials, choosing an AI provider and what the pilot shows.",
    status: { building: "Today", design: "Next", idea: "Later" },
    phases: {
      p1: { name: "Module 1 · Pre-screening", desc: "Searches from templates, chatbot, explainable ranking with a Top 10, status board, metrics, client report and slot scheduling. Missing: real WhatsApp, web chat and image reading.", tags: ["templates", "ranking", "scheduling", "metrics"] },
      p2: { name: "Module 2 · Video", desc: "Video introduction with 3 questions of 45 seconds, a written alternative and transcription with consent.", tags: ["video", "consent"] },
      p3: { name: "Scale", desc: "Google Calendar and Outlook, subscription billing with automatic debit, analytics and campaign comparison.", tags: ["calendars", "subscription", "analytics"] }
    }
  },
  plans: {
    title: "Monthly subscription: three ways to start",
    intro: "A draft to define with the first clients: a monthly SaaS fee, paid in advance. Prices are calculated from the real costs of WhatsApp, AI and storage.",
    items: [
      { name: "Pilot", price: "[USD __ / month]", desc: "One free trial search (proposal) to see the ranking with real data, then a monthly fee." },
      { name: "Team", price: "[USD __ / month]", desc: "More searches, status board, metrics, client reports and interview scheduling." },
      { name: "Agency", price: "[USD __ / month]", desc: "Several client companies with their own branding, video, analytics and tailored limits." }
    ]
  },
  contact: {
    title: "Let's try Nira on a real search",
    lead: "One search from your consultancy or business, WhatsApp connected and legal texts reviewed. Then we measure how much time is saved and how each person experiences it, with your own data.",
    note: "Generic sample contact detail."
  },
  footer: "Static site with fictional data · no cookies and no data sent: it only remembers your language and theme in this browser"
};
