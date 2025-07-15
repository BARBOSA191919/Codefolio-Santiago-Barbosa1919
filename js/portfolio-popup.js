document.addEventListener('click', (e) => {
    if (e.target.classList.contains('work-button')) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    const popup = document.querySelector('.portfolio-popup');
    if (popup) popup.classList.toggle('open');
}

const closeButton = document.querySelector('.portfolio-popup-close');
if (closeButton) {
    closeButton.addEventListener('click', togglePortfolioPopup);
}

function portfolioItemDetails(portfolioItem) {
    const thumbnail = document.querySelector('.pp-thumbnail img');
    const subtitle = document.querySelector('.portfolio-popup-subtitle span');
    const body = document.querySelector('.portfolio-popup-body');
    if (thumbnail && subtitle && body) {
        thumbnail.src = portfolioItem.querySelector('.work-img')?.src || '';
        subtitle.innerHTML = portfolioItem.querySelector('.work-title')?.innerHTML || '';
        body.innerHTML = portfolioItem.querySelector('.portfolio-item-details')?.innerHTML || '';
    }
}