import { Empleado } from "./Empleado";

export class Tripulante extends Empleado{
    constructor(nombre, posicion, vueloAsignado, certificacion){
        super(nombre, posicion, vueloAsignado);
        this.certificacion=certificacion;
    }
}