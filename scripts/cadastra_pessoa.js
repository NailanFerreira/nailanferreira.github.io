var cadastraPessoa = document.getElementById("cadastra-pessoa");

cadastraPessoa.addEventListener("click", function (event) {

    event.preventDefault();

    var nome = document.getElementById("in-nome");
    var peso = document.getElementById("in-peso");
    var altura = document.getElementById("in-altura");

    var novaTr = '<tr class="pessoa">' +
        '<td class="nome">' + nome.value + '</td>' +
        '<td class="peso">' + peso.value + '</td>' +
        '<td class="altura">' + altura.value + '</td>' +
        '<td class="imc-result"></td>' +
        '</tr>'

    var table = document.getElementsByClassName("info-table")[0];
    table.innerHTML = table.innerHTML + novaTr;

    nome.value = '';
    peso.value = '';
    altura.value = '';
})
