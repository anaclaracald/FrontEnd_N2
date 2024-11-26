document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("typing-title");
    const text = "Ana Botafogo";
    const typingSpeed = 200; // Velocidade de digitação (ms)
    const pauseBetweenLoops = 1000; // Pausa antes de reiniciar (ms)
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            titleElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Após completar a digitação, limpar e reiniciar após uma pausa
            setTimeout(() => {
                titleElement.textContent = "";
                index = 0;
                typeWriter();
            }, pauseBetweenLoops);
        }
    }

    typeWriter();
});
