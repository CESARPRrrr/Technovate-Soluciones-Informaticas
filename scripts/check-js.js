'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const projectRoot = path.resolve(__dirname, '..');
const sourceDirectories = ['scripts', 'src/js', 'dist/js'];
const files = [];

function collectJavaScriptFiles(directory) {
    if (!fs.existsSync(directory)) {
        return;
    }

    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const entryPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            collectJavaScriptFiles(entryPath);
        } else if (entry.isFile() && entry.name.endsWith('.js')) {
            files.push(entryPath);
        }
    }
}

for (const directory of sourceDirectories) {
    collectJavaScriptFiles(path.join(projectRoot, directory));
}

if (files.length === 0) {
    throw new Error('No se encontraron archivos JavaScript para validar.');
}

for (const filePath of files) {
    const source = fs.readFileSync(filePath, 'utf8');
    new vm.Script(source, { filename: path.relative(projectRoot, filePath) });
}

console.log(`Sintaxis JavaScript correcta en ${files.length} archivos.`);
