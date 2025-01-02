import Producto from "./Producto.js"

export default class Libros extends Producto{
    constructor(nombre, precio, cantidad, autor, anioPublicacion){
        super(nombre, precio, cantidad);
        this.autor=autor;
        this.anioPublicacion=anioPublicacion;
    }
    mostrarDetalle(){
        return `${super.mostrarDetalle()}, Autor/a: ${this.autor}, Año de publicación: ${this.anioPublicacion}`;
    }
}