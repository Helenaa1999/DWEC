export default class Mascota{
    constructor(tipo, fechaNacimiento, lugarNacimiento){
        this.tipo=tipo;
        this.fechaNacimiento=fechaNacimiento;
        this.lugarNacimiento=lugarNacimiento;
    }
    mostrarDetalle(){
        return `Tipo: ${this.tipo}, Fecha nacimiento: ${this.fechaNacimiento}, Lugar de nacimiento: ${this.lugarNacimiento}`
    }

}