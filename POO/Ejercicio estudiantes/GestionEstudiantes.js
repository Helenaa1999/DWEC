import Estudiante from "./Estudiante.js"

export default class GestionEstudiante{
    constructor(){
        this.estudiantes=[];
    }

    anadirEstudiante(estudiante){
        this.estudiantes.push(estudiante);
    }

    mostrarEstudiantes(){
        this.estudiantes.forEach(estudiante => console.log(estudiante.mostrarDetalle()));
    }

    contarAprobados(){
        let arrayAprobados
        let numAprobados;
        let arrayReprobados;
        let numReprobados;
        arrayAprobados=this.estudiantes.filter(estudiante=>estudiante.obtenerEstado(estudiante.nota) == "Aprobado");
        numAprobados= arrayAprobados.length;
        arrayReprobados=this.estudiantes.filter(estudiante=>estudiante.obtenerEstado(estudiante.nota) == "Reprobado");
        numReprobados=arrayReprobados.length;
        return console.log(`Número de aprobados: ${numAprobados}, Número de reprobados: ${numReprobados}`)
    }
}