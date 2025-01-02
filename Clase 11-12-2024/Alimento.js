import Producto from "./Producto.js";

export default class Alimento extends Producto{
    constructor(nombre, precio, cantidad, caducidad){
        super(nombre, precio, cantidad);
        this.caducidad=caducidad;
    }
    mostrarDetalle(){
        return `${super.mostrarDetalle()}, Caducidad: ${this.caducidad}` ;
    }
}