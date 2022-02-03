var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {


    var listaPacientesTr = document.querySelectorAll(".paciente");

    if (this.value != "") {
        for (var i = 0; i < listaPacientesTr.length; i++) {

            var paciente = listaPacientesTr[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            var expressao = new RegExp(this.value, "i");

            if (expressao.test(nome)) {
                paciente.classList.remove("ocultarLinha"); // que apareça
            } else {
                paciente.classList.add("ocultarLinha"); // oculte
            }
        }

    } else {
        for (var i = 0; i < listaPacientesTr.length; i++) {
            var paciente = listaPacientesTr[i];
            paciente.classList.remove("ocultarLinha");

        }

    }

    console.log(listaPacientesTr);


});

