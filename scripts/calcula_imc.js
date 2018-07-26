function calculaTodosImcs() {
    //Obtem todas as pessoas cadastradas
    var trPessoa = document.getElementsByClassName("pessoa");
    //Criar objetivo representativo de cada pessoa
    for (var i = 0; i < trPessoa.length; i++) {

        var tdNome = trPessoa[i].getElementsByClassName("nome")[0];
        var tdPeso = trPessoa[i].getElementsByClassName("peso")[0];
        var tdAltura = trPessoa[i].getElementsByClassName("altura")[0];
        var tdImcResult = trPessoa[i].getElementsByClassName("imc-result")[0];
        var tdImcSituacao = trPessoa[i].getElementsByClassName("imc-situacao")[0];

        var pessoa = criaPessoa(tdNome.textContent,
            tdPeso.textContent,
            tdAltura.textContent);

        //Armazena o resultado IMC no campo imc-result na tabela
        var imc = pessoa.calculaImc();
        console.log(typeof(imc))
        tdImcResult.textContent = imc.toFixed(2);
        
        //Armazena a situação da Pessoa no campo tdImcSituacao 
        var situacaoPessoa = pessoa.calculaSituacao(imc);
        tdImcSituacao.textContent = situacaoPessoa;
    }

}

//function calculaSituacao(resultImc)


var imc = document.getElementById("calcula-imc");
imc.addEventListener("click", calculaTodosImcs);

/* testando eventos futuros
var todasTr = document.getElementsByTagName("tr");
for(var i = 0; i < todasTr.length; i++){
    todasTr[i].addEventListener("click", function(){
        this.setAttribute("bgcolor", "grey");
    })
}
*/

