# TECHNOVA

Sitio empresarial adaptable de TECHNOVA, con perfiles del equipo y un formulario configurado para enviar a Formspree. La titularidad y el estado del endpoint requieren confirmación antes de usarlo con datos reales.

## Descripción

TECHNOVA se presenta aquí como una propuesta de empresa tecnológica orientada al desarrollo web, al diseño de experiencias digitales y a la consultoría tecnológica. Esta página es una base visual e informativa para esa propuesta; no acredita por sí sola la existencia de una empresa operativa ni de servicios contratables.

## Objetivo del proyecto

Presentar una propuesta de identidad y servicios digitales de TECHNOVA en un sitio estático, adaptable y accesible, y conservar una cadena de construcción reproducible que pueda verificarse antes de publicar.

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

## Integración continua

El workflow [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) ejecuta en cada push, Pull Request y solicitud manual. Usa Node.js 20, `npm ci`, `npm run build`, `npm run check:js` y `npm run check:dist`. La compilación comprueba los procesos Pug/Sass/JavaScript/assets; los validadores comprueban sintaxis de JavaScript, anclas y recursos locales generados. Si un comando falla, falla el trabajo. Solo tiene permiso de lectura. No publica el sitio ni requiere secretos. No hay una suite automatizada de pruebas unitarias o de navegador.

## Publicación en Netlify

El sitio es estático y `npm run build` genera el sitio en `dist/`. [netlify.toml](./netlify.toml) configura ese directorio como publicación, usa Node.js 20 y ejecuta la construcción y validadores. No se requieren variables secretas para compilar. El sitio es una página con navegación por anclas, no una aplicación SPA con rutas de cliente; por ello no se añade una regla de reescritura ni una redirección personalizada. Los archivos no encontrados recibirán el comportamiento 404 predeterminado de Netlify.

Cuando el nuevo repositorio GitHub esté creado y confirmado:

1. Inicia sesión en Netlify y elige **Add new site → Import an existing project**.
2. Autoriza GitHub y selecciona el repositorio nuevo de TECHNOVA.
3. Revisa que la configuración detectada coincida con `netlify.toml`: comando `npm run build && npm run check:js && npm run check:dist`, directorio de publicación `dist` y Node.js 20.
4. Selecciona la rama principal para producción y deja habilitadas las vistas previas de Pull Requests/Deploy Previews.
5. Inicia el primer despliegue desde Netlify después de revisar el contenido, la privacidad y la cuenta Formspree. Los siguientes pushes a la rama de producción y Pull Requests se procesarán según la configuración de Netlify.

No se ha creado ni autorizado una cuenta, enlazado el repositorio ni publicado el sitio. El CLI de Netlify no está instalado. La CI de GitHub continúa verificando cambios sin desplegar. Para publicar el formulario se debe confirmar antes que el endpoint Formspree pertenece a la organización y está activo.

## Privacidad del formulario

El formulario está configurado para transmitir nombre, correo, teléfono opcional y mensaje a Formspree. El proyecto no contiene un aviso de privacidad aprobado ni permite confirmar el titular de la cuenta, retención, ubicación de procesamiento o requisitos legales aplicables. Consulta [PRIVACIDAD_BORRADOR.md](./PRIVACIDAD_BORRADOR.md): identifica hechos técnicos y campos que el responsable debe completar. No es un aviso legal final ni debe publicarse sin revisión y aprobación.

## Preparar un repositorio nuevo

El directorio actual conserva su `.git`, historial, ramas y remotos. Para no heredar ese historial, cuando tengas un respaldo crea un directorio nuevo con una copia de los archivos del proyecto, excluyendo `.git/` y `node_modules/`; luego crea allí un repositorio Git nuevo, haz el primer commit y enlázalo al repositorio vacío que crees en GitHub. No inicialices GitHub con README, licencia ni `.gitignore` para evitar conflictos. No hagas push al remoto anterior.

Cuando conozcas la URL nueva, actualiza los enlaces del repositorio en `package.json` (`homepage`, `bugs` y `repository`) y los encabezados/licencias generados que apunten al repositorio actual. La plataforma de hosting y cualquier configuración de formulario/privacidad deben confirmarse por separado antes de publicar.

`npm audit` y `npm audit --omit=dev` reportaron cero vulnerabilidades tras actualizar las dependencias afectadas.

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
├── .gitignore                    # Excluye secretos y permite solo las fotos aprobadas del equipo
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
- Perfiles de César Piña y Manuel Barsik, con sus cargos y fotografías.
- Formulario con validación del navegador configurado para enviar a Formspree; muestra el estado según la respuesta HTTP sin revelar el correo de destino. El endpoint no se ha verificado con un envío.

En los recursos disponibles solo constan esos dos perfiles y sus dos fotografías. No se encontraron datos o imágenes aprobados de otros integrantes; no se añadieron perfiles para completar cuatro.

## Modificaciones realizadas

- Sustitución del contenido genérico de la plantilla por una propuesta visual y textual para TECHNOVA.
- Personalización de la navegación, hero, servicios, presentación institucional, proceso de trabajo, equipo, contacto y pie de página.
- Incorporación de una identidad visual propia mediante SCSS y elementos gráficos CSS.
- Implementación de navegación móvil y restauración del formulario Formspree.
- Actualización de metadatos del paquete y enlaces de licencia generados para reflejar el repositorio TECHNOVA, sin alterar la autoría original.
- Conservación del sistema de construcción, Bootstrap y atribuciones/licencia de la plantilla original.

El detalle por archivo, las pruebas ejecutadas y los pendientes se documentan en [`DOCUMENTACION_MODIFICACIONES.md`](./DOCUMENTACION_MODIFICACIONES.md). Los cambios se registran por etapas en [`CHANGELOG.md`](./CHANGELOG.md).

## Información pendiente de completar

- Completar y aprobar el [borrador de privacidad](./PRIVACIDAD_BORRADOR.md) antes de publicar un aviso y recopilar datos reales.
- Incorporar descripciones biográficas adicionales solo si se facilitan textos aprobados; por ahora se muestran únicamente cargos y descripciones basadas en ellos.
- Perfiles profesionales o redes sociales, si el equipo decide proporcionarlos.
- Confirmación del alcance de los servicios y del contenido institucional antes de publicar como información oficial.

## Pruebas y control de calidad

Las comprobaciones de compilación y referencias ejecutadas se registran en [`DOCUMENTACION_MODIFICACIONES.md`](./DOCUMENTACION_MODIFICACIONES.md). En `package.json` no hay suite automatizada de pruebas unitarias o de navegador; CI realiza validación de build, sintaxis y recursos descrita arriba. No se envían datos reales a Formspree durante las verificaciones.
