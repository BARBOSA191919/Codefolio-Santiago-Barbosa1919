const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContent.forEach(tabContents => tabContents.classList.remove('skills-active'));
        target.classList.add('skills-active');
        tabs.forEach(t => t.classList.remove('skills-active'));
        tab.classList.add('skills-active');
    });
});