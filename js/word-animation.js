console.log("word-animation.js running");
const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  }, { passive: true });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  }, { passive: true });

  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx + 1));
});