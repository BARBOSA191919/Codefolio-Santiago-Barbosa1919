const fs = require('fs');
const files = [
    'js/hamburger-menu.js',
    'js/preloader.js',
    'js/particles.js',
    'js/social-share.js',
    'js/aos-init.js',
    'js/pace-preloader.js',
    'js/skills-data.js',
    'js/skills-render.js',
    'js/footer-visibility.js',
    'js/hero-animation.js',
    'js/text-animation.js',
    'js/skill-tabs.js',
    'js/portfolio-mixer.js',
    'js/portfolio-popup.js',
    'js/services-modal.js',
    'js/swiper-testimonial.js',
    'js/input-animation.js',
    'js/scroll-nav.js',
    'js/sidebar.js',
    'js/word-animation.js'
];

let combined = '';
files.forEach(file => {
    if (fs.existsSync(file)) {
        combined += `// ${file}\n` + fs.readFileSync(file, 'utf8') + '\n\n';
    } else {
        console.warn(`Archivo no encontrado: ${file}`);
    }
});
fs.writeFileSync('js/main.js', combined);
console.log('✅ JS combinado en js/main.js');