import MinisterioHacienda from "./MinisterioHacienda.js";

const ministerioHacienda = new MinisterioHacienda();

ministerioHacienda.crearEntidades("Oficina", "Oficina central", "Madrid");
ministerioHacienda.crearEntidades("Departamento", "Recursos humanos", 20000);
ministerioHacienda.crearEntidades("Empleado", "María", "jefa", "100000");

console.log(ministerioHacienda.listarEntidades());

console.log(ministerioHacienda.buscarID(2));

ministerioHacienda.actualizarEntidad(2, {nombre: "Comercio", atributo1: 3000});
console.log(ministerioHacienda.listarEntidades());