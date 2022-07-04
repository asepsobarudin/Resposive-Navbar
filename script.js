const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.list_menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});