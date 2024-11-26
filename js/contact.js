document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const termsCheckbox = document.getElementById("terms");
    const messageInput = document.getElementById("message"); 
    const submitButton = document.getElementById("submitButton");

    let isValid = true;

    // Validação do nome
    if (nameInput.value.trim() === "") {
        nameInput.classList.add("is-invalid");
        isValid = false;
    } else {
        nameInput.classList.remove("is-invalid");
        nameInput.classList.add("is-valid");
    }

    // Validação do email
    if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailInput.classList.add("is-invalid");
        isValid = false;
    } else {
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
    }

    // Validação do checkbox
    if (!termsCheckbox.checked) {
        termsCheckbox.classList.add("is-invalid");
        isValid = false;
    } else {
        termsCheckbox.classList.remove("is-invalid");
        termsCheckbox.classList.add("is-valid");
    }

    // O campo de mensagem é opcional, sem validação necessária
    if (messageInput.value.trim() !== "") {
        messageInput.classList.add("is-valid");
    } else {
        messageInput.classList.remove("is-valid");
    }

    // Se tudo for válido
    if (isValid) {
        submitButton.disabled = true;
        submitButton.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Enviando...`;

        setTimeout(function () {
            submitButton.disabled = false;
            submitButton.innerHTML = "Enviar";
            document.getElementById("successMessage").style.display = "block";

            // Limpa os campos
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = ""; 
            termsCheckbox.checked = false;

            // Remove classes de validação
            document.querySelectorAll(".is-valid").forEach((input) => input.classList.remove("is-valid"));
        }, 2000);
    }
});
