
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");

    //antes de executar o comando de remover, espere os 500ms
    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);

});