import {Avion} from "Avion.js";
import { Empleado, Tripulante } from "./Empleado";
import { Pasajero } from "./pasajero";
import { Vuelo } from "./Vuelo";

class main{
    constructor(){
        this.aviones=[];
        this.pasajeros=[];
        this.vuelos=[];
        this.empleados=[];
    }

    agregarAvion(avion){
        this.aviones.push(avion);
    }

    agregarPasajero(pasajero){
        this.pasajeros.push(pasajero);
    }

    agregarVuelo(vuelo){
        this.vuelos.push(vuelo);
    }

    agregarEmpleado(empleado){
        this.empleados.push(empleado);
    }

    //actualizar avión: matrícula, nuevosDatos. find ->buscar por matrícula. object.assign -> actualizar. if()-> validación
    actualizarAvion(matricula, nuevosDatos){
        const avion = this.aviones.find(av=> av.matricula === matricula);
        if(avion) Object.assign(avion, nuevosDatos); //forma #1
        if(avion){
            Object.assign(avion, nuevosDatos); //#forma 2
        }
    }
    //eliminar un vuelo con filter. Teniendo en cuenta el número de vuelo
    eliminarVuelo(numeroVuelo){
        this.vuelo=vuelo.filter(v=>v.numeroVuelo !== numeroVuelo); //Si va a sacar los iguales, no los mete. Solo mete en la lista a los diferentes. Esto poniendo ===
    }                                                               //Si ponemos !== 
    //método: mostrar informacion
    mostrarInformacion(){
        console.log("Aviones: ", this.aviones);
        console.log("Pasajeros: ", this.pasajeros);
        console.log("Vuelos: ", this.vuelos);
        console.log("Empleados: ", this.empleados);
    }
}

const main=new main();

const avion1= new Avion("LV-ABC", "Boeing 747", 366, "En tierra");
main.agregarAvion(avion1);

const pasajero1=new Pasajero("Juan", "Pérez", "Argentino", "123456");
main.agregarPasajero(pasajero1);

const vuelo1=new Vuelo("AE123", "Buenos Aires", "Madrid", "15:00");
vuelo1.agregarPasajero(pasajero1);
main.agregarVuelo(vuelo1);

const tripulante1= new Tripulante ("María", "Azafata", vuelo1.numeroVuelo, "Certificado de primeros auxilios");
main.agregarEmpleado(tripulante1);

main.mostrarInformacion();