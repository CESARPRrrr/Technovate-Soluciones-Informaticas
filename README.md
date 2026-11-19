# TECHNOVA

Sitio empresarial adaptable para presentar la propuesta de identidad y servicios digitales de TECHNOVA. Los datos institucionales y los canales definitivos de contacto deben confirmarse antes de publicar el sitio.

## Descripción

TECHNOVA se presenta aquí como una propuesta de empresa tecnológica orientada al desarrollo web, al diseño de experiencias digitales y a la consultoría tecnológica. Esta página es una base visual e informativa para esa propuesta; no acredita por sí sola la existencia de una empresa operativa ni de servicios contratables.

## Origen de la plantilla

El proyecto parte de la plantilla de código abierto **Business Frontpage**, de Start Bootstrap. Se conservaron la estructura de construcción y la base técnica Bootstrap; el contenido, la identidad visual y las secciones de la página se adaptaron para TECHNOVA.

- Repositorio original: [StartBootstrap/startbootstrap-business-frontpage](https://github.com/StartBootstrap/startbootstrap-business-frontpage)
- Autoría original: Start Bootstrap; el repositorio identifica también a David Miller como colaborador.
- Licencia: MIT. Se conserva sin cambios el archivo [`LICENSE`](./LICENSE). Consulta [`ATRIBUCIONES.md`](./ATRIBUCIONES.md) para el detalle de atribución.

## Tecnologías

- HTML generado desde plantillas Pug.
- Sass/SCSS para estilos.
- Bootstrap 5.2.3 para estilos y sistema de grillas.
- JavaScript del navegador para la navegación móvil.
- Bootstrap Icons 1.10.5, servido localmente desde `dist/`.
- Node.js y npm para instalar dependencias y ejecutar las tareas del proyecto.

## Requisitos

- Node.js y npm instalados.
- Acceso a la red para instalar dependencias por primera vez.

No se requiere base de datos ni credenciales para construir el sitio. Esta versión provisional no incluye formulario ni integra un servicio de envío; los perfiles identificables están ocultos hasta confirmar autorizaciones. El proveedor de hosting puede procesar registros técnicos de acceso bajo sus propias condiciones.

## Instalación

Desde la raíz del repositorio:

```bash
npm install
```

## Ejecución local

```bash
npm start
```

Este comando compila el sitio, inicia el servidor de vista previa y observa los cambios en `src/`. Como alternativa, se puede compilar y servir manualmente `dist/` con un servidor HTTP estático.

## Compilación

```bash
npm run build
```

El comando elimina y vuelve a generar `dist/` a partir de `src/`. También están disponibles `npm run build:pug`, `npm run build:scss`, `npm run build:scripts`, `npm run build:assets` y `npm run clean`.

## Publicación

El proyecto está preparado para GitHub Pages mediante [`.github/workflows/pages.yml`](./.github/workflows/pages.yml). El workflow instala dependencias con `npm ci`, compila y publica el contenido de `dist/` al hacer push a `master`.

Para activar la publicación:

1. En GitHub, configura **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Revisa y combina la rama de trabajo a `master` mediante una Pull Request.
3. Comprueba el resultado en la URL de Pages que GitHub muestre en **Settings → Pages**.

Esta versión pública es provisional: no incluye datos personales, formulario de contacto ni fotografías identificables. Completa esos elementos únicamente tras confirmar las autorizaciones y publicar la información de privacidad correspondiente. Conserva las atribuciones de Start Bootstrap y la licencia MIT.

`npm audit` y `npm audit --omit=dev` reportaron cero vulnerabilidades tras actualizar las dependencias afectadas.

## Estructura de carpetas

```text
.
├── .github/workflows/pages.yml   # Compilación y despliegue en GitHub Pages
├── dist/                         # Página y recursos generados para distribución
├── scripts/                      # Tareas de compilación, renderizado y vista previa
├── src/
│   ├── assets/                    # Recursos estáticos
│   ├── js/scripts.js              # Navegación móvil
│   ├── pug/index.pug              # Contenido y estructura de la página TECHNOVA
│   └── scss/styles.scss           # Estilos Bootstrap y personalización visual
├── ATRIBUCIONES.md
├── .gitignore                    # Excluye secretos y fotos pendientes de autorización
├── CHANGELOG.md
├── DOCUMENTACION_MODIFICACIONES.md
├── LICENSE                        # Licencia MIT original, preservada
└── package.json
```

## Funcionalidades

- Navegación entre las secciones de inicio, servicios, nosotros, equipo y contacto.
- Menú móvil expandible, operable con JavaScript y con enlaces que lo cierran al seleccionar una sección.
- Diseño adaptable basado en los puntos de quiebre y la grilla de Bootstrap.
- Secciones de servicios, descripción de la propuesta TECHNOVA y proceso de trabajo.
- Sección provisional de equipo que no muestra perfiles ni fotografías hasta contar con autorización.
- Aviso provisional de contacto; no hay formulario activo ni envío a servicios externos.

## Modificaciones realizadas

- Sustitución del contenido genérico de la plantilla por una propuesta visual y textual para TECHNOVA.
- Personalización de la navegación, hero, servicios, presentación institucional, proceso de trabajo, avisos provisionales de equipo/contacto y pie de página.
- Incorporación de una identidad visual propia mediante SCSS y elementos gráficos CSS.
- Implementación de navegación móvil y del estado provisional de privacidad/contacto sin recopilación de datos.
- Actualización de metadatos del paquete y enlaces de licencia generados para reflejar el repositorio TECHNOVA, sin alterar la autoría original.
- Conservación del sistema de construcción, Bootstrap y atribuciones/licencia de la plantilla original.

El detalle por archivo, las pruebas ejecutadas y los pendientes se documentan en [`DOCUMENTACION_MODIFICACIONES.md`](./DOCUMENTACION_MODIFICACIONES.md). Los cambios se registran por etapas en [`CHANGELOG.md`](./CHANGELOG.md).

## Información pendiente de completar

- Datos institucionales y definitivos de contacto, incluyendo correo y ubicación si corresponde.
- Confirmar, antes de incorporarlos, la autorización de publicación de nombres, cargos, descripciones e imágenes del equipo.
- Perfiles profesionales o redes sociales, si el equipo decide proporcionarlos.
- Confirmación del alcance de los servicios y del contenido institucional antes de publicar como información oficial.
- Activar GitHub Pages con **Source: GitHub Actions** y combinar la rama de trabajo a `master`.

## Pruebas y control de calidad

`npm run build`, `npm start`, `npm audit` y `npm audit --omit=dev` se ejecutaron después de las correcciones. La interfaz se comprobó en navegador en tamaños móvil y escritorio. Los resultados detallados están en [`DOCUMENTACION_MODIFICACIONES.md`](./DOCUMENTACION_MODIFICACIONES.md). No hay suite automatizada de pruebas configurada en `package.json`.
