/*Requisitos del Proyecto:

Clases y Herencia:
Crea una clase base llamada Libro con las siguientes propiedades:
id (número, único para cada libro).
titulo (cadena).
autor (cadena).
paginas (número).
Implementa una clase derivada llamada LibroDigital, que herede de Libro e incluya una propiedad adicional:
tamanoArchivo (número de MB).
Funciones:
Métodos en las clases:
mostrarDetalles: Muestra los detalles del libro.
actualizarPaginas: Permite actualizar el número de páginas del libro.
Añade un método estático en la clase Libro para generar automáticamente un ID único para cada nuevo libro.
Módulos (Exportar e Importar):
Divide el código en módulos:
Libro.js: Contendrá la definición de la clase Libro.
LibroDigital.js: Contendrá la clase LibroDigital.
GestorBiblioteca.js: Contendrá una clase llamada GestorBiblioteca que administre una lista de libros.
Main.js: Archivo principal para ejecutar la lógica del programa.
Gestor de Biblioteca:
La clase GestorBiblioteca debe incluir métodos para:
agregarLibro: Agregar un libro a la lista.
eliminarLibro: Eliminar un libro por su ID.
actualizarLibro: Actualizar información de un libro existente.
listarLibros: Mostrar todos los libros en la biblioteca.
Main:
El archivo Main.js debe:
Importar las clases desde los módulos.
Crear una instancia de la clase GestorBiblioteca.
Agregar algunos libros de ejemplo (instancias de Libro y LibroDigital).
Mostrar el listado de libros en la consola.
Probar los métodos de agregar, eliminar y actualizar libros.
*/

import Libro from "./Libro.js"
import LibroDigital from "./LibroDigital.js"
import GestorBiblioteca from "./GestorBiblioteca.js";

let gestorBiblioteca = new GestorBiblioteca();
let libro1= new Libro ("Harry Potter", "J.K Rowling", 300);
gestorBiblioteca.agregarLibro(libro1);
let libro2= new Libro("Nada", "Carmen Laforet", 200);
gestorBiblioteca.agregarLibro(libro2);
let libroDigital1 = new LibroDigital ("La amiga estupenda", "Elena Ferrante", 300, 50);
gestorBiblioteca.agregarLibro(libroDigital1);
let libroDigital2= new LibroDigital("Ana de las tejas verdes", "Lucy Maud Montgomery", 250);
gestorBiblioteca.agregarLibro(libroDigital2)
gestorBiblioteca.listarLibros();

gestorBiblioteca.eliminarLibro(libroDigital2.id);
gestorBiblioteca.listarLibros();

gestorBiblioteca.actualizarLibro(libro2.id, {nombre:"Nada", autor: "Carmen Laforet", paginas: 201});
gestorBiblioteca.listarLibros();