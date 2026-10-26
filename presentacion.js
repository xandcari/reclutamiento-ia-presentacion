(function () {
  "use strict";

  var LANGS = ["es", "en"];
  var STORE = { lang: "ri-lang", theme: "ri-theme" };
  var THEMES = ["light", "dark", "rose", "cream"];
  var MAPA = window.MAPA;
  var marcos = {};            // id → { def, el }
  var camino = MAPA.camino;   // orden del recorrido
  var estado = { lang: "es", i: 0, general: false };
  var CENTRADOS = ["portada", "cierre", "desafio", "escala", "tablero", "agenda", "metricas", "informe", "confianza", "ia", "roadmap", "planes"];

  function $(s) { return document.querySelector(s); }
  function $$(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function P() { return window.P[estado.lang]; }
  function get(o, path) { return path.split(".").reduce(function (a, k) { return a == null ? a : a[k]; }, o); }
  var sinMovimiento = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS.indexOf(q) > -1) return q;
    var saved = store(STORE.lang);
    if (saved && LANGS.indexOf(saved) > -1) return saved;
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) > -1 ? nav : "es";
  }

  /* ── construcción del lienzo ────────────────────────────── */
  function construirMarcos() {
    var lienzo = $("#lienzo");
    $$(".marco").forEach(function (n) { n.remove(); });
    MAPA.marcos.forEach(function (d) {
      var el = document.createElement("section");
      el.className = "marco" + (d.contenedor ? " contenedor" : "") + (d.oscuro ? " oscuro" : "") + (d.hijo ? " hijo" : "") + (CENTRADOS.indexOf(d.id) > -1 ? " centrado" : "");
      el.id = "m-" + d.id;
      el.setAttribute("role", "group");
      el.setAttribute("aria-label", P().titulos[d.id]);
      el.style.left = (d.x - d.w / 2) + "px";
      el.style.top = (d.y - d.h / 2) + "px";
      el.style.width = d.w + "px";
      el.style.height = d.h + "px";
      el.style.transform = "rotate(" + d.rot + "deg)";
      el.style.zIndex = d.contenedor ? 1 : 2;
      window.CONSTRUIR(d.id, el, estado.lang);
      lienzo.appendChild(el);
      marcos[d.id] = { def: d, el: el };
      el.addEventListener("click", function (ev) {
        var ix = camino.indexOf(d.id);
        if (estado.general || !el.classList.contains("activo")) {
          if (ix > -1) { ev.preventDefault(); ev.stopPropagation(); ir(ix); }
        }
      }, true);
    });
    $$("[data-accion]").forEach(function (b) {
      b.addEventListener("click", function () {
        var a = b.getAttribute("data-accion");
        if (a === "siguiente") ir(estado.i + 1);
        if (a === "inicio") ir(0);
      });
    });
  }

  function dibujarRuta() {
    var viejo = $("#lienzo svg.ruta"); if (viejo) viejo.remove();
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "ruta");
    svg.setAttribute("width", "1"); svg.setAttribute("height", "1");
    svg.setAttribute("aria-hidden", "true");
    svg.style.zIndex = 0;
    var d = "";
    camino.forEach(function (id, k) {
      var a = marcos[id].def;
      if (k === 0) { d += "M" + a.x + " " + a.y; return; }
      var prev = marcos[camino[k - 1]].def, dx = (a.x - prev.x) / 2;
      d += " C" + (prev.x + dx) + " " + prev.y + " " + (a.x - dx) + " " + a.y + " " + a.x + " " + a.y;
    });
    var path = document.createElementNS(NS, "path");
    path.setAttribute("d", d);
    svg.appendChild(path);
    $("#lienzo").insertBefore(svg, $("#lienzo").firstChild);
  }

  function dibujarCamino() {
    var box = $("#camino"); box.textContent = "";
    camino.forEach(function (id, k) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "punto" + (marcos[id].def.hijo ? " hijo" : "");
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", (k + 1) + ". " + P().titulos[id]);
      b.title = P().titulos[id];
      b.addEventListener("click", function () { ir(k); });
      box.appendChild(b);
    });
  }

  /* ── cámara ─────────────────────────────────────────────── */
  var ARRIBA = 72, ABAJO = 112;
  function area() { var vw = innerWidth, vh = innerHeight; return { vw: vw, vh: vh, w: vw * 0.94, h: Math.max(vh - ARRIBA - ABAJO, 120) }; }

  function camaraSobre(d) {
    var a = area(), s = Math.min(a.w / d.w, a.h / d.h);
    return "translate(" + (a.vw / 2) + "px," + (ARRIBA + a.h / 2) + "px) rotate(" + (-d.rot) + "deg) scale(" + s + ") translate(" + (-d.x) + "px," + (-d.y) + "px)";
  }
  function limites() {
    var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    MAPA.marcos.forEach(function (d) {
      var r = d.rot * Math.PI / 180, ex = Math.abs(d.w / 2 * Math.cos(r)) + Math.abs(d.h / 2 * Math.sin(r)), ey = Math.abs(d.w / 2 * Math.sin(r)) + Math.abs(d.h / 2 * Math.cos(r));
      x0 = Math.min(x0, d.x - ex); x1 = Math.max(x1, d.x + ex); y0 = Math.min(y0, d.y - ey); y1 = Math.max(y1, d.y + ey);
    });
    return { x: (x0 + x1) / 2, y: (y0 + y1) / 2, w: (x1 - x0) + 400, h: (y1 - y0) + 400, rot: 0 };
  }

  function aplicarCamara() {
    $("#lienzo").style.transform = camaraSobre(estado.general ? limites() : marcos[camino[estado.i]].def);
  }

  function marcarActivo() {
    var id = camino[estado.i];
    var esc = $("#escenario");
    esc.classList.toggle("general", estado.general);
    esc.classList.toggle("tiene-foco", !estado.general);
    esc.classList.toggle("foco-panel", !estado.general && id === "panel");
    Object.keys(marcos).forEach(function (k) {
      var activo = !estado.general && k === id;
      marcos[k].el.classList.toggle("activo", activo);
      marcos[k].el.querySelectorAll("a, button").forEach(function (n) { n.tabIndex = (activo || estado.general) ? 0 : -1; });
    });
    $$("#camino .punto").forEach(function (b, k) { b.setAttribute("aria-selected", String(!estado.general && k === estado.i)); });
    $("#estado").textContent = estado.general ? P().ui.overview : (estado.i + 1) + " " + P().ui.of + " " + camino.length + " · " + P().titulos[id];
    var bg = $("#btnGeneral");
    bg.setAttribute("aria-pressed", String(estado.general));
    bg.textContent = estado.general ? P().ui.back : P().ui.overview;
    $("#btnPrev").disabled = !estado.general && estado.i === 0;
    $("#btnNext").disabled = !estado.general && estado.i === camino.length - 1;
    try { history.replaceState(null, "", "#/" + (estado.i + 1)); } catch (e) { /* marco restringido */ }
  }

  function ir(i) {
    estado.i = Math.max(0, Math.min(camino.length - 1, i));
    estado.general = false;
    aplicarCamara(); marcarActivo(); ocultarAyuda();
  }
  function general(on) {
    estado.general = on === undefined ? !estado.general : on;
    aplicarCamara(); marcarActivo(); ocultarAyuda();
  }
  function ocultarAyuda() { var a = $("#ayuda"); if (a) a.classList.add("oculta"); }

  /* ── interfaz: idioma, tema, pantalla completa ──────────── */
  function textosUI() {
    var ui = P().ui;
    document.documentElement.lang = estado.lang;
    document.title = "Nira — " + (estado.lang === "es" ? "presentación interactiva" : "interactive presentation");
    $$("[data-i18n]").forEach(function (n) { var v = get(P(), n.getAttribute("data-i18n")); if (typeof v === "string") n.textContent = v; });
    $$("[data-i18n-attr]").forEach(function (n) {
      n.getAttribute("data-i18n-attr").split(";").forEach(function (pair) { var p = pair.split(":"), v = get(P(), p[1]); if (typeof v === "string") n.setAttribute(p[0], v); });
    });
    $("#btnPantalla").textContent = document.fullscreenElement ? ui.exitFullscreen : ui.fullscreen;
    $$("#langSwitch button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === estado.lang)); });
  }
  function activeTheme() { var m = document.documentElement.getAttribute("data-theme"); return THEMES.indexOf(m) > -1 ? m : "light"; }
  function sincronizarTema() { $("#themeDot").className = "sw sw-" + activeTheme(); }
  function siguienteTema() {
    var n = THEMES[(THEMES.indexOf(activeTheme()) + 1) % THEMES.length];
    document.documentElement.setAttribute("data-theme", n); store(STORE.theme, n); sincronizarTema();
  }
  function pantallaCompleta() {
    try {
      if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen();
    } catch (e) { /* el navegador no lo permite */ }
  }

  function cambiarIdioma(l) {
    estado.lang = l; store(STORE.lang, l);
    try { var u = new URL(location.href); u.searchParams.set("lang", l); history.replaceState(null, "", u.pathname + u.search + location.hash); } catch (e) { /* ignorar */ }
    construirMarcos(); dibujarCamino(); textosUI(); marcarActivo();
  }

  /* ── entradas: teclado y gestos ─────────────────────────── */
  function esControl(t) { return t && (t.tagName === "BUTTON" || t.tagName === "A" || t.tagName === "SELECT" || t.tagName === "INPUT"); }
  function teclado(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = e.key;
    if ((k === " " || k === "Enter") && esControl(e.target)) return;   // el botón enfocado hace lo suyo
    if (k === "ArrowRight" || k === "ArrowDown" || k === "PageDown" || k === " " || k === "Enter") { e.preventDefault(); ir(estado.general ? estado.i : estado.i + 1); }
    else if (k === "ArrowLeft" || k === "ArrowUp" || k === "PageUp" || k === "Backspace") { e.preventDefault(); ir(estado.general ? estado.i : estado.i - 1); }
    else if (k === "Home") { e.preventDefault(); ir(0); }
    else if (k === "End") { e.preventDefault(); ir(camino.length - 1); }
    else if (k === "o" || k === "O") { e.preventDefault(); general(); }
    else if (k === "Escape" && estado.general) { general(false); }
    else if (k === "f" || k === "F") { e.preventDefault(); pantallaCompleta(); }
  }
  function gestos() {
    var x0 = 0, y0 = 0, t0 = 0, activo = false;
    var esc = $("#escenario");
    esc.addEventListener("touchstart", function (e) { if (e.touches.length !== 1) { activo = false; return; } activo = true; x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; t0 = Date.now(); }, { passive: true });
    esc.addEventListener("touchend", function (e) {
      if (!activo) return; activo = false;
      var t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0;
      if (Date.now() - t0 < 700 && Math.abs(dx) > 60 && Math.abs(dy) < 70) ir(estado.i + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  /* ── arranque ───────────────────────────────────────────── */
  function inicial() {
    var m = /^#\/(\d+)$/.exec(location.hash);
    var n = m ? parseInt(m[1], 10) - 1 : 0;
    return n >= 0 && n < camino.length ? n : 0;
  }

  function iniciar() {
    estado.lang = pickLang();
    estado.i = inicial();
    estado.general = location.hash === "#/general";
    construirMarcos(); dibujarRuta(); dibujarCamino(); textosUI(); sincronizarTema();
    var lienzo = $("#lienzo");
    lienzo.classList.add("sin-anim");
    aplicarCamara(); marcarActivo();
    requestAnimationFrame(function () { requestAnimationFrame(function () { lienzo.classList.remove("sin-anim"); }); });

    $$("#langSwitch button").forEach(function (b) { b.addEventListener("click", function () { cambiarIdioma(b.dataset.lang); }); });
    $("#btnTema").addEventListener("click", siguienteTema);
    $("#btnGeneral").addEventListener("click", function () { general(); });
    $("#btnPantalla").addEventListener("click", pantallaCompleta);
    $("#btnPrev").addEventListener("click", function () { ir(estado.i - 1); });
    $("#btnNext").addEventListener("click", function () { ir(estado.i + 1); });
    document.addEventListener("keydown", teclado);
    document.addEventListener("fullscreenchange", textosUI);
    window.addEventListener("hashchange", function () { var n = inicial(); if (n !== estado.i || estado.general) ir(n); });
    var pendiente;
    window.addEventListener("resize", function () {
      lienzo.classList.add("sin-anim"); aplicarCamara();
      clearTimeout(pendiente); pendiente = setTimeout(function () { lienzo.classList.remove("sin-anim"); }, 120);
    });
    gestos();
    setTimeout(ocultarAyuda, 9000);
    if (!sinMovimiento) $("#escenario").focus({ preventScroll: true });
  }

  iniciar();
})();
