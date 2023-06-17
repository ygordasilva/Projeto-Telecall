function validarFormulario() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login.trim() === "") {
      alert("Por favor, digite o login.");
      return false;
  }

  if (senha.trim() === "") {
      alert("Por favor, digite a senha.");
      return false;
  }

  if (senha.length < 8) {
      alert("A senha deve ter no mínimo 8 caracteres.");
      return false;
  }

  // Formulário válido, redirecionar para index.html
  window.location.href = "index.html";
  return true;
}

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const novaSenha = document.getElementById('nsenha').value;
  const confirmarSenha = document.getElementById('csenha').value;

  if (novaSenha.length < 8) {
    alert('A nova senha deve ter pelo menos 8 caracteres.');
    return;
  }

  if (novaSenha !== confirmarSenha) {
    alert('As senhas não coincidem. Por favor, verifique novamente.');
    return;
  }
});
