const PI = 3.14;

function calcularAreaCircunferencia (radio){
    let area=Math.pow(radio, 2)*PI;
    return area;
}

function calcularLongitud (radio){
    let circunferencia = radio *2*PI;
    return circunferencia;
}

function crearTextarea(){
    let radio= document.getElementById("cajaTexto").value;
    let area= calcularAreaCircunferencia(radio);
    let longitud= calcularLongitud(radio);
    let textArea = document.createElement("textarea");
    textArea.innerHTML= (`El área es: ${area}. La longitud es: ${longitud}`);
    document.body.appendChild(textArea);
}

