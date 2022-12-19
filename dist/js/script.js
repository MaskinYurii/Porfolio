const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger'),
    closeElem = document.querySelector('.menu__close');
    overlay = document.querySelector('.menu__overlay');
    const arrowUp = document.querySelector('.arrow-up');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

