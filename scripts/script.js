
//Formula IMC = peso / (altura * altura)


var tdPeso = document.getElementsByClassName("peso");
var tdAltura = document.getElementsByClassName("altura");
var tdResultImc = document.getElementsByClassName("imc-result");

var peso;
var altura;
for (var i = 0; i < tdPeso.length; i++) {
    //pega as informações de cada paciente
    var peso = tdPeso[i].textContent;
    var altura = tdAltura[i].textContent;

    //parametros validos tem de ser maior que zero
    var parametrosValidos = (altura > 0 && peso > 0);

    if (parametrosValidos) {
        //calcular e retornar resultado imc
        var imc = peso / (altura * altura);
        tdResultImc[i].textContent = imc.toFixed(2);
    }
    else {
        if (peso <= 0 && altura <= 0) {
            alert("Peso e Altura devem ser maior que 0!");
        }
        else if (peso <= 0) {
            alert("Peso deve ser maior que 0!");
        }
        else if (altura <= 0) {
            alert("Altura deve ser maior que 0!");
        }
    }
}
