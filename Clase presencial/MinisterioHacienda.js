import Oficinas from "./Oficinas.js";
import Departamento from "./Departamento.js";
import Entidad from "./Entidad.js";
import Empleado from "./Empleado.js";

class MinisterioHacienda {
    constructor(){
        this.entidades =[];
        this.entidadesUpdate=[];
        this.counter=1; //para generar IDs únicos
    }

    crearEntidad (tipo, nombre, atributo1, atributo2){
        let entidad;
        const id= this.counter++; //this.counter.length+1;
        if(tipo === 'Oficina'){
            entidad = new Oficinas(id, nombre, atributo1);

        }else if(tipo === 'Empleado'){
            entidad = new Empleado(id, nombre, atributo1, atributo2);
        }else if (tipo==='Departamento'){
            entidad = new Departamento(id, nombre, atributo1);
        }else{
            throw new Error("Tipo de entidad no válida");
        }
        this.entidades(entidad);
        return entidad;
    }

    listarEntidades(){
        return this.entidades.map(entidad => entidad.mostrarDetalle()).join('\n');
    }

    buscarPorId(id){
        return this.entidades.find(entidad=>entidad.id === id);
    }

    actualizarEntidad(id, nuevosDatos){
        const entidad= this.buscarPorId(id);
        if(!entidad) throw new Error("Entidad no encontrada");
        this.entidades.forEach(e=>{
            if(e.id!== id ){
                this.entidadesUpdate.push(e);
            }
        });
        this.entidadesUpdate.push(nuevosDatos)
        this.entidades=this.entidadesUpdate;
            
        }

    actualizarEntidadDeOtraForma(id, nuevosDatos){
        const entidad = this.buscarPorId(id);
        if(!entidad) throw new Error("Entidad no encontrada");
        this.
    }
    //Tarea crear el método eliminar
}

export default MinisterioHacienda;
