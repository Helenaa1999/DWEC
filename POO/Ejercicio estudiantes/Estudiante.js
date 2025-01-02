// Sistema de Gestión de Estudiantes
// Crea un sistema que gestione un grupo de estudiantes. Debes implementar una clase Estudiante que contenga las siguientes propiedades y métodos:

// Clase: Estudiante
// Propiedades:

// nombre (String): El nombre del estudiante.
// nota (Número): La nota final del estudiante.
// Métodos:

// obtenerEstado(): Este método debe retornar "Aprobado" si la nota es mayor o igual a 6, y "Reprobado" en caso contrario.
// Funcionalidad
// Crea un arreglo de objetos Estudiante con al menos 5 estudiantes, cada uno con un nombre y una nota.
// Utiliza un bucle for para recorrer el arreglo y mostrar en la consola el nombre de cada estudiante y su estado (Aprobado/Reprobado) utilizando el método obtenerEstado().
// Además, al final del recorrido, muestra en la consola cuántos estudiantes aprobaron y cuántos reprobaron.


export default class Estudiante{
    constructor(nombre, nota){
        this.nombre=nombre;
        this.nota=nota;
    }

    obtenerEstado(nota){
        /*if(nota>=6){
            return "Aprobado";
        }
        else{
            return "Reprobado";
        }*/
        return nota>=6 ? "Aprobado" : "Reprobado";
    }

    mostrarDetalle(){
        return `Nombre: ${this.nombre}, Estado nota: ${this.obtenerEstado(this.nota)}`;
    }
}