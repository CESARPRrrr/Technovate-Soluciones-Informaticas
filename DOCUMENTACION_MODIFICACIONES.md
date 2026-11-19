# Documentación técnica de la adaptación TECHNOVA

## Alcance y base de partida

El proyecto adapta la plantilla **Business Frontpage** de Start Bootstrap, originalmente una página promocional empresarial.

Se conservó la organización de fuentes Pug, SCSS y JavaScript, junto con las tareas de compilación existentes y Bootstrap 5.2.3. La procedencia y la licencia se describen en [`ATRIBUCIONES.md`](./ATRIBUCIONES.md). El archivo [`LICENSE`](./LICENSE) original de MIT no se modificó.

La página actual presenta TECHNOVA y sus servicios digitales.

## Archivos de la adaptación

### Fuentes

| Archivo | Función y cambios comprobables |
|---|---|
| `src/pug/index.pug` | Fuente de la página en español. Presenta perfiles del equipo con cargos y fotografías, y el formulario de contacto conectado a Formspree. |
| `src/scss/styles.scss` | Importa Bootstrap y define la identidad TECHNOVA: paleta azul oscuro y azul luminoso, hero, tarjetas de equipo, ilustraciones CSS, secciones, formulario oscuro y pie de página. Incluye reglas responsive, movimiento reducido, estados de foco y salto al contenido. |
| `src/js/scripts.js` | Controla la navegación móvil y el envío accesible del formulario, incluidos estados de éxito y error. |
| `package.json` y `package-lock.json` | Identifican el proyecto y el repositorio TECHNOVA; se mantiene Start Bootstrap como autor de la plantilla y las dependencias bloqueadas. |
| `scripts/render-scss.js` y `scripts/render-scripts.js` | Generan los encabezados de atribución con enlaces a la licencia del repositorio TECHNOVA. |
| `scripts/sb-watch.js` | Recompila archivos observados con dependencias declaradas por el proyecto; ya no depende de la presencia transitiva de Lodash. |
| `scripts/render-assets.js` | Copia favicon, fotografías aprobadas del equipo, iconos locales y avisos MIT a `dist/`. |
| `.gitignore` | Excluye secretos y permite explícitamente las dos fotografías aprobadas del equipo. |
| `.github/workflows/pages.yml` | Instala dependencias, genera `dist/` y despliega a GitHub Pages al actualizar `master`. |

### Artefactos generados y documentación

| Archivo | Función y cambios comprobables |
|---|---|
| `dist/index.html` | Página HTML generada desde Pug. |
| `dist/css/styles.css` | Hoja CSS generada desde SCSS y procesada por PostCSS/Autoprefixer. |
| `dist/js/scripts.js` | JavaScript distribuido, generado desde `src/js/scripts.js` con los encabezados de TECHNOVA y la atribución/licencia de la plantilla de origen. |
| `README.md` | Instrucciones del proyecto, tecnologías, funciones de equipo/contacto, atribución y publicación mediante Pages. |
| `CHANGELOG.md` | Registro de las etapas de adaptación y verificaciones. |
| `ATRIBUCIONES.md` | Procedencia de Start Bootstrap, licencia MIT y atribuciones de terceros. |
| `DOCUMENTACION_MODIFICACIONES.md` | Este documento: alcance técnico, pruebas registradas y pendientes. |

`dist/` es generado por el proceso de compilación existente; las fuentes que se deben editar son las de `src/`. Solo las dos fotografías solicitadas se copian como imágenes del equipo. El archivo `LICENSE` original se conserva sin cambios.

## Adaptación de contenido y diseño

- Se reemplazaron los textos en inglés y los ejemplos genéricos por contenido en español para TECHNOVA.
- Se sustituyeron las tarjetas genéricas por tres áreas propuestas: desarrollo web, diseño de experiencias y consultoría tecnológica.
- Se retiraron los precios y los testimonios de muestra; no se presentan tarifas ni clientes no confirmados.
- Se añadieron presentación institucional y una secuencia de trabajo de cuatro etapas: escuchar, definir, diseñar/construir y aprender/mejorar.
- Se restauraron los perfiles con los nombres y cargos proporcionados, junto con las fotografías locales correspondientes.
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

El formulario envía nombre, correo, teléfono opcional y mensaje a `https://formspree.io/f/xkjjlwdr` mediante una solicitud `POST`. No se muestra la dirección de correo receptora. Al enviar, los datos se transmiten al proveedor Formspree; antes de recopilar datos de usuarios reales, el responsable del sitio debe verificar y publicar la información de privacidad aplicable y las condiciones del servicio.

## Restauración de equipo y formulario

- Se muestran César Piña (Director General, CEO) y Manuel Barsik (Director de Tecnología y Operaciones, CTO/COO).
- `src/assets/Cesar-Pina.jpg` y `src/assets/Manuel-Barsik.jpg` se copian explícitamente a `dist/assets/cesar-pina.jpg` y `dist/assets/manuel-barsik.jpg`; no se abre una regla general para publicar otras imágenes.
- Se restauró el formulario con campos obligatorios de nombre, correo y mensaje, y teléfono opcional. El navegador valida los campos; JavaScript envía a Formspree y presenta éxito, error HTTP o error de conexión.

## Pruebas y verificaciones registradas

Las verificaciones de esta restauración no enviaron datos reales a Formspree; las respuestas del formulario se simularon en navegador.

| Comprobación | Resultado registrado |
|---|---|
| `npm run build` | Compilación Pug, Sass, JavaScript y assets completada correctamente después de restaurar perfiles y formulario. |
| `npm start` | El servidor BrowserSync inició y sirvió el build local. |
| Imágenes | Ambas fotografías generadas coincidieron por SHA-256 con sus fuentes y respondieron HTTP 200 en la vista previa. |
| Formulario | En navegador, la validación bloqueó campos vacíos, teléfono quedó opcional, un envío simulado HTTP 200 mostró confirmación y limpió el formulario, y un HTTP 422 mostró error conservando los datos. No se envió información a Formspree. |
| Vista móvil | En viewport de 390 px no hubo desbordamiento horizontal. |
| Higiene del diff | `git diff --check` terminó sin errores. |

En `package.json` no se define una suite automatizada de pruebas. El workflow de Pages se ejecutará al actualizar `master`; esta rama no se ha combinado.

## Pendientes

- Publicar o enlazar el aviso de privacidad aplicable al procesamiento del formulario por Formspree y al hosting.
- Incorporar perfiles profesionales o redes sociales solo si el equipo los proporciona.
- Validar con el equipo el contenido institucional y el alcance de los servicios antes de presentarlos como información oficial.