import Producto from "./Producto.js";
import ProductoElectronico from "./ProductoElectronico.js";
import GestorInventario from "./GestorInventario.js";

let gestorInventario = new GestorInventario();
let producto1 = new Producto ("Pañuelos", 1.60, 5);
let producto2 = new Producto("Mesa", 200, 10);
gestorInventario.agregarProducto(producto1);
gestorInventario.agregarProducto(producto2);
let productoElectronico1 = new ProductoElectronico("Lámpara", 20, 2, 2);
let productoElectronico2 = new ProductoElectronico("Televisión", 1000, 15, 3);
gestorInventario.agregarProducto(productoElectronico1);
gestorInventario.agregarProducto(productoElectronico2);
gestorInventario.mostrarDetalle();


gestorInventario.actualizarProducto(productoElectronico1.id, {nombre: "Lámpara", precio: 50, cantidad: 5, garantia: 2});
gestorInventario.mostrarDetalle();

gestorInventario.eliminarProducto(producto1.id);
gestorInventario.mostrarDetalle();