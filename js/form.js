var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //Extraindo informações do paciente no formulário
    var objPaciente = obtemPacienteDoFormulario(form);

    var erros = validaDados(objPaciente);

    var ulErros = document.querySelector("#listaErrosUl");

    ulErros.innerHTML = "";

    if (erros.length == 0) { 

        adicionaPacienteNaTabela(objPaciente);
    

        form.reset();
    } else {
        exibeMensagensDeErro(erros, ulErros);
    }
});

function obtemPacienteDoFormulario(form) {
    var objPaciente = {
        //capturando os valores dos input's
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return objPaciente;
}

function montaTr(objPaciente) {

    //criando uma linha para table
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //criando as td da linha da table
    var nomeTd = montaTd(objPaciente.nome, "info-nome");
    var pesoTd = montaTd(objPaciente.peso, "info-peso");
    var alturaTd = montaTd(objPaciente.altura, "info-altura");
    var gorduraTd = montaTd(objPaciente.gordura, "info-gordura");
    var imcTd = montaTd(objPaciente.imc, "info-imc");

    //código que quero reduzir

    //criando as td da linha da table
    /* var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td"); */

    //preenchendo os valores de texto nas Td's 
    /*  nomeTd.textContent = objPaciente.nome;
     pesoTd.textContent = objPaciente.peso;
     alturaTd.textContent = objPaciente.altura;
     gorduraTd.textContent = objPaciente.gordura;
     imcTd.textContent = objPaciente.imc; */

    //adicionando as classes nas Td's
    /* nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc"); */


    //atribuindo as Td's a TR paciente
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //calculando IMC dos novos itens adicionado no formulário
    pacienteTr.classList.add(validaPaciente(objPaciente.imc));
    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}


function validaDados(paciente) {

    var listaErros = [];

    if (paciente.nome == "") {
        listaErros.push("Nome não pode ser em branco!");
    }
    if (paciente.peso == "") {
        listaErros.push("Peso não pode ser em branco!");
    } else if (!validaPeso(paciente.peso)) {
        listaErros.push("Peso inválido");
    }

    if (paciente.altura == "") {
        listaErros.push("Altura não pode ser em branco!");
    } else if (!validaAltura(paciente.altura)) {
        listaErros.push("Altura inválido");
    }

    if (paciente.gordura == "") {
        listaErros.push("Gordura não pode ser em branco!");
    }
    return listaErros;
}

function exibeMensagensDeErro(erros, ulErros) {
    erros.forEach(function (i){
        var li = document.createElement("li");
        li.textContent = i;
        ulErros.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}