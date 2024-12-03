function añadirCiudad(){
    let respuestaUsu="";
    let continuarPrograma=true;
    let elementoCreado="";
    let div_destino=document.getElementById("listaCiudades");

    while(continuarPrograma){
        elementoCreado=document.createElement("li");
        elementoCreado.innerHTML=prompt("Escriba la ciudad que desea añadir a la lista. ");
        div_destino.appendChild(elementoCreado);
        respuestaUsu=prompt("¿Desea continuar? Escriba sí o no. ")
        if(respuestaUsu=="si" || respuestaUsu=="sí"){
            continuarPrograma=true;
        }
        else if(respuestaUsu=="no"){
            continuarPrograma=false;
        }
    }
    

}
