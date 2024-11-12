let opcion;
let suma;
let resta;
let division;
let multiplicacion;
do{
    console.log('Calculadora básica');
    console.log('1. Sumar');
    console.log('2. Restar');
    console.log('3. Multiplicar');
    console.log('4. Dividir');
    console.log('5.Salir');
    opcion=parseInt(prompt("Elige una opción entre 1 - 5: "));
    if(opcion>=1 || opcion<=5){
        let num1 = parseInt(prompt("Introduce el primer número: "));
        let num2= parseInt(prompt("Introduce el segundo número: "));
        if(isNaN(num1) && isNaN(num2)){
            alert("Debes introducir un número. Dato no válido.");
        }
        else{
            switch(opcion){
                case 1: 
                    suma=num1+num2;
                    alert(`El resultado de la suma de ${num1} y ${num2} es ${suma}.`);
                    break;
                case 2:
                    resta=num1-num2;
                    alert(`El resultado de la resta de ${num1} y ${num2} es ${resta}.`);
                    break;
                case 3:
                    multiplicacion=num1*num2;
                    alert(`El resultado de la multiplicacion de ${num1} y ${num2} es ${multiplicacion}.`);
                    break;
                case 4:
                    if(num2!=0){
                        division=num1/num2;
                        alert(`El resultado de la suma de ${num1} y ${num2} es ${division}.`);
                    } 
                    else{
                        alert(`No es posible ejecutar una división con los datos introducidos.`)
                    }
                    break;
                case 5:
                    alert(`Saliendo del programa.`);
                    break;
                default:
                    alert(`Datos introducidos erróneos.`);
                    break;
            }
        }
    }
    else{
        alert("La opción elegida no existe.")
    }

}while(opcion != 5);