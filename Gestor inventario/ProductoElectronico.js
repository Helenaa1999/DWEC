import Producto from "./Producto.js";

export default class ProductoElectronico extends Producto{
    constructor(nombre, precio, cantidad, garantia){
        super(nombre, precio, cantidad);
        this.garantia=garantia;
    }
    mostrarDetalle(){
        return `${super.mostrarDetalle()}, Garantia: ${this.garantia}`;
    }
}