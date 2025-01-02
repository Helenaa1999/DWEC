import { pasajero } from "Pasajero.js";
export class Vuelo{
    constructor(numeroVuelo, origen, destino, horaSalida){
        this.numeroVuelo=numeroVuelo;
        this.origen=origen;
        this.destino=destino;
        this.horaSalida=horaSalida;
        this.pasajeros=[]; /*No lo ponemos en el constructor porque voy a pedir los pasajeros. Mi función lo va a pedir uno a uno. Si lo hacemos, 
        lo va a tener que introducir alguien y no queremos eso*/
    }

    agregarPasajero(pasajero){
        this.pasajeros.push(pasajero);
        var pasajero = new Pasajero();
        pasajero.vueloAsignado = this.numeroVuelo;
    }

    eliminarPasajero(pasajero){
        this.pasajeros=this.pasajeros.filter(pasajero=>pasajero.dni !== dni); /*para eliminar los duplicados. Genera una lista con los dni que no se repiten
                                                                con filter hace un forEach*/
    }
}