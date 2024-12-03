function mostrarImagen(){
    let infoUsu=null;
    let img;

    infoUsu=document.getElementById("texto").value;
    let numMaquina;
    if(isNaN(infoUsu)){
        infoUsu=convertirString(infoUsu);
        console.log(infoUsu);
    }
    img=document.createElement("img");
    switch(infoUsu){
        case "1":
            img.src="./img/1.png";
            break;
        case "2":
            img.src="./img/2.png";
            break;
        case "3":
            img.src="./img/3.png";
            break;
        case "4": 
            img.src="./img/4.png";
            break;
        case "5": 
            img.src="./img/5.png";
            break;
        case "6":
            img.src="./img/6.png";
            break;
        default: 
            alert("Respuesta no válida. Solo del 1 al 6.");
            break;
    }
    document.body.appendChild(img)
}

function convertirString(numEscrito){
    let numConvertido;
    switch(numEscrito){
        case "uno":
            numConvertido="1";
            break;
        case "dos": 
            numConvertido="2";
            break;
        case "tres":
            numConvertido="3";
            break;
        case "cuatro":
            numConvertido="4";
            break;
        case "cinco":
            numConvertido="5";
            break;
        case "seis":
            numConvertido="6";
            break;
        default:
            break;
    }
    return numConvertido;
}