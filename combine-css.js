const fs = require('fs');
const files = [
    'css/variable.css',
    'css/base.css',
    'css/hero.css',
    'css/navbar.css',
    'css/home.css',
    'css/projects.css',
    'css/competencias.css',
    'css/about.css',
    'css/contact.css',
    'css/footer.css',
    'css/responsive.css'
];
let combined = '';
files.forEach(file => {
    if (fs.existsSync(file)) {
        combined += `/* ${file} */\n` + fs.readFileSync(file, 'utf8') + '\n';
    } else {
        console.warn(`Archivo no encontrado: ${file}`);
    }
});
fs.writeFileSync('css/main.css', combined);
console.log('✅ CSS combinado en css/main.css'); 