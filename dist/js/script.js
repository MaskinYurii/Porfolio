const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
})

// const counters = document.querySelectorAll('.skills__statistics-percent'),
//       lines = document.querySelectorAll('.skills__statistics-line span');

// counters.forEach( (item, i) => {
//     lines[i].style.width = item.innerHTML;
// });