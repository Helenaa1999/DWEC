class avion{
    constructor(modelo, compañia, combustible, numKilometros){
        this.modelo=modelo;
        this.compañia=compañia;
        this.combustible=combustible;
        this.numKilometros=numKilometros;
    }
    get getModelo(){
        return this.modelo;
    }
    set setModelo(modelo){
        this.modelo=modelo;
    }
    get getCompañia(){
        return this.compañia;
    }
    set setCompañia(compañia){
        this.compañia=compañia;
    }
    get getCombustible(){
        return this.combustible;
    }
    set setCombustible(combustible){
        this.combustible=combustible;
    }
    get getNumKilometros(){
        return this.numKilometros;
    }
    set setNumKilometros(numKilometros){
        this.numKilometros=numKilometros;
    }    
}

class aeropuerto{
    constructor(nombre, ciudad, numTerminales, numTiendas){
        this.nombre=nombre;
        this.ciudad=ciudad;
        this.numTerminales=numTerminales;
        this.numTiendas=numTiendas;
    }
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }
    get getCiudad(){
        return this.ciudad;
    }
    set setCiudad(ciudad){
        this.ciudad=ciudad;
    }
    get getNumTerminales(){
        return this.numTerminales;
    }
    set setNumKilometros(numKilometros){
        this.setNumKilometros=numKilometros;
    }
    get getNumTiendas(){
        return this.numTiendas;
    }
    set setNumTiendas(numTiendas){
        this.numTiendas=numTiendas;
    }
}

class itinerario{
    constructor(origen, destino, numKilometros){
        this.origen=origen;
        this.destino=destino;
        this.numKilometros=numKilometros;
    }
    get getOrigen(){
        return this.origen;
    }
    set setOrigen(origen){
        this.origen=origen;
    }
    get getDestino(){
        return this.destino;
    }
    set setDestino(destino){
        this.destino=destino;
    }
    get numKilometros(){
        return this.numKilometros;
    }
    set setNumKilometros(numKilometros){
        this.numKilometros=numKilometros;
    }
}