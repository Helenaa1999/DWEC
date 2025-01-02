import Producto from "./Producto.js";

export class Mobiliario extends Producto{
    constructor(nombre, precio, cantidad, material){
        super(nombre, precio, cantidad);
        this.material=material;
    }
    mostrarDetalle(){
        `${super.mostrarDetalle()}, Material: ${this.material}`;
    }
}