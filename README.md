# Nira · presentación del producto

Sitio estático (HTML, CSS y JavaScript, sin build ni dependencias) que presenta **Nira**, una plataforma de reclutamiento con chatbot para consultoras de RR. HH.,
reclutadores independientes y PyMEs: recorrido, panel y escala de colores, chatbot y agenda, IA y video, informe para el cliente, hoja de ruta y planes por suscripción.
Está en español e inglés (`?lang=en`), con barra lateral y cuatro temas.

**Es una presentación con datos ficticios.** Cada pieza dice si funciona hoy, si funciona en un canal de prueba o si es una maqueta o hoja de ruta.
Los precios de los planes están sin definir (`[USD __]`). **No figuran cifras de ahorro de tiempo ni de preferencia de las personas**: no se midieron; el sitio propone medirlas en un piloto.
El nombre y el dominio de Nira están en definición y no se verificó que estén disponibles.

## Presentación interactiva

`presentacion.html` es un recorrido con **zoom y giro entre cuadros**, al estilo Prezi: un lienzo grande por el que la cámara viaja de pantalla en pantalla. Cubre todas las funcionalidades (búsquedas con plantillas y QR, chatbot, ranking con Top 10, escala de colores, tablero por estados, agenda, métricas, informe para el cliente, confianza, IA y video, hoja de ruta y planes) con pantallas de ejemplo con datos ficticios y cada cuadro marcado como «funciona hoy» o «hoja de ruta».

Se maneja con las flechas o la barra espaciadora, tocando un cuadro o los puntos del recorrido, deslizando en el celular, `O` para la vista general y `F` para pantalla completa. Se puede abrir en un cuadro con `#/N` (por ejemplo `#/7`) y en inglés con `?lang=en`. Los archivos son `presentacion.html`, `presentacion.css`, `presentacion.js` (cámara y navegación), `presentacion-content.js` (mapa del lienzo y textos), `pantallas.js` y `pantallas.css` (las pantallas de ejemplo).

## PowerPoint

`descargas/Nira-presentacion.pptx` es una versión en PowerPoint de las mismas 17 paradas (texto, sin las pantallas de ejemplo), pensada para importarla en Prezi u otra herramienta. Usa datos ficticios y un contacto genérico.

## Cómo verlo

Abrir `index.html`, o con cualquier servidor estático: `python -m http.server`.

## Cómo se edita

- Textos y datos: `content.js` (español e inglés).
- Estructura: `index.html`. Lógica: `app.js`. Estilos: `styles.css` (base) y `producto.css` (maquetas y grupos de colores).
- Tipografía alojada en el propio sitio (Plus Jakarta Sans, licencia OFL): no se pide nada a terceros.
- No usa cookies ni envía datos; solo recuerda idioma y tema en el navegador.
