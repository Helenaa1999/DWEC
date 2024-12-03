const hacerOperaciones = function (num, operacion){
    let doblar=false;
    let mitad=false;
    if(operacion=="doblar"){
        doblar=true;
    }
    
    if(operacion=="mitad"){
        mitad=true;
    }

    if(doblar){
        let doble;
        doble=num*2;
        console.log("1");
    }
    else{
        if(mitad){
            let dividirEntre2= num/2;
            console.log(dividirEntre2);
        }
        else{
            console.log("Operación no encontrada.");
        }
    }    
}

let operacionUsu="";
let num=0;
num=parseInt(prompt("Introduce un número: "));
operacionUsu= prompt("¿Qué operación deseas realizar? Elige entre: doblar o mitad");
hacerOperaciones(num,operacionUsu);


