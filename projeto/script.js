
function validarFormulario(event) {
  event.preventDefault(); 

  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var nome_materno = document.getElementById('nome_materno');
  var cpf = document.getElementById('cpf');
  var celular = document.getElementById('celular');
  var tel_fixo = document.getElementById('tel_fixo');
  var endereco = document.getElementById('endereco');
  var login = document.getElementById('login');
  var senha = document.getElementById('senha');
  var conf_senha = document.getElementById('conf_senha');
  var sexoMasculino = document.querySelector('input[name="sexo"][value="masculino"]');
  var sexoFeminino = document.querySelector('input[name="sexo"][value="feminino"]');
  var dat_nascimento = document.getElementById('dat_nascimento');

  if (nome.value.trim() === '') {
    exibirErroAlert('O campo nome é obrigatório.');
    return;
  }

  if (email.value.trim() === '') {
    exibirErroAlert('O campo email é obrigatório.');
    return;
  } else if (!validarEmail(email.value)) {
    exibirErroAlert('O email informado é inválido.');
    return;
  }

  if (nome_materno.value.trim() === '') {
    exibirErroAlert('O campo nome materno é obrigatório.');
    return;
  }

  if (cpf.value.trim() === '') {
    exibirErroAlert('O campo CPF é obrigatório.');
    return;
  } else if (!validarCPF(cpf.value)) {
    exibirErroAlert('O CPF informado é inválido.');
    return;
  }

  if (celular.value.trim() === '') {
    exibirErroAlert('O campo celular é obrigatório.');
    return;
  } else {
    celular.value = formatarTelefone(celular.value); 
  }

  if (tel_fixo.value.trim() === '') {
    exibirErroAlert('O campo telefone fixo é obrigatório.');
    return;
  } else {
    tel_fixo.value = formatarTelefone(tel_fixo.value); 
  }

  if (endereco.value.trim() === '') {
    exibirErroAlert('O campo endereço é obrigatório.');
    return;
  }

  if (login.value.trim() === '') {
    exibirErroAlert('O campo login é obrigatório.');
    return;
  }

  if (senha.value.trim() === '') {
    exibirErroAlert('O campo senha é obrigatório.');
    return;
  } else if (senha.value.length < 8) {
    exibirErroAlert('A senha deve ter no mínimo 8 caracteres.');
    return;
  }

  if (conf_senha.value.trim() === '') {
    exibirErroAlert('O campo confirmar senha é obrigatório.');
    return;
  }

  if (senha.value !== conf_senha.value) {
    exibirErroAlert('As senhas não coincidem.');
    return;
  }

  if (!sexoMasculino.checked && !sexoFeminino.checked) {
    exibirErroAlert('Selecione o sexo.');
    return;
  }

  if (dat_nascimento.value.trim() === '') {
    exibirErroAlert('O campo data de nascimento é obrigatório.');
    return;
  }
  
  // Redirecionamento para a página Login.html
  window.location.href = "Login.html";
}

function exibirErroAlert(mensagem) {
  alert('Erro: ' + mensagem);
}

function validarEmail(email) {
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ''); 

  if (cpf.length !== 11) {
    return false; 
  }

  var regexCPF = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  cpf = cpf.replace(regexCPF, '$1.$2.$3-$4'); 
  document.getElementById('cpf').value = cpf; 
  return true;
}

function validarTelefone(telefone) {
  telefone = telefone.replace(/\D/g, ''); 

  if (telefone.length < 10 || telefone.length > 11) {
    return false; 
  }

  var regexTelefone = /^(\d{2})(\d{4,5})(\d{4})$/;
  telefone = telefone.replace(regexTelefone, '($1) $2-$3'); 
  return telefone;
}

function formatarTelefone(telefone) {
  telefone = telefone.replace(/\D/g, ''); 

  if (telefone.length === 11) {
    var regexTelefone = /^(\d{2})(\d{5})(\d{4})$/;
    telefone = telefone.replace(regexTelefone, '($1) $2-$3'); 
  } else {
    var regexTelefone = /^(\d{2})(\d{4})(\d{4})$/;
    telefone = telefone.replace(regexTelefone, '($1) $2-$3'); 
  }

  return telefone;
}

function validarDataNascimento(data) {
  var regexData = /^\d{4}-\d{2}-\d{2}$/;
  return regexData.test(data);
}

document.getElementById('formulario').addEventListener('submit', validarFormulario);
