import Entidad from "./Entidad.js";
class Empleado extends Entidad{
    constructor(id, nombre, cargo, salario){
        super(id, nombre);
        this.cargo=cargo;
        this.salario=salario;
    }
    mostrarDetalle(){
        return `Empleado [ID: ${this.id}, Nombre ${this.getNombre()}, Cargo: ${this.cargo}, Salario: ${this.salario}]`
    }
}

export default Empleado;
