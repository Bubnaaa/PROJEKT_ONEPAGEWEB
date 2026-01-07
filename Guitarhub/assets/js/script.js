const toggle = document.querySelector('.struny-toggle');
const content = document.querySelector('.struny-content');
const arrow = document.querySelector('.arrow');

toggle.addEventListener('click', () => {
    content.classList.toggle('open');
    arrow.classList.toggle('rotate');
});
