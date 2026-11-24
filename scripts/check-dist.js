'use strict';

const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist');
const htmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(htmlPath)) {
    throw new Error('No se encontró dist/index.html. Ejecuta primero npm run build.');
}

const html = fs.readFileSync(htmlPath, 'utf8');

if (!html.trim()) {
    throw new Error('dist/index.html está vacío.');
}

if (!/<!doctype html>/i.test(html) || !/<html\b[^>]*\blang=["']es["']/i.test(html)) {
    throw new Error('El documento debe declarar HTML5 y el idioma español.');
}

const ids = new Set();
const duplicateIds = new Set();
const idPattern = /\bid=["']([^"']+)["']/gi;
let match;

while ((match = idPattern.exec(html)) !== null) {
    if (ids.has(match[1])) {
        duplicateIds.add(match[1]);
    }

    ids.add(match[1]);
}

if (duplicateIds.size > 0) {
    throw new Error(`Hay identificadores HTML duplicados: ${[...duplicateIds].join(', ')}`);
}

function checkReference(reference, basePath, checkFragment) {
    if (reference.startsWith('//')) {
        return null;
    }

    const schemeMatch = reference.match(/^([a-z][a-z\d+.-]*):/i);
    if (schemeMatch) {
        const scheme = schemeMatch[1].toLowerCase();
        const allowedSchemes = new Set(['http', 'https', 'mailto', 'tel', 'data']);

        if (!allowedSchemes.has(scheme)) {
            throw new Error(`Esquema de URL no permitido: ${reference}`);
        }

        return null;
    }

    let decodedReference;
    try {
        decodedReference = decodeURIComponent(reference);
    } catch {
        throw new Error(`Referencia local con codificación inválida: ${reference}`);
    }

    const hashIndex = decodedReference.indexOf('#');
    const fragment = hashIndex === -1 ? '' : decodedReference.slice(hashIndex + 1);
    const pathAndQuery = hashIndex === -1
        ? decodedReference
        : decodedReference.slice(0, hashIndex);
    const pathOnly = pathAndQuery.split('?')[0];

    if (checkFragment && fragment) {
        if (!ids.has(fragment)) {
            throw new Error(`El ancla interna #${fragment} no apunta a ningún elemento.`);
        }

    }

    if (!pathOnly) {
        return null;
    }

    const relativePath = pathOnly.startsWith('/')
        ? pathOnly.slice(1)
        : pathOnly;
    const resolvedPath = path.resolve(
        pathOnly.startsWith('/') ? distPath : basePath,
        relativePath
    );
    const pathFromDist = path.relative(distPath, resolvedPath);

    if (
        pathFromDist === '..'
        || pathFromDist.startsWith(`..${path.sep}`)
        || path.isAbsolute(pathFromDist)
    ) {
        throw new Error(`La referencia local sale de dist/: ${reference}`);
    }

    if (!fs.existsSync(resolvedPath)) {
        throw new Error(`No se encontró el recurso local ${reference} (esperado en ${resolvedPath}).`);
    }

    return resolvedPath;
}

const stylesheets = new Set();
const references = /\b(?:src|href|action)=["']([^"']+)["']/gi;
let checkedFiles = 0;
let checkedAnchors = 0;

while ((match = references.exec(html)) !== null) {
    const localPath = checkReference(match[1], distPath, true);

    if (localPath) {
        checkedFiles += 1;
        if (path.extname(localPath).toLowerCase() === '.css') {
            stylesheets.add(localPath);
        }
    } else if (match[1].startsWith('#')) {
        checkedAnchors += 1;
    }
}

for (const stylesheetPath of stylesheets) {
    const css = fs.readFileSync(stylesheetPath, 'utf8');
    const cssReferences = /url\(\s*(?:(["'])(.*?)\1|([^)]*))\s*\)/gi;
    let cssMatch;

    while ((cssMatch = cssReferences.exec(css)) !== null) {
        const reference = (cssMatch[2] || cssMatch[3] || '').trim();
        const localPath = checkReference(reference, path.dirname(stylesheetPath), false);
        if (localPath) {
            checkedFiles += 1;
        }
    }
}

console.log(
    `Validación de dist/ correcta: ${checkedFiles} referencias locales (HTML y CSS) y ${checkedAnchors} anclas internas comprobadas.`
);
