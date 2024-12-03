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
    let arrayBicis= new Array();
    let biciAux=null;

    let bicicleta= new Bici("rojo", 2020, "shiudhsiouh", "https://www.svgrepo.com/show/535249/car.svg");
    let bicicleta2= new Bici("verde", 2004, "puiohdaios", "https://www.svgrepo.com/show/520611/car-side.svg");

    arrayBicis.push(bicicleta);
    arrayBicis.push(bicicleta2);

    biciAux=arrayBicis.pop();
    mostrarBicicleta(biciAux);

    biciAux=arrayBicis.pop();
    mostrarBicicleta(biciAux);
}

function mostrarBicicletaLog(bici){
    console.log(bici.mostraeInfo());
}