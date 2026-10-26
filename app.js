(function () {
  "use strict";

  var LANGS = ["es", "en"];
  var LOCALE = { es: "es-AR", en: "en-GB" };
  var VIEWS = ["home", "journey", "panel", "bot", "ai", "report", "roadmap", "contact"];
  var STORE = { lang: "ri-lang", theme: "ri-theme" };
  var state = { lang: "es", view: "home", aiTab: "ai" };

  /* ── utilidades ─────────────────────────────────────────── */
  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }
  function get(obj, path) { return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, obj); }
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }
  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function t() { return window.T[state.lang]; }
  var reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS.indexOf(q) > -1) return q;
    var saved = store(STORE.lang);
    if (saved && LANGS.indexOf(saved) > -1) return saved;
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) > -1 ? nav : "es";
  }
  function num(n) { return n.toLocaleString(LOCALE[state.lang]).replace(/ /g, " "); }

  /* ── textos estáticos ───────────────────────────────────── */
  function renderStatic() {
    var tr = t();
    document.documentElement.lang = state.lang;
    document.title = tr.meta.title;
    $('meta[name="description"]').setAttribute("content", tr.meta.desc);
    $('meta[property="og:title"]').setAttribute("content", tr.meta.title);
    $('meta[property="og:description"]').setAttribute("content", tr.meta.desc);
    $$("[data-i18n]").forEach(function (n) {
      var v = get(tr, n.getAttribute("data-i18n"));
      if (typeof v === "string") n.textContent = v;
    });
    $$("[data-i18n-attr]").forEach(function (n) {
      n.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":"), v = get(tr, p[1]);
        if (typeof v === "string") n.setAttribute(p[0], v);
      });
    });
    $$(".rail-link").forEach(function (a) { var l = a.querySelector(".rl-label"); if (l) a.setAttribute("data-tip", l.textContent); });
    $("#langSwitch").setAttribute("aria-label", tr.ui.lang);
    syncThemes();
    $$("#langSwitch button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)); });
    $("#year").textContent = new Date().getFullYear();
  }

  /* ── inicio ─────────────────────────────────────────────── */
  function renderTilesNav() {
    var ul = $("#tilesNav"); clear(ul);
    VIEWS.filter(function (v) { return v !== "home"; }).forEach(function (v) {
      var src = $('.rail-link[data-view="' + v + '"]');
      var svg = src.querySelector("svg").cloneNode(true);
      ul.appendChild(el("li", {}, [el("a", { class: "tile-link", href: "#" + v }, [svg, el("span", { text: t().nav[v] }), el("span", { class: "arr", "aria-hidden": "true", text: "→" })])]));
    });
  }
  function renderStats() {
    var ul = $("#stats"); clear(ul);
    window.DATA.stats.forEach(function (s) {
      var strong = el("strong", { "data-n": s.n });
      strong.textContent = num(s.n);
      ul.appendChild(el("li", { class: "stat" }, [strong, el("span", { text: t().stats[s.id] })]));
    });
  }

  /* ── recorrido ──────────────────────────────────────────── */
  function renderJourney() {
    var J = t().journey;
    var p = $("#problemGrid"); clear(p);
    J.problems.forEach(function (x) { p.appendChild(el("article", { class: "card" }, [el("h3", { text: x.h }), el("p", { text: x.p })])); });
    var g = $("#stepGrid"); clear(g);
    window.DATA.steps.forEach(function (s) {
      var x = J.steps[s.id];
      var cls = s.tag === "ruta" ? "tag-ruta" : (s.tag === "hoy" ? "tag-hoy" : "tag-hoy tag-star");
      g.appendChild(el("article", { class: "card" }, [el("span", { class: "tag " + cls, text: J.tags[s.tag] }), el("h3", { text: x.h }), el("p", { text: x.p })]));
    });
    $("#compareTitle").textContent = J.compareTitle;
    var cmp = $("#compare"); clear(cmp);
    cmp.appendChild(el("div", { class: "crow2 head", role: "row" }, [el("span", { role: "columnheader", text: J.compare.before }), el("span", { role: "columnheader", text: J.compare.after })]));
    J.compare.rows.forEach(function (r) { cmp.appendChild(el("div", { class: "crow2", role: "row" }, [el("span", { class: "before", role: "cell", text: r[0] }), el("span", { class: "after", role: "cell", text: r[1] })])); });
    $("#guardsTitle").textContent = J.guardsTitle;
    var gg = $("#guardGrid"); clear(gg);
    window.DATA.guards.forEach(function (s) {
      var x = J.guards[s.id];
      gg.appendChild(el("article", { class: "card" }, [el("span", { class: "tag " + (s.tag === "ruta" ? "tag-ruta" : "tag-hoy"), text: J.tags[s.tag] }), el("h3", { text: x.h }), el("p", { text: x.p })]));
    });
  }

  /* ── panel y colores ────────────────────────────────────── */
  function groupChip(g) { return el("span", { class: "grp grp-" + g, text: t().panel.groups[g].h }); }

  function renderPanel() {
    var P = t().panel, M = P.mock;
    var mock = $("#panelMock"); clear(mock);
    mock.setAttribute("aria-label", P.tag);
    var side = el("div", { class: "mock-side" }, [el("strong", { text: M.brand })].concat(M.menu.map(function (m, i) { return el("span", { class: "mock-item" + (i === 0 ? " on" : ""), text: m }); })));
    var kpis = el("div", { class: "kpis" }, [["ok", 18], ["rev", 7], ["pen", 11]].map(function (k) {
      return el("div", { class: "kpi grp-" + k[0] }, [el("strong", { text: String(k[1]) }), el("span", { text: P.kpis[k[0]] })]);
    }));
    var rows = P.candidates.map(function (c) {
      return el("div", { class: "crow" }, [
        el("b", { text: c.name }), groupChip(c.g), el("span", { class: "score", text: c.score }),
        el("span", { class: "conf", text: c.conf ? M.confidence[c.conf] : M.decider })
      ]);
    });
    mock.appendChild(side);
    mock.appendChild(el("div", { class: "mock-main" }, [kpis].concat(rows)));

    var grid = $("#scaleGrid"); clear(grid);
    window.DATA.groups.forEach(function (g) {
      grid.appendChild(el("article", { class: "scale-card" }, [el("span", { class: "swatch grp-" + g, "aria-hidden": "true" }), el("h3", { text: P.groups[g].h }), el("p", { text: P.groups[g].p })]));
    });
    var ul = $("#principles"); clear(ul);
    P.principles.forEach(function (x) { ul.appendChild(el("li", { text: x })); });
  }

  /* ── bot y agenda ───────────────────────────────────────── */
  function renderBot() {
    var B = t().bot;
    var chat = $("#chatMock"); clear(chat);
    chat.setAttribute("aria-label", B.tag);
    B.chat.forEach(function (m) { chat.appendChild(el("p", { class: "bubble" + (m.me ? " me" : ""), text: m.t })); });
    var ul = $("#botPoints"); clear(ul);
    B.points.forEach(function (x) { ul.appendChild(el("li", {}, [el("h3", { text: x.h }), el("p", { text: x.p })])); });
  }

  /* ── IA y video ─────────────────────────────────────────── */
  function renderAi() {
    var A = t().ai, V = t().video;
    $("#atab-ai").textContent = A.tabAi; $("#atab-video").textContent = A.tabVideo;
    var grid = $("#aiGrid"); clear(grid);
    A.items.forEach(function (x) { grid.appendChild(el("article", { class: "card" }, [el("h3", { text: x.h }), el("p", { text: x.p })])); });
    var rules = $("#aiRules"); clear(rules);
    rules.appendChild(el("h3", { text: A.rulesTitle })); rules.appendChild(el("p", { text: A.rules }));

    var m = V.mock, vm = $("#videoMock"); clear(vm);
    vm.setAttribute("aria-label", V.tag);
    var bar = el("div", { class: "vbar" }, [el("i")]);
    [el("small", { text: m.q }), el("b", { text: m.ask }), el("div", { class: "vcam", text: m.cam }),
     el("div", { class: "vtime" }, [el("b", { text: "00:32 / 00:45" }), el("small", { text: m.attempt })]), bar,
     el("div", { class: "vbtns" }, [el("span", { class: "vbtn", text: m.again }), el("span", { class: "vbtn on", text: m.send })]),
     el("small", { class: "vlink", text: m.written })].forEach(function (n) { vm.appendChild(n); });
    var ol = $("#videoSteps"); clear(ol);
    V.steps.forEach(function (s) { ol.appendChild(el("li", { text: s })); });
    var vr = $("#videoRules"); clear(vr);
    vr.appendChild(el("h3", { text: V.rulesTitle })); vr.appendChild(el("p", { text: V.rules }));
    setAiTab(state.aiTab, true);
  }
  function setAiTab(k, quiet) {
    state.aiTab = k;
    ["ai", "video"].forEach(function (n) {
      $("#atab-" + n).setAttribute("aria-selected", String(n === k));
      $("#atab-" + n).setAttribute("tabindex", n === k ? "0" : "-1");
      $("#apanel-" + n).hidden = n !== k;
    });
    if (!quiet) observeReveal();
  }
  function initAiTabs() {
    var tabs = $("#aiTabs"), order = ["ai", "video"];
    tabs.addEventListener("click", function (e) { var b = e.target.closest(".tab"); if (b) setAiTab(b.dataset.tab); });
    tabs.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      var i = order.indexOf(state.aiTab) + (e.key === "ArrowRight" ? 1 : -1);
      var next = order[(i + order.length) % order.length]; setAiTab(next); $("#atab-" + next).focus();
    });
  }

  /* ── informe y confianza ────────────────────────────────── */
  function renderReport() {
    var R = t().report, K = t().trust;
    var mock = $("#reportMock"); clear(mock);
    mock.setAttribute("aria-label", R.tag);
    R.candidates.forEach(function (c) {
      mock.appendChild(el("article", { class: "rcard" }, [el("h3", { text: c.name }), groupChip(c.g), el("p", { text: c.line })]));
    });
    var ul = $("#reportPoints"); clear(ul);
    R.points.forEach(function (x) { ul.appendChild(el("li", {}, [el("h3", { text: x.h }), el("p", { text: x.p })])); });
    var grid = $("#trustGrid"); clear(grid);
    K.items.forEach(function (x) { grid.appendChild(el("article", { class: "card" }, [el("h3", { text: x.h }), el("p", { text: x.p })])); });
  }

  /* ── hoja de ruta y planes ──────────────────────────────── */
  function renderRoadmap() {
    var R = t().roadmap;
    var grid = $("#phaseGrid"); clear(grid);
    window.DATA.phases.forEach(function (ph) {
      var x = R.phases[ph.id];
      grid.appendChild(el("article", { class: "next-card" }, [
        el("span", { class: "status " + ph.status, text: R.status[ph.status] }), el("h3", { text: x.name }), el("p", { text: x.desc }),
        el("div", { class: "chips" }, x.tags.map(function (g) { return el("span", { class: "chip", text: g }); }))
      ]));
    });
    var pg = $("#planGrid"); clear(pg);
    t().plans.items.forEach(function (x) {
      pg.appendChild(el("article", { class: "card" }, [el("h3", { text: x.name }), el("p", { class: "price", text: x.price }), el("p", { text: x.desc })]));
    });
  }

  function renderLinks() {
    var d = window.DATA;
    $("#mailText").textContent = d.email;
  }

  /* ── animaciones ────────────────────────────────────────── */
  var revealObs;
  function observeReveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window) || reduceMotion) { els.forEach(function (n) { n.classList.add("in"); }); return; }
    if (!revealObs) {
      revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });
    }
    els.forEach(function (n) { if (!n.classList.contains("in")) revealObs.observe(n); });
  }

  var counted = false;
  function countUp() {
    if (counted || reduceMotion) return;
    counted = true;
    var start = performance.now(), dur = 1100, nodes = $$("#stats strong");
    function tick(now) {
      var p = Math.min((now - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      nodes.forEach(function (n) { n.textContent = num(Math.round(Number(n.dataset.n) * e)); });
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ── vistas ─────────────────────────────────────────────── */
  function currentView() {
    var h = location.hash.replace(/^#\/?/, "");
    return VIEWS.indexOf(h) > -1 ? h : "home";
  }
  function showView(v, first) {
    state.view = v;
    $$(".view").forEach(function (s) {
      var on = s.dataset.view === v;
      s.hidden = !on; s.classList.toggle("active", on);
    });
    $$(".rail-link[data-view]").forEach(function (a) {
      if (a.dataset.view === v) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    closeDrawer();
    if (!first) { window.scrollTo(0, 0); $("#main").focus({ preventScroll: true }); }
    observeReveal();
    if (v === "home") countUp();
  }

  /* ── barra lateral, tema, idioma ────────────────────────── */
  function setRail(expanded) {
    $("#app").classList.toggle("expanded", expanded);
    $("#railToggle").setAttribute("aria-expanded", String(expanded));
  }
  function openDrawer() { $("#app").classList.add("drawer"); $("#scrim").hidden = false; }
  function closeDrawer() { $("#app").classList.remove("drawer"); $("#scrim").hidden = true; }

  var THEMES = ["light", "dark", "rose", "cream"];
  function activeTheme() {
    var m = document.documentElement.getAttribute("data-theme");
    return THEMES.indexOf(m) > -1 ? m : "light";
  }
  function syncThemes() {
    var cur = activeTheme(), names = t().ui.themeNames || {}, name = names[cur] || cur;
    var dot = $("#themeDot"), btn = $("#themeBtn");
    if (!btn) return;
    dot.className = "sw sw-" + cur;
    btn.setAttribute("title", name);
    btn.setAttribute("aria-label", t().ui.theme + ": " + name);
    btn.setAttribute("data-tip", name);
  }
  function applyTheme(mode) {
    document.documentElement.setAttribute("data-theme", THEMES.indexOf(mode) > -1 ? mode : "light");
    syncThemes();
  }
  function nextTheme() {
    var next = THEMES[(THEMES.indexOf(activeTheme()) + 1) % THEMES.length];
    applyTheme(next); store(STORE.theme, next);
  }

  function renderAll() {
    renderStatic();
    // cada parte se dibuja por separado: si una falla, el resto sigue funcionando
    [renderTilesNav, renderStats, renderJourney, renderPanel, renderBot, renderAi, renderReport, renderRoadmap, renderLinks].forEach(function (fn) {
      try { fn(); } catch (e) { if (window.console) console.warn("No se pudo dibujar " + (fn.name || "una parte") + ":", e); }
    });
    observeReveal();
  }

  function setLang(l) {
    state.lang = l; store(STORE.lang, l);
    try { var url = new URL(location.href); url.searchParams.set("lang", l); history.replaceState(null, "", url); } catch (e) { /* en un marco restringido no se puede cambiar la URL */ }
    counted = true;
    renderAll();
    $$(".reveal").forEach(function (n) { n.classList.add("in"); });
  }

  function initCopy() {
    var btn = $("#copyMail"), txt = $("#mailText"); if (!btn) return;
    var timer;
    btn.addEventListener("click", function () {
      function done(ok) {
        btn.textContent = ok ? t().ui.copied : t().ui.copy;
        clearTimeout(timer); timer = setTimeout(function () { btn.textContent = t().ui.copy; }, 1800);
        if (!ok) { var r = document.createRange(); r.selectNodeContents(txt); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      }
      try { navigator.clipboard.writeText(window.DATA.email).then(function () { done(true); }, function () { done(false); }); } catch (e) { done(false); }
    });
  }

  function initToTop() {
    var b = $("#toTop"); if (!b) return;
    var ticking = false;
    function update() {
      ticking = false;
      var on = window.scrollY > 480;
      if (on) b.hidden = false;
      b.classList.toggle("show", on);
      if (!on) setTimeout(function () { if (!b.classList.contains("show")) b.hidden = true; }, 260);
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    b.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); });
    update();
  }

  function init() {
    state.lang = pickLang();
    renderAll();
    applyTheme(store(STORE.theme) || "light");
    initAiTabs(); initCopy(); initToTop();

    $$("#langSwitch button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });
    $("#themeBtn").addEventListener("click", nextTheme);
    $("#railToggle").addEventListener("click", function () { setRail(!$("#app").classList.contains("expanded")); });
    $("#railOpen").addEventListener("click", openDrawer);
    $("#rail").addEventListener("mouseleave", function () {
      if (innerWidth > 860 && matchMedia("(any-hover: hover)").matches && $("#app").classList.contains("expanded")) setRail(false);
    });
    $("#scrim").addEventListener("click", closeDrawer);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });

    window.addEventListener("hashchange", function () { showView(currentView()); });
    showView(currentView(), true);
    if (state.view === "home") countUp();
  }

  init();
})();
