export default class Vehiculo{
    static counter=0;
    constructor(marca, modelo, anio){
        this.id=Vehiculo.counter++;
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
    }

    mostrarDetalle(){
        return `Id: ${this.id}, Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`;
    }

    actualizarModelo(nuevoModelo){
        this.modelo=nuevoModelo;
    }
}