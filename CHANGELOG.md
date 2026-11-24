# Registro de cambios

Este registro describe cambios observables en la revisión técnica de TECHNOVA; no asigna fechas ni responsables no confirmados.

## Preparación de CI y repositorio independiente

- Se reemplazó el despliegue automático de GitHub Pages por un workflow de CI que instala dependencias, compila y valida el resultado en cada push, Pull Request y ejecución manual, sin publicar el sitio.
- Se añadieron `npm run check:js` y `npm run check:dist` para detectar errores de sintaxis JavaScript, IDs duplicados, anclas internas sin destino y referencias locales rotas en el HTML/CSS generado.
- Se añadió `netlify.toml` con la construcción validada, Node.js 20 y `dist/` como carpeta de publicación, sin reglas de despliegue remoto ni credenciales.
- Se preparó un borrador de privacidad que separa los hechos observados de la información legal que debe confirmar el responsable antes de publicarlo.
- Se amplió la documentación con el objetivo, arquitectura, dependencias, proceso de construcción, comandos, integración Netlify y límites conocidos.
- Se documentó cómo iniciar un repositorio nuevo desde una copia sin `.git/`, preservando intacto el repositorio actual y sus remotos.
- Se documentó Netlify como plataforma prevista, sin conectar una cuenta ni publicar el sitio.

## Preparación de la versión provisional

- Se adaptó la portada de Business Frontpage de Start Bootstrap a una propuesta en español para TECHNOVA, conservando la atribución y la licencia MIT original.
- Se aplicó una identidad visual oscura en azul marino, blanco y acentos azules, con estilos adaptables a distintos tamaños de pantalla.
- Se implementó la navegación móvil accesible y se añadieron secciones de servicios, presentación, proceso, equipo y contacto.
- Se ocultaron los perfiles identificables y se desactivó el formulario y su integración de envío hasta confirmar autorizaciones, responsables y condiciones de privacidad.
- Se excluyeron las fotografías locales de Git y de `dist/`; la compilación copia únicamente los recursos declarados explícitamente.
- Se actualizaron dependencias afectadas y se verificó el árbol resultante con las auditorías de npm.
- Se sirve Bootstrap Icons desde el proyecto en vez de solicitarlo a un CDN.
- Se había configurado la compilación y el despliegue de `dist/` a GitHub Pages al actualizar `master`; esa configuración fue reemplazada por CI sin despliegue.
- Se incluyen en `dist/assets/licenses/` los avisos MIT de Start Bootstrap, Bootstrap y Bootstrap Icons.
- Se actualizaron README, atribuciones y documentación técnica para reflejar el contenido provisional, el proceso de compilación y los requisitos de publicación.

## Restauración de perfiles y contacto

- Se restauraron en la interfaz los perfiles de César Piña (Director General, CEO) y Manuel Barsik (Director de Tecnología y Operaciones, CTO/COO), usando las fotografías locales disponibles.
- Se permitió agregar a la compilación únicamente esas dos fotografías aprobadas; sus nombres de distribución se normalizan a minúsculas.
- Se restauró un formulario accesible para nombre, correo, teléfono opcional y mensaje, con validación nativa, envío a Formspree, confirmación y mensajes de error.
- Se actualizaron README y documentación técnica para quitar los avisos provisionales de equipo/contacto y describir el flujo restaurado.
- No se encontró una biografía aprobada para cada integrante entre los archivos y el ZIP indicado no estaba disponible; por ello, el texto descriptivo se limita a los cargos proporcionados y no añade experiencia ni datos personales.
