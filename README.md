# TECHNOVA

Sitio empresarial adaptable de TECHNOVA, con perfiles del equipo y un formulario configurado para enviar a Formspree. La titularidad y el estado del endpoint requieren confirmación antes de usarlo con datos reales.

## Descripción

TECHNOVA se presenta aquí como una propuesta de empresa tecnológica orientada al desarrollo web, al diseño de experiencias digitales y a la consultoría tecnológica. Esta página es una base visual e informativa para esa propuesta; no acredita por sí sola la existencia de una empresa operativa ni de servicios contratables.

## Objetivo del proyecto

Presentar la identidad y los servicios propuestos de TECHNOVA en un sitio estático, adaptable y accesible, con construcción reproducible, integración continua y publicación en Netlify.

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
- Node.js y npm para instalar dependencias, construir y validar los archivos generados.

Las dependencias de ejecución son `bootstrap` y `bootstrap-icons`. Las herramientas de desarrollo son `pug`, `sass`, `postcss`, `autoprefixer`, `prettier`, `shelljs`, `upath`, `browser-sync`, `chokidar` y `concurrently`. Las versiones exactas quedan bloqueadas en `package-lock.json`.

## Requisitos

- Node.js y npm instalados (CI utiliza Node.js 20).
- Acceso a la red para instalar dependencias por primera vez.

No se requiere base de datos ni credenciales para construir el sitio. El formulario está configurado para enviar nombre, correo, teléfono opcional y mensaje a Formspree; su titularidad y estado requieren confirmación antes de usarlo con datos reales. Consulta el [borrador de privacidad](./PRIVACIDAD_BORRADOR.md).

## Instalación

Desde la raíz del repositorio:

```bash
npm ci
```

## Ejecución local

```bash
npm start
```

Este comando construye el sitio, inicia BrowserSync y observa los cambios en `src/`. Para iniciar el servidor de vista previa con registro de depuración usa `npm run start:debug`.

## Compilación

```bash
npm run build
npm run check:js
npm run check:dist
```

`npm run build` limpia los artefactos anteriores y vuelve a generar `dist/`: Pug produce el HTML, Sass/PostCSS genera el CSS, el proceso copia el JavaScript y se agregan los recursos y avisos de licencia declarados. `npm run check:js` analiza la sintaxis de los scripts fuente y generado sin ejecutarlos. `npm run check:dist` comprueba el HTML, identificadores, enlaces internos y referencias locales en HTML y CSS. También existen `npm run build:pug`, `npm run build:scss`, `npm run build:scripts`, `npm run build:assets` y `npm run clean`.

Las fuentes editables están en `src/`; no edites manualmente `dist/`, porque se regenera con el proceso de construcción.

## Integración continua y despliegue

La **CI** de GitHub Actions, definida en [`.github/workflows/ci.yml`](./.github/workflows/ci.yml), comprueba cambios en `push`, `pull_request` y ejecuciones manuales. Usa Node.js 20, `npm ci`, `npm run build`, `npm run check:js` y `npm run check:dist`. Falla si alguna etapa falla, tiene permiso de lectura y no despliega. No requiere secretos. No hay una suite de pruebas unitarias o de navegador.

El **despliegue** lo gestiona Netlify por separado de GitHub Actions. El sitio publicado está en [technovate-soluciones-informaticas.netlify.app](https://technovate-soluciones-informaticas.netlify.app/), conectado al repositorio GitHub. Netlify sirve la carpeta generada `dist/`; la configuración de construcción está en [`netlify.toml`](./netlify.toml). Los despliegues y las vistas previas se administran desde Netlify; no los ejecuta la CI de GitHub.

El sitio consta de una página estática con navegación por anclas, no requiere fallback SPA ni redirecciones personalizadas. Los archivos no encontrados reciben el 404 predeterminado de Netlify. No se requieren secretos para construir el sitio. La configuración de publicación y las vistas previas se administran en Netlify.

## Privacidad del formulario

El formulario está configurado para transmitir nombre, correo, teléfono opcional y mensaje a Formspree. El proyecto no contiene un aviso de privacidad aprobado ni permite confirmar el titular de la cuenta, retención, ubicación de procesamiento o requisitos legales aplicables. Consulta [PRIVACIDAD_BORRADOR.md](./PRIVACIDAD_BORRADOR.md): identifica hechos técnicos y campos que el responsable debe completar. No es un aviso legal final ni debe publicarse sin revisión y aprobación.

## Repositorio y publicación

- Repositorio público: [CESARPRrrr/Technovate-Soluciones-Informaticas](https://github.com/CESARPRrrr/Technovate-Soluciones-Informaticas).
- Rama principal: `main`.
- Sitio público: [technovate-soluciones-informaticas.netlify.app](https://technovate-soluciones-informaticas.netlify.app/).
- GitHub Actions realiza CI; Netlify está conectado al repositorio y construye/publica el sitio de forma independiente.

Los metadatos de `package.json` y los encabezados generados usan el repositorio oficial. Las dependencias se bloquean en `package-lock.json`; revisa el resultado actual de `npm audit` por separado cuando necesites un informe de vulnerabilidades vigente.

## Estructura de carpetas

```text
.
├── .github/workflows/ci.yml      # Instalación y compilación en push y Pull Request
├── dist/                         # Página y recursos generados para distribución
├── netlify.toml                  # Construcción y carpeta de publicación de Netlify
├── scripts/                      # Compilación, renderizado, validación y vista previa
├── src/
│   ├── assets/                    # Recursos estáticos
│   ├── js/scripts.js              # Navegación móvil
│   ├── pug/index.pug              # Contenido y estructura de la página TECHNOVA
│   └── scss/styles.scss           # Estilos Bootstrap y personalización visual
├── ATRIBUCIONES.md
├── .gitignore                    # Excluye secretos y conserva las fotografías aprobadas del equipo
├── CHANGELOG.md
├── DOCUMENTACION_MODIFICACIONES.md
├── PRIVACIDAD_BORRADOR.md        # Borrador pendiente de datos y aprobación del responsable
├── LICENSE                        # Licencia MIT original, preservada
├── package.json                  # Metadatos, dependencias y comandos npm
└── package-lock.json             # Versiones exactas para instalación reproducible
```

## Funcionalidades

- Navegación entre las secciones de inicio, servicios, nosotros, equipo y contacto.
- Menú móvil expandible, operable con JavaScript y con enlaces que lo cierran al seleccionar una sección.
- Diseño adaptable basado en los puntos de quiebre y la grilla de Bootstrap.
- Secciones de servicios, descripción de la propuesta TECHNOVA y proceso de trabajo.
- Perfiles de César Piña, Manuel Barsik, Katerina Gutiérrez y Betzabeth Medina, con sus cargos y fotografías.
- Formulario con validación del navegador configurado para enviar a Formspree; muestra el estado según la respuesta HTTP sin revelar el correo de destino. El endpoint no se ha verificado con un envío.

El proyecto académico contempla cuatro integrantes. El sitio presenta actualmente los perfiles de las cuatro personas con sus cargos y fotografías; no se añadieron perfiles ficticios.

## Modificaciones realizadas

- Sustitución del contenido genérico de la plantilla por una propuesta visual y textual para TECHNOVA.
- Personalización de la navegación, hero, servicios, presentación institucional, proceso de trabajo, equipo, contacto y pie de página.
- Incorporación de una identidad visual propia mediante SCSS y elementos gráficos CSS.
- Implementación de navegación móvil y restauración del formulario Formspree.
- Actualización de metadatos del paquete y enlaces de licencia generados para reflejar el repositorio TECHNOVA, sin alterar la autoría original.
- Conservación del sistema de construcción, Bootstrap y atribuciones/licencia de la plantilla original.

El detalle por archivo, las pruebas ejecutadas y los pendientes se documentan en [`DOCUMENTACION_MODIFICACIONES.md`](./DOCUMENTACION_MODIFICACIONES.md). Los cambios se registran por etapas en [`CHANGELOG.md`](./CHANGELOG.md).

## Información pendiente de completar

- Completar y aprobar el [borrador de privacidad](./PRIVACIDAD_BORRADOR.md) antes de publicar un aviso final o recopilar datos reales.
- Incorporar descripciones biográficas adicionales solo si se facilitan textos aprobados; por ahora se muestran únicamente cargos y descripciones basadas en ellos.
- Perfiles profesionales o redes sociales, si el equipo decide proporcionarlos.
- Confirmación del alcance de los servicios y del contenido institucional antes de publicar como información oficial.

## Pruebas y control de calidad

Las comprobaciones de compilación y referencias ejecutadas se registran en [`DOCUMENTACION_MODIFICACIONES.md`](./DOCUMENTACION_MODIFICACIONES.md). En `package.json` no hay suite automatizada de pruebas unitarias o de navegador; CI realiza validación de build, sintaxis y recursos descrita arriba. No se envían datos reales a Formspree durante las verificaciones.
