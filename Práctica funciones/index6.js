const esMayordeEdad = (edad)=>{
    mayorEdad=false;
    if(edad>=18){
        mayorEdad=true;
        console.log(mayorEdad);
    }
    else{
        console.log(mayorEdad);
    }
}

let edadUsu=parseInt(prompt("Escribe tu edad: "));
console.log(esMayordeEdad(edadUsu));