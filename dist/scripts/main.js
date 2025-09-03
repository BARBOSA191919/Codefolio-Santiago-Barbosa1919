// main.js
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	console.log("main.js running");

	const scripts = [
	'/scripts/hamburger-menu.js',
	'/scripts/social-share.js',
	'/scripts/skills.js',
	'/scripts/hero-animation.js',
	'/scripts/services-modal.js',
	'/scripts/word-animation.js',
	];

	function loadScript(src) {
		return new Promise((resolve, reject) => {
			if (typeof src !== 'string' || !src) {
				console.error(`Invalid script source: ${src}`);
				reject(new Error(`Invalid script source: ${src}`));
				return;
			}
			const script = document.createElement('script');
			script.src = src.startsWith('/') ? src : `/src/scripts/${src}`;
			script.async = false;
			script.onload = resolve;
			script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
			document.head.appendChild(script);
		});
	}

	async function loadAllScripts() {
		for (const src of scripts) {
			try {
				await loadScript(src);
			} catch (error) {
				console.error(error);
			}
		}
	}

	loadAllScripts();

	// Preloader con JavaScript vanilla
	document.addEventListener('DOMContentLoaded', function () {
		const loader = document.getElementById('loader');
		const preloader = document.getElementById('preloader');

		if (loader && preloader) {
			loader.style.opacity = '0';
			loader.style.transition = 'opacity 0.5s ease';

			setTimeout(() => {
				preloader.style.opacity = '0';
				preloader.style.transition = 'opacity 0.5s ease';

				setTimeout(() => {
					preloader.style.display = 'none';
				}, 500);
			}, 300);
		}
	});

	// Smooth scrolling para enlaces internos
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});
}

// Código jQuery eliminado - ya no se usa jQuery en este proyecto
// Las funcionalidades se manejan con JavaScript vanilla o GSAP