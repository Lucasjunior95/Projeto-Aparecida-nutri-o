var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var listaPacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < listaPacientes.length; i++) {
    var paciente = listaPacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    var imc = calculaImc(peso, altura);

    paciente.classList.add(validaPaciente(imc));

    tdImc.textContent = imc;

}

function calculaImc(peso, altura) {
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    var resultadoImc;

    if (!pesoEhValido) {
        resultadoImc = "Peso inválido!";
    }
    if (!alturaEhValida) {
        resultadoImc = "Altura inválida!";
    }
    if (!pesoEhValido && !alturaEhValida) {
        resultadoImc = "Peso e Altura inválidos!";
    }

    //validar se o peso e altura são válidos, se sim, calcular IMC
    if (pesoEhValido && alturaEhValida) {
        //var imc = peso / Math.pow(altura, 2);
        var imc = 0;
        imc = peso / (altura * altura);
        resultadoImc = imc.toFixed(2);
    }
    return resultadoImc;
}
function validaPaciente(imc) {
    var cssPaciente = "paciente";
    if (isNaN(imc)) {
        cssPaciente = "paciente-invalido";
    }
    //Retorno indefinido para os pacientes com o IMC valido
    return cssPaciente;
}
function validaPeso(peso) {
    if (peso <= 0 || peso >= 1000) {
        return false;
    } else {
        return true;
    }
}
function validaAltura(altura) {
    if (altura <= 0 || altura >= 3.00) {
        return false;
    } else {
        return true;
    }
}