    var botaoAdicionar = document.querySelector("#adicionar-estudante");
    botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
      
    var estudante = obtemInfoForm(form);

    var estudanteTr = montaTr(estudante);

    var erros = validadeNotas(estudante);
       
    if (erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-estudantes");

    tabela.appendChild(estudanteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

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


function validadeNotas(estudante){

    var erros = [];

    if(estudante.nome.length == 00){
        erros.push("Nome inválido")
    }
    if(estudante.notaUm.length == 0){
        erros.push("A Primeira nota deve ser preenchida")
    }
    if(estudante.notaDois.length == 0){
        erros.push("A Segunda nota deve ser preenchida")
    }
    if(estudante.notaTres.length == 0){
        erros.push("A Terceira nota deve ser preenchida")
    }
    if(!validaNotas(estudante.notaUm)){
        erros.push("Primeira nota inválida");
    }
    if(!validaNotas(estudante.notaDois)){
        erros.push("Segunda nota inválida");
    }
    if(!validaNotas(estudante.notaTres)){
        erros.push("Terceira nota inválida");
    }

    return erros

}
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
