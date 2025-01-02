import Entidad from "./Entidad.js";
import Departamento from "./Departamento.js";
import Empleado from "./Empleado.js";
import Oficina from "./Oficina.js";

export default class MinisterioHacienda{
    constructor(){
        this.entidades =[];
        this.entidadesUpdate=[];
        this.counter=1;
    }

    crearEntidades(tipo, nombre, atributo1, atributo2){
        let entidad;
        const id= this.counter++;
        if(tipo == "Departamento"){
            entidad = new Departamento (id, nombre, atributo1);
        }
        else if(tipo == "Empleado"){
            entidad = new Empleado(id, nombre, atributo1, atributo2);
        }
        else if (tipo == "Oficina"){
            entidad = new Oficina (id, nombre, atributo1)
        }
        else{
            throw new Error("Valor no disponible")
        }
        this.entidades.push(entidad);
        return entidad;
    }

    listarEntidades(){
        this.entidades.map(entidad => entidad.mostrarDetalle());
    }

    buscarID(id){
        return this.entidades.find(entidad => entidad.id == id);
    }

    actualizarEntidad(id, nuevosDatos){
        let nuevaEntidad=this.buscarID(id);
        if (!nuevaEntidad) throw new Error ("Entidad no encontrada.");
        this.entidades.forEach(e => {
            if(e.id !== id){
                this.entidadesUpdate.push(e)
            }
        });
        this.entidadesUpdate.push(nuevosDatos);
        this.entidades=this.entidadesUpdate;
    }
}