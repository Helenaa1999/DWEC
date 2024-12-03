let nombre;
let saludo;
nombre= prompt("¿Cómo te llamas?");
saludo=saludar(nombre);
console.log(saludo);

function saludar(nombre){
    console.log(`Hola, ${nombre}. Bienvenid@ al programa`);
}
