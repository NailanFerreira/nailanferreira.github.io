function calculaTodosImcs() {
    //obtem todas as pessoas cadastradas
    var trPessoa = document.getElementsByClassName("pessoa");
    //criar objetivo representativo de cada pessoa
    for (var i = 0; i < trPessoa.length; i++) {

        var tdNome = trPessoa[i].getElementsByClassName("nome")[0];
        var tdPeso = trPessoa[i].getElementsByClassName("peso")[0];
        var tdAltura = trPessoa[i].getElementsByClassName("altura")[0];
        var tdImcResult = trPessoa[i].getElementsByClassName("imc-result")[0];

        var pessoa = criaPessoa(tdNome.textContent,
            tdPeso.textContent,
            tdAltura.textContent);

        //armazena o resultado IMC no campo imc-result na tabela
        var imc = pessoa.calculaImc();
        tdImcResult.textContent = imc.toFixed(2);


    }
}

var imc = document.getElementById("calcula-imc");
imc.addEventListener("click", calculaTodosImc;

