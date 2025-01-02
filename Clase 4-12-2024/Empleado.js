export class Empleado{
    constructor(nombre, posicion, vueloAsignado=null){
        this.nombre=nombre;
        this.posicion=posicion; //piloto, copiloto, azafata, etc.
        this.vueloAsignado=vueloAsignado;

    }
}