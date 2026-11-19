'use strict';
const upath = require('upath');
const fs = require('fs');

module.exports = function renderAssets() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const distPath = upath.resolve(upath.dirname(__filename), '../dist');
    const iconPackagePath = upath.resolve(
        upath.dirname(__filename),
        '../node_modules/bootstrap-icons/font'
    );
    const publicAssets = [
        {
            source: upath.join(sourcePath, 'favicon.ico'),
            destination: upath.join(distPath, 'assets/favicon.ico')
        },
        {
            source: upath.join(sourcePath, 'Cesar-Pina.jpg'),
            destination: upath.join(distPath, 'assets/cesar-pina.jpg')
        },
        {
            source: upath.join(sourcePath, 'Manuel-Barsik.jpg'),
            destination: upath.join(distPath, 'assets/manuel-barsik.jpg')
        },
        {
            source: upath.join(iconPackagePath, 'bootstrap-icons.min.css'),
            destination: upath.join(distPath, 'css/bootstrap-icons.min.css')
        },
        {
            source: upath.join(iconPackagePath, 'fonts/bootstrap-icons.woff2'),
            destination: upath.join(distPath, 'css/fonts/bootstrap-icons.woff2')
        },
        {
            source: upath.join(iconPackagePath, 'fonts/bootstrap-icons.woff'),
            destination: upath.join(distPath, 'css/fonts/bootstrap-icons.woff')
        },
        {
            source: upath.resolve(upath.dirname(__filename), '../node_modules/bootstrap/LICENSE'),
            destination: upath.join(distPath, 'assets/licenses/bootstrap-LICENSE.txt')
        },
        {
            source: upath.resolve(upath.dirname(__filename), '../node_modules/bootstrap-icons/LICENSE'),
            destination: upath.join(distPath, 'assets/licenses/bootstrap-icons-LICENSE.txt')
        },
        {
            source: upath.resolve(upath.dirname(__filename), '../LICENSE'),
            destination: upath.join(distPath, 'assets/licenses/startbootstrap-LICENSE.txt')
        }
    ];

    publicAssets.forEach(({ source, destination }) => {
        fs.mkdirSync(upath.dirname(destination), { recursive: true });
        fs.copyFileSync(source, destination);
    });
};