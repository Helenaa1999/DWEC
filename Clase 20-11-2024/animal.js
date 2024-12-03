export class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }

    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }

    hacerSonido(){
        console.log(`${this.nombre} hace un sonido`);
    }
}