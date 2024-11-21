document.addEventListener("DOMContentLoaded", function() {
    const balletCarousel = new bootstrap.Carousel('#balletCarousel', {
        interval: 5000, // Change slide every 5 seconds
        wrap: true      // Loop slides indefinitely
    });
});

// Função para abrir/fechar o menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const isClickInside = navbar.contains(event.target) || menuToggle.contains(event.target);

    // Se o clique for fora do menu e do botão, esconda o menu
    if (!isClickInside && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
});
