class Bici{
    constructor(color, año, bastidor, imagen){
        this.color=color;
        this.año=año;
        this.bastidor=bastidor;
        this.imagen=imagen;
    }
    get getImagen(){
        return this.imagen;
    }
    get getColor(){
        return this.color;
    }
}


document.addEventListener("DOMContentLoaded", inicio);

function inicio(){
    let bici= new Bici("rojo", 2020, "shiudhsiouh", "https://www.svgrepo.com/show/535249/car.svg");
    mostrarBicicleta(bici);
}

function mostrarBicicleta(bici){
    let cajaDiv =document.getElementById();
    var miImagen =document.createElement("divBicis");
    miImagen.scr=bici.getImagen();
    cajaDiv.appendChild(miImagen);
}