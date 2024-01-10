$(document).ready(function () {
    $('#mobile-menu').click(function () {
        $('.nav-links').toggleClass('show');
        $('.bar').toggleClass('open');
    });

});
const cards = document.querySelectorAll('.cards_item');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight) {
            card.classList.add('slide-up');
        }
    });
});
