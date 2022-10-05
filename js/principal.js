var titulo = document.querySelector(".titulo")
titulo.textContent = "Professor Teotonio"

var estudantes = document.querySelectorAll(".estudantes")

for (var i = 0; i < estudantes.length ; i++ ){

    var estudanteUm = estudantes[i]

    var primeiraNota = parseFloat(estudanteUm.querySelector(".primeira-nota").textContent);
    var segundaNota = parseFloat(estudanteUm.querySelector(".segunda-nota").textContent);
    var terceiraNota = parseFloat(estudanteUm.querySelector(".terceira-nota").textContent);
    var tdMedia = estudanteUm.querySelector(".media");
    var tdFaltam = estudanteUm.querySelector(".faltam");

    var somatoria = primeiraNota + segundaNota + terceiraNota;
    
    verificaNotas();
}



function verificaNotas () {

     
    if (primeiraNota <= -1 || primeiraNota >= 101 ){
        tdMedia.textContent = "Nota inválida";
        tdFaltam.textContent = "Nota inválida";
    }  else if (segundaNota <= -1 || segundaNota >= 101 ) {
        tdMedia.textContent = "Nota inválida";
        tdFaltam.textContent = "Nota inválida";
     } else if (terceiraNota <= -1 || terceiraNota >= 101 ) {
        tdMedia.textContent = "Nota inválida";
        tdFaltam.textContent = "Nota inválida";
      } else {
        var media = calculaMedia(somatoria);
        var faltam = calculaFalta(somatoria);
        tdMedia.textContent = media;
        tdFaltam.textContent = faltam + " pontos";
    }
}

function calculaMedia (somatoria) {
    var media = somatoria/3;
    return media.toFixed(0)
}
function calculaFalta (somatoria) {
    var faltam = 180 - somatoria
    return faltam
}

