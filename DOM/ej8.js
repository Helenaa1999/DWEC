
function crearTabla(){
    var div_destino=null;
    var listaItems=null;
    let listaCiudades=null;
    var tabla=null;
    var fila=null;
    var celda=null;

    div_destino= document.getElementById("derecha");
    tabla=document.createElement("table");

    listaCiudades=document.getElementById("listaCiudades");
    listaItems = listaCiudades.getElementsByTagName("li");


    for(i=0; i<listaItems.length;i++){
        fila=tabla.insertRow(0);
        celda=fila.insercell(0);
        celda.innerHTML=listaItems[i].innerHTML;        
    }

    div_destino.appendChild(tabla);
}

