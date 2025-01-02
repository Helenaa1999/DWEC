import Estudiante from "./Estudiante.js";
import GestionEstudiantes from "./GestionEstudiantes.js";

let gestionEstudiantes= new GestionEstudiantes();
let estudiante1 = new Estudiante ("Alfonso", 10);
let estudiante2 = new Estudiante("María", 3);
let estudiante3 = new Estudiante ("Laura", 6);
let estudiante4 = new Estudiante("David", 9);
let estudiante5= new Estudiante ("Helena", 4);
gestionEstudiantes.añadirEstudiante(estudiante1);
gestionEstudiantes.añadirEstudiante(estudiante2);
gestionEstudiantes.añadirEstudiante(estudiante3);
gestionEstudiantes.añadirEstudiante(estudiante4);
gestionEstudiantes.añadirEstudiante(estudiante5);

gestionEstudiantes.mostrarEstudiantes();

gestionEstudiantes.contarAprobados();