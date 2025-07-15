const modalViews = document.querySelectorAll('.services-modal');
const modelBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => modal(i));
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => modalView.classList.remove('active-modal'));
    });
});