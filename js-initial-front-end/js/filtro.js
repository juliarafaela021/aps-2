var campoFiltro = document.querySelector("#filtrar-pacientes");

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            const paciente = pacientes[i];
            var nome = paciente.querySelector(".info-nome").textContent;
            // expressão regular - regex
            var expressao = new RegExp(this.value, "i");
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            }
            else {
                paciente.classList.remove("invisivel");
            }
        }
    }
    else {
        for (let i = 0; i < pacientes.length; i++) {
            const paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});