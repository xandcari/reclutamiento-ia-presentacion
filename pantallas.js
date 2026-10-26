/* Constructores de cada cuadro de la presentación interactiva. Cada uno recibe el cuadro (elemento), el texto en el idioma activo (p), los
   textos generales del sitio (t) y el idioma. Todo lo que viene de textos se escribe con textContent. */
(function () {
  "use strict";

  var seq = 0;
  function h(tag, cls, kids, attrs) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    [].concat(kids === undefined || kids === null ? [] : kids).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      n.appendChild(typeof c === "object" ? c : document.createTextNode(String(c)));
    });
    return n;
  }
  function s(n) { n.setAttribute("data-seq", ""); n.style.setProperty("--i", seq++); return n; }
  function tag(clase, texto) { return h("span", "tag " + clase, texto); }
  function grp(g, texto) { return h("span", "grp grp-" + g, texto); }
  function cab(titulo, etiqueta, clase) { return h("div", "cab", [h("h2", "", titulo), etiqueta ? tag(clase, etiqueta) : null]); }
  function sub(texto) { return h("p", "sub", texto); }
  function grupoNombre(t, g) { return t.panel.groups[g].h; }

  /* QR de ejemplo: no es un código real, solo ilustra cómo se vería */
  function qrDeEjemplo() {
    var N = 21, x = 7, celdas = "";
    function modulo(i, j) {
      var fi = i < 7 ? i : (i > N - 8 ? N - 1 - i : -1);   // fila dentro de un buscador (esquinas), o -1
      var fj = j < 7 ? j : (j > N - 8 ? N - 1 - j : -1);
      if (fi >= 0 && fj >= 0 && !(i > N - 8 && j > N - 8)) {
        return fi === 0 || fi === 6 || fj === 0 || fj === 6 || (fi >= 2 && fi <= 4 && fj >= 2 && fj <= 4);
      }
      x = (x * 1103515245 + 12345 + i * 31 + j * 17) & 0x7fffffff;
      return (x >> 8) % 2 === 0;
    }
    for (var i = 0; i < N; i++) for (var j = 0; j < N; j++) if (modulo(i, j)) celdas += '<rect x="' + j + '" y="' + i + '" width="1" height="1"/>';
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 " + N + " " + N);
    svg.setAttribute("fill", "#0F2540");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "QR");
    svg.setAttribute("shape-rendering", "crispEdges");
    svg.innerHTML = celdas;
    return svg;
  }

  var C = {};

  C.portada = function (m, p, t) {
    m.classList.add("oscuro");
    m.appendChild(s(tag("tag-maqueta", p.portada.kicker)));
    m.appendChild(s(h("h2", "gigante", "Nira")));
    m.appendChild(s(h("p", "lema", p.portada.lema)));
    m.appendChild(s(h("p", "sub", p.portada.linea)));
    var stats = h("div", "chips-stat");
    window.DATA.stats.forEach(function (st) { stats.appendChild(s(h("div", "chip-stat", [h("strong", "", st.n.toLocaleString("es-AR")), h("span", "", t.stats[st.id])]))); });
    m.appendChild(stats);
    var fila = h("div", "m-botones");
    fila.appendChild(s(h("button", "btn-m lima", p.portada.empezar, { type: "button", "data-accion": "siguiente" })));
    m.appendChild(fila);
    m.appendChild(s(h("p", "nota-m", p.portada.nota)));
  };

  C.desafio = function (m, p, t) {
    m.appendChild(s(cab(p.desafio.title)));
    m.appendChild(s(sub(p.desafio.sub)));
    var cuerpo = h("div", "cuerpo tres-col");
    t.journey.problems.forEach(function (x, i) { cuerpo.appendChild(s(h("div", "m-card blanca", [h("span", "num", "0" + (i + 1)), h("h3", "", x.h), h("p", "", x.p)]))); });
    m.appendChild(cuerpo);
  };

  C.recorrido = function (m, p, t) {
    m.appendChild(s(cab(p.recorrido.title)));
    m.appendChild(s(sub(p.recorrido.sub)));
    var cuerpo = h("div", "cuerpo tres-col");
    window.DATA.steps.forEach(function (st) {
      var x = t.journey.steps[st.id];
      cuerpo.appendChild(s(h("div", "m-card", [tag(st.tag === "hoy" ? "tag-hoy" : "tag-hoy tag-star", t.journey.tags[st.tag]), h("h3", "", x.h), h("p", "", x.p)])));
    });
    m.appendChild(cuerpo);
    m.appendChild(h("p", "nota-m", t.journey.notes));
  };

  C.busquedas = function (m, p) {
    var b = p.busquedas;
    m.appendChild(s(cab(b.title, p.tags.hoyPanel, "tag-hoy")));
    m.appendChild(s(sub(b.sub)));
    var izq = h("div", "m-lista");
    izq.appendChild(s(h("h3", "", b.lista)));
    b.items.forEach(function (it) {
      var abierta = it[1] === "abierta";
      izq.appendChild(s(h("div", "m-card blanca", [
        h("div", "m-botones", [h("h3", "", it[0]), grp(abierta ? "ok" : "pen", abierta ? b.abierta : b.borrador)]),
        h("div", "m-botones", abierta ? [h("span", "m-btn", b.enlace), h("span", "m-btn", b.copiar)] : [h("span", "m-btn prin", b.publicar)])
      ])));
    });
    izq.appendChild(s(h("div", "qr-m", [qrDeEjemplo(), h("div", "", [h("b", "", b.url), h("p", "m-nota", b.qr)])])));
    var der = h("div", "m-card blanca");
    der.appendChild(s(h("h3", "", b.form)));
    [[b.plantilla, b.plantillas[0]], [b.titulo, b.tituloV], [b.zona, b.zonaV]].forEach(function (f) { der.appendChild(s(h("div", "m-campo", [f[0], h("span", "in", f[1])]))); });
    der.appendChild(s(h("p", "m-nota", b.reqs)));
    der.appendChild(s(h("div", "m-botones", [h("span", "m-btn prin", b.crear)])));
    m.appendChild(h("div", "cuerpo dos-col", [izq, der]));
  };

  C.chatbot = function (m, p) {
    var c = p.chatbot;
    m.appendChild(s(cab(c.title, p.tags.canal, "tag-hoy")));
    m.appendChild(s(sub(c.sub)));
    var tel = h("div", "tel-m");
    c.chat.forEach(function (x) { tel.appendChild(s(h("p", "bubble" + (x.me ? " me" : ""), x.t))); });
    var puntos = h("ul", "m-lista");
    c.puntos.forEach(function (x) { puntos.appendChild(s(h("li", "m-card blanca", [h("h3", "", x[0]), h("p", "", x[1])]))); });
    m.appendChild(h("div", "cuerpo dos-col", [tel, puntos]));
    m.appendChild(h("p", "nota-m", c.nota));
  };

  C.panel = function (m, p) {
    m.appendChild(h("h2", "", p.panel.title));
    m.appendChild(h("p", "sub", p.panel.sub));
  };

  C.ranking = function (m, p, t) {
    var r = p.ranking, data = t.panel.candidates;
    m.appendChild(s(cab(r.title, p.tags.hoyPanel, "tag-hoy")));
    m.appendChild(s(sub(r.sub)));
    var izq = h("div", "m-lista");
    izq.appendChild(s(h("div", "m-chk", [h("i"), r.top10])));
    data.forEach(function (c, i) {
      izq.appendChild(s(h("div", "m-fila" + (i === 0 ? " sel" : ""), [h("b", "", r.lista[i]), h("span", "sc", c.score), grp(c.g, grupoNombre(t, c.g)), h("span", "sec", c.conf ? t.panel.mock.confidence[c.conf] : t.panel.mock.decider)])));
    });
    var der = h("div", "m-card blanca");
    der.appendChild(s(h("div", "m-botones", [h("h3", "", r.ficha), grp("ok", grupoNombre(t, "ok"))])));
    der.appendChild(s(h("b", "", r.puntaje)));
    var pista = h("div", "pista-m", [h("i")]); pista.firstChild.style.left = "82%"; pista.firstChild.style.width = "9%";
    der.appendChild(s(pista));
    r.criterios.forEach(function (c) { der.appendChild(s(h("div", "m-crit " + c[2], [h("b", "", c[0]), grp(c[2], c[3]), h("small", "", c[1])]))); });
    der.appendChild(s(h("div", "m-botones", r.acciones.map(function (a, i) { return h("span", "m-btn" + (i === 0 ? " prin" : i === 2 ? " peli" : ""), a); }))));
    m.appendChild(h("div", "cuerpo dos-col", [izq, der]));
  };

  C.escala = function (m, p, t) {
    m.appendChild(s(cab(p.escala.title, p.tags.hoyPanel, "tag-hoy")));
    m.appendChild(s(sub(p.escala.sub)));
    var esc = h("div", "escala-m");
    window.DATA.groups.forEach(function (g) {
      var i = h("i", "grp-" + g);
      esc.appendChild(s(h("div", "tarj", [i, h("h3", "", t.panel.groups[g].h), h("p", "", t.panel.groups[g].p)])));
    });
    m.appendChild(esc);
    var pr = h("ul", "princ");
    t.panel.principles.forEach(function (x) { pr.appendChild(s(h("li", "", x))); });
    m.appendChild(pr);
  };

  C.tablero = function (m, p, t) {
    var b = p.tablero;
    m.appendChild(s(cab(b.title, p.tags.hoyPanel, "tag-hoy")));
    m.appendChild(s(sub(b.sub)));
    var datos = { "María L.": ["ok", "82–91"], "Tomás R.": ["rev", "64–78"], "Lucía F.": ["pen", "55–90"], "Diego P.": ["no", "—"] };
    var kan = h("div", "kan");
    b.columnas.forEach(function (col, idx) {
      var c = h("div", "kan-col");
      c.appendChild(h("h3", "", [col[0], h("span", "", String(col[1].length))]));
      if (!col[1].length) c.appendChild(h("p", "kan-vacia", "—"));
      col[1].forEach(function (nombre) {
        var d = datos[nombre];
        c.appendChild(h("div", "kan-card", [h("b", "", nombre), grp(d[0], grupoNombre(t, d[0])), h("small", "", d[1] + (idx === 4 ? " · " + b.turno : ""))]));
      });
      kan.appendChild(s(c));
    });
    m.appendChild(kan);
  };

  C.agenda = function (m, p) {
    var a = p.agenda;
    m.appendChild(s(cab(a.title, p.tags.canal, "tag-hoy")));
    m.appendChild(s(sub(a.sub)));
    var lista = h("div", "m-lista");
    a.turnos.forEach(function (tu) {
      var lleno = tu[1].indexOf("0 ") !== 0;
      lista.appendChild(s(h("div", "turno-m", [
        h("h3", "", tu[0]), grp(lleno ? "pen" : "ok", tu[1] + " · " + tu[2]),
        h("div", "res", tu[3] ? [h("b", "", tu[3]), h("span", "m-btn", a.botones[2]), h("span", "m-btn", a.botones[3]), h("span", "m-btn peli", a.botones[1])] : [h("span", "m-btn", a.botones[0]), h("span", "m-btn peli", a.botones[1])])
      ])));
    });
    m.appendChild(lista);
    m.appendChild(h("p", "nota-m", a.nota));
  };

  C.metricas = function (m, p) {
    var x = p.metricas;
    m.appendChild(s(cab(x.title, p.tags.hoyPanel, "tag-hoy")));
    m.appendChild(s(sub(x.sub)));
    var k = h("div", "kpis-m");
    x.kpis.forEach(function (q) { k.appendChild(s(h("div", "kpi-m", [h("strong", "", q[0]), h("span", "", q[1])]))); });
    m.appendChild(k);
    var emb = h("div", "m-card blanca");
    var max = x.embudo[0][1];
    x.embudo.forEach(function (e) {
      var pista = h("div", "pista-m", [h("i")]); pista.firstChild.style.width = Math.round(e[1] / max * 100) + "%";
      emb.appendChild(s(h("div", "emb", [h("span", "", e[0]), pista, h("b", "", String(e[1]))])));
    });
    m.appendChild(emb);
    m.appendChild(h("p", "nota-m", x.aviso));
  };

  C.informe = function (m, p) {
    var i = p.informe;
    m.appendChild(s(cab(i.title, p.tags.hoy, "tag-hoy")));
    m.appendChild(s(sub(i.sub)));
    var cands = h("div", "m-lista");
    i.cands.forEach(function (c) { cands.appendChild(s(h("div", "m-card blanca", [h("h3", "", c[0]), grp(c[1], c[1] === "ok" ? "✓" : "…"), h("p", "", c[2])]))); });
    var pts = h("ul", "m-lista");
    i.puntos.forEach(function (x) { pts.appendChild(s(h("li", "m-card", h("h3", "", x)))); });
    m.appendChild(h("div", "cuerpo dos-col", [cands, pts]));
  };

  C.confianza = function (m, p) {
    var c = p.confianza;
    m.appendChild(s(cab(c.title, p.tags.hoy, "tag-hoy")));
    m.appendChild(s(sub(c.sub)));
    var g = h("div", "cuerpo");
    g.style.gridTemplateColumns = "1fr 1fr";
    c.items.forEach(function (x) { g.appendChild(s(h("div", "m-card blanca", [h("h3", "", x[0]), h("p", "", x[1])]))); });
    m.appendChild(g);
  };

  C.ia = function (m, p) {
    var a = p.ia;
    m.appendChild(s(cab(a.title, p.tags.ruta, "tag-ruta")));
    m.appendChild(s(sub(a.sub)));
    var izq = h("div", "m-lista");
    [a.ia, a.ia2, a.ia3].forEach(function (x) { izq.appendChild(s(h("div", "m-card blanca", [h("h3", "", x[0]), h("p", "", x[1])]))); });
    izq.appendChild(s(h("p", "m-nota", a.reglas)));
    var der = h("div", "m-lista");
    der.appendChild(s(h("h3", "", a.videoTitulo)));
    var pasos = h("ul", "pasos-m");
    a.video.forEach(function (x) { pasos.appendChild(h("li", "", x)); });
    der.appendChild(s(pasos));
    der.appendChild(s(h("div", "cam-m", "▶")));
    m.appendChild(h("div", "cuerpo dos-col", [izq, der]));
  };

  C.roadmap = function (m, p) {
    var r = p.roadmap;
    m.appendChild(s(cab(r.title)));
    m.appendChild(s(sub(r.sub)));
    var f = h("div", "fases");
    r.fases.forEach(function (x, i) { f.appendChild(s(h("div", "fase", [grp(i === 0 ? "ok" : i === 1 ? "rev" : "pen", x[1]), h("h3", "", x[0]), h("p", "", x[2])]))); });
    m.appendChild(f);
  };

  C.planes = function (m, p) {
    var r = p.planes;
    m.appendChild(s(cab(r.title, p.tags.borrador, "tag-maqueta")));
    m.appendChild(s(sub(r.sub)));
    var f = h("div", "fases");
    r.items.forEach(function (x) { f.appendChild(s(h("div", "fase", [h("h3", "", x[0]), h("p", "precio", x[1]), h("p", "", x[2])]))); });
    m.appendChild(f);
  };

  C.cierre = function (m, p) {
    var c = p.cierre;
    m.classList.add("oscuro");
    m.appendChild(s(h("h2", "", c.title)));
    m.appendChild(s(h("p", "sub", c.sub)));
    var fila = h("div", "m-botones");
    fila.appendChild(s(h("a", "btn-m lima", c.correo, { href: "mailto:" + window.DATA.email })));
    fila.appendChild(s(h("a", "btn-m borde", c.sitio, { href: "index.html#journey" })));
    fila.appendChild(s(h("button", "btn-m borde", c.reiniciar, { type: "button", "data-accion": "inicio" })));
    m.appendChild(fila);
    m.appendChild(s(h("p", "nota-m", window.DATA.email)));
  };

  window.CONSTRUIR = function (id, marco, lang) {
    seq = 0;
    C[id](marco, window.P[lang], window.T[lang]);
  };
})();
