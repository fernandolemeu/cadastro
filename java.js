// Validação do formulário
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    // Verificar se o campo de nome está vazio
    if (name.trim() === "") {
        errorMessage.textContent = "O campo de nome é obrigatório.";
        return false;
    }

    // Validar o formato do email usando regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Email inválido.";
        return false;
    }

    // Verificar se a senha tem pelo menos 6 caracteres
    if (password.length < 6) {
        errorMessage.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return false;
    }

    errorMessage.textContent = "";
    alert("Cadastro realizado com sucesso!");
    return true;
}
