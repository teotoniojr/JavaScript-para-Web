var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value)
    var estudantes = document.querySelectorAll(".estudantes");

    if(this.value.length > 0 ){
        for( var i = 0; i < estudantes.length ; i++){
            var estudante = estudantes[i];
            var tdNome = estudante.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            
            if(!expressao.test(nome)){
                estudante.classList.add("invisivel");
            }else{
                estudante.classList.remove("invisivel");
            }
        }

    } else {
        for( var i = 0; i < estudantes.length; i++){
            var estudante = estudantes[i];
            estudante.classList.remove("invisivel")
        }
    }

    
});