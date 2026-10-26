/* Presentación interactiva: mapa del lienzo (posiciones de los cuadros) y textos en español e inglés.
   Todo lo que figura en pantallas de ejemplo son datos FICTICIOS. Sin cifras de ahorro de tiempo ni de preferencia: no se midieron. */

/* x, y = centro del cuadro en el lienzo · w, h = tamaño · rot = giro en grados (la cámara lo compensa, así el cuadro activo queda derecho)
   hijo: cuadro dentro de un contenedor (se muestra como sub-punto en el recorrido) */
window.MAPA = {
  marcos: [
    { id: "portada", x: 0, y: 0, w: 1920, h: 1080, rot: 0, oscuro: true },
    { id: "desafio", x: 2800, y: -300, w: 1920, h: 1080, rot: 4 },
    { id: "recorrido", x: 5600, y: 150, w: 1920, h: 1080, rot: -3 },
    { id: "busquedas", x: 8400, y: -250, w: 1920, h: 1080, rot: 3 },
    { id: "chatbot", x: 11200, y: 250, w: 1920, h: 1080, rot: -4 },
    { id: "panel", x: 6000, y: 3650, w: 6920, h: 3200, rot: 0, contenedor: true },
    { id: "ranking", x: 3800, y: 3070, w: 1920, h: 1080, rot: 0, hijo: true },
    { id: "escala", x: 6000, y: 3070, w: 1920, h: 1080, rot: 0, hijo: true },
    { id: "tablero", x: 8200, y: 3070, w: 1920, h: 1080, rot: 0, hijo: true },
    { id: "agenda", x: 4900, y: 4390, w: 1920, h: 1080, rot: 0, hijo: true },
    { id: "metricas", x: 7100, y: 4390, w: 1920, h: 1080, rot: 0, hijo: true },
    { id: "informe", x: 12400, y: 3300, w: 1920, h: 1080, rot: 3 },
    { id: "confianza", x: 15200, y: 4000, w: 1920, h: 1080, rot: -3 },
    { id: "ia", x: 15200, y: 1900, w: 1920, h: 1080, rot: 4 },
    { id: "roadmap", x: 18000, y: 1300, w: 1920, h: 1080, rot: -2 },
    { id: "planes", x: 18000, y: 3500, w: 1920, h: 1080, rot: 2 },
    { id: "cierre", x: 20800, y: 2400, w: 1920, h: 1080, rot: 0, oscuro: true }
  ],
  camino: ["portada", "desafio", "recorrido", "busquedas", "chatbot", "panel", "ranking", "escala", "tablero", "agenda", "metricas", "informe", "confianza", "ia", "roadmap", "planes", "cierre"]
};

window.P = {};

/* ═════════════════════════════ ESPAÑOL ═════════════════════════════ */
window.P.es = {
  ui: {
    skip: "Ir al contenido", theme: "Cambiar tema", overview: "Vista general", back: "Volver al recorrido", fullscreen: "Pantalla completa", exitFullscreen: "Salir de pantalla completa",
    site: "Ver el sitio", prev: "Anterior", next: "Siguiente", path: "Recorrido", of: "de",
    hint: "← → o espacio para avanzar · tocá un cuadro para ir a él · O: vista general · F: pantalla completa"
  },
  titulos: {
    portada: "Nira", desafio: "El desafío", recorrido: "Cómo funciona", busquedas: "Búsquedas y plantillas", chatbot: "El chatbot", panel: "Panel para RR. HH.",
    ranking: "Ranking y Top 10", escala: "Escala de colores", tablero: "Tablero por estados", agenda: "Agenda de entrevistas", metricas: "Métricas",
    informe: "Informe para el cliente", confianza: "Confianza y datos", ia: "IA y video", roadmap: "Hoja de ruta", planes: "Planes", cierre: "Probemos"
  },
  tags: { hoy: "Funciona hoy", hoyPanel: "Funciona hoy · panel simple", canal: "Funciona hoy en el canal de prueba", ruta: "Hoja de ruta · todavía no existe", borrador: "Borrador a definir" },
  portada: {
    kicker: "Presentación interactiva",
    lema: "Agilidad, inteligencia, cercanía y eficiencia",
    linea: "Plataforma de reclutamiento con chatbot para consultoras de RR. HH., reclutadores y PyMEs. La IA asiste; las decisiones son de personas.",
    empezar: "Empezar el recorrido →",
    nota: "Pantallas de ejemplo con datos ficticios. Cada cuadro dice si funciona hoy o si es hoja de ruta."
  },
  desafio: { title: "El desafío de reclutar a mano", sub: "Un embudo que consume el tiempo de quien selecciona." },
  recorrido: { title: "De la postulación a la entrevista en seis pasos", sub: "Hacé zoom en cada etapa a lo largo del recorrido." },
  busquedas: {
    title: "Una búsqueda lista en minutos", sub: "Elegís el tipo de puesto, completás el título y la zona, y obtenés requisitos estándar, un enlace único y un QR para tu aviso.",
    lista: "Búsquedas", form: "Nueva búsqueda desde una plantilla", plantilla: "Tipo de puesto", plantillas: ["Ventas y atención comercial", "Administración", "Operativo", "Gastronomía y atención de salón"],
    titulo: "Título de la búsqueda", tituloV: "Vendedor/a de local", zona: "Zona de trabajo", zonaV: "Rosario", crear: "Crear búsqueda", reqs: "7 requisitos ya cargados: zona, jornada, experiencia, competencias y pretensión salarial (sin puntos).",
    abierta: "Abierta", borrador: "Borrador", publicar: "Publicar y abrir", enlace: "Crear enlace y QR", copiar: "Copiar enlace", qr: "QR de ejemplo", url: "nira.example/p/ab12cd34",
    items: [["Vendedor/a de local", "abierta"], ["Administrativo/a", "borrador"], ["Camarero/a de salón", "abierta"]]
  },
  chatbot: {
    title: "El chatbot que atiende a toda hora", sub: "La persona se postula conversando, una pregunta por vez y con su consentimiento.",
    chat: [
      { me: false, t: "¡Hola! Soy Nira. El trabajo es en Rosario. ¿Vivís ahí o podés trasladarte?" },
      { me: true, t: "Sí" },
      { me: false, t: "¿Cuántos años de experiencia tenés en ventas?" },
      { me: true, t: "¿Aceptan mascotas en la oficina?" },
      { me: false, t: "Esa información no la tengo yo: la vas a ver en la entrevista con el equipo. Por ahora, sigamos con tu postulación. ¿Cuántos años de experiencia tenés en ventas?" }
    ],
    puntos: [
      ["Una pregunta por vez", "Y retoma donde quedó si la persona vuelve."],
      ["No inventa", "Si preguntan algo que no sabe, lo deja para la entrevista y vuelve a la pregunta pendiente."],
      ["Si el CV falla, la charla completa los datos", "Las preguntas del chat dejan registrado lo esencial."],
      ["Consentimiento primero", "Y BAJA cuando quiera: libera su turno y corta los mensajes."]
    ],
    nota: "Corre hoy en un canal de prueba. WhatsApp real y chat web son pendientes."
  },
  panel: { title: "El panel de quien decide", sub: "Cinco pantallas: acercate a cada una." },
  ranking: {
    title: "Ranking explicable, con Top 10", sub: "Primero el grupo, después el puntaje: un puntaje alto nunca pone arriba a quien no cumple algo indispensable.",
    top10: "Solo el Top 10", lista: ["María L.", "Tomás R.", "Lucía F.", "Diego P."], ficha: "Ficha de María L.", puntaje: "Puntaje: 82–91 sobre 100",
    criterios: [["Disponibilidad de fin de semana", "Excluyente · lo dijo en el chat", "ok", "Cumple"], ["Experiencia en ventas", "Del CV, confirmada por la persona", "ok", "Cumple"], ["Inglés intermedio", "Declaró un nivel algo menor", "pen", "Parcial"], ["Manejo de CRM", "Declarado: falta verificar", "pen", "Verificar"]],
    acciones: ["Invitar a entrevista", "Preseleccionar", "Descartar"]
  },
  escala: { title: "Una escala de colores amigable para RR. HH.", sub: "Cuatro grupos distinguibles por tono, por luminosidad y siempre por texto." },
  tablero: {
    title: "Cada persona, en la columna de su etapa", sub: "Se calcula de lo ya registrado (decisión, invitación, turno y asistencia): no se mueve a mano ni queda desactualizado.",
    columnas: [["Postuladas", ["Lucía F."]], ["En espera", []], ["Preseleccionadas", ["Tomás R."]], ["Invitadas", []], ["Entrevista agendada", ["María L."]], ["Entrevistadas", []], ["Descartadas", ["Diego P."]]], turno: "vie 23/10 10:00"
  },
  agenda: {
    title: "Turnos sin dobles reservas", sub: "Individuales o grupales; la persona elige por el chat, confirma y recibe recordatorio. Lo garantiza la base de datos.",
    turnos: [["vie 23/10 10:00", "1 de 1 lugares ocupados", "individual", "María L."], ["vie 23/10 10:30", "0 de 1 lugares ocupados", "individual", null], ["sáb 24/10 10:00", "2 de 3 lugares ocupados", "grupal", "Tomás R. · Lucía F."]],
    botones: ["Ver reservas", "Cancelar turno", "Asistió", "No asistió"], nota: "Hoy los turnos son propios de Nira. Google Calendar y Outlook son pendientes."
  },
  metricas: {
    title: "Métricas reales, no promesas", sub: "Conteos y proporciones de lo que hay en el sistema. No miden ahorro de tiempo: eso se mide en un piloto, contra cómo se trabajaba antes.",
    kpis: [["42", "postulaciones confirmadas"], ["57", "conversaciones iniciadas"], ["74 %", "terminan su postulación"], ["88 %", "asisten a la entrevista"]],
    embudo: [["Postuladas", 42], ["Cumplen los mínimos", 27], ["Invitadas a entrevista", 12], ["Con turno elegido", 9], ["Entrevistadas", 8]], aviso: "Cifras de ejemplo."
  },
  informe: {
    title: "Lo que ve la empresa cliente", sub: "Anónimo por defecto. Nombre, contacto y CV solo si el equipo lo habilita y la persona lo autorizó, y se revisa en cada consulta.",
    cands: [["Candidato A", "ok", "Puntaje 82–91 · confianza alta. Experiencia de 2 años, confirmada por la persona."], ["Candidato B", "pen", "Puntaje 55–90 · confianza baja. Falta verificar una certificación."]],
    puntos: ["Sin chat ni textos libres", "Si la persona escribe BAJA, sus datos dejan de verse", "Imprimible como PDF"]
  },
  confianza: {
    title: "Pensado para datos de personas", sub: "Los textos de consentimiento son un borrador: falta la revisión legal (Ley 25.326) antes de operar con personas reales.",
    items: [["Cada empresa, aislada", "Un cliente nunca ve datos de otro."], ["Consentimiento por finalidad", "Guardar datos, analizar con IA y compartir con la empresa se autorizan por separado."], ["Archivos privados y cifrados", "Los CV y los teléfonos no se publican."], ["Auditoría de punta a punta", "Quién hizo qué, sin datos personales en el registro."]]
  },
  ia: {
    title: "IA y video, con límites claros", sub: "Nira es un asistente: ordena y explica; las decisiones son de personas.",
    ia: ["Lee cualquier CV", "Fotos y PDF escaneados; la persona confirma cada dato."], ia2: ["Resume y explica", "Por qué quedó en cada grupo, sin cambiar el puntaje."], ia3: ["Prepara la entrevista", "Preguntas para verificar lo pendiente."],
    videoTitulo: "Video de presentación", video: ["Hasta 3 preguntas de 45 segundos", "Hasta 3 intentos, con revisión antes de enviar", "Siempre con alternativa escrita", "Se evalúa solo el contenido: nunca rostro, voz ni acento"],
    reglas: "El puntaje lo calculan reglas deterministas, nunca un modelo de lenguaje."
  },
  roadmap: {
    title: "Por módulos, empezando por la preselección", sub: "Sin fechas comprometidas: dependen de las credenciales de WhatsApp, del proveedor de IA y de lo que muestre el piloto.",
    fases: [["Módulo 1 · Preselección", "Hoy", "Plantillas, chatbot, ranking, tablero, métricas, informe y agenda. Falta: WhatsApp real, chat web y lectura de imágenes."], ["Módulo 2 · Video", "Siguiente", "Video de 3 preguntas, con alternativa escrita y transcripción con consentimiento."], ["Escala", "Más adelante", "Google Calendar y Outlook, cobro por suscripción con débito automático y analítica."]]
  },
  planes: {
    title: "Suscripción mensual, cobro por adelantado", sub: "Borrador a definir con los primeros clientes. Los valores salen de los costos reales de WhatsApp, IA y almacenamiento.",
    items: [["Piloto", "[USD __ / mes]", "Una búsqueda de prueba sin costo (propuesta) para ver el ranking con datos reales."], ["Equipo", "[USD __ / mes]", "Más búsquedas, tablero, métricas, informes y agenda."], ["Consultora", "[USD __ / mes]", "Varias empresas clientes con su identidad visual, video y analítica."]]
  },
  cierre: {
    title: "Probemos Nira con una búsqueda real", sub: "Una búsqueda de tu consultora o PyME, WhatsApp conectado y textos legales revisados. Después medimos el ahorro de tiempo con datos propios.",
    correo: "Escribir por correo", sitio: "Ver el sitio completo", reiniciar: "Volver al inicio"
  }
};

/* ═════════════════════════════ ENGLISH ═════════════════════════════ */
window.P.en = {
  ui: {
    skip: "Skip to content", theme: "Change theme", overview: "Overview", back: "Back to the journey", fullscreen: "Full screen", exitFullscreen: "Exit full screen",
    site: "See the site", prev: "Previous", next: "Next", path: "Journey", of: "of",
    hint: "← → or space to move on · tap a frame to go to it · O: overview · F: full screen"
  },
  titulos: {
    portada: "Nira", desafio: "The challenge", recorrido: "How it works", busquedas: "Searches and templates", chatbot: "The chatbot", panel: "HR panel",
    ranking: "Ranking and Top 10", escala: "Color scale", tablero: "Status board", agenda: "Interview scheduling", metricas: "Metrics",
    informe: "Client report", confianza: "Trust and data", ia: "AI and video", roadmap: "Roadmap", planes: "Plans", cierre: "Let's try it"
  },
  tags: { hoy: "Works today", hoyPanel: "Works today · simple panel", canal: "Works today in the test channel", ruta: "Roadmap · does not exist yet", borrador: "Draft to define" },
  portada: {
    kicker: "Interactive presentation",
    lema: "Agility, intelligence, closeness and efficiency",
    linea: "A chatbot recruiting platform for HR consultancies, recruiters and small businesses. AI assists; people decide.",
    empezar: "Start the journey →",
    nota: "Sample screens with fictional data. Every frame says whether it works today or is roadmap."
  },
  desafio: { title: "The challenge of recruiting by hand", sub: "A funnel that eats the time of whoever is screening." },
  recorrido: { title: "From application to interview in six steps", sub: "Zoom into each stage along the journey." },
  busquedas: {
    title: "A search ready in minutes", sub: "Pick the job type, fill in the title and the area, and get standard requirements, a unique link and a QR code for your ad.",
    lista: "Searches", form: "New search from a template", plantilla: "Job type", plantillas: ["Sales and customer service", "Administration", "Operations", "Food service and dining room"],
    titulo: "Search title", tituloV: "Store salesperson", zona: "Work area", zonaV: "Rosario", crear: "Create search", reqs: "7 requirements already loaded: location, schedule, experience, skills and salary expectation (no points).",
    abierta: "Open", borrador: "Draft", publicar: "Publish and open", enlace: "Create link and QR", copiar: "Copy link", qr: "Sample QR", url: "nira.example/p/ab12cd34",
    items: [["Store salesperson", "abierta"], ["Administrative assistant", "borrador"], ["Dining room waiter", "abierta"]]
  },
  chatbot: {
    title: "The chatbot that answers any time", sub: "People apply by chatting, one question at a time and with their consent.",
    chat: [
      { me: false, t: "Hi! I'm Nira. The job is in Rosario. Do you live there or can you relocate?" },
      { me: true, t: "Yes" },
      { me: false, t: "How many years of sales experience do you have?" },
      { me: true, t: "Are pets allowed in the office?" },
      { me: false, t: "I don't have that information: you'll see it in the interview with the team. For now, let's continue with your application. How many years of sales experience do you have?" }
    ],
    puntos: [
      ["One question at a time", "And it resumes where it left off if the person returns."],
      ["It does not make things up", "If asked something it does not know, it leaves it for the interview and returns to the pending question."],
      ["If the résumé fails, the chat fills the gaps", "The chat questions record the essentials."],
      ["Consent first", "And opt out any time: it frees the slot and stops the messages."]
    ],
    nota: "Runs today in a test channel. Real WhatsApp and web chat are pending."
  },
  panel: { title: "The panel for those who decide", sub: "Five screens: zoom into each one." },
  ranking: {
    title: "Explainable ranking, with a Top 10", sub: "Group first, then score: a high score never puts someone who fails a must-have on top.",
    top10: "Top 10 only", lista: ["María L.", "Tomás R.", "Lucía F.", "Diego P."], ficha: "Profile of María L.", puntaje: "Score: 82–91 out of 100",
    criterios: [["Weekend availability", "Knockout · said in the chat", "ok", "Meets"], ["Sales experience", "From the résumé, confirmed by the person", "ok", "Meets"], ["Intermediate English", "Declared a slightly lower level", "pen", "Partial"], ["CRM skills", "Declared: needs checking", "pen", "To verify"]],
    acciones: ["Invite to interview", "Shortlist", "Reject"]
  },
  escala: { title: "A color scale that is friendly for HR", sub: "Four groups told apart by hue, by lightness and always by text." },
  tablero: {
    title: "Every person, in the column of their stage", sub: "Computed from what is already recorded (decision, invitation, slot and attendance): it is not moved by hand and never goes stale.",
    columnas: [["Applied", ["Lucía F."]], ["On hold", []], ["Shortlisted", ["Tomás R."]], ["Invited", []], ["Interview booked", ["María L."]], ["Interviewed", []], ["Rejected", ["Diego P."]]], turno: "Fri 23/10 10:00"
  },
  agenda: {
    title: "Slots with no double bookings", sub: "Individual or group; the person picks in the chat, confirms and gets a reminder. The database guarantees it.",
    turnos: [["Fri 23/10 10:00", "1 of 1 places taken", "individual", "María L."], ["Fri 23/10 10:30", "0 of 1 places taken", "individual", null], ["Sat 24/10 10:00", "2 of 3 places taken", "group", "Tomás R. · Lucía F."]],
    botones: ["See bookings", "Cancel slot", "Attended", "No-show"], nota: "Today the slots are Nira's own. Google Calendar and Outlook are pending."
  },
  metricas: {
    title: "Real metrics, not promises", sub: "Counts and ratios of what is in the system. They do not measure time saved: that is measured in a pilot, against how work was done before.",
    kpis: [["42", "confirmed applications"], ["57", "conversations started"], ["74 %", "finish their application"], ["88 %", "attend the interview"]],
    embudo: [["Applied", 42], ["Meet the minimums", 27], ["Invited to interview", 12], ["Slot picked", 9], ["Interviewed", 8]], aviso: "Sample figures."
  },
  informe: {
    title: "What the client company sees", sub: "Anonymous by default. Name, contact and résumé only if the team enables it and the person authorized it, rechecked on every view.",
    cands: [["Candidate A", "ok", "Score 82–91 · high confidence. 2 years of experience, confirmed by the person."], ["Candidate B", "pen", "Score 55–90 · low confidence. A certification still needs checking."]],
    puntos: ["No chat or free text", "If the person opts out, their data stops showing", "Printable as PDF"]
  },
  confianza: {
    title: "Built for people's data", sub: "The consent texts are a draft: they need legal review (Argentine Law 25.326) before operating with real people.",
    items: [["Every company, isolated", "A client never sees another client's data."], ["Consent per purpose", "Storing data, analyzing with AI and sharing with the company are authorized separately."], ["Private, encrypted files", "Résumés and phone numbers are never published."], ["End-to-end audit trail", "Who did what, with no personal data in the log."]]
  },
  ia: {
    title: "AI and video, with clear limits", sub: "Nira is an assistant: it organizes and explains; people decide.",
    ia: ["Reads any résumé", "Photos and scanned PDFs; the person confirms every detail."], ia2: ["Summarizes and explains", "Why they landed in each group, without changing the score."], ia3: ["Prepares the interview", "Questions to verify what is pending."],
    videoTitulo: "Video introduction", video: ["Up to 3 questions of 45 seconds", "Up to 3 attempts, with a review before sending", "Always with a written alternative", "Only the content is evaluated: never face, voice or accent"],
    reglas: "The score is computed by deterministic rules, never by a language model."
  },
  roadmap: {
    title: "By modules, starting with pre-screening", sub: "No committed dates: they depend on WhatsApp credentials, the AI provider and what the pilot shows.",
    fases: [["Module 1 · Pre-screening", "Today", "Templates, chatbot, ranking, board, metrics, report and scheduling. Missing: real WhatsApp, web chat and image reading."], ["Module 2 · Video", "Next", "Video with 3 questions, a written alternative and transcription with consent."], ["Scale", "Later", "Google Calendar and Outlook, subscription billing with automatic debit and analytics."]]
  },
  planes: {
    title: "Monthly subscription, paid in advance", sub: "A draft to define with the first clients. Prices come from the real costs of WhatsApp, AI and storage.",
    items: [["Pilot", "[USD __ / month]", "One free trial search (proposal) to see the ranking with real data."], ["Team", "[USD __ / month]", "More searches, board, metrics, reports and scheduling."], ["Agency", "[USD __ / month]", "Several client companies with their own branding, video and analytics."]]
  },
  cierre: {
    title: "Let's try Nira on a real search", sub: "One search from your consultancy or business, WhatsApp connected and legal texts reviewed. Then we measure time saved with your own data.",
    correo: "Send an email", sitio: "See the full site", reiniciar: "Back to the start"
  }
};
