import Producto from "./Producto.js";
import ProductoElectronico from "./ProductoElectronico.js";
import GestorInventario from "./GestorInventario.js";
import Alimento from "./Alimento.js";
import { Mobiliario } from "./Mobiliario.js";
import Libros from "./Libros.js";

const gestorInventario=new GestorInventario(); //esto se llama instanciar una clase o inicializar una clase
const producto1=new Producto("cuadro", 10000, 10);
const producto2= new Producto("Silla", 50000, 5);

const productoElectronico1= new ProductoElectronico("Laptop", 100000, 2, 12);
const productoElectronico2 = new ProductoElectronico("Móvil", 5000000, 5, 6);

const alimento1 = new Alimento("Fideos", 4, 1000, 10/12/2030);
const alimento2= new Alimento("Arroz", 2, 2000, 4/10/2027);

const mobiliario1 = new Mobiliario("Estanteria", 1000, 10, "Madera de pino");
const mobiliario2 = new Mobiliario("Silla comedor", 450, 5, "Aluminio");

const libro1 = new Libros("La mujer de Frankestein", 20, 100, "Almudena Grandes", 2020);
const libro2= new Libros("Nada", 15, 5, "Carmen Laforet", 1999);

gestorInventario.agregarProducto(producto1);
gestorInventario.agregarProducto(producto2);
gestorInventario.agregarProducto(productoElectronico1);
gestorInventario.agregarProducto(productoElectronico2);
gestorInventario.agregarProducto(alimento1);
gestorInventario.agregarProducto(alimento2);
gestorInventario.agregarProducto(mobiliario1);
gestorInventario.agregarProducto(mobiliario2);
gestorInventario.agregarProducto(libro1);
gestorInventario.agregarProducto(libro2);

console.log("Lista de productos");
gestorInventario.mostrarProductos();

console.log("Eliminar producto por id");
gestorInventario.eliminarProducto(producto2.id);
console.log("Has eliminado el producto con id: " + producto2.id);
gestorInventario.mostrarProductos();

console.log("Actualizar productos por id: ");
gestorInventario.actualizarProductos(productoElectronico1.id, {nombre: "Laptop", precio:200000, cantidad:4, garantia:12});
gestorInventario.mostrarProductos();