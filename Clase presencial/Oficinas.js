import Entidad from "./Entidad.js";
export default class Oficinas extends Entidad{
    constructor(id, nombre, ubicacion){
        super(id, nombre);
        this.ubicacion=ubicacion;
    }

    mostrarDetalle(){
        return `Departamento [ID: ${this.id}, Nombre ${this.getNombre()}, Ubicación: ${this.ubicacion}]`
    }
}