var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  var erros = validaPaciente(paciente);
  if (erros.length > 0) {
    // exibir mensagem de erro no front
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(erro => {
      var li = document.createElement("li");
      li.textContent = erro;
      ul.append(li);
    });
    return;
  }

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();
});

function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco");
  }
  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é invalido");
  }
  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é invalida");
  }

  return erros;
}

