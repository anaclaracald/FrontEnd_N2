// Seleciona todas as imagens da galeria
const galleryImages = document.querySelectorAll('.gallery img');

// Seleciona o modal e a imagem dentro do modal
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

const bootstrapModal = new bootstrap.Modal(modal);

// Adiciona evento de clique em cada imagem
galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        // Define o src da imagem no modal com o src da imagem clicada
        modalImage.src = image.src;

        // Abre o modal
        bootstrapModal.show();
    });
});

// Remove o src da imagem ao fechar o modal
modal.addEventListener('hidden.bs.modal', () => {
    modalImage.src = ''; // Evita carregamento desnecessário
});
