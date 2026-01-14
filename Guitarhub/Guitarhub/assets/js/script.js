const toggle = document.querySelector('.struny-toggle');
const content = document.querySelector('.struny-content');
const arrow = document.querySelector('.arrow');

toggle.addEventListener('click', () => {
    content.classList.toggle('open');
    arrow.classList.toggle('rotate');
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.onclick = (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

document.querySelectorAll('#nav-menu a').forEach(link => {
    link.onclick = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    };
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (navMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnHamburger) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});