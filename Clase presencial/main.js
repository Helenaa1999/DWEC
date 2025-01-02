import MinisterioHacienda from "./MinisterioHacienda.js";

const ministerioHacienda= new MinisterioHacienda(); //instanciar o inicializar una clase

ministerioHacienda.crearEntidad('Oficina', 'Oficina Central', 'San José');
ministerioHacienda.crearEntidad('Empleado', 'Pepe', 'Analista', 5000);
ministerioHacienda.crearEntidad('Departamento', 'Finanzar', 200000);

//listar
console.log(ministerioHacienda.listarEntidades());

//Buscar por Id
console.log(ministerioHacienda.buscarPorId(1));

//Actualizar
ministerioHacienda.actualizarEntidad(2, {nombre: "Pacho Gaus", salario: 80000 });
console.log(ministerioHacienda.listarEntidades());

//Mostrar eliminar