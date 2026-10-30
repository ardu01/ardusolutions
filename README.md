# Ardu Solutions — sitio web

Web oficial de Ardu Solutions (soluciones IT y de automatización), en español e inglés.

- Producción: https://ardusolutions.pages.dev
- Copia en GitHub Pages: https://ardu01.github.io/ardusolutions/

HTML y CSS estáticos, sin frameworks ni dependencias. Español en `/`, inglés en `/en/`.

## Páginas

- Portada, una página por servicio (`/servicios/…`, `/en/services/…`), casos de proyecto (`/proyectos/`), cómo trabajamos, solicitud de presupuesto (`/solicitar/`), aviso legal y privacidad.
- SEO: título y descripción únicos, canonical, hreflang es/en/x-default, Open Graph y Twitter, JSON-LD (ProfessionalService, Person, WebSite, Service, FAQPage, HowTo, BreadcrumbList), `sitemap.xml` y `robots.txt`.
- Sin cookies ni rastreadores.

## Formulario de solicitud

El formulario envía a `/api/solicitud`, que atiende el Worker de Cloudflare Pages (no incluido aquí). Valida los datos, usa un campo trampa, limita envíos por IP, verifica Cloudflare Turnstile, guarda la solicitud en Cloudflare KV y avisa por Slack. Ningún secreto (Turnstile o webhook de Slack) vive en este repositorio: están solo como secretos en Cloudflare. En la copia de GitHub Pages el formulario envía a `https://ardusolutions.pages.dev/api/solicitud`.

## Licencia

El código del sitio (HTML, CSS y scripts) se publica bajo GPL-3.0-only (ver `LICENSE`).
Los textos, el logotipo y la marca "Ardu Solutions" son © 2026 Ardu Solutions. Todos los derechos reservados.

## Imágenes

- `assets/img/hero*.webp`: generada con IA para Ardu Solutions.
- `assets/img/miguel.webp`, `assets/img/eduardo.webp`: fotos del equipo (© sus autores, uso exclusivo en esta web).
- Capturas y renders de proyectos propios (SOPA IA, SOPA Web, Orbit Terminal, Android Deck).

Todas las imágenes están en WebP y sin metadatos EXIF.
