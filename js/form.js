    var botaoAdicionar = document.querySelector("#adicionar-estudante");
    botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    obtemEstudanteDoFormulario(form)
    
    
    var estudanteTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td")
    var notaUmTd = document.createElement("td")
    var notaDoisTd = document.createElement("td")
    var notaTresTd = document.createElement("td")
    var mediaTd = document.createElement("td")
    var faltamTd = document.createElement("td")
    
    nomeTd.textContent = nome;
    notaUmTd.textContent = notaUm;
    notaDoisTd.textContent = notaDois;
    notaTresTd.textContent = notaTres;
    mediaTd.textContent = calculaMedia(somatoria);
    faltamTd.textContent = calculaFalta(somatoria);

    estudanteTr.appendChild(nomeTd);
    estudanteTr.appendChild(notaUmTd);
    estudanteTr.appendChild(notaDoisTd);
    estudanteTr.appendChild(notaTresTd);
    estudanteTr.appendChild(mediaTd);
    estudanteTr.appendChild(faltamTd);

    var tabela = document.querySelector("#tabela-estudantes");

    tabela.appendChild(estudanteTr);

}

function obtemEstudanteDoFormulario (form){
    var nome = form.nome.value;
    var notaUm = form.notaUm.value;
    var notaDois = form.notaDois.value;
    var notaTres = form.notaTres.value;
    var somatoria = parseFloat(notaUm) + parseFloat(notaDois) + parseFloat(notaTres);
}