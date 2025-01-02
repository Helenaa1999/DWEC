export default class Entidad{
    constructor
    (id, nombre){
        this.id=id;
        this.nombre=nombre;
    }
    mostrarDetalle(){
        return `Id: ${this.id}, nombre: ${this.nombre}`;
    }
}