let temperatura = 0;
let escala;
let resultado;


function converter(){

    //PEGAR TEMPERATURA
    temperatura= parseInt(document.querySelector('#txttemperatura').value);

    //PEGAR ESCALA
    escala = document.querySelector('#slcEscala').value;

    //TESTAR A ESCALA
    if (escala == 'celsius') {
        //CALCULO DE CONVERSÃO
        resultado =(temperatura -32) / 1.8;
        document.querySelector('#resultado').innerHTML = resultado;
    }

    //TESTAR A ESCALA
    if (escala == 'fahrenheit') {
        //CALCULO DE CONVERSÃO
        resultado = temperatura * 1.8 + 32;
        document.querySelector('#resultado').innerHTML = resultado;
    }


    }
    