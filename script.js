const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-links') && !event.target.matches('.menu-toggle')) {
        navLinks.classList.remove('active');
    }
});