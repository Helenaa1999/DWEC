import Entidad from "./Entidad.js";

export default class Empleado extends Entidad{
    constructor
    (id, nombre, cargo, salario){
        super(id, nombre);
        this.cargo=cargo;
        this.salario=salario;
    }
    mostrarDetalle(){
        return `${super.mostrarDetalle()}, cargo: ${this.cargo}, salario: ${this.salario}`;
    }
}