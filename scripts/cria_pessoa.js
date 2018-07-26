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
        },

        calculaSituacao: function (imcResult) {
            
            if (imcResult < 18.5){
                return "Abaixo do Peso";
            }else if (imcResult >= 18.5 && imcResult < 25){
                return "Normal";
            }else if (imcResult >= 25 && imcResult < 30){
                return "Excesso de Peso";
            }else if (imcResult >= 30 && imcResult < 40){
                return "Obeso";
            }else if (imcResult >= 40){
                return "Obeso Mórbido";
            }
        }

        
    }
    return pessoa;
}