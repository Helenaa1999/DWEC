import Entidad from "./Entidad.js";

export default class Oficina extends Entidad{
    constructor(id, nombre, ubicacion){
        super(id, nombre);
        this.ubicacion=ubicacion;
    }
    mostrarDetalle(){
        return `${super.mostrarDetalle}, ubicación: ${this.ubicacions}`;
    }
}