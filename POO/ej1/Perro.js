import Mascota from "./Mascota.js";

export default class Perro extends Mascota {
    constructor(tipo, fechaNacimiento, lugarNacimiento, raza, adiestrado){
        super(tipo, fechaNacimiento, lugarNacimiento);
        this.raza=raza;
        this.adiestrado=adiestrado;
    }
    mostrarDetalle(){
        return `${super.mostrarDetalle()}, Raza: ${this.raza}, Adiestrado ${this.adiestrado}`;
    }
}