document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    // Obtendo os campos
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const termsCheckbox = document.getElementById("terms");
    const submitButton = document.getElementById("submitButton");

    let isValid = true; // Controle para checar todos os campos

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

    // Se todos os campos forem válidos
    if (isValid) {
        // Desabilita o botão e exibe o spinner
        submitButton.disabled = true;
        submitButton.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Enviando...`;

        // Simula o envio do formulário
        setTimeout(function () {
            // Habilita o botão novamente e mostra a mensagem de sucesso
            submitButton.disabled = false;
            submitButton.innerHTML = "Enviar";
            document.getElementById("successMessage").style.display = "block";

            // Limpa os campos e remove classes de validação
            nameInput.value = "";
            emailInput.value = "";
            termsCheckbox.checked = false;

            document.querySelectorAll(".is-valid").forEach((input) => input.classList.remove("is-valid"));
        }, 2000); // Simula o tempo de envio (2 segundos)
    }
});

// Validação em tempo real nos campos
document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("blur", function () {
        if (this.checkValidity()) {
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        } else {
            this.classList.remove("is-valid");
            this.classList.add("is-invalid");
        }
    });
});
