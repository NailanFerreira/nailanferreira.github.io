function somenteNumero(teclaPrecionada){
    var tecla;

    if(teclaPrecionada.which){
        tecla = teclaPrecionada.which
    }
    else{
        tecla = teclaPrecionada.keyCode;
    }

    if((tecla == 08) || (tecla == 190) || (tecla == 188 || (tecla >= 48 && tecla <= 57))){
        //console.log(tecla);
        return true;
    }
    else{
        //console.log(tecla);
        return false;
    }
}
