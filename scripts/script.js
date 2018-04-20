//pegando quantidade de pessoas cadastradas
var listaPessoas = document.getElementsByClassName("pessoa");

//lendo informações "peso e altura" de cada pessoa cadastrada
var tdPeso = document.getElementsByClassName("peso");
var tdAltura = document.getElementsByClassName("altura");
var tdResultImc = document.getElementsByClassName("imc-result");

for (var i = 0; i < listaPessoas.length; i++) {
    //cria objeto pessoaAtual
    var pessoaAtual = {
        peso: tdPeso[i].textContent,
        altura: tdAltura[i].textContent,
        calculaImc: function () {
            //parametros validos tem de ser maior que zero
            var parametrosValidos = (this.altura > 0 && this.peso > 0);

            if (parametrosValidos) {
                //calcular e retornar resultado imc
                return (this.peso / (this.altura * this.altura));
            }
            else {
                alert("As informaçõs PESO e ALTURA devem ser maiores que 0!");
                return false;
            }
        }
    }
    var imc = pessoaAtual.calculaImc();

    //armazenando resultado na tabela
    tdResultImc[i].textContent = imc.toFixed(2);
}
