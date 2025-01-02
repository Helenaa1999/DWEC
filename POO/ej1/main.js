import Gato from "./Gato.js";
import Perro from "./Perro.js";
import CentroVeterinario from "./CentroVeterinario.js";
import Mascota from "./Mascota.js";

const centroVeterinario = new CentroVeterinario();
const gato1=new Gato ("Gato", "15/06/2022", "Madrid", "Europeo común", true);
centroVeterinario.agregarMascota(gato1);
const perro1= new Perro ("Perro", "01/02/2019", "Leganés","Golden", false);
centroVeterinario.agregarMascota(perro1);
centroVeterinario.mostrarMascotas();



