import Mascota from "./Mascota.js";

export default class Gato extends Mascota{
    constructor(tipo, fechaNacimiento, lugarNacimiento, raza, esterilizado){
        super(tipo, fechaNacimiento, lugarNacimiento);
        this.raza=raza;
        this.esterilizado=esterilizado;
    }
    mostrarDetalle(){
        return `${super.mostrarDetalle()}, Raza: ${this.raza}, Esterilizado: ${this.esterilizado}`;
    }
}