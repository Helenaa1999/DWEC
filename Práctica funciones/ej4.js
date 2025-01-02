function crearBarraPregunta(){
    var element;
    element=document.getElementById("selec-operacion").value;
    if(element == "imagen"){
        menuParaImagen();
    }
    else{
        if(element== "tabla"){

        }
        else{
            menunParaCabecera();
        }
    }

}

function introducirImagen(URL){
    var img;
    img= document.body.createElement("img");
    img.src=URL;
    document.body.appendChild(img);
}

function menuParaImagen(){
    var frase;
    var button;
    var input;
    frase= document.createElement("label");
    frase.innerHTML="Introduce la URL de la imagen que desees adjuntar: "
    document.body.appendChild(frase)
    input=document.createElement("input");
    input.type="text";
    document.body.appendChild(input);
    button=document.createElement("input");
    button.type="button";
    button.value="Añadir imagen";
    button.innerHTML= `<input onclick="introducirImagen(input);">`;
    document.body.appendChild(button);
}

function introducirCabecera(texto){
    var elemento;
    elemento=document.body.createElement("h1");
    elemento.innerHTML=texto;
    document.body.appendChild(elemento);
}

function menunParaCabecera(){
    var frase;
    var input
    var button;
    frase= document.createElement("label");
    frase.innerHTML= "Introduce el texto que deseas introducir como cabecera: "
    document.body.appendChild(frase);
    input=document.createElement("input");
    input.type="text";
    document.body.appendChild(input);
    button=document.createElement("input");
    button.type="button";
    button.value="Añadir cabecera";
    button.innerHTML=`<input onclick="introducirCabecera(input);">`;
    document.body.appendChild(button);
}

