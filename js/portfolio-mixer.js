let mixerPortfolio = mixitup('.cards', {
    selectors: { target: '.card' },
    animation: { duration: 300 }
});

const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork));