export default class Producto{
    static contadorId=1;
    constructor(nombre, precio, cantidad){
        this.id=Producto.contadorId++;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
    }
    mostrarDetalle(){
        return `Id: ${this.id}, Nombre: ${this.nombre}, Precio: ${this.precio}, Cantidad: ${this.cantidad}`;
    }
    actualizarCantidad(nuevaCantidad){
        this.cantidad=nuevaCantidad;
    }
}