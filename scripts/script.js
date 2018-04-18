
//Formula IMC = peso / (altura * altura)


var peso = 0;
var altura = 0;

//parametros validos tem de ser maior que zero
var parametrosValidos = (altura > 0 && peso > 0);

if(parametrosValidos){
    console.log("PARAMETROS VALIDOS");
}
else{
    if(peso <= 0 && altura <= 0){
        alert("Peso e Altura devem ser maior que 0!");
    }
    else if(peso <= 0){
        alert("Peso deve ser maior que 0!");
    }
    else if(altura <= 0){
        alert("Altura deve ser maior que 0!");
    }
}
