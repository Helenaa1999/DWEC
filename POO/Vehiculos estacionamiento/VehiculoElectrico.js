import Vehiculo from "./Vehiculo.js"
export class VehiculoElectrico extends Vehiculo{
    constructor(marca, modelo, anio, capacidadBateria){
        super(marca, modelo, anio);
        this.capacidadBateria=capacidadBateria;
    }
    mostrarDetalle(){
        return `${super.mostrarDetalle()}, Capacidad de la bateria: ${this.capacidadBateria}`;
    }
}