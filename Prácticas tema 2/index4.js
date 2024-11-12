/*
Objetivo: El objetivo de esta práctica es crear un programa de gestión de tareas para ayudar a un valiente aventurero a organizar y seguir el progreso de sus emocionantes 
misiones en un mundo lleno de peligros y desafíos.

Descripción: Nuestro valiente aventurero se embarca en innumerables misiones en su búsqueda de tesoros y la derrota de malvados villanos. Sin embargo, 
necesita una forma de llevar un registro de sus tareas pendientes y completadas. En esta práctica, se te pide crear un programa que le permita al aventurero
agregar, eliminar, mostrar y marcar como completadas las tareas relacionadas con sus misiones.

Requisitos:
	
	-El programa no debe lanzar ninguna excepción. Haz las comprobaciones necesarias de todos los datos.

	-El programa debe incluir un array llamado tareas que almacenará las tareas del aventurero. Cada tarea será representada 
    por un objeto que incluirá propiedades como 'id', 'nombre', 'descripcion', 'fecha' y 'completada'.

	-El programa debe proporcionar una función agregarTarea que permita al aventurero agregar nuevas tareas a su lista. Esta función debe 
    solicitar al aventurero que ingrese el 'nombre' de la nueva tarea, una breve descripción y la fecha límite de la tarea. Luego, debe crear 
    un objeto de tarea con las propiedades correspondientes y agregarlo al array tareas.

	-El programa debe proporcionar una función eliminarTarea que permita al aventurero eliminar tareas de su lista. Esta función debe solicitar
    al aventurero que ingrese el ID de la tarea que desea eliminar y buscar esa tarea en el array tareas por su ID. Una vez encontrada, debe eliminarla del array.

	-El programa debe proporcionar una función mostrarTareas que muestre todas las tareas almacenadas en el array tareas. Esta función debe mostrar
    el ID, nombre, descripción, fecha límite y estado de completado de cada tarea.

	-El programa debe proporcionar una función marcarTareaCompletada que permita al aventurero marcar una tarea como completada. Esta función
    debe solicitar al aventurero que ingrese el ID de la tarea que desea marcar y buscar esa tarea en el array tareas por su ID. Una vez encontrada, 
    debe cambiar el estado de completado de la tarea a true.

Con estos requisitos, nuestro aventurero estará preparado para enfrentar los desafíos y mantenerse organizado en su búsqueda de la gloria y los tesoros 
ocultos en este vasto mundo de aventuras.

*/
let tareas = [];
let tarea;
function agregarTarea() {
  let nombre = prompt("Escribe el nombre: ");
  let descripcion = prompt("Escribe una breve descripción de la tarea: ");
  let fecha = prompt("Escribe la fecha límite de la tarea: ");
  let completada = prompt("¿Está completada la tarea? Escribe si o no: ");

  tarea = {
    ID: generarID(),
    nombre: nombre,
    descripcion: descripcion,
    fecha: fecha,
    completada: completada == "si" ? true : false, //Es un if. Significado-> if (?) es igual a "si" entonces es true, else: false
  };
  tareas.push(tarea);
  alert("Tarea añadida correctamente");
  console.log(tareas);
}

function generarID() {
  var id = Math.floor(Math.random() * 100) + 1;
  return id;
}

function eliminarTarea() {
  let IDusu;
  let encontrado = false;
  IDusu = prompt("Escribe el ID de la tarea que quieres eliminar: ");
  for (i in tareas) {
    //La i significa el índice que va a ir recorriendo. Podría poner tarea también
    if (tareas[i].ID == IDusu) {
      tareas.splice(i, 1); //Me sirve para eliminar el elemeneto. Le indico el índice.
      encontrado = true;
    }
  }
  console.log(tareas);
  if (!encontrado) {
    alert("ID no identificado.");
  }
}

function marcarTareaCompletada() {
    let IDusu;
    let encontrado=false;
    IDusu=prompt("Introduce el ID de la tarea que deseas marcar como completada: ");
    for(i in tareas){
        if(tareas[i].ID == IDusu){
            tareas[i].completada=true;
            encontrado=true;
        }
    }
    console.log(tareas);
    if(!encontrado){
        alert("ID no identificado");
    }
}
