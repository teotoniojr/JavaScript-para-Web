    var botaoAdicionar = document.querySelector("#adicionar-estudante");
    botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    //extraindo informações do estudante do form
    
    var estudante = obtemInfoForm(form);

    var estudanteTr = montaTr(estudante);

    if (!validadeNotaUm(estudante)){
        console.log("não é válido")
        return;
    } else if (!validadeNotaDois(estudante)){
        console.log("não é válido")
        return;
    } else if (!validadeNotaTres(estudante)){
        console.log("não é válido")
        return;
    }

    var tabela = document.querySelector("#tabela-estudantes");

    tabela.appendChild(estudanteTr);

    form.reset();

});

function obtemInfoForm(form){

    var estudante = {
        nome: form.nome.value,
        notaUm: form.notaUm.value,
        notaDois: form.notaDois.value,
        notaTres: form.notaTres.value,
        media: ((parseFloat(form.notaUm.value)) + (parseFloat(form.notaDois.value)) + (parseFloat(form.notaTres.value)))/3,
        faltam: ((parseFloat(form.notaUm.value)) + (parseFloat(form.notaDois.value)) + (parseFloat(form.notaTres.value)) - 180) + " pontos"

    }
    return estudante;
}

function montaTr(estudante){
    var estudanteTr = document.createElement("tr");
    estudanteTr.classList.add("estudantes");    

    estudanteTr.appendChild(montaTd(estudante.nome, "info-nome"));
    estudanteTr.appendChild(montaTd(estudante.notaUm, "primeira-nota"));
    estudanteTr.appendChild(montaTd(estudante.notaDois, "segunda-nota"));
    estudanteTr.appendChild(montaTd(estudante.notaTres, "terceira-nota"));
    estudanteTr.appendChild(montaTd(estudante.media.toFixed(0) , "media"));
    estudanteTr.appendChild(montaTd(estudante.faltam, "faltam"));

    return estudanteTr;
}

function montaTd (dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


function validadeNotaUm(estudante){
    if(validaNotas(estudante.notaUm)){
        return true;
    } else {
        return false;
    }
    
}
function validadeNotaDois(estudante){
    if(validaNotas(estudante.notaDois)){
        return true;
    } else {
        return false;
    }
}
function validadeNotaTres(estudante){
    if(validaNotas(estudante.notaTres)){
        return true;
    } else {
        return false;
    }
}

