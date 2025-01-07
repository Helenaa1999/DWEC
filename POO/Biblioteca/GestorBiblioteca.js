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

export default class GestorBiblioteca{
    constructor(){
        this.listadoLibros=[];
    }
    
    agregarLibro(libro){
        this.listadoLibros.push(libro);
    }
    
    eliminarLibro(id){
        this.listadoLibros.indexOf(libro =>libro.id == id);
        this.listadoLibros.splice(id, 1);
    }
    
    actualizarLibro(id, nuevoLibro){
        let libro= this.listadoLibros.find(libro=>libro.id==id);
        if(libro){
            libro.titulo=nuevoLibro.titulo;
            libro.autor=nuevoLibro.autor;
            libro.paginas=nuevoLibro.paginas;
            libro.tamanoArchivo=nuevoLibro.tamanoArchivo;
            this.agregarLibro(nuevoLibro);
            this.listadoLibros.filter(libro=>libro.id!=id);
        }
        
    }

    listarLibros(){
        this.listadoLibros.forEach(libro=>console.log(libro.mostrarDetalle()));
    }
}