import{Animal} from './animal.js';
import{Perro} from './perro.js';

const animal=new Animal('Animal genérico');
const perro = new Perro('Scooby Doo', 'Gran danés');
perro.hacerSonido();

const animales=[perro, animal];
animales.forEach(animal => animal.hacerSonido());