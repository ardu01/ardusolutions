# Ardu Solutions | Official Website

**Sitio web corporativo de Ardu Solutions, una iniciativa tecnológica especializada en ingeniería, automatización, soluciones IT e integración de inteligencia artificial.**

[![Website](https://img.shields.io/badge/Website-Online-16A34A?style=flat-square)](https://ardusolutions.pages.dev/)
![HTML5](https://img.shields.io/badge/HTML5-Web-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Design-1572B6?style=flat-square&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Web-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Cloudflare](https://img.shields.io/badge/Hosting-Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)
![Languages](https://img.shields.io/badge/Languages-ES%20%7C%20EN-2563EB?style=flat-square)
![License](https://img.shields.io/badge/Code_License-GPL--3.0-64748B?style=flat-square)

---

## Descripción

**Ardu Solutions Web** es el sitio corporativo oficial de **Ardu Solutions**, desarrollado para presentar sus servicios tecnológicos, proyectos de ingeniería y soluciones orientadas a particulares y empresas.

La plataforma centraliza la información sobre las áreas de actividad de la organización y proporciona un canal de contacto para solicitar asesoramiento, estudiar necesidades técnicas y presentar propuestas de colaboración.

La web refleja la filosofía de Ardu Solutions: combinar ingeniería, desarrollo de software y tecnologías emergentes para crear soluciones prácticas y adaptadas a cada proyecto.

**Desarrollo:** Miguel Rodríguez Saiz  
**Organización:** Ardu Solutions  
**Categoría:** Desarrollo Web / Sitio Corporativo  
**Idiomas:** Español e inglés  
**Plataforma de producción:** Cloudflare Pages

## Acceder a la web

**[Visitar Ardu Solutions](https://ardusolutions.pages.dev/)**

También está disponible una publicación alternativa mediante GitHub Pages:

[Ardu Solutions — GitHub Pages](https://ardu01.github.io/ardusolutions/)

## Áreas de actividad

La web presenta las principales líneas de servicios tecnológicos de Ardu Solutions.

### Domótica y viviendas inteligentes

Soluciones para automatización residencial, conectividad e integración de dispositivos.

### Automatización industrial

Aplicación de tecnologías de control y automatización para mejorar procesos e instalaciones.

### Consultoría IT

Asesoramiento tecnológico, infraestructura informática y soluciones digitales para pequeñas y medianas empresas.

### Inteligencia artificial aplicada

Estudio e integración de herramientas de inteligencia artificial en entornos profesionales y procesos de trabajo.

El sitio incorpora páginas específicas para los diferentes servicios, con información adaptada a cada especialidad.

## Características de la plataforma

- Presentación corporativa de Ardu Solutions.
- Catálogo de servicios tecnológicos.
- Páginas específicas para cada especialidad.
- Información sobre proyectos y casos de trabajo.
- Presentación de metodología y procesos.
- Formulario de solicitud de presupuesto.
- Contenido disponible en español e inglés.
- Diseño visual adaptable a dispositivos.
- Compatibilidad con temas claro y oscuro.
- Optimización para motores de búsqueda.
- Integración con Cloudflare Pages.
- Sitio sin cookies ni rastreadores de analítica.

## Tecnologías

| Tecnología | Función |
|---|---|
| HTML5 | Estructura y contenido |
| CSS3 | Diseño visual e interfaz |
| JavaScript | Interactividad |
| Cloudflare Pages | Alojamiento y publicación |
| Cloudflare Workers | Procesamiento de solicitudes |
| Cloudflare KV | Almacenamiento de solicitudes |
| Cloudflare Turnstile | Protección del formulario |
| Slack | Notificaciones internas |
| GitHub | Control de versiones |

La web utiliza una arquitectura estática sin frameworks de frontend ni dependencias de ejecución para mostrar sus páginas.

El procesamiento del formulario se realiza mediante un servicio independiente alojado en Cloudflare.

## Sitio multilingüe

La plataforma está disponible en dos idiomas:

| Idioma | Ruta |
|---|---|
| Español | `/` |
| Inglés | `/en/` |

El contenido incorpora metadatos específicos por idioma y etiquetas `hreflang` para facilitar la indexación correcta de las versiones traducidas.

## Estructura y contenido

El sitio incluye:

- Página principal corporativa.
- Páginas individuales de servicios.
- Casos y proyectos.
- Información sobre la metodología de trabajo.
- Formulario de solicitud de presupuesto.
- Aviso legal.
- Política de privacidad.
- Recursos gráficos y fotografías del equipo.

Las páginas están organizadas mediante rutas independientes, facilitando su mantenimiento e indexación.

## Formulario de contacto

La web incorpora un formulario para recibir consultas y solicitudes de presupuesto.

Las peticiones se envían al endpoint:

`/api/solicitud`

En producción, el procesamiento corresponde a un Worker de Cloudflare Pages que no forma parte de este repositorio.

### Seguridad del formulario

La implementación documentada contempla:

- Validación de los datos recibidos.
- Campo antispam de tipo honeypot.
- Limitación de solicitudes por dirección IP.
- Verificación mediante Cloudflare Turnstile.
- Almacenamiento de solicitudes en Cloudflare KV.
- Avisos internos mediante Slack.

Las credenciales, claves y webhooks se mantienen como secretos de Cloudflare y no se incluyen en el código público.

En la publicación alternativa de GitHub Pages, el formulario utiliza el endpoint del entorno de producción.

## Optimización y SEO

La web incorpora elementos de optimización para motores de búsqueda y presentación en redes sociales.

### Funcionalidades

- Títulos y descripciones individuales.
- URLs canónicas.
- Metadatos Open Graph.
- Metadatos para Twitter Cards.
- Etiquetas de idioma `hreflang`.
- Archivo `robots.txt`.
- Archivo `sitemap.xml`.
- Datos estructurados mediante JSON-LD.

Entre los esquemas utilizados se incluyen `ProfessionalService`, `Person`, `WebSite`, `Service`, `FAQPage`, `HowTo` y `BreadcrumbList`.

Estos elementos facilitan la interpretación del contenido por parte de buscadores, sin garantizar posiciones o resultados concretos.

## Ejecución local

Clonar el repositorio:

```bash
git clone https://github.com/ardu01/ardusolutions.git
cd ardusolutions
```

Para visualizar el sitio, iniciar un servidor HTTP local:

```bash
python3 -m http.server 8000
```

Acceder desde el navegador a:

`http://localhost:8000`

La visualización de las páginas estáticas no requiere instalar frameworks ni dependencias adicionales.

**Nota:** El procesamiento real del formulario depende del servicio externo de Cloudflare y no funciona como un backend local incluido en este repositorio.

## Publicación

La versión principal de la web está publicada mediante **Cloudflare Pages**.

**Producción:**  
https://ardusolutions.pages.dev/

**Publicación alternativa:**  
https://ardu01.github.io/ardusolutions/

La publicación alternativa permite consultar una copia estática del sitio desde GitHub Pages.

## Recursos gráficos

La web utiliza imágenes corporativas, fotografías y material visual de proyectos.

Entre los recursos documentados se encuentran:

- Imágenes de cabecera desarrolladas para Ardu Solutions mediante IA.
- Fotografías del equipo.
- Capturas de aplicaciones propias.
- Renders de desarrollos de hardware.
- Recursos gráficos de productos y proyectos.

Las imágenes publicadas utilizan formatos optimizados para web y no contienen metadatos EXIF.

## Autor y organización

### Miguel Rodríguez Saiz

Desarrollo y mantenimiento técnico del sitio web de Ardu Solutions.

### Ardu Solutions

Iniciativa tecnológica dedicada al desarrollo de soluciones en ingeniería, automatización, informática e inteligencia artificial.

El sitio web funciona como presentación oficial de sus actividades, proyectos y servicios.

### Enlaces oficiales

- **Web corporativa:** https://ardusolutions.pages.dev/
- **Portfolio de proyectos:** https://ardu01.github.io/proyectos/
- **GitHub:** https://github.com/ardu01
- **Repositorio:** https://github.com/ardu01/ardusolutions

## Licencia y propiedad intelectual

El código fuente de la web, incluyendo HTML, CSS y scripts, se distribuye bajo **GNU General Public License v3.0 (GPL-3.0-only)**.

Los textos corporativos, el logotipo y la marca **Ardu Solutions** no quedan incluidos en dicha licencia de software.

**© 2026 Ardu Solutions. Todos los derechos reservados sobre la marca y los contenidos protegidos.**

Las fotografías y determinados recursos gráficos mantienen sus propias condiciones de uso.

Consultar el archivo [LICENSE](LICENSE) para las condiciones aplicables al código fuente.

---

**© 2026 Ardu Solutions · Desarrollo web: Miguel Rodríguez Saiz**

*Engineering. Automation. Technology.*
