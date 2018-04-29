//criar objeto pessoa
function criaPessoa(tdNome, tdPeso, tdAltura) {
    var pessoa = {
        nome: tdNome,
        altura: tdAltura,
        peso: tdPeso,

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
    return pessoa;
}