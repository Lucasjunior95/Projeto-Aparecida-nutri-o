
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando pacientes");

    // objeto responsável por fazer requisições HTTP
    var xhr = new XMLHttpRequest();

    //testando a conexão através do endereço web
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    //carregar as informações da URL
    xhr.addEventListener("load", function () {

        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            var respostaRequisicao = xhr.responseText;

            var pacientesJSON = JSON.parse(respostaRequisicao);

            pacientesJSON.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });

        }else{
            erroAjax.classList.remove("ocultarLinha");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }


    });

    //realizando a conexão
    xhr.send();
});

