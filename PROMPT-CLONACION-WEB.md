# ══════════════════════════════════════════════════════════════
# PROMPT DE CLONACION WEB — v1.2
# Plantilla generica para Local SEO de cualquier sector
# ══════════════════════════════════════════════════════════════
#
# ¿QUE HACE ESTE PROMPT?
# Toma cualquier plantilla web ya hecha y la transforma en una web nueva
# e independiente para otro negocio local (otra ciudad, otro sector, otra
# marca). El resultado es una web lista para posicionar en Google Maps
# (Local Pack) sin que Google detecte duplicado con la plantilla origen.
#
# Sirve para CUALQUIER sector local: reformas, abogados, dentistas,
# fontaneros, peluquerias, restaurantes, clinicas, asesorias, etc.
#
# CAMBIOS EN v1.2 respecto a v1.1:
# - Nuevo campo opcional HOTJAR_ID + Fase 2.8 (instalacion de Hotjar)
# - Fase 10 ampliada: pagina de gracias (/gracias) + redireccion del
#   formulario tras envio exitoso
# - Nueva validacion 12.11 en la verificacion final
#
# ──────────────────────────────────────────────────────────────
# STACKS SOPORTADOS:
# ──────────────────────────────────────────────────────────────
# Claude detectara automaticamente el stack de tu plantilla y adaptara
# el trabajo. Soporta (ordenados por idoneidad para Local SEO):
#
#  ⭐ Next.js (App Router o Pages Router) — RECOMENDADO. Mejor SSR/SSG,
#     control fino de metadata, schemas y rendimiento. Si vas a empezar
#     una plantilla nueva, usa Next.js.
#  ⭐ Astro — Excelente para sites estaticos rapidos, muy buen SEO.
#  ◐ SvelteKit / Nuxt / Remix — Funcionan bien, mismos principios.
#  ◐ HTML + CSS plano (con o sin Tailwind) — Funciona, mas trabajo manual.
#  ◐ Plantillas tipo Hugo / Jekyll / 11ty — Funcionan.
#  ◯ WordPress / Webflow / Wix exportados — NO recomendado. El prompt
#     puede ayudar parcialmente pero estos sistemas no se editan asi.
#
# Si tu plantilla no encaja, dile a Claude tu stack y adaptara las rutas.
#
# ──────────────────────────────────────────────────────────────
# COMO USAR (5 pasos):
# ──────────────────────────────────────────────────────────────
# 1. Duplica la carpeta de tu plantilla base.
# 2. Renombra la carpeta con el slug del nuevo proyecto.
# 3. Abre la carpeta duplicada en VS Code con Claude Code.
# 4. Rellena los campos OBLIGATORIOS de la seccion <ficha-destino>.
#    Los campos opcionales puedes dejarlos vacios — Claude los deriva
#    o investiga por ti.
# 5. Pega este documento entero en el chat de Claude Code.
#
# Claude editara los archivos directamente. No tienes que tocar codigo.
#
# ──────────────────────────────────────────────────────────────
# QUE NECESITA LA PLANTILLA (RECOMENDADO, no obligatorio):
# ──────────────────────────────────────────────────────────────
# Cuanto mas tenga tu plantilla, menos trabajo tienes que hacer tu:
#
# - Estructura de paginas: home, sobre-nosotros, contacto, servicios,
#   zonas (o areas de actuacion), blog, legales (aviso-legal,
#   politica-privacidad, cookies), gracias, 404
# - Componentes reutilizables: Navbar, Footer, formulario de contacto
# - Schemas JSON-LD: LocalBusiness, BreadcrumbList, Service, Article
# - Sistema de tematizacion (CSS variables, Tailwind tokens, etc.)
# - Imagenes en formato moderno (WebP/AVIF)
# - robots.txt y sitemap.xml
# - Formulario apuntando a un endpoint configurable
#
# Si a tu plantilla le falta algo de esto, Claude lo añadira sobre la
# marcha. Pero cuanto mas completo este el punto de partida, mas rapido
# y limpio sera el resultado.
# ══════════════════════════════════════════════════════════════
# PEGAR EN CLAUDE DESDE AQUI ABAJO (NO TOCAR ARRIBA)
# ══════════════════════════════════════════════════════════════

<!--
╔═══════════════════════════════════════════════════════════════╗
║  CAMPOS OBLIGATORIOS (solo 6):                                ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  SECTOR             = (ej: reformas, dentistas, abogados,    ║
║                       fontaneros, peluquerias, restaurantes) ║
║  NOMBRE_EMPRESA     = (ej: Clinica Dental Sonrisa)           ║
║  DOMINIO_NUEVO      = (ej: clinicasonrisa.es)                ║
║  TELEFONO_NUEVO     = (telefono visible, ej: 910 XXX XXX)    ║
║  DIRECCION_COMPLETA = (calle, numero, CP, municipio)         ║
║  FORMSPREE_ID       = (crea uno gratis en formspree.io       ║
║                       y pega el ID, ej: maqppark — o el      ║
║                       endpoint que use tu plantilla)         ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║  CAMPOS OPCIONALES (puedes dejarlos vacios):                  ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  SIGLAS_MARCA       = (2-3 letras para el logo. Si lo dejas   ║
║                       vacio, Claude las deriva del nombre.   ║
║                       Ej: "Clinica Dental Sonrisa" → "CDS")  ║
║  WHATSAPP_NUEVO     = (numero de WhatsApp con prefijo,       ║
║                       solo digitos. Si lo dejas vacio se     ║
║                       eliminan los botones de WhatsApp)      ║
║  URL_GOOGLE_MAPS    = (URL del Google Business Profile,      ║
║                       si existe)                              ║
║  EMAIL_CONTACTO     = (si quieres uno distinto a             ║
║                       info@{DOMINIO_NUEVO})                  ║
║  HOTJAR_ID          = (Site ID de Hotjar, ej: 1234567. Si    ║
║                       lo dejas vacio, no se instala Hotjar)  ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝

DATOS QUE CLAUDE AUTOCOMPLETA INVESTIGANDO:
- MUNICIPIO_DESTINO, CALLE, CALLE_CORTA, CODIGO_POSTAL
- PROVINCIA, COMARCA / DISTRITO, LATITUD, LONGITUD, POBLACION_APROX
- ZONAS_SERVICIO: 4-6 municipios o barrios cercanos (<10 km),
  priorizando los de mayor poblacion. NO incluir el municipio principal.
- BARRIOS_PRINCIPALES: 4-6 barrios reales del municipio principal
- BARRIOS_ZONAS: 2-3 barrios reales de cada zona satelite
- SERVICIOS_PRINCIPALES: 4-6 servicios estandar del {SECTOR}
- PUBLICO_OBJETIVO: tipo de cliente predominante segun {SECTOR} y zona
-->

<ficha-destino>
# OBLIGATORIOS:
SECTOR              =
NOMBRE_EMPRESA      =
DOMINIO_NUEVO       =
TELEFONO_NUEVO      =
DIRECCION_COMPLETA  =
FORMSPREE_ID        =

# OPCIONALES:
SIGLAS_MARCA        =
WHATSAPP_NUEVO      =
URL_GOOGLE_MAPS     =
EMAIL_CONTACTO      =
HOTJAR_ID           =
</ficha-destino>


Eres un experto en Local SEO y desarrollo frontend (Next.js, Astro, React, Vue, Svelte, HTML/CSS). Tu tarea es transformar una plantilla web base en una web completamente nueva e independiente para el negocio descrito en la <ficha-destino>, optimizada para posicionar en Google Maps (Local Pack).

<contexto>
Esta carpeta contiene una plantilla web ya hecha. ANTES de empezar a editar, debes detectar el stack y la estructura.

**Stack tipico detectable** (revisa archivos en la raiz):
- Next.js → `next.config.{js,ts,mjs}`, carpeta `src/app/` (App Router) o `pages/` (Pages Router)
- Astro → `astro.config.{mjs,ts}`, carpeta `src/pages/`
- SvelteKit → `svelte.config.js`, carpeta `src/routes/`
- Nuxt → `nuxt.config.{js,ts}`, carpeta `pages/`
- Vite + React puro → `vite.config.{js,ts}`, carpeta `src/`
- HTML plano → archivos .html en raiz o carpetas
- 11ty / Hugo / Jekyll → `.eleventy.js`, `config.toml`, `_config.yml`

**Una plantilla bien hecha para Local SEO suele tener:**
- Estructura de paginas: home, sobre-nosotros, contacto, servicios, zonas (areas de actuacion), blog, legales (aviso-legal, politica-privacidad, cookies), gracias, 404
- Componentes reutilizables: Navbar, Footer, formulario de contacto, botones flotantes
- Schemas JSON-LD: LocalBusiness, BreadcrumbList, Service, Article
- Sistema de tematizacion (CSS variables, Tailwind tokens, etc.)
- Imagenes en /public/images/ o /assets/
- robots.txt y sitemap.xml
- Formulario apuntando a un endpoint configurable

Tu tarea es transformarla 100% a la nueva marca, sector, ubicacion y datos de contacto de la <ficha-destino>, adaptandote al stack que detectes.

**A lo largo del prompt encontraras ejemplos en sintaxis Next.js (App Router) porque es el stack recomendado. Si la plantilla usa otro stack, traduce mentalmente:**
- `src/app/[ruta]/page.tsx` → equivalente en tu stack (ej: `src/pages/[ruta].astro`, `src/routes/[ruta]/+page.svelte`, `[ruta]/index.html`...)
- `export const metadata` → equivalente en tu stack (ej: frontmatter de Astro, `<svelte:head>`, `<head>` HTML)
- `next/font/google` → como cargues fuentes en tu stack
- `@theme` de Tailwind v4 → `:root { --color-... }` en CSS plano, o tokens de tu sistema de diseño

Los principios SEO (titles, descriptions, headings, schemas, canonical, anti-canibalizacion, spinning) son IDENTICOS en todos los stacks.

IMPORTANTE: Aunque la plantilla original tenga textos de un sector concreto (ej: reformas), el nuevo proyecto puede ser de OTRO sector (ej: dentistas). Eso implica reescribir COMPLETAMENTE:
- Nombres de servicios y slugs
- FAQs y testimonios (el lenguaje cambia mucho entre sectores)
- Microcopy, CTAs, dropdowns de formularios
- Imagenes (si el sector requiere otras imagenes, sustituirlas)
- Schemas (`HomeAndConstructionBusiness` → `Dentist`, `LegalService`, etc.)

La web resultante NO tiene ninguna relacion con la plantilla origen. Google no debe poder vincular ambas webs como contenido duplicado.
</contexto>

<datos-origen-a-eliminar>
Antes de empezar, IDENTIFICA tu mismo (Claude) cuales son los datos a eliminar leyendo la plantilla. Los archivos exactos dependen del stack — busca los equivalentes en el tuyo:

1. **Layout / template global** (Next: `src/app/layout.tsx`, Astro: `src/layouts/Layout.astro`, HTML: `<head>` de cada .html) — metadata global, fuentes, dominio
2. **Componente de structured data / JSON-LD global** — TODOS los datos NAP del schema
3. **Footer** — direccion visible, telefono, email, claim de marca
4. **Navbar / header** — telefono visible, logo
5. **Formulario(s) de contacto** — endpoint del proveedor (Formspree, Web3Forms, Basin, etc.), telefono de error, redireccion tras envio
6. **Boton flotante de WhatsApp** (si existe)
7. **public/robots.txt y public/sitemap.xml** — dominio
8. **package.json** (si existe) — name del proyecto
9. **Scripts de analitica** (Hotjar, Google Analytics u otros) con IDs del origen

Crea una lista interna con TODOS los strings origen detectados:
- Nombre de marca completo y corto, siglas del logo
- Dominio (todas las variantes con/sin www)
- Email
- Telefono fijo (formato visible y formato E.164)
- Numero de WhatsApp del origen
- Direccion completa (calle, CP, municipio, distrito)
- Coordenadas geo (latitud, longitud)
- Municipios/barrios de zonas de servicio + slugs de las carpetas /zonas/
- Slugs de blog posts
- Nombres de imagenes con sufijos de la ciudad/marca origen
- Formspree endpoint origen
- URL de redireccion post-formulario del origen (si existe)
- ID de Hotjar / Google Analytics del origen (si la plantilla lo trae)
- Colores del @theme (--color-accent, --color-dark, --color-beige, etc.)
- Fuentes del next/font/google
- Sector y tipologia de cliente origen

Esta lista la usaras como referencia para Fase 12 (verificacion de residuos).
</datos-origen-a-eliminar>

<restricciones-criticas>
- Trabaja directamente sobre los archivos de esta carpeta. NO muestres bloques de codigo en el chat salvo cuando sean comandos a ejecutar.
- Edita cada archivo in situ con las herramientas de edicion.
- Al terminar, NO debe quedar NINGUNA mencion a los datos de origen en ningun archivo del proyecto.
- Usa agentes en paralelo siempre que sea posible para maximizar velocidad (ej: editar 5 paginas de servicio en paralelo).
- WhatsApp:
  - Si {WHATSAPP_NUEVO} esta rellenado: TODOS los enlaces wa.me/ deben apuntar a https://wa.me/{WHATSAPP_NUEVO}. NUNCA dejar el numero del origen.
  - Si {WHATSAPP_NUEVO} esta vacio: ELIMINAR todos los botones/enlaces de WhatsApp (boton flotante, links en footer, hero, etc.). El cliente no usa WhatsApp.
- SIGLAS_MARCA:
  - Si esta rellenado, usar tal cual.
  - Si esta vacio: derivar de {NOMBRE_EMPRESA}. Tomar las iniciales de las 2-3 primeras palabras significativas (ignorar "de", "la", "el"). Ej: "Clinica Dental Sonrisa" → "CDS"; "Reformas Chamberi" → "RC"; "Abogados Garcia y Asociados" → "AGA".
- EMAIL: usar {EMAIL_CONTACTO} si esta rellenado; si no, derivar como info@{DOMINIO_NUEVO}.
- HOTJAR:
  - Si {HOTJAR_ID} esta rellenado: instalar el snippet de Hotjar en el layout global (una sola vez).
  - Si esta vacio: NO instalar nada, y eliminar cualquier snippet de analitica que trajera la plantilla origen.
- NO crear archivos .md de planificacion intermedios. Trabajar directamente sobre el codigo.
- Si el stack es Next.js: tras cualquier cambio de fuentes en layout.tsx, verificar que los imports de next/font/google son correctos. NO romper TypeScript: cualquier prop nuevo debe estar tipado.
- Si el {SECTOR} del destino es distinto del de la plantilla origen, REESTRUCTURA toda la oferta de servicios y blog acorde al nuevo sector. No fuerces la nomenclatura del sector origen.
</restricciones-criticas>


## FASE 1: Deteccion del stack + Autocompletar ficha + Escaneo

### 1.0 Deteccion del stack (PRIMER PASO)

ANTES de cualquier otra cosa, detecta el stack de la plantilla:

1. Leer la raiz del proyecto: archivos de configuracion, `package.json` (si existe).
2. Identificar el framework:
   - `next.config.*` → **Next.js**. Comprobar si es App Router (`src/app/`) o Pages Router (`pages/`).
   - `astro.config.*` → **Astro**.
   - `svelte.config.js` + `src/routes/` → **SvelteKit**.
   - `nuxt.config.*` → **Nuxt**.
   - `vite.config.*` sin framework SSR → **Vite + React/Vue/Svelte SPA**.
   - `.eleventy.js` / `_config.yml` / `config.toml` → **11ty / Jekyll / Hugo**.
   - Solo archivos `.html` en la raiz / sin `package.json` → **HTML plano**.
3. Identificar el sistema CSS:
   - `tailwind.config.*` → Tailwind v3
   - `@theme` en CSS principal → Tailwind v4
   - CSS plano con `:root { --... }` → custom CSS variables
   - SCSS/SASS → revisar `_variables.scss` o similar
4. Inventario de paginas/rutas: hacer un `Glob` adaptado al stack.

**Informa al usuario del stack detectado** antes de seguir. Si la plantilla no encaja en ningun stack conocido, pregunta.

### 1.1 Autocompletar datos de la ficha

El usuario solo proporciona 6 campos obligatorios. Claude debe NORMALIZAR los campos opcionales e INVESTIGAR el resto.

**Normalizacion de campos opcionales:**
- Si `SIGLAS_MARCA` vacio → derivar de NOMBRE_EMPRESA (iniciales de 2-3 palabras significativas).
- Si `WHATSAPP_NUEVO` vacio → marcar para eliminar todos los botones WhatsApp en Fase 2.
- Si `EMAIL_CONTACTO` vacio → `info@{DOMINIO_NUEVO}`.
- Si `URL_GOOGLE_MAPS` vacio → `sameAs: []` en StructuredData.
- Si `HOTJAR_ID` vacio → marcar para NO instalar Hotjar en Fase 2.

**Datos a derivar de la DIRECCION_COMPLETA:**
- MUNICIPIO_DESTINO: nombre del municipio o distrito principal
- CALLE: formato largo formal (ej: "Calle de Hortaleza, 45") — para schema JSON-LD
- CALLE_CORTA: formato corto (ej: "C/ Hortaleza, 45") — para footer y texto visible
- CODIGO_POSTAL: extraer de la direccion
- TELEFONO_NUEVO_E164: formato +34XXXXXXXXX (sin espacios) para tel: y schema
- WHATSAPP_HREF: https://wa.me/{WHATSAPP_NUEVO} (solo si {WHATSAPP_NUEVO} esta rellenado)

**Datos a INVESTIGAR (buscar en internet):**
- PROVINCIA: a que provincia pertenece el municipio
- COMARCA / DISTRITO: comarca oficial o distrito (en grandes ciudades)
- LATITUD / LONGITUD: coordenadas del municipio
- POBLACION_APROX: poblacion (Wikipedia, INE)
- ZONAS_SERVICIO: 4-6 municipios o barrios cercanos (<10 km) con poblacion suficiente para que tenga sentido captar clientes en el {SECTOR}. Priorizar los de MAYOR poblacion. NO incluir el municipio principal.
- BARRIOS_PRINCIPALES: 4-6 barrios reales del municipio principal
- BARRIOS_ZONAS: 2-3 barrios reales de cada zona satelite
- SERVICIOS_PRINCIPALES: 4-6 servicios estandar que ofrece ese {SECTOR}.
  Ejemplos:
    - reformas → reformas integrales, cocinas, baños, pisos, locales
    - dentistas → implantes, ortodoncia, estetica dental, endodoncia, periodoncia
    - abogados → derecho civil, penal, laboral, mercantil, familia
    - fontaneros → fugas, calderas, desatascos, reformas baño, urgencias 24h
    - peluquerias → corte, color, mechas, alisados, tratamientos
- PUBLICO_OBJETIVO: tipo de cliente predominante (premium, familias, jovenes, empresas...)
- TIPO_NEGOCIO_SCHEMA: tipo de schema.org adecuado al {SECTOR}.
  Ejemplos: `HomeAndConstructionBusiness`, `Dentist`, `LegalService`, `Plumber`,
  `BeautySalon`, `Restaurant`, `MedicalClinic`, `Attorney`. Si no encaja ninguno
  especifico, usar `LocalBusiness`.

**Presenta al usuario los datos autocompletados ANTES de continuar.** Si corrige algo, aplica correccion. Si da OK, sigue a 1.2.

### 1.2 Escaneo del proyecto

Antes de editar nada:

1. Leer archivos clave segun el stack detectado en 1.0:
   - Layout/template global, home, CSS principal con tokens, Navbar, Footer, formularios, componentes de schema, robots.txt, sitemap.xml, archivo de configuracion del framework.
2. Listar todas las paginas del proyecto (Glob adaptado al stack).
3. Comparar zonas origen vs ZONAS_SERVICIO destino:
   - Si destino tiene MENOS zonas: marcar las sobrantes para ELIMINAR
   - Si destino tiene MAS zonas: marcar las nuevas a CREAR (clonar una existente como base)
4. Comparar servicios origen vs SERVICIOS_PRINCIPALES destino:
   - Igual que con zonas: eliminar/renombrar/crear segun corresponda
5. Comparar blog posts origen vs los del destino (mismos N posts pero adaptados al sector).
6. Crear plan interno con el inventario completo y orden de ejecucion.
7. Solo cuando el usuario apruebe la ficha y el plan, empezar Fase 2.


## FASE 2: Transformacion de identidad y contacto

### 2.1 Reemplazos de identidad — Estrategia

**NO hacer un find/replace mecanico de la ciudad origen por la nueva.** Eso deja patrones detectables. En su lugar:

| Tipo de dato | Reemplazar por |
|--------------|----------------|
| Nombre completo de marca origen | {NOMBRE_EMPRESA} |
| Siglas grandes en logo (2 letras) | primeras 2 letras de {SIGLAS_MARCA} |
| Dominio origen (todas variantes) | {DOMINIO_NUEVO} |
| Email origen | {EMAIL_NUEVO} (= {EMAIL_CONTACTO} o info@{DOMINIO_NUEVO}) |
| Telefono visible origen | {TELEFONO_NUEVO} |
| Telefono E.164 origen | {TELEFONO_NUEVO_E164} |
| WhatsApp origen | {WHATSAPP_HREF} (wa.me/{WHATSAPP_NUEVO}) |
| Direccion corta origen | {CALLE_CORTA} (footer, texto visible) |
| Direccion larga origen | {CALLE} (schemas) |
| CP origen | {CODIGO_POSTAL} |
| Municipio/distrito origen | {MUNICIPIO_DESTINO} / {DISTRITO} |
| Provincia origen en schema | {PROVINCIA} |
| Coordenadas origen | {LATITUD} / {LONGITUD} |
| Ciudad origen en textos | {MUNICIPIO_DESTINO} con variacion |

**Variar la formulacion en textos visibles** (no repetir siempre "Servicios en {MUNICIPIO_DESTINO}"). Inventa al menos 4 formas distintas adaptadas al {SECTOR}.

### 2.2 Verificacion NAP (Name, Address, Phone)

NAP debe ser IDENTICO en:
- Footer (usar {CALLE_CORTA})
- Navbar (telefono visible)
- StructuredData.tsx (usar {CALLE} formal)
- ServiceSchema.tsx (usar {CALLE} formal, mismo valor)
- BreadcrumbSchema.tsx (URL canonical)
- Pagina /contacto/page.tsx (telefono, email, direccion)
- Paginas legales (aviso-legal, politica-privacidad, cookies)
- Pagina /gracias (telefono de contacto urgente)
- Google Maps embed en /contacto/page.tsx

Tras editar, ejecutar grep de {CALLE_CORTA} para verificar que NO hay variantes. Un solo formato corto en todos los footers/textos visibles.

### 2.3 Gestion de zonas y servicios (origen vs destino)

**Si hay zonas/servicios del origen que NO existen en el destino:**
1. Eliminar la carpeta entera: `rm -r src/app/zonas/[slug-origen]`
2. Eliminar el link de Footer.tsx
3. Eliminar la opcion del dropdown de HeroForm.tsx y CTAForm.tsx
4. Eliminar la URL de public/sitemap.xml
5. Eliminar la entrada de areaServed (zonas) o el ServiceSchema (servicios)

**Para cada elemento del destino:**
1. Renombrar carpeta o duplicar y renombrar
2. Reescribir contenido del page.tsx con datos reales
3. Actualizar imports/links
4. Actualizar Footer.tsx, dropdowns, schemas, sitemap

### 2.4 Componentes — datos hardcodeados

Buscar y sustituir en TODOS los componentes (ubicacion segun stack):
- **Navbar / header**: telefono visible, tel: link, texto/iniciales del logo
- **Footer**: bloque de contacto, copyright, claim de marca, iniciales del logo
- **Formulario hero**: hidden input `_subject`, error message con telefono, link de WhatsApp (si aplica), redireccion post-envio
- **Formulario CTA**: idem
- **Boton flotante WhatsApp**: link (o ELIMINAR componente entero si {WHATSAPP_NUEVO} esta vacio)
- **StructuredData / JSON-LD global**: TODOS los datos NAP
- **ServiceSchema**: TODOS los datos
- **BreadcrumbSchema**: dominio
- Otros componentes: revisar por si tienen texto hardcodeado

### 2.5 Archivos tecnicos en /public/

**robots.txt:**
- Cambiar `Sitemap:` al nuevo dominio
- Mantener bloqueos selectivos de IA (CCBot, anthropic-ai, Google-Extended, Bytespider) si los hay
- Verificar User-agent: * / Allow: /

**sitemap.xml:**
- Reemplazar TODAS las URLs con https://{DOMINIO_NUEVO}/
- Actualizar TODAS las fechas <lastmod> a fecha de HOY (YYYY-MM-DD)
- Eliminar URLs de zonas/servicios que ya no existen
- Añadir URLs nuevas
- Verificar slugs de blog actualizados
- NUNCA incluir paginas noindex (404, legales, gracias)

**Archivo de configuracion del framework** (next.config, astro.config, svelte.config, etc.):
- Por defecto NO tocar. Si el build produce output estatico (carpeta `out/`, `dist/`, `_site/`, `build/`), respetar la config.

**package.json** (si existe):
- Cambiar "name" al slug del proyecto (ej: "clinica-sonrisa")

### 2.6 Formspree (u otro proveedor) — Endpoint propio por web

**CRITICO**: Cada web debe tener SU PROPIO endpoint para que el cliente reciba sus formularios sin cruzar leads.

En todos los formularios:
- Reemplazar el endpoint origen por el del destino. Si la plantilla usa Formspree: `https://formspree.io/f/{FORMSPREE_ID}`. Si usa otro proveedor (Web3Forms, Basin, Getform, Netlify Forms, etc.), el {FORMSPREE_ID} puede ser el endpoint o ID completo del nuevo servicio.
- Actualizar el hidden input `_subject` (o el equivalente del proveedor) para que mencione {DOMINIO_NUEVO}.
- Configurar la redireccion post-envio a /gracias (ver Fase 10.3).

### 2.7 Links sociales — Preparar para GBP

Si {URL_GOOGLE_MAPS} esta proporcionada, ponerla en el `sameAs` de StructuredData.tsx. Si no, dejar `sameAs: []` (array vacio listo para rellenar).

Otros placeholders sociales: dejarlos como `href="#"` o eliminarlos si no se van a usar.

### 2.8 Analitica (Hotjar)

Si {HOTJAR_ID} esta relleno: insertar el snippet oficial de Hotjar en el
`<head>` del layout global (una sola vez, heredado por todas las paginas):

- Next.js: usar `next/script` con `strategy="afterInteractive"` en `layout.tsx`
- Astro: `<script>` en `Layout.astro` antes de `</head>`
- SvelteKit/Nuxt: equivalente de `<svelte:head>` / `useHead()`
- HTML plano: pegar el snippet en el `<head>` de cada .html

Snippet estandar (sustituir {HOTJAR_ID}):
```html
<script>
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:{HOTJAR_ID},hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

Si {HOTJAR_ID} esta vacio: NO insertar nada. Si la plantilla origen ya
traia un script de Hotjar/Google Analytics con otro ID, ELIMINARLO por
completo (ver `<datos-origen-a-eliminar>`).


## FASE 3: SEO on-page (metadata de Next.js)

### 3.1 Investigacion de competidores

ANTES de definir titles y H1s, investiga como los competidores bien posicionados en la misma provincia/comarca y mismo {SECTOR} estructuran sus titles. Busca en Google:

- "{SECTOR principal} {MUNICIPIO_DESTINO}"
- "{servicio mas buscado del sector} {MUNICIPIO_DESTINO}"
- "mejor {SECTOR singular} {MUNICIPIO_DESTINO}"

Analiza patrones de los 5 primeros: como separan keyword de marca (| o · o –), si repiten ciudad, que ponen en H1 vs title. Usa el patron dominante como base.

### 3.2 Metadata por pagina

Cada pagina debe tener su propio `<title>`, `<meta description>`, OG tags, Twitter Card y canonical. La forma de declararlo depende del stack:

**Next.js (App Router)** — recomendado:
```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Servicio] en {MUNICIPIO_DESTINO} | {SIGLAS_MARCA}",
  description: "120-160 caracteres con keyword, beneficio y CTA + telefono.",
  alternates: { canonical: "/ruta-relativa" },
  openGraph: {
    title: "...",
    description: "...",
    url: "/ruta-relativa",
    images: ["/images/imagen-relevante.webp"],
  },
};
```

**Astro** — frontmatter + `<head>` en layout:
```astro
---
const title = "[Servicio] en {MUNICIPIO_DESTINO} | {SIGLAS_MARCA}";
const description = "120-160 caracteres...";
const canonical = "/ruta-relativa";
---
<Layout {title} {description} {canonical}>...</Layout>
```

**HTML plano** — directamente en `<head>` de cada .html:
```html
<title>[Servicio] en {MUNICIPIO_DESTINO} | {SIGLAS_MARCA}</title>
<meta name="description" content="120-160 caracteres...">
<link rel="canonical" href="https://{DOMINIO_NUEVO}/ruta-relativa">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
```

**SvelteKit / Nuxt / otros**: usar `<svelte:head>`, `useHead()`, etc.

`metadataBase` o URL base del dominio: en Next va en `layout.tsx`; en otros stacks, en el layout principal o en una variable de entorno. NO repetirla por pagina.

Aplicar metadata a TODAS las paginas (home, sobre-nosotros, contacto, hubs, servicios, zonas, blog hub, blog posts, legales, gracias).

Para 404 y gracias: `robots: { index: false, follow: false }` (Next) o `<meta name="robots" content="noindex,nofollow">` (HTML).

### 3.3 Title tags — Formulas genericas

**Regla clave: NO repetir la ciudad + marca si ambas contienen el municipio.** Si el stack soporta plantillas de title (Next.js `title.template`), aprovecharlo para añadir automaticamente "| {NOMBRE_EMPRESA}". Si no, escribir cada title completo.

Formulas (max 60 chars):

| Pagina | Formula |
|--------|---------|
| Home | [Sector principal] en {MUNICIPIO_DESTINO} · [3 servicios top] \| {SIGLAS_MARCA} |
| Servicio | [Servicio] en {MUNICIPIO_DESTINO} \| {SIGLAS_MARCA} |
| Zona | [Sector] en [Zona] · [Diferencial corto] \| {SIGLAS_MARCA} |
| Contacto | Contacto y [Presupuesto/Cita] \| {NOMBRE_EMPRESA} |
| Nosotros | Sobre Nosotros \| {NOMBRE_EMPRESA} |
| Blog hub | Blog sobre [Sector] en {MUNICIPIO_DESTINO} \| {SIGLAS_MARCA} |
| Blog post | [Titulo del post] \| {SIGLAS_MARCA} |
| Legal | [Titulo legal] · {NOMBRE_EMPRESA} |
| Gracias | Solicitud recibida \| {NOMBRE_EMPRESA} |

Separador principal: `|`. Subdivisiones internas: `·`.

### 3.4 H1 — Diferente al title (CRITICO)

El H1 va dentro del JSX de cada page.tsx, separado del metadata. **NO copiar el title quitando la marca**. Reformula con verbos y enfoques distintos.

Patrones utiles segun sector:
- "Especialistas en…"
- "Tu [servicio] en {MUNICIPIO_DESTINO}: [Beneficio]"
- "[Servicio] de Confianza en {MUNICIPIO_DESTINO}"
- "[Verbo accion] tu [objeto] con [Marca]"

### 3.5 Meta descriptions

Cada pagina debe tener description UNICA, **120-160 caracteres** (indexables) o **100+** (legales/404/gracias).

Incluir: municipio, servicio principal, beneficio diferencial, CTA y telefono. Variar la estructura entre paginas. No usar la misma plantilla siempre.

### 3.6 Eliminar meta keywords

**ELIMINAR** cualquier `<meta name="keywords">` o propiedad `keywords` de los metadata. Google las ignora desde 2009 y son señal de over-optimization.

### 3.7 Open Graph y Twitter Card

- En el layout/template global: actualizar dominio, siteName, imagen hero, locale (`es_ES`)
- En cada pagina con metadata propio: og:title / og:description / og:url / og:image relevantes
- En blog posts: `og:type = "article"`
- Twitter Card: `twitter:card = "summary_large_image"` global

### 3.8 Canonical + Hreflang

Cada pagina debe tener canonical absoluto y hreflang `es-ES` + `x-default`.

**Next.js:**
```ts
alternates: {
  canonical: "/[ruta]",
  languages: { "es-ES": "/[ruta]", "x-default": "/[ruta]" },
}
```

**HTML plano:**
```html
<link rel="canonical" href="https://{DOMINIO_NUEVO}/[ruta]">
<link rel="alternate" hreflang="es-ES" href="https://{DOMINIO_NUEVO}/[ruta]">
<link rel="alternate" hreflang="x-default" href="https://{DOMINIO_NUEVO}/[ruta]">
```

NO usar `hreflang="es"` suelto (redundante con es-ES).

### 3.9 Jerarquia de headings

- 1 H1 por pagina
- H2 con variaciones semanticas — nunca H2 identicos en la misma pagina
- H3 sin sobreoptimizar (no incluir municipio en cada uno)
- Nunca saltar niveles (H1 → H3 sin H2)

### 3.10 Enlaces internos

- Anchor text con keywords: NO "Ver mas", SI "[Servicio] en {MUNICIPIO_DESTINO}"
- Footer.tsx zoneLinks: "[Sector] en [Zona]"
- Cada servicio enlaza a 2-3 zonas y viceversa (en CTAs internos del JSX)
- CTAs descriptivos


## FASE 4: Content Spinning (CRITICO)

Google detecta contenido duplicado entre dominios. Si dos webs comparten plantilla y solo cambia el municipio, Google las penaliza. **Esta fase es la mas importante.**

### 4.1 Principio

Reescribir 50%+ del texto visible de cada pagina. Mantener SIEMPRE las keywords del sector. Lo que cambia son las FRASES, no las keywords.

Cada proyecto tiene spinning DIFERENTE. Nunca reutilizar las mismas frases entre webs.

### 4.2 Tecnicas (aplicar TODAS)

1. **Sinonimos** sin tocar keywords del sector. Ejemplos transversales:
   - "Precio cerrado" → "Presupuesto fijo" / "Coste pactado sin sorpresas"
   - "Equipo propio" → "Plantilla propia" / "Profesionales de nuestra empresa"
   - "Sin compromiso" → "Sin coste ni obligacion" / "Totalmente gratuito"
   - "Calidad premium" → "Alta gama" / "Primer nivel"
   - "Plazos garantizados" → "Fechas que se cumplen" / "Calendario firme"

2. **Reestructurar frases** — misma idea, orden diferente.

3. **Variar CTAs** segun el sector:
   - Servicios profesionales: "Pide tu valoracion" / "Solicita presupuesto" / "Consultanos"
   - Salud/Estetica: "Pide tu cita" / "Reserva valoracion gratuita" / "Te llamamos"
   - Hosteleria: "Reserva mesa" / "Pedidos online"

4. **Variar microcopy** — labels, placeholders, error messages, form notes.

5. **Datos locales reales** — el ancla unica:
   - {BARRIOS_PRINCIPALES} en testimonios, FAQs, intro
   - {POBLACION_APROX} en contexto
   - "Ayuntamiento de {MUNICIPIO_DESTINO}" en FAQs sobre permisos/tramites (si aplica al sector)

### 4.3 Checklist HOME

- [ ] Hero badge (claim de autoridad)
- [ ] Hero subtitle (propuesta de valor)
- [ ] Hero trust items (3 badges)
- [ ] HeroForm headings + nota de privacidad
- [ ] HeroForm placeholders y dropdown options (adaptados a {SECTOR})
- [ ] Seccion servicios: heading + subtitle
- [ ] Service cards: descripcion de cada una
- [ ] Stats labels (animated counters)
- [ ] Trust section: heading + subtitle + cards
- [ ] Process steps: heading + descripcion de cada paso
- [ ] Zonas section: heading + subtitle
- [ ] Testimonials: nombre/ubicacion/texto (ubicaciones = barrios reales)
- [ ] FAQ: heading + reescribir CADA respuesta
- [ ] Pricing (si aplica al sector): heading + features + nota
- [ ] CTA final: heading + texto
- [ ] Footer description

### 4.4 Paginas interiores

- [ ] Sobre Nosotros: REESCRIBIR COMPLETAMENTE
- [ ] Cada pagina de servicio: parrafos descriptivos, features, proceso, FAQs
- [ ] Pagina de contacto: textos informativos, horarios, instrucciones
- [ ] Blog posts: contenido 100% original (ver Fase 8)
- [ ] Paginas de zona: ver 4.6

### 4.5 Keywords intocables

Mantener literal las keywords principales del {SECTOR} y {MUNICIPIO_DESTINO}, {DISTRITO}, {COMARCA}. Ejemplos por sector:
- Reformas: "Reforma integral", "Reforma de cocinas", "Reformas de baños"
- Dentistas: "Implantes dentales", "Ortodoncia invisible", "Estetica dental"
- Abogados: "Derecho laboral", "Divorcio express", "Reclamacion de deuda"
- Fontaneros: "Fontaneros 24h", "Deteccion de fugas", "Cambio de caldera"

### 4.6 Paginas de zonas — Evitar doorway pages

Para CADA zona DEBES:
1. Parrafo introductorio UNICO con particularidades reales de esa zona
2. Distancia y tiempo REAL desde {MUNICIPIO_DESTINO}
3. Poblacion de la zona (si se conoce)
4. Al menos 1 FAQ EXCLUSIVA
5. 2-3 barrios reales (de {BARRIOS_ZONAS})
6. Mínimo 30% de contenido exclusivo respecto a las otras zonas

### 4.7 Sobre Nosotros — Reescritura total

- Cambiar storytelling completo y orden de bloques
- Reformular valores y propuestas
- Mencionar barrios, tipo de cliente, poblacion
- Variar cifras de stats si son coherentes


## FASE 5: Diferenciacion visual y estructural

### 5.1 Paleta de colores

Cambiar los tokens de color del sistema de diseño. Ubicacion segun stack:
- **Tailwind v4**: `@theme` en CSS principal. Cambiar el valor regenera automaticamente todas las clases (`bg-accent`, `text-accent`, etc.). No hay que tocar JSX.
- **Tailwind v3**: `theme.extend.colors` en `tailwind.config.{js,ts}`.
- **CSS plano**: `:root { --color-accent: ... }` en el CSS principal.
- **SCSS/SASS**: archivo `_variables.scss` (o equivalente).

**EXCEPCION**: revisar si hay valores hex hardcodeados en SVGs inline (formularios, iconos) o en el JSX/HTML. Sustituirlos por el nuevo accent.

**Paletas predefinidas — usar UNA distinta por proyecto.** Elegir segun {SECTOR}:

```css
/* PALETA A — Verde bosque + Cobre calido (artesania, calidez, reformas)*/
--color-accent: #B8754A;
--color-accent-light: #C98861;
--color-accent-dark: #985F3A;
--color-dark: #1D3A2F;
--color-dark-card: #16302A;
--color-beige: #F4EFE6;

/* PALETA B — Azul petroleo + Mostaza envejecida (profesional, moderno-clasico) */
--color-accent: #D4A044;
--color-accent-light: #E0B45C;
--color-accent-dark: #A87E33;
--color-dark: #1A3A4A;
--color-dark-card: #143040;
--color-beige: #F5F2EC;

/* PALETA C — Carbon + Borgoña (premium, abogados, despachos) */
--color-accent: #8B3A3A;
--color-accent-light: #A85050;
--color-accent-dark: #6E2D2D;
--color-dark: #1F1F1F;
--color-dark-card: #181818;
--color-beige: #F3EFEA;

/* PALETA D — Azul marino + Salmon (fresco, contemporaneo, estetica) */
--color-accent: #E07B5D;
--color-accent-light: #ED9479;
--color-accent-dark: #B6604A;
--color-dark: #1B2A3D;
--color-dark-card: #14202F;
--color-beige: #F7F3EE;

/* PALETA E — Azul medico + Aqua suave (salud, dentistas, clinicas) */
--color-accent: #2E8B9B;
--color-accent-light: #4BA4B4;
--color-accent-dark: #226B79;
--color-dark: #163040;
--color-dark-card: #102532;
--color-beige: #EEF6F8;

/* PALETA F — Negro + Dorado (lujo, restaurantes alta gama, joyerias) */
--color-accent: #C9A24B;
--color-accent-light: #D7B670;
--color-accent-dark: #9E7E32;
--color-dark: #0E0E0E;
--color-dark-card: #1A1A1A;
--color-beige: #F2EDE2;
```

**Guia de eleccion segun sector:**
- Reformas / construccion → A o C
- Abogados / asesorias → B o C
- Dentistas / clinicas / salud → E o B
- Estetica / peluquerias / belleza → D o F
- Restaurantes / hosteleria → F (gama alta) o A (acogedor)
- Fontaneros / servicios tecnicos → B o A
- Inmobiliarias → C o B

Ademas del `@theme`, revisar degradados con `rgba(...)` en globals.css y cambiar al nuevo accent.

### 5.2 Fuentes — Variar entre proyectos

Cambiar a UN par DIFERENTE por proyecto y adecuado al {SECTOR}:

Pares recomendados:
- **Inter + DM Sans** (limpio, neutro — sirve casi todo)
- **Manrope + Nunito Sans** (amigable)
- **Sora + Work Sans** (tech, moderno)
- **Space Grotesk + Rubik** (joven, fresco)
- **Bricolage Grotesque + Source Sans 3** (distintivo)
- **Plus Jakarta Sans + Outfit** (premium digital)
- **Cormorant Garamond + Inter** (lujoso, sector legal/medico/restauracion premium)
- **Playfair Display + Lato** (clasico-elegante)

**Pasos** (adapta segun stack):
1. **Next.js con next/font/google**: cambiar los imports en `layout.tsx`. Renombrar las constantes manteniendo variables CSS coherentes (`--font-body`, `--font-display`).
2. **Astro / Svelte / HTML**: usar `<link>` a Google Fonts en el `<head>` del layout principal, o `@import url(...)` en el CSS. Tambien se puede self-host con `fontsource`.
3. En el CSS principal (Tailwind `@theme` o `:root`), actualizar tokens de fuente: `--font-body`, `--font-display`.
4. **CRITICO**: si la plantilla origen usa clases tipo `font-montserrat` y `font-anton` (Tailwind), sustituirlas por `font-body` y `font-display` globalmente. Buscar y reemplazar con grep en todos los componentes/templates.

### 5.3 Orden de secciones — Variar

Variar el orden de secciones INTERMEDIAS entre proyectos (Hero queda primero y CTA al final):
- **Variante A**: Hero → Servicios → Trust → Proceso → Testimonios → Zonas → Pricing → FAQ → CTA
- **Variante B**: Hero → Trust → Servicios → Zonas → Proceso → FAQ → Pricing → Testimonios → CTA
- **Variante C**: Hero → Servicios → Pricing → Trust → Testimonios → Proceso → Zonas → FAQ → CTA

Reordenar fisicamente los bloques en la pagina home (segun stack: `src/app/page.tsx`, `src/pages/index.astro`, `index.html`, etc.).

### 5.4 Cantidad de elementos — Variar

- FAQs: entre 4 y 7
- Testimonios: entre 2 y 4
- Process steps: entre 4 y 6
- Trust cards: entre 3 y 5

### 5.5 Logo — Cambiar siglas y color

Si el logo es un cuadrado con iniciales:
- Texto del cuadradito: primeras 2 letras de {SIGLAS_MARCA}
- El fondo se hereda automaticamente de `bg-accent` (cambia con la paleta)


## FASE 6: Imagenes — Desvinculacion total

### 6.1 REGLA CRITICA: Solo caracteres ASCII en nombres de archivo

NUNCA usar ñ ni acentos en nombres de archivo. Equivalentes ASCII: ñ→n, á→a, etc.

Motivo: causan errores 404 en servidores web (Cloudflare Pages, Nginx) por encoding UTF-8 vs Latin-1.

Verificacion (PowerShell):
```powershell
Get-ChildItem public/images -File | Where-Object { $_.Name -match '[ñáéíóúüÑÁÉÍÓÚÜ]' }
```
El resultado DEBE estar vacio.

### 6.2 Imagen hero — Buscar una imagen impactante adecuada al sector

La imagen hero es lo primero que ve el usuario. Buscar en Pexels/Unsplash (licencia libre) una imagen que:
- Represente claramente el {SECTOR}
- Sea amplia y horizontal (>= 1600px ancho)
- Transmita calidad y profesionalidad
- Tenga un punto focal claro

Si el sector cambia respecto a la plantilla (reformas → dentistas), SUSTITUIR completamente la imagen hero. Si solo cambia la ciudad, basta con renombrar + transformar (ver 6.5).

Nombre nuevo: `hero-[sector]-[slug-municipio].webp` (ej: `hero-clinica-dental-chamberi.webp`).

**Actualizar referencias** en (segun stack):
- Layout principal → `<link rel="preload" as="image">` de la nueva hero
- Metadata global → openGraph.images
- Componente de StructuredData → image, logo
- Pagina home → src de la imagen hero

### 6.3 Renombrar TODAS las imagenes

Patron: `[descripcion]-[slug-municipio].webp`

Reglas:
- Todo minuscula, solo ASCII, guiones como separador, max 60 chars
- **Variar nombres descriptivos entre proyectos**

### 6.4 Actualizar TODAS las referencias

Tras renombrar, actualizar las rutas en:
- `<img src=...>` HTML y componentes de imagen optimizada (`<Image>` de Next, `<Image>` de Astro, etc.)
- Background images en CSS
- openGraph.images, twitter.images en metadata
- StructuredData (image, logo)
- Cualquier import o referencia en componentes

```powershell
Select-String -Path "src/**/*.tsx","src/**/*.ts","src/**/*.css" -Pattern "/images/" -Recurse
```

### 6.5 Transformacion anti-duplicado de imagenes (CRITICO)

Google detecta imagenes duplicadas entre dominios via hashing perceptual (pHash). Renombrar archivos NO es suficiente.

TODAS las imagenes de `/public/images/` DEBEN ser transformadas para que su hash perceptual sea diferente al de la plantilla origen.

**Script Node.js** — crear `public/images/transform-images.cjs`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname);
const backupDir = path.join(imgDir, '_backup');

async function transform() {
  fs.mkdirSync(backupDir, { recursive: true });
  const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.webp'));
  for (const f of files) fs.copyFileSync(path.join(imgDir, f), path.join(backupDir, f));

  for (const file of files) {
    const isThumb = file.includes('-thumb');
    await sharp(path.join(backupDir, file))
      .flop()
      .modulate({ brightness: 1.06, saturation: 1.12, hue: 15 })
      .gamma(1.05)
      .webp({ quality: isThumb ? 78 : 82 })
      .toFile(path.join(imgDir, file + '.tmp'));
    fs.renameSync(path.join(imgDir, file + '.tmp'), path.join(imgDir, file));
    console.log('OK: ' + file);
  }

  fs.rmSync(backupDir, { recursive: true });
  console.log('Done! ' + files.length + ' images transformed.');
}
transform();
```

Ejecutar:
```powershell
cd public/images
npm install sharp --no-save
node transform-images.cjs
Remove-Item transform-images.cjs
```

**Verificacion**: comparar tamaños de al menos 3 archivos antes/despues — deben ser DIFERENTES.

### 6.6 Eliminar metadata EXIF/XMP

Orden de preferencia:
1. **exiftool**: `exiftool -all= -overwrite_original -r ./public/images/`
2. **ImageMagick**: `Get-ChildItem public/images -Recurse -Include *.webp | ForEach-Object { magick mogrify -strip $_.FullName }`
3. Si ninguno disponible, informar al usuario.

### 6.7 Alt text — Reescribir todos

- Incluir {MUNICIPIO_DESTINO} y servicio relevante
- Variar redaccion entre imagenes
- Max 125 caracteres
- Describir lo que se ve, NO empezar con "Imagen de..." / "Foto de..."

### 6.8 Atributos de rendimiento

- `loading="lazy"` en todas EXCEPTO la imagen hero
- `width` y `height` explicitos
- `decoding="async"` (excepto LCP)
- Hero: `fetchpriority="high"` + `<link rel="preload" as="image">` en el layout principal

### 6.9 Verificacion de integridad de imagenes (BLOQUEANTE)

ANTES de pasar a Fase 7:

1. Listar TODAS las referencias `/images/` en src/:
   ```powershell
   Select-String -Path "src/**/*.tsx","src/**/*.ts","src/**/*.css","public/*.xml" -Pattern "/images/[^\""'\s\)]*" -AllMatches | ForEach-Object { $_.Matches.Value } | Sort-Object -Unique
   ```
2. Listar archivos reales:
   ```powershell
   Get-ChildItem public/images -File -Filter *.webp | ForEach-Object { "/images/$($_.Name)" } | Sort-Object
   ```
3. Comparar ambas listas. Cada referencia DEBE tener archivo. Si hay huerfanas, corregir.
4. Verificar 0 nombres con caracteres no-ASCII.

**No avanzar hasta que pase al 100%.**


## FASE 7: Schemas JSON-LD

### 7.1 StructuredData (LocalBusiness — global)

Editar el componente / template que inyecta el JSON-LD de LocalBusiness (Next: `StructuredData.tsx`; Astro: `StructuredData.astro`; HTML: `<script type="application/ld+json">` en cada `<head>`):
- `@type`: ajustar al sector → {TIPO_NEGOCIO_SCHEMA}. Opcionalmente convertir a array `["LocalBusiness", "{TIPO_NEGOCIO_SCHEMA}"]`.
- `name`: {NOMBRE_EMPRESA}
- `url`: `https://{DOMINIO_NUEVO}`
- `logo` Y `image`: rutas a archivos que EXISTAN realmente
- `telephone`: {TELEFONO_NUEVO_E164}
- `email`: {EMAIL_NUEVO}
- `address`: {CALLE}, {CODIGO_POSTAL}, {MUNICIPIO_DESTINO}, {PROVINCIA}, "ES"
- `geo`: {LATITUD}, {LONGITUD}
- `areaServed`: {MUNICIPIO_DESTINO} + cada zona de {ZONAS_SERVICIO}
- `aggregateRating`: SOLO si la empresa tiene reviews reales y verificables. Si no, ELIMINAR este bloque entero.
- `openingHoursSpecification`: ajustar al horario real si lo conoces.

### 7.2 ServiceSchema — En cada pagina de servicio

Verificar que el componente ServiceSchema (o un `<script type="application/ld+json">` inline) se incluye en cada pagina de servicio con props correctos.

```json
{
  "@type": "Service",
  "@id": "https://{DOMINIO_NUEVO}/servicios/[slug]#service",
  "name": "[Servicio] en {MUNICIPIO_DESTINO}",
  "description": "1-2 frases unicas",
  "provider": {"@id": "https://{DOMINIO_NUEVO}/#business"},
  "areaServed": [...],
  "serviceType": "[Servicio]"
}
```

### 7.3 BreadcrumbSchema — En paginas interiores

En cada pagina de servicio, zona, blog post y legales, incluir BreadcrumbSchema con la jerarquia correcta.

**EN LA HOMEPAGE**: ELIMINAR cualquier BreadcrumbSchema (un breadcrumb de 1 elemento "Inicio" no aporta valor SEO).

### 7.4 Article schema — En blog posts

Cada post debe tener inline el JSON-LD de Article (headline, datePublished, dateModified, author, publisher, image).

### 7.5 FAQPage

Si la home tiene seccion FAQ con schema, sustituir datos y REFORMULAR todas las respuestas con spinning (Fase 4).

### 7.6 Verificacion

- `image` y `logo` apuntan a archivos que existen
- `areaServed` tiene {MUNICIPIO_DESTINO} + zonas correctas
- `sameAs` esta vacio o solo contiene URLs reales (sin URLs del origen)


## FASE 8: Blog — Contenido SEO local

La plantilla incluye N posts. **Renombrar carpetas y reescribir contenido al {SECTOR} del destino**.

### 8.1 Plantilla de posts por sector

Adaptar los 3 posts base al {SECTOR}. Ideas:

**Reformas:**
1. `cuanto-cuesta-[tipo]-{slug-municipio}` (precios)
2. `tendencias-[area]-{año-actual}` (tendencias)
3. `ayudas-rehabilitacion-{slug-region}` (subvenciones)

**Dentistas:**
1. `cuanto-cuestan-implantes-dentales-{slug-municipio}`
2. `ortodoncia-invisible-vs-brackets-{año-actual}`
3. `salud-dental-niños-{slug-municipio}`

**Abogados:**
1. `como-reclamar-[tema]-{slug-municipio}`
2. `cambios-legales-{año-actual}-{slug-provincia}`
3. `derechos-trabajador-{slug-municipio}`

**Fontaneros:**
1. `cuanto-cuesta-cambiar-caldera-{slug-municipio}`
2. `como-detectar-fuga-agua-{slug-municipio}`
3. `tipos-calderas-eficiencia-energetica`

Cada post: ~700 palabras, datos locales, CTA al final.

### 8.2 Integracion

- Verificar slugs nuevos en el hub `blog/page.tsx`
- Verificar enlaces en Navbar (`/blog`) y Footer
- Sitemap: actualizar URLs de los posts


## FASE 9: Anti-canibalizacion

### 9.1 NO crear pagina de zona para el municipio principal

**NUNCA** crear `/zonas/[slug-municipio-principal]`. Eso canibaliza la HOME.

### 9.2 Contenido hiper-local va en la HOME

Datos del municipio principal (barrios, tipo cliente, poblacion, ayuntamiento) van en:
- FAQs de la home
- Seccion "Sobre Nosotros" / "Por que elegirnos"
- Testimonios (mencionar barrios reales)

### 9.3 Footer y zonas

- En Footer.tsx zoneLinks: primer link "[Sector] en {MUNICIPIO_DESTINO}" → `/` (la home), seguido de las zonas satelite
- El hub de zonas (`/zonas/page.tsx`) solo muestra zonas SATELITE, no el municipio principal


## FASE 10: Formularios — LOPD, pagina de gracias y redireccion

### 10.1 Checkbox LOPD (obligatorio en España)

Verificar que TODOS los formularios (hero, CTA, contacto) tienen un checkbox de aceptacion de Politica de Privacidad. Si no lo tienen, AÑADIRLO:

```html
<label>
  <input type="checkbox" required>
  Acepto la <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer">Politica de Privacidad</a>
</label>
```

Adaptar la sintaxis (className vs class, `target` etc.) al stack. El href debe apuntar a `/politica-privacidad` (NO a una URL del origen).

### 10.2 Pagina de gracias (thank-you page)

Crear la ruta `/gracias` (segun stack: `src/app/gracias/page.tsx`, `src/pages/gracias.astro`, `gracias.html`) con este contenido:

- H1: "Gracias por contactar con nosotros"
- Texto: "Hemos recibido tu solicitud. Nos pondremos en contacto contigo lo antes posible con un presupuesto detallado. Tiempo de respuesta habitual: menos de 24 horas en dias laborables."
- Texto: "Si necesitas atencion urgente, llamanos directamente al {TELEFONO_NUEVO}" (link `tel:` con {TELEFONO_NUEVO_E164})
- Boton: "Volver al inicio" → `href="/"`

Metadata: `robots: noindex, nofollow` (pagina transaccional, sin valor SEO). NO incluir `/gracias` en sitemap.xml (misma regla que 404 y legales). Hereda Navbar/Footer del layout si el diseño lo permite, o version minimalista sin navegacion si se prefiere aislar la conversion.

### 10.3 Redireccion tras envio

Todos los formularios (hero, CTA, contacto) deben redirigir a `https://{DOMINIO_NUEVO}/gracias` tras un envio exitoso:

- **Formspree con fetch/AJAX**: en el `.then()` de respuesta OK, ejecutar `window.location.href = "/gracias"`
- **Formspree con submit nativo (sin JS)**: hidden input `<input type="hidden" name="_next" value="https://{DOMINIO_NUEVO}/gracias">`
- **Web3Forms**: parametro `redirect` con la misma URL
- **Netlify Forms**: `action="/gracias"` en el `<form>`, y crear esa pagina
- **Otro proveedor**: usar su mecanismo nativo de redirect-on-success; si no lo tiene, hacerlo por JS tras confirmar la respuesta ok.

NUNCA dejar la redireccion apuntando al dominio de origen.


## FASE 11: Build

Ejecutar el comando de build segun el stack:

| Stack | Comando | Output |
|-------|---------|--------|
| Next.js (output: "export") | `npm run build` | `/out/` |
| Next.js (sin export) | `npm run build` | `/.next/` (deploy en Vercel/Netlify) |
| Astro | `npm run build` | `/dist/` |
| SvelteKit | `npm run build` | `/build/` o `/.svelte-kit/` |
| Nuxt | `npm run build` | `/.output/` |
| Vite | `npm run build` | `/dist/` |
| 11ty | `npx eleventy` | `/_site/` |
| HTML plano | (sin build) | la carpeta tal cual |

**Verificar build limpia:**
- 0 errores de TypeScript (si aplica)
- 0 errores criticos del framework
- Todas las paginas generadas correctamente, incluyendo `/gracias`
- Inspeccionar el `index.html` generado y comprobar que `<title>`, OG tags, schema JSON-LD reflejan datos del DESTINO (no del origen)

Si hay errores de tipos o build, arreglarlos antes de seguir.


## FASE 12: Verificacion final

### 12.1 Busqueda de residuos del origen

Usar la lista interna creada en `<datos-origen-a-eliminar>`. Buscar cada string con grep/Select-String en TODOS los archivos editables del proyecto (extensiones segun stack: `.tsx`, `.ts`, `.astro`, `.svelte`, `.vue`, `.html`, `.css`, `.scss`, `.md`, `.json`, `.xml`, `.txt`). Ejemplo PowerShell:

```powershell
$residuos = @(
  "<dominio-origen>",
  "<marca-completa-origen>",
  "<email-origen>",
  "<telefono-origen-visible>",
  "<telefono-origen-e164>",
  "<whatsapp-origen>",
  "<calle-origen>",
  "<CP-origen>",
  "<municipio-origen>",
  "<zona-origen-1>", "<zona-origen-2>",
  "<endpoint-formulario-origen>",
  "<url-redireccion-origen>",
  "<hotjar-id-origen>",
  "<accent-origen-hex>",
  "<fuente-origen-1>", "<fuente-origen-2>"
)
$extensiones = "*.tsx","*.ts","*.jsx","*.js","*.astro","*.svelte","*.vue","*.html","*.css","*.scss","*.json","*.xml","*.txt","*.md"
foreach ($r in $residuos) {
  $hits = Get-ChildItem -Recurse -Include $extensiones -Exclude node_modules,.next,dist,out,_site,build | Select-String -Pattern $r -SimpleMatch -ErrorAction SilentlyContinue
  if ($hits) { Write-Host "RESIDUO: $r" -ForegroundColor Red; $hits | ForEach-Object { Write-Host "  $($_.Path):$($_.LineNumber)" } }
}
```

CERO resultados.

### 12.2 Validacion de metadata

Para cada pagina:
- title: 30-60 chars
- description: 120-160 chars (indexables) o 100+ (legales/404/gracias)
- description = openGraph.description = twitter.description (cuando se override)
- canonical presente y apuntando al dominio nuevo
- NO `keywords`
- noindex solo en 404, gracias y, si procede, en legales

### 12.3 Validacion de headings

- 1 H1 por pagina
- H1 distinto al title (sobre todo en servicios)
- No hay saltos H1→H3

### 12.4 Validacion semantica

- `<main>` envuelve el contenido principal de cada pagina
- Todas las paginas heredan Navbar, Footer, boton WhatsApp (si aplica) del layout principal
- Formularios: inputs con labels (visibles o aria-label)

### 12.5 Validacion de schemas

- LocalBusiness en home
- BreadcrumbList: NO en home, SI en interiores
- Service schema en cada /servicios/*
- Article schema en cada /blog/*
- image y logo apuntan a archivos que EXISTEN
- areaServed correcto
- sameAs sin URLs del origen
- @type adecuado al sector

### 12.6 Validacion de imagenes

- 0 archivos con nombre del origen
- 0 archivos con caracteres no-ASCII
- TODAS las referencias en src/ y public/ apuntan a archivos que existen
- Transformacion anti-duplicado aplicada
- Alt text actualizados
- loading="lazy" + width/height en todas (excepto hero/logo)
- Hero: fetchpriority="high" + preload en layout principal

### 12.7 Validacion de archivos tecnicos

- public/sitemap.xml: URLs correctas, fechas de hoy, zonas + blog incluidos, /gracias EXCLUIDA
- public/robots.txt: sitemap apuntando al nuevo dominio
- Config del framework: intacta (no haberla roto)
- package.json (si existe): name actualizado

### 12.8 Validacion NAP

Buscar en todos los archivos editables del stack:
- {TELEFONO_NUEVO} aparece consistentemente
- {EMAIL_NUEVO} aparece consistentemente
- {CALLE_CORTA} aparece consistentemente (un solo formato corto en footers/textos visibles)

Verificar que NO hay variantes (ej: la misma direccion escrita de dos formas diferentes).

### 12.9 Validacion WhatsApp

Buscar `wa.me/` en todos los archivos:
- Si {WHATSAPP_NUEVO} esta rellenado: TODOS deben apuntar a `wa.me/{WHATSAPP_NUEVO}`. 0 referencias al numero origen.
- Si {WHATSAPP_NUEVO} esta vacio: 0 referencias a wa.me en TODO el proyecto.

### 12.10 Validacion del endpoint de formulario

Buscar el dominio del proveedor del formulario en todos los archivos. Debe aparecer SOLO el endpoint del DESTINO ({FORMSPREE_ID} o el ID del nuevo servicio). 0 referencias al endpoint origen.

### 12.11 Validacion pagina de gracias

- `/gracias` existe, con `noindex` y boton "Volver al inicio" funcional
- {TELEFONO_NUEVO} correcto en el texto de urgencia (link `tel:` con {TELEFONO_NUEVO_E164})
- TODOS los formularios redirigen a `/gracias` tras envio exitoso (probar un envio de test)
- `/gracias` NO aparece en sitemap.xml
- 0 referencias a script de Hotjar/GA del origen
- Si {HOTJAR_ID} relleno: snippet presente en el layout global una sola vez, con el ID correcto


## FASE 13: Resumen final al usuario

Al terminar todas las fases, escribe en el chat un mensaje estructurado con:

### 13.1 Resumen del trabajo
- Stack detectado
- Carpeta del proyecto y nombre asignado en package.json
- Sector y ubicacion final ({SECTOR}, {MUNICIPIO_DESTINO}, {PROVINCIA})
- Paginas creadas / eliminadas / modificadas (con conteo)
- Zonas y servicios finales publicados
- Blog posts publicados (titulos y slugs)
- Paleta de color y par de fuentes elegidos
- Endpoint de formulario configurado y comportamiento de redireccion a /gracias
- WhatsApp: configurado con {WHATSAPP_NUEVO} o eliminado
- Hotjar: instalado con {HOTJAR_ID} o omitido
- Resultado del build (0 errores / advertencias si las hay)

### 13.2 Acciones pendientes por parte del usuario (Claude no puede hacerlas)
- Verificar el dominio en Google Search Console y enviar `sitemap.xml`
- Crear o verificar el Google Business Profile con el mismo NAP exacto
- Apuntar el DNS de {DOMINIO_NUEVO} al hosting/deploy elegido
- Revisar visualmente la web en movil y escritorio antes de publicar
- Hacer un envio de prueba en cada formulario y confirmar que el lead llega al {FORMSPREE_ID}/proveedor configurado y que redirige a /gracias
- Si se instalo Hotjar, comprobar que el heatmap empieza a recoger datos tras el deploy

### 13.3 Ficha final utilizada
Mostrar la tabla completa de valores usados, incluidos los investigados (MUNICIPIO_DESTINO, PROVINCIA, COMARCA/DISTRITO, LATITUD/LONGITUD, POBLACION_APROX, ZONAS_SERVICIO, BARRIOS_PRINCIPALES, BARRIOS_ZONAS, SERVICIOS_PRINCIPALES, PUBLICO_OBJETIVO, TIPO_NEGOCIO_SCHEMA), para que el usuario pueda revisarla y guardarla como referencia del proyecto.
