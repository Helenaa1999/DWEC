import Vehiculo from "./Vehiculo.js";
import { VehiculoElectrico } from "./VehiculoElectrico.js";
import Estacionamiento from "./Estacionamiento.js";

let gestorEstacionamiento = new Estacionamiento();
let vehiculo1 = new Vehiculo("Volkswaguen", "Polo", 2015);
gestorEstacionamiento.agregarVehiculo(vehiculo1);
let vehiculo2 = new Vehiculo("Ford", "Fiesta", 2018);
gestorEstacionamiento.agregarVehiculo(vehiculo2);
let vehiculoElectrico1=new VehiculoElectrico("Mini", "Cooper", 2020, 100);
gestorEstacionamiento.agregarVehiculo(vehiculoElectrico1);
let vehiculoElectrico2 = new VehiculoElectrico("Hyndai", "i35", 2018, 300);
gestorEstacionamiento.agregarVehiculo(vehiculoElectrico2);
gestorEstacionamiento.listarVehiculos();

gestorEstacionamiento.eliminarVehiculo(vehiculo1.id, 1);
gestorEstacionamiento.listarVehiculos();


gestorEstacionamiento.actualizarVehiculo(vehiculo2.id, {marca:"Volkswaguen", modelo:"Golf", anio:2020});
gestorEstacionamiento.listarVehiculos();