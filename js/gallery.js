// Adiciona evento de clique nas imagens da galeria
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function () {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = this.src; // Define o src da imagem do modal para o da imagem clicada
        modalImage.alt = this.alt; // Define o alt da imagem do modal
        document.getElementById('imageModalLabel').innerText = this.alt; // Define o título do modal
    });
});