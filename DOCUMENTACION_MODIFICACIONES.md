# Documentación técnica de la adaptación TECHNOVA

## Alcance y base de partida

El proyecto adapta la plantilla **Business Frontpage** de Start Bootstrap, originalmente una página promocional empresarial.

Se conservó la organización de fuentes Pug, SCSS y JavaScript, junto con las tareas de compilación existentes y Bootstrap 5.2.3. La procedencia y la licencia se describen en [`ATRIBUCIONES.md`](./ATRIBUCIONES.md). El archivo [`LICENSE`](./LICENSE) original de MIT no se modificó.

La página actual presenta TECHNOVA como una propuesta en desarrollo. No afirma que la organización o sus servicios sean ya una empresa operativa.

## Archivos de la adaptación

### Fuentes

| Archivo | Función y cambios comprobables |
|---|---|
| `src/pug/index.pug` | Fuente de la página en español. Los perfiles identificables y el formulario se sustituyeron por avisos provisionales para no publicar información personal ni recopilar envíos sin autorización y aviso de privacidad confirmados. |
| `src/scss/styles.scss` | Importa Bootstrap y define la identidad TECHNOVA: paleta azul oscuro y azul luminoso, hero, tarjetas, ilustraciones CSS, secciones, estado provisional del equipo, formulario oscuro reutilizable y pie de página. Incluye reglas responsive, movimiento reducido, estados de foco y salto al contenido. |
| `src/js/scripts.js` | Controla la navegación móvil, `aria-expanded` y el cierre del menú al seguir un enlace. Ya no incluye código para enviar datos personales. |
| `package.json` y `package-lock.json` | Identifican el proyecto y el repositorio TECHNOVA; se mantiene Start Bootstrap como autor de la plantilla y las dependencias bloqueadas. |
| `scripts/render-scss.js` y `scripts/render-scripts.js` | Generan los encabezados de atribución con enlaces a la licencia del repositorio TECHNOVA. |
| `scripts/sb-watch.js` | Recompila archivos observados con dependencias declaradas por el proyecto; ya no depende de la presencia transitiva de Lodash. |
| `scripts/render-assets.js` | Copia favicon, iconos locales y avisos MIT de Start Bootstrap, Bootstrap y Bootstrap Icons a `dist/`; excluye las fotos locales pendientes de autorización. |
| `.gitignore` | Excluye secretos comunes y las fotos personales no aprobadas para publicación. |
| `.github/workflows/pages.yml` | Instala dependencias, genera `dist/` y despliega a GitHub Pages al actualizar `master`. |

### Artefactos generados y documentación

| Archivo | Función y cambios comprobables |
|---|---|
| `dist/index.html` | Página HTML generada desde Pug. |
| `dist/css/styles.css` | Hoja CSS generada desde SCSS y procesada por PostCSS/Autoprefixer. |
| `dist/js/scripts.js` | JavaScript distribuido, generado desde `src/js/scripts.js` con los encabezados de TECHNOVA y la atribución/licencia de la plantilla de origen. |
| `README.md` | Instrucciones del proyecto, tecnologías, funciones de la versión provisional, atribución y activación de Pages. |
| `CHANGELOG.md` | Registro de las etapas de adaptación y verificaciones. |
| `ATRIBUCIONES.md` | Procedencia de Start Bootstrap, licencia MIT y atribuciones de terceros. |
| `DOCUMENTACION_MODIFICACIONES.md` | Este documento: alcance técnico, pruebas registradas y pendientes. |

`dist/` es generado por el proceso de compilación existente; las fuentes que se deben editar son las de `src/`. Los datos personales sin autorización se conservan únicamente en los archivos locales ignorados y no se copian al paquete público. El archivo `LICENSE` original se conserva sin cambios.

## Adaptación de contenido y diseño

- Se reemplazaron los textos en inglés y los ejemplos genéricos por contenido en español para TECHNOVA.
- Se sustituyeron las tarjetas genéricas por tres áreas propuestas: desarrollo web, diseño de experiencias y consultoría tecnológica.
- Se retiraron los precios y los testimonios de muestra; no se presentan tarifas ni clientes no confirmados.
- Se añadieron presentación institucional y una secuencia de trabajo de cuatro etapas: escuchar, definir, diseñar/construir y aprender/mejorar.
- Los perfiles y fotografías no se incluyen en la versión pública mientras no se confirme autorización.
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

## Privacidad y contacto provisional

La versión provisional no presenta formulario, direcciones personales, perfiles identificables ni integración con Formspree. No envía datos de contacto a terceros. GitHub Pages, una vez activado, puede procesar registros técnicos de acceso de acuerdo con las condiciones del proveedor; esta documentación no sustituye un aviso legal. Incorporar un canal de contacto requerirá confirmar el responsable, los datos de contacto, el servicio receptor y el texto de privacidad aplicable.

## Pruebas y verificaciones registradas

La tabla describe verificaciones reproducidas después de los cambios de seguridad y publicación. No se enviaron datos personales durante esta revisión.

| Comprobación | Resultado registrado |
|---|---|
| `npm run build` y `npm start` | Tras las actualizaciones, el build y la vista previa se ejecutaron con las versiones declaradas. |
| Dependencias | `npm ls --depth=0`, `npm audit` y `npm audit --omit=dev` terminaron sin errores; las auditorías reportaron cero vulnerabilidades. |
| Rutas y privacidad | Los recursos HTML locales se validaron; el generador incluye favicon e iconos locales, sin fotografías ni formulario en `dist/`. |
| Página y enlaces | Se comprobó el título TECHNOVA, destinos internos sin anclas rotas, navegación móvil y adaptación responsive. |
| Navegación móvil | En el viewport móvil, el menú abrió y se cerró después de seleccionar una sección. |
| Recursos | La página no depende del CDN para Bootstrap Icons; CSS y fuentes de iconos se sirven desde `dist/`. |
| GitHub Pages | Se añadió un workflow de build/deploy para `master`. La activación en Settings y la publicación requieren combinar la rama y habilitar GitHub Actions como fuente de Pages. |
| Higiene del diff | `git diff --check` terminó sin errores. |

En `package.json` no se define una suite automatizada de pruebas. El workflow de Pages aún requiere activación en la configuración del repositorio y una actualización de `master` para desplegar.

## Pendientes

- Confirmar autorización para cualquier dato o fotografía identificable antes de incorporarlos.
- Completar y confirmar los datos institucionales y los canales definitivos de contacto.
- Incorporar perfiles profesionales o redes sociales solo si el equipo los proporciona.
- Validar con el equipo el contenido institucional y el alcance de los servicios antes de presentarlos como información oficial.
- Activar GitHub Pages con **Source: GitHub Actions**, combinar la rama de trabajo a `master` y verificar la URL que GitHub asigne.
- Si se habilita contacto, confirmar previamente el responsable del tratamiento, proveedor receptor y aviso de privacidad aplicable.