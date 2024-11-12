//Juego de adivinar el número
let numeroSecreto= Math.floor(Math.random()*100)+1;
let adivinar=null;
let intentos=0;
let intentosRestantes=10;
console.log(numeroSecreto);
while(adivinar!==numeroSecreto && intentos<10){ 
    adivinar=parseInt(prompt("Adivina un número entre 1 y 100"));
    if(isNaN(adivinar)){
        alert("El valor introducido no es numérico.")
    }else{
        if(adivinar>numeroSecreto){
            alert('Te has pasado, prueba con un número más bajo.');
        }else if(adivinar<numeroSecreto){
            alert('Te has quedado corto, prueba con un número más alto.');
        }
    }
    intentos++;
    intentosRestantes--;
    if(adivinar!=numeroSecreto){
        alert(`Llevas ${intentos}, te quedan ${intentosRestantes}`); 
    }
};
if(adivinar==numeroSecreto){
    alert("¡Acertaste! Enhorabuena.");
}else{
    alert(`Oh no! El número era ${numeroSecreto}. Te quedaste sin intentos. Vuelve a jugar de nuevo.`)
}