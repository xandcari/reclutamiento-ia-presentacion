/* Datos fijos y textos del sitio, en español e inglés. Todo lo que aparece en pantallas de ejemplo son datos FICTICIOS. */
window.DATA = {
  email: "caricariluna@gmail.com",
  linkedin: "https://www.linkedin.com/in/carina-alejandra-luna",
  github: "https://github.com/xandcari",
  stats: [
    { id: "tests", n: 788 },
    { id: "groups", n: 4 },
    { id: "roles", n: 3 },
    { id: "real", n: 0 }
  ],
  /* "hoy" = funciona y está probado · "hoy*" = funciona en el canal de prueba · "ruta" = todavía no existe */
  steps: [
    { id: "vacancy", tag: "hoy" },
    { id: "chat", tag: "hoy*" },
    { id: "cv", tag: "hoy*" },
    { id: "score", tag: "hoy" },
    { id: "client", tag: "hoy" },
    { id: "agenda", tag: "hoy*" }
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
    title: "Reclutamiento IA — selección ágil, explicable y humana",
    desc: "Postulación por chat, evaluación explicable, informes para el cliente y agenda de entrevistas para gastronomía, hotelería y turismo."
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
    role: "Selección ágil, explicable y humana",
    tagline: "Plataforma para consultoras y empresas de gastronomía, hotelería y turismo: postulación por chat, evaluación explicable y entrevistas sin dobles reservas. La IA asiste; las decisiones son de personas.",
    cta1: "Ver el recorrido", cta2: "Hablemos"
  },
  stats: {
    tests: "pruebas automáticas que pasan",
    groups: "grupos de evaluación, con color y con texto",
    roles: "roles con permisos separados: admin, reclutador y empresa",
    real: "mensajes reales enviados: todo corre en un canal de prueba"
  },
  journey: {
    title: "De la vacante a la entrevista",
    intro: "Un recorrido completo, pensado para contratar personal de temporada sin perder el orden ni la trazabilidad.",
    problemTitle: "El problema",
    problems: [
      { h: "Postulaciones sin orden", p: "Mensajes sueltos, CV por distintos medios y respuestas que hay que preguntar de a una." },
      { h: "Criterios poco claros", p: "Cuesta explicar por qué una persona avanzó y otra no, ante el cliente o ante la propia persona." },
      { h: "Entrevistas coordinadas a mano", p: "Horarios cruzados, turnos duplicados, olvidos y cancelaciones de último momento." }
    ],
    solutionTitle: "La solución, paso a paso",
    steps: {
      vacancy: { h: "1 · Vacante", p: "Requisitos claros (excluyentes, deseables y evaluables) y un QR para el cartel." },
      chat: { h: "2 · Chat", p: "La persona se postula conversando, una pregunta por vez y con su consentimiento." },
      cv: { h: "3 · CV", p: "Se lee el CV y la persona confirma cada dato antes de enviarlo." },
      score: { h: "4 · Evaluación", p: "Puntaje explicable con evidencia, y revisión humana con trazabilidad." },
      client: { h: "5 · Cliente", p: "Informe anónimo por defecto; nombre y contacto solo con autorización." },
      agenda: { h: "6 · Agenda", p: "La persona elige su turno por el chat, sin dobles reservas." }
    },
    tags: { "hoy": "Funciona hoy", "hoy*": "Hoy, en canal de prueba", "ruta": "Hoja de ruta" },
    note: "Hoy se opera por API y con un panel simple para probar. WhatsApp real y la lectura de fotos de CV todavía no están: se muestran como pendientes."
  },
  panel: {
    title: "Un panel para quien decide",
    intro: "Las personas de RR. HH. ven de un vistazo quién avanza, por qué y qué falta. Esta pantalla es una maqueta; hoy existe un panel simple para probar la app.",
    tag: "Maqueta de concepto · datos ficticios",
    mock: { brand: "Reclutamiento IA", menu: ["Vacantes", "Postulaciones", "Agenda", "Informes"], confidence: { alta: "Confianza alta", media: "Confianza media", baja: "Confianza baja" }, decider: "Lo decide una persona" },
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
    title: "El bot que postula y agenda",
    intro: "La persona se postula chateando y, cuando la invitan, elige su turno de entrevista con un número.",
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
    note: "Conversación de ejemplo. Con WhatsApp real hacen falta credenciales de Meta y plantillas aprobadas para avisar fuera de las 24 horas."
  },
  ai: {
    title: "IA y video, con límites claros",
    intro: "Lo que viene después de lo que ya funciona: asistentes que proponen, nunca que deciden.",
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
    intro: "Un informe de presentación con solo lo pertinente: criterios con su evidencia, sin chat ni datos de contacto salvo autorización.",
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
    title: "De un piloto a una operación que crece",
    intro: "Sin fechas comprometidas: dependen de las credenciales de WhatsApp, de elegir proveedor de IA y de lo que muestre el piloto.",
    status: { building: "Hoy", design: "Siguiente", idea: "Más adelante" },
    phases: {
      p1: { name: "Fase 1 · Hoy", desc: "Vacantes, bot, evaluación explicable, informe para el cliente y agenda. Falta: panel completo, WhatsApp real y lectura de imágenes.", tags: ["API", "panel simple", "canal de prueba"] },
      p2: { name: "Fase 2 · Video", desc: "Video de 3 preguntas de 45 segundos, alternativa escrita y transcripción con consentimiento.", tags: ["video", "consentimiento"] },
      p3: { name: "Fase 3 · Escala", desc: "Calendarios externos, analítica y comparación de campañas, y planes con límites por cliente.", tags: ["calendarios", "analítica", "planes"] }
    }
  },
  plans: {
    title: "Planes: tres formas de empezar",
    intro: "Borrador a definir con los primeros clientes. Los valores se calculan con los costos reales de WhatsApp, IA y almacenamiento.",
    items: [
      { name: "Piloto", price: "[USD __ / mes]", desc: "Dos empresas, vacantes y bot de postulación, evaluación explicable y acompañamiento de arranque." },
      { name: "Equipo", price: "[USD __ / mes]", desc: "Más empresas y vacantes, informes para el cliente, agenda de entrevistas y panel de RR. HH." },
      { name: "Consultora", price: "[USD __ / mes]", desc: "Multiempresa con identidad visual de cada cliente, video, analítica y límites a medida." }
    ]
  },
  contact: {
    title: "Probemos con dos de tus empresas",
    lead: "Una o dos vacantes reales de temporada, WhatsApp conectado y textos legales revisados. Después medimos tiempo de gestión y experiencia de las personas.",
    email: "Escribir por correo", linkedin: "LinkedIn", github: "GitHub"
  },
  footer: "Sitio estático con datos ficticios · no usa cookies ni envía datos: solo recuerda tu idioma y tema en este navegador"
};

/* ═════════════════════════════ ENGLISH ═════════════════════════════ */
window.T.en = {
  meta: {
    title: "Reclutamiento IA — fast, explainable and human hiring",
    desc: "Chat applications, explainable scoring, client reports and interview scheduling for hospitality, food service and tourism."
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
    role: "Fast, explainable and human hiring",
    tagline: "A platform for recruiting firms and hospitality, food service and tourism companies: chat applications, explainable scoring and interviews with no double bookings. AI assists; people decide.",
    cta1: "See the journey", cta2: "Let's talk"
  },
  stats: {
    tests: "automated tests passing",
    groups: "evaluation groups, shown with color and text",
    roles: "roles with separate permissions: admin, recruiter and company",
    real: "real messages sent: everything runs in a test channel"
  },
  journey: {
    title: "From the vacancy to the interview",
    intro: "A complete journey, designed to hire seasonal staff without losing order or traceability.",
    problemTitle: "The problem",
    problems: [
      { h: "Disorganized applications", p: "Loose messages, résumés through different channels and answers that must be asked one by one." },
      { h: "Unclear criteria", p: "It is hard to explain why one person moved on and another did not, to the client or to the person." },
      { h: "Interviews scheduled by hand", p: "Crossed schedules, duplicated slots, forgotten appointments and last-minute cancellations." }
    ],
    solutionTitle: "The solution, step by step",
    steps: {
      vacancy: { h: "1 · Vacancy", p: "Clear requirements (knockout, desirable and scored) and a QR code for the poster." },
      chat: { h: "2 · Chat", p: "People apply by chatting, one question at a time and with their consent." },
      cv: { h: "3 · Résumé", p: "The résumé is read and the person confirms every detail before sending it." },
      score: { h: "4 · Scoring", p: "An explainable score backed by evidence, with traceable human review." },
      client: { h: "5 · Client", p: "A report that is anonymous by default; name and contact only with authorization." },
      agenda: { h: "6 · Scheduling", p: "The person picks a slot in the chat, with no double bookings." }
    },
    tags: { "hoy": "Works today", "hoy*": "Today, in the test channel", "ruta": "Roadmap" },
    note: "Today it runs through an API and a simple panel for testing. Real WhatsApp and reading résumé photos are not there yet: they are shown as pending."
  },
  panel: {
    title: "A panel for those who decide",
    intro: "HR people see at a glance who moves forward, why and what is missing. This screen is a mockup; today there is a simple panel to try the app.",
    tag: "Concept mockup · fictional data",
    mock: { brand: "Reclutamiento IA", menu: ["Vacancies", "Applications", "Schedule", "Reports"], confidence: { alta: "High confidence", media: "Medium confidence", baja: "Low confidence" }, decider: "A person decides" },
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
    title: "The bot that applies and schedules",
    intro: "People apply by chatting and, once invited, pick their interview slot with a number.",
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
    note: "Sample conversation. Real WhatsApp needs Meta credentials and approved templates to message people after the 24-hour window. The bot's commands are in Spanish today."
  },
  ai: {
    title: "AI and video, with clear limits",
    intro: "What comes after what already works: assistants that suggest, never ones that decide.",
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
    intro: "A presentation report with only what is relevant: criteria with their evidence, and no chat or contact details unless authorized.",
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
    title: "From a pilot to an operation that grows",
    intro: "No committed dates: they depend on WhatsApp credentials, choosing an AI provider and what the pilot shows.",
    status: { building: "Today", design: "Next", idea: "Later" },
    phases: {
      p1: { name: "Phase 1 · Today", desc: "Vacancies, bot, explainable scoring, client report and scheduling. Missing: a full panel, real WhatsApp and image reading.", tags: ["API", "simple panel", "test channel"] },
      p2: { name: "Phase 2 · Video", desc: "Video with 3 questions of 45 seconds, a written alternative and transcription with consent.", tags: ["video", "consent"] },
      p3: { name: "Phase 3 · Scale", desc: "External calendars, analytics and campaign comparison, and plans with per-client limits.", tags: ["calendars", "analytics", "plans"] }
    }
  },
  plans: {
    title: "Plans: three ways to start",
    intro: "A draft to define with the first clients. Prices are calculated from the real costs of WhatsApp, AI and storage.",
    items: [
      { name: "Pilot", price: "[USD __ / month]", desc: "Two companies, vacancies and application bot, explainable scoring and onboarding support." },
      { name: "Team", price: "[USD __ / month]", desc: "More companies and vacancies, client reports, interview scheduling and an HR panel." },
      { name: "Agency", price: "[USD __ / month]", desc: "Multi-company with each client's branding, video, analytics and tailored limits." }
    ]
  },
  contact: {
    title: "Let's try it with two of your companies",
    lead: "One or two real seasonal vacancies, WhatsApp connected and legal texts reviewed. Then we measure handling time and the candidate experience.",
    email: "Send an email", linkedin: "LinkedIn", github: "GitHub"
  },
  footer: "Static site with fictional data · no cookies and no data sent: it only remembers your language and theme in this browser"
};
