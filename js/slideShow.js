document.addEventListener("DOMContentLoaded", function() {
    const balletCarousel = new bootstrap.Carousel('#balletCarousel', {
        interval: 5000, // Change slide every 5 seconds
        wrap: true      // Loop slides indefinitely
    });
});

const carousel = document.querySelector('#curiosidadesCarousel');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 5000, // Troca de slide a cada 5 segundos
        pause: 'hover' // Pausa ao passar o mouse
    });