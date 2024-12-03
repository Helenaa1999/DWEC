const numPares=function obtenerNumPares(listaNumeros){
    return listaNumeros.filter(numero => numero%2==0);
}
const listaNum=[2, 9, 10, 25, 48, 105, 120];
console.log("Estos son los números pares: " + numPares(listaNum).map(num=>num));
