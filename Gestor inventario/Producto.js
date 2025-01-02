
export default class Producto{
    static contador=1;
    constructor(nombre, precio, cantidad){
        this.id=Producto.contador++;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
    }

    actualizarCantidad(nuevaCantidad){
        this.cantidad=nuevaCantidad;
    }

    mostrarDetalle(){
        return `Id: ${this.id}, Nombre: ${this.nombre}, Precio: ${this.precio}, Cantidad: ${this.cantidad}`;
    }
}