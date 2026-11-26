# Registro de cambios

Este registro describe cambios observables en la revisión técnica de TECHNOVA; no asigna fechas ni responsables no confirmados.

## Mantenimiento y coherencia de publicación

- Se alinearon `homepage`, `bugs.url` y `repository.url` con el repositorio oficial `CESARPRrrr/Technovate-Soluciones-Informaticas`.
- Se actualizaron los encabezados generados de Sass y JavaScript para enlazar a `main/LICENSE`, y se regeneró `dist/` mediante el build habitual.
- Se actualizó la documentación para reflejar el repositorio público, la rama principal `main`, el sitio publicado en Netlify y la separación entre CI (GitHub Actions) y despliegue (Netlify).
- Se actualizó el borrador de privacidad para identificar el hosting Netlify sin inventar sus prácticas ni completar datos legales pendientes.
- En una etapa inicial se documentó que faltaban dos perfiles aprobados; posteriormente se incorporaron Katerina Gutiérrez y Betzabeth Medina, y el equipo publicado quedó conformado por cuatro integrantes.

## Preparación de la versión provisional

- Se adaptó la portada de Business Frontpage de Start Bootstrap a una propuesta en español para TECHNOVA, conservando la atribución y la licencia MIT original.
- Se aplicó una identidad visual oscura en azul marino, blanco y acentos azules, con estilos adaptables a distintos tamaños de pantalla.
- Se implementó la navegación móvil accesible y se añadieron secciones de servicios, presentación, proceso, equipo y contacto.
- Se ocultaron los perfiles identificables y se desactivó el formulario y su integración de envío hasta confirmar autorizaciones, responsables y condiciones de privacidad.
- Se excluyeron las fotografías locales de Git y de `dist/`; la compilación copia únicamente los recursos declarados explícitamente.
- Se actualizaron dependencias afectadas y se verificó el árbol resultante con las auditorías de npm.
- Se sirve Bootstrap Icons desde el proyecto en vez de solicitarlo a un CDN.
- Se retiró el workflow histórico de despliegue a GitHub Pages; GitHub Actions se mantiene como CI y Netlify gestiona la publicación.
- Se incluyen en `dist/assets/licenses/` los avisos MIT de Start Bootstrap, Bootstrap y Bootstrap Icons.
- Se actualizaron README, atribuciones y documentación técnica para reflejar el contenido provisional, el proceso de compilación y los requisitos de publicación.

## Restauración de perfiles y contacto

- Se restauraron en la interfaz los perfiles de César Piña (Director General, CEO) y Manuel Barsik (Director de Tecnología y Operaciones, CTO/COO), usando las fotografías locales disponibles.
- En esa etapa se configuró la compilación para agregar las dos fotografías aprobadas disponibles entonces; posteriormente se añadieron las fotografías de Katerina Gutiérrez y Betzabeth Medina. Actualmente se distribuyen las cuatro imágenes del equipo.
- Se restauró un formulario accesible para nombre, correo, teléfono opcional y mensaje, con validación nativa, envío a Formspree, confirmación y mensajes de error.
- Se actualizaron README y documentación técnica para quitar los avisos provisionales de equipo/contacto y describir el flujo restaurado.
- No se encontró una biografía aprobada para cada integrante entre los archivos y el ZIP indicado no estaba disponible; por ello, el texto descriptivo se limita a los cargos proporcionados y no añade experiencia ni datos personales.
