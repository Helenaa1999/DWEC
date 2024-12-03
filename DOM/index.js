//Función para cambiar el contenido de x elemento
function cambiarCabecera(){
    let listaCabeceras=document.getElementsByTagName('h2');
    for(let i=0; i<listaCabeceras_length; i++){
        listaCabeceras[i].innerHTML="Nueva cabecera";
    }
}

//Función para acceder a todos los elementos que tienen asociada una clase
function cambiarElementosClases(){
    let listaElementos =document.getElementsByClassName('verde');
    for(let i=0; i<listaElementos.length; i++){
        listaElementos[i].innerHTML="Verde";
    }
}

//Podemos eliminar un nodo
function borrarHijo(){
    let nodoHijo=document.getElementById("id_hijo");
    nodoHijo.remove();
}

//Si usamos .textContent=' ', eliminamos todo el contenido de un nodo


