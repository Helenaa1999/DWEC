import{Animal} from './animal.js';
export class Perro extends Animal{
    constructor(nombre, raza){
        super(nombre);
        this.raza=raza;
    }
    get getRaza(){
        return this.raza;
    }
    set setRaza(raza){
        this.raza=raza;
    }

    hacerSonido(){
        console.log(`${this.nombre} hace un ladrido`);
    }
}