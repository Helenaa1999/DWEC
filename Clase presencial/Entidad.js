export default class Entidad{
    constructor(id, nombre){
        this.id=id;
        this.nombre=nombre;
    }

    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        if(!nombre) throw new Error ("El nombre no está escrito");
        this.nombre=nombre;
    }

    mostrarDetalle(){
        return `Entidad [ID: ${this.id}, Nombre: ${this.nombre}]`;
    }
    
}