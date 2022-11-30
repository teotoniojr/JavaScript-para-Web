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
    
    var validaPrimeiraNota = validaNotas(primeiraNota);
    var validaSegundaNota = validaNotas(segundaNota);
    var validaTerceiraNota = validaNotas(terceiraNota);

    verificaNotas();
}

function verificaNotas () {
     
    if (!validaPrimeiraNota){
        validaPrimeiraNota = false;
        tdMedia.textContent = "Nota inválida";
        tdFaltam.textContent = "Nota inválida";
    }  else if (!validaSegundaNota) {
        validaSegundaNota = false
        tdMedia.textContent = "Nota inválida";
        tdFaltam.textContent = "Nota inválida";
     } else if (!validaTerceiraNota) {
        validaTerceiraNota = false;
        tdMedia.textContent = "Nota inválida";
        tdFaltam.textContent = "Nota inválida";
      } else {
        var media = calculaMedia(somatoria);
        var faltam = calculaFalta(somatoria);
        tdMedia.textContent = media;
        tdFaltam.textContent = faltam + " pontos";
    }
}

function validaNotas(primeiraNota, segundaNota, terceiraNota){
    if(primeiraNota >= 0 && primeiraNota < 101) {
        return true;
    }else if (segundaNota >= 0 && segundaNota < 101) {
        return true;
        }else if(terceiraNota >= 0 && terceiraNota < 101) {
            return true;
            } else {
                return false;
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

