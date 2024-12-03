let num1Usu;
let num2Usu;
let multiplicacionUsu;
num1Usu=prompt("Introduce el primer número: ");
num2Usu=prompt("Introduce el segundo número: ");
multiplicacionUsu=multiplicar(num1Usu,num2Usu);
console.log(multiplicacionUsu);

function multiplicar(num1,num2){
    let multiplicacion;
    multiplicacion=num1*num2;
    console.log(`El resultado de la multiplicación es: ${multiplicacion}`);
}