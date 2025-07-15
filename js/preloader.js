window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    const preloader = document.getElementById('preloader');
    if (loader) {
        loader.style.transition = 'opacity 0.7s';
        loader.style.opacity = 0;
        setTimeout(function () {
            loader.style.display = 'none';
            if (preloader) {
                preloader.style.transition = 'opacity 0.7s';
                preloader.style.opacity = 0;
                setTimeout(function () {
                    preloader.style.display = 'none';
                }, 300);
            }
        }, 700);
    }
});