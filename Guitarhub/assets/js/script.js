const toggle = document.querySelector('.struny-toggle');
const content = document.querySelector('.struny-content');
const arrow = document.querySelector('.arrow');

toggle.addEventListener('click', () => {
    content.classList.toggle('open');
    arrow.classList.toggle('rotate');
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// 1. Klasické otevírání/zavírání přes tlačítko
hamburger.onclick = (e) => {
    e.stopPropagation(); // Zabrání tomu, aby klik na tlačítko hned menu zase zavřel
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

// 2. Zavření kliknutím na odkaz
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.onclick = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    };
});

// 3. TO CO CHCEŠ: Zavření kliknutím kamkoliv na stránku (mimo menu)
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    // Pokud menu obsahuje třídu active a klikneš mimo něj i mimo hamburger
    if (navMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnHamburger) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});