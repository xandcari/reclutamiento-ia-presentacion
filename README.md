# Reclutamiento IA · presentación del producto

Sitio estático (HTML, CSS y JavaScript, sin build ni dependencias) que presenta la plataforma de selección de personal
**Reclutamiento IA**: recorrido, panel y escala de colores, bot y agenda, IA y video, informe para el cliente, hoja de ruta y planes.
Está en español e inglés (`?lang=en`), con barra lateral y cuatro temas.

**Es una presentación con datos ficticios.** Cada pieza dice si funciona hoy, si funciona en un canal de prueba o si es una maqueta o hoja de ruta.
Los precios de los planes están sin definir (`[USD __]`).

## Cómo verlo

Abrir `index.html`, o con cualquier servidor estático: `python -m http.server`.

## Cómo se edita

- Textos y datos: `content.js` (español e inglés).
- Estructura: `index.html`. Lógica: `app.js`. Estilos: `styles.css` (base) y `producto.css` (maquetas y grupos de colores).
- Tipografía alojada en el propio sitio (Plus Jakarta Sans, licencia OFL): no se pide nada a terceros.
- No usa cookies ni envía datos; solo recuerda idioma y tema en el navegador.
