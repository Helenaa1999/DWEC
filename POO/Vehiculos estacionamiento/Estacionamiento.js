export default class Estacionamiento{
    constructor(){
        this.gestorEstacionamiento=[];
    }

    agregarVehiculo(vehiculo){
        this.gestorEstacionamiento.push(vehiculo);
    }

    eliminarVehiculo(id){
        let index=0;
        index=this.gestorEstacionamiento.findIndex(vehiculo=>vehiculo.id==id);
        this.gestorEstacionamiento.splice(index, 1);
    }

    listarVehiculos(){
        this.gestorEstacionamiento.forEach(vehiculo=>console.log(vehiculo.mostrarDetalle()));
    }

    actualizarVehiculo(id, nuevoVehiculo){
        let vehiculo= this.gestorEstacionamiento.find(vehiculo=>vehiculo.id==id);
        if(vehiculo){
            vehiculo.marca=nuevoVehiculo.marca;
            vehiculo.modelo=nuevoVehiculo.modelo;
            vehiculo.anio=nuevoVehiculo.anio;
            vehiculo.capacidadBateria=vehiculo.capacidadBateria;
        }
        this.gestorEstacionamiento.filter(vehiculo=>vehiculo.id!=vehiculo);
    }
}
