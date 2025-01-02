import Entidad from "./Entidad.js";
export default class Departamento extends Entidad{
    constructor(id, nombre, presupuesto){
        super(id, nombre);
        this.presupuesto=presupuesto;
    }

    mostrarDetalle(){
        return `Departamento [ID: ${this.id}, Nombre ${this.getNombre()}, Presupuesto: ${this.presupuesto}]`
    }
}
