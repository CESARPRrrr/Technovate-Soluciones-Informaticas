# Documentación técnica y preparación para auditoría de TECHNOVA

## Alcance y base de partida

El nombre visible del proyecto es TECHNOVA / Soluciones Informáticas. El objetivo es presentar la propuesta de empresa tecnológica y sus áreas de servicios en un sitio estático, adaptable y accesible. El repositorio público oficial es `CESARPRrrr/Technovate-Soluciones-Informaticas`, su rama principal es `main` y el sitio publicado está en `https://technovate-soluciones-informaticas.netlify.app/`.

El proyecto partió del repositorio existente de la plantilla **Business Frontpage** de Start Bootstrap. Se conservaron la estructura de construcción y la base técnica Bootstrap, y se modificaron el contenido, la identidad visual y las secciones para TECHNOVA. La autoría original no se atribuye al equipo TECHNOVA: la procedencia se documenta en [`ATRIBUCIONES.md`](./ATRIBUCIONES.md) y se preserva el archivo [`LICENSE`](./LICENSE) MIT sin cambios.

## Tecnologías y arquitectura

El proyecto no utiliza un framework de aplicación ni un servidor backend propio. Pug genera el HTML, Sass importa Bootstrap y PostCSS/Autoprefixer procesa CSS, JavaScript implementa la navegación móvil y el envío del formulario, y Node.js/npm orquestan las tareas.

| Ruta | Función |
|---|---|
| `src/pug/index.pug` | Fuente del documento, navegación, servicios, equipo, contacto y pie de página. |
| `src/scss/styles.scss` | Importación de Bootstrap y estilos propios/responsive de TECHNOVA. |
| `src/js/scripts.js` | Menú móvil y estado accesible del envío del formulario. |
| `src/assets/` | Favicon y las cuatro fotografías del equipo. |
| `scripts/` | Tareas de construcción, copia de recursos, vista previa y validación de `dist/`. |
| `dist/` | Artefacto estático generado; no es fuente editable. |
| `.github/workflows/ci.yml` | Integración continua; instala dependencias, construye y valida enlaces/recursos. No despliega. |
| `package.json` / `package-lock.json` | Metadatos, comandos y versiones bloqueadas de dependencias. |
| `README.md`, `CHANGELOG.md`, `ATRIBUCIONES.md` | Guía de uso, registro de cambios y atribución/licencias. |
| `LICENSE` | Licencia MIT de la plantilla original, preservada. |

Las dependencias principales de ejecución son Bootstrap 5.2.3 y Bootstrap Icons 1.10.5. Las herramientas de construcción incluyen Pug 3, Sass 1.60, PostCSS, Autoprefixer, Prettier, ShellJS y utilidades de observación/vista previa. Las versiones exactas están en `package-lock.json`.

## Instalación, ejecución y construcción

Con Node.js y npm instalados, desde la raíz:

```bash
npm ci
npm start
npm run build
npm run check:dist
```

`npm ci` instala las versiones bloqueadas. `npm start` construye y abre la vista previa BrowserSync. `npm run build` limpia artefactos anteriores de `dist/` y ejecuta `build:pug`, `build:scss`, `build:scripts` y `build:assets`. `npm run check:js` analiza JavaScript fuente y generado sin ejecutarlo. `npm run check:dist` valida el idioma/tipo de documento, IDs únicos, anclas internas, esquemas de URL permitidos y archivos locales citados en HTML/CSS. Si falla una referencia o hay sintaxis inválida, el comando termina con error. No hay un comando `test` ni pruebas unitarias/de navegador automatizadas en el paquete.

Otros comandos disponibles: `npm run clean`, `npm run build:pug`, `npm run build:scss`, `npm run build:scripts`, `npm run build:assets` y `npm run start:debug`.

## Integración continua

`.github/workflows/ci.yml` se ejecuta en `push`, `pull_request` y por `workflow_dispatch`. En un runner Linux configura Node.js 20, ejecuta `npm ci`, `npm run build`, `npm run check:js` y `npm run check:dist`. El permiso es solo lectura (`contents: read`); la concurrencia cancela ejecuciones anteriores del mismo flujo y referencia. Cualquier fallo de instalación, compilación o validación hace fallar el trabajo. No se configuran despliegues, credenciales ni secretos.

## Integración continua y despliegue

La **integración continua (CI)** se ejecuta en GitHub Actions mediante `.github/workflows/ci.yml`. Ante `push`, `pull_request` y ejecución manual, instala con `npm ci`, construye y ejecuta los validadores. Su permiso es de solo lectura y no publica el sitio.

El **despliegue** se gestiona aparte en Netlify. El sitio se publica en `https://technovate-soluciones-informaticas.netlify.app/`; `netlify.toml` configura Node.js 20, el comando `npm run build && npm run check:js && npm run check:dist` y `dist/` como directorio publicado. La publicación y las vistas previas son responsabilidad de la integración Netlify-GitHub, no del workflow CI. El sitio es una página con anclas HTML; no necesita fallback SPA ni redirecciones especiales. Los 404 usan el comportamiento predeterminado de Netlify.

El sitio publicado está conectado al repositorio GitHub según el estado operativo proporcionado para este proyecto. La configuración de la cuenta, permisos y reglas específicas de Deploy Previews se administran en Netlify y no se almacenan en este repositorio.

## Formulario y privacidad

El formulario contiene nombre, correo obligatorio, teléfono opcional y mensaje; usa validación nativa del navegador y está configurado para enviar a la URL Formspree que aparece en el HTML. El JavaScript solo muestra confirmación si la respuesta HTTP es exitosa, conserva los datos y muestra error si la respuesta falla. La petición GET de consulta al endpoint respondió 405 (método no permitido), resultado compatible con un endpoint de envío, pero no confirma que el formulario esté activo. No se envió un POST ni datos. La presencia de un endpoint público no confirma que la cuenta sea activa o esté controlada por TECHNOVA. No hay secretos de Formspree en el código; su identificador de formulario es público por diseño.

No se encontró un aviso de privacidad aprobado. `PRIVACIDAD_BORRADOR.md` documenta los campos y procesamiento visibles y lista los datos legales/operativos por confirmar; no se debe publicar como aviso final sin revisión del responsable. El sitio está publicado en Netlify, pero se desconocen la identidad/contacto del responsable, finalidad/base legal, retención, detalles del procesamiento por Formspree/Netlify y derechos aplicables. La publicación no implica que estos datos o el aviso hayan sido aprobados.

Esta automatización no sustituye pruebas visuales, pruebas de interacción en navegador, revisión de accesibilidad ni comprobación de enlaces externos; esos aspectos requieren una auditoría adicional.

## Archivos de la adaptación

### Fuentes

| Archivo | Función y cambios comprobables |
|---|---|
| `src/pug/index.pug` | Fuente de la página en español. Presenta perfiles del equipo con cargos y fotografías, y el formulario configurado para enviar a Formspree. |
| `src/scss/styles.scss` | Importa Bootstrap y define la identidad TECHNOVA: paleta azul oscuro y azul luminoso, hero, tarjetas de equipo, ilustraciones CSS, secciones, formulario oscuro y pie de página. Incluye reglas responsive, movimiento reducido, estados de foco y salto al contenido. |
| `src/js/scripts.js` | Controla la navegación móvil y el envío accesible del formulario, incluidos estados de éxito y error. |
| `package.json` y `package-lock.json` | Identifican el proyecto; `homepage`, `bugs` y `repository` apuntan al repositorio oficial, Start Bootstrap sigue como autor de la plantilla y las dependencias quedan bloqueadas. |
| `scripts/render-scss.js` y `scripts/render-scripts.js` | Generan encabezados de atribución con enlaces a `main/LICENSE` del repositorio oficial. |
| `scripts/sb-watch.js` | Recompila archivos observados con dependencias declaradas por el proyecto; ya no depende de la presencia transitiva de Lodash. |
| `scripts/render-assets.js` | Copia favicon, fotografías aprobadas del equipo, iconos locales y avisos MIT a `dist/`. |
| `scripts/check-dist.js` | Falla si hay IDs duplicados, anclas internas sin destino o referencias locales ausentes en HTML/CSS. |
| `scripts/check-js.js` | Analiza sintaxis de JavaScript en scripts fuente y artefacto generado, sin ejecutar el código. |
| `netlify.toml` | Configura la construcción y validación del sitio estático, Node.js 20 y `dist/` como carpeta publicada. |
| `PRIVACIDAD_BORRADOR.md` | Resume el flujo de datos verificable y los datos que la persona responsable debe confirmar; no es aviso legal aprobado. |
| `.gitignore` | Excluye secretos y conserva las fotografías aprobadas del equipo. |
| `.github/workflows/ci.yml` | Instala dependencias y verifica la compilación en pushes y Pull Requests; no despliega. |

### Artefactos generados y documentación

| Archivo | Función y cambios comprobables |
|---|---|
| `dist/index.html` | Página HTML generada desde Pug. |
| `dist/css/styles.css` | Hoja CSS generada desde SCSS y procesada por PostCSS/Autoprefixer. |
| `dist/js/scripts.js` | JavaScript distribuido, generado desde `src/js/scripts.js` con los encabezados de TECHNOVA y la atribución/licencia de la plantilla de origen. |
| `README.md` | Propósito, tecnologías, comandos, CI, estructura, atribución y estado de publicación. |
| `CHANGELOG.md` | Registro de las etapas de adaptación y verificaciones. |
| `ATRIBUCIONES.md` | Procedencia de Start Bootstrap, licencia MIT y atribuciones de terceros. |
| `DOCUMENTACION_MODIFICACIONES.md` | Este documento: alcance técnico, pruebas registradas y pendientes. |

`dist/` es generado por el proceso de compilación existente; las fuentes que se deben editar son las de `src/`. Se distribuyen las cuatro fotografías del equipo configuradas explícitamente. El archivo `LICENSE` original se conserva sin cambios.

## Adaptación de contenido y diseño

- Se reemplazaron los textos en inglés y los ejemplos genéricos por contenido en español para TECHNOVA.
- Se sustituyeron las tarjetas genéricas por tres áreas propuestas: desarrollo web, diseño de experiencias y consultoría tecnológica.
- Se retiraron los precios y los testimonios de muestra; no se presentan tarifas ni clientes no confirmados.
- Se añadieron presentación institucional y una secuencia de trabajo de cuatro etapas: escuchar, definir, diseñar/construir y aprender/mejorar.
- Se restauraron los perfiles con los nombres y cargos proporcionados, junto con las fotografías locales correspondientes.
- Actualmente se presentan cuatro perfiles con fotografía: César Piña (Director General/CEO), Manuel Barsik (Director de Tecnología y Operaciones/CTO/COO), Katerina Gutiérrez (Asistente de Atención al Cliente) y Betzabeth Medina (Asistente de Gestión Administrativa). No se añadieron perfiles ficticios.
- La cuadrícula presenta cuatro tarjetas Bootstrap de media columna en pantallas medianas y mayores.
- No había biografías aprobadas disponibles en los archivos inspeccionados; los textos de apoyo se limitan a resumir los cargos, sin afirmar trayectoria, estudios ni logros.
- Se creó una identidad gráfica con CSS y componentes propios. Las ilustraciones decorativas se construyen con CSS e iconos.
- Se conservó la plantilla como origen y se añadió una referencia al repositorio de Start Bootstrap en el pie de página.

## Interacciones y accesibilidad

- El botón de navegación móvil alterna el menú y actualiza `aria-expanded` y su etiqueta accesible; elegir un enlace del menú lo cierra.
- Los enlaces de la página navegan a secciones identificadas por anclas.
- Hay enlace para saltar directamente al contenido principal, estados de foco visibles y avisos del formulario con `aria-live`.
- La hoja de estilos define adaptación para pantallas menores de 992 px y 576 px, y reduce el desplazamiento animado si el usuario prefiere movimiento reducido.
- Bootstrap Icons y sus fuentes se incluyen localmente en `dist/`, sin solicitud al CDN. Bootstrap 5.2.3 se declara en `package.json`; el menú se controla desde `src/js/scripts.js`.
- Los avisos MIT de Bootstrap y Bootstrap Icons se copian a `dist/assets/licenses/`; el `LICENSE` de Start Bootstrap permanece en la raíz.
- El aviso MIT de Start Bootstrap también se incluye en `dist/assets/licenses/` para que acompañe el artefacto publicado.

## Privacidad y contacto

El formulario está configurado para enviar nombre, correo, teléfono opcional y mensaje a `https://formspree.io/f/xkjjlwdr` mediante una solicitud `POST`. No se muestra la dirección de correo receptora. Antes de recopilar datos de usuarios reales, el responsable del sitio debe verificar la titularidad/estado de la cuenta y publicar la información de privacidad aplicable y las condiciones del servicio.

## Restauración de equipo y formulario

- Se muestran César Piña (Director General, CEO) y Manuel Barsik (Director de Tecnología y Operaciones, CTO/COO).
- `src/assets/Cesar-Pina.jpg` y `src/assets/Manuel-Barsik.jpg` se copian explícitamente a `dist/assets/cesar-pina.jpg` y `dist/assets/manuel-barsik.jpg`; no se abre una regla general para publicar otras imágenes.
- Se restauró el formulario con campos obligatorios de nombre, correo y mensaje, y teléfono opcional. El navegador valida los campos; JavaScript envía a Formspree y presenta éxito, error HTTP o error de conexión.

## Pruebas y verificaciones registradas

Las comprobaciones de esta preparación se ejecutaron localmente con Node.js 18.19.1 y npm 9.2.0. No se enviaron datos reales a Formspree.

| Comprobación | Resultado registrado |
|---|---|
| `npm ci` | Instaló las dependencias bloqueadas; npm informó 0 vulnerabilidades durante la instalación. |
| `npm run build` | Pug, Sass/PostCSS, JavaScript y assets completaron correctamente. |
| `npm run check:js` | Sintaxis válida en 16 archivos de `scripts/`, `src/js/` y `dist/js/`. |
| `npm run check:dist` | Correcto: 8 referencias locales en HTML/CSS y 14 anclas internas comprobadas. |
| YAML de GitHub Actions | Parseado con `yaml`; contiene los disparadores `push`, `pull_request` y `workflow_dispatch`. |
| `netlify.toml` | Parseado con `tomllib`; comando de build, Node.js 20 y publicación `dist/` verificados. |
| Enlaces externos | Los seis enlaces públicos de plantilla y tecnologías respondieron HTTP 200 a HEAD. Formspree devolvió 405 a GET sin enviar datos; esto no prueba estado de la cuenta. |
| Vista previa `npm start` | BrowserSync inició y sirvió el sitio generado en `http://localhost:3000`. |
| Navegación móvil | En ancho 390 px, el menú cambió `aria-expanded` a `true` al abrir y `false` al seguir el enlace a Servicios. El ancho del documento fue 375 px (sin desbordamiento horizontal). |
| Navegación escritorio | En ancho 1366 px, el documento midió 1351 px (sin desbordamiento horizontal). |
| Fotografías | Ambas imágenes cargaron en navegador con dimensiones naturales 768 × 750 px. |
| Validación de formulario | El navegador rechazó campos obligatorios vacíos, correo con formato inválido y mensaje menor a 10 caracteres; aceptó teléfono vacío. No se envió el formulario. |
| `git diff --check` | Sin errores de whitespace. |

En `package.json` no hay suite de pruebas unitarias o de navegador; la validación local del formulario y del menú comprueba estados del cliente, pero no certifica el estado de Formspree ni probó los mensajes de respuesta/error del servicio. El workflow CI corre Node.js 20 (la ejecución local se hizo con Node.js 18.19.1). La CI no consulta URLs externas ni verifica accesibilidad automáticamente. La vista previa se revisó en navegador; esta etapa confirma el build local, pero no despliegue en Netlify.

## Pendientes que requieren información del equipo

- Completar y aprobar `PRIVACIDAD_BORRADOR.md`, incluida la identidad y contacto del responsable, antes de publicar el aviso final o recopilar datos reales.
- Incorporar perfiles profesionales o redes sociales solo si el equipo los proporciona.
- Validar con el equipo el contenido institucional y el alcance de los servicios antes de presentarlos como información oficial.
- Confirmar la titularidad/estado del formulario Formspree y hacer una prueba real autorizada antes de publicarlo.