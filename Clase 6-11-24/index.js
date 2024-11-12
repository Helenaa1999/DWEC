let filas=5;

//Generamos las filas de la tabla
for(let i=0; i<=filas; i++){
    let fila='';
    for(let j=0; j<=filas; j++){
        fila += i;
    }
    console.log(fila);
}

//foreach: se utiliza para los recorridos de los arrays
const personas=[
    {nombre:'Juan', edad:25},
    {nombre: 'María', edad:30},
    {nombre:'Pedro', edad:28},
    {nombre:'Ana', edad:18},
    {nombre:'Jose', edad:58}
];
//Inicializar variables
let sumaEdades =0;
let personaJoven=personas[0]; //Le digo a persona jóven que entre la primera persona del array
let personaMayor=personas[0];
//Recorrer con un foreach
personas.forEach(function(persona){
    sumaEdades +=persona.edad;
    //sumaEdades=sumaEdades + persona.edad;
    //Comparar edad con la persona joven
    if(persona.edad<personaJoven.edad){
        personaJoven=persona;
    }
    if(persona.edad>personaMayor.edad){
        personaMayor=persona;
    }
    console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}`)
});
console.log(`La suma de las edades es: ${sumaEdades}`);
console.log(`Persona joven: ${personaJoven.nombre}, con ${personaJoven.edad} años. `);
console.log(`Persona mayor: ${personaMayor.nombre}, con ${personaMayor.edad} años.`)


//Juego de adivinar el número
let numeroSecreto= Math.floor(Math.random()*100)+1;
let adivinar=null;
let intentos=0;
let intentosRestantes=10;
while(adivinar!==numeroSecreto && intentos<10){ //numero == texto(numero)
    adivinar=parseInt(prompt("Adivina un número entre 1 y 100"));
    console.log(numeroSecreto);
    if(isNaN(adivinar)){
        alert("El valor introducido no es numérico.")
    }else{
        if(adivinar<numeroSecreto){
            alert('Te has pasado, prueba con un número más bajo.');
        }else if(adivinar>numeroSecreto){
            alert('Te has quedado corto, prueba con un número más alto.');
        }
    }
    intentos++;
    intentosRestantes--;
    alert(`Llevas ${intentos}, te quedan ${intentosRestantes}`); //Utiliza el contador para burlarte de la cantidad de intentos fallidos del usuario

    //tarea que debas agregar para el caso final de la adivinanza
};



//do while
let opcion;
do{
    console.log('Calculadora básica');
    console.log('1. Sumar');
    console.log('2. Restar');
    console.log('3. Multiplicar');
    console.log('4. Dividir');
    console.log('5.Salir');
    
    opcion=parseInt(prompt("Elige una opción entre 1 - 5: "));
    //validar que sea realmente un número if()

    //validar el número que entra entre 1 y 5 con un if
    if(opcion<=1 && opcion>=4){
        let num1 = parseInt(prompt("Introduce el primer número: "));
        let num2= parseInt(prompt("Introduce el segundo número: "));
        //validar que sea realmente un número if(isNan || isNan) console.         log('Debes ingresar un número')
        //else{switch de opciones{...}}
    }

}while(opcion !== 5);
