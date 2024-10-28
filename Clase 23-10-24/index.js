//Alerta externa o interna
/*


*/
alert('Estamos en el alert')
console.log('Estamos en el console.log')
console.error('Estamos en el console.error')
console.warn('Estamos en el console.warn')
console.info('Estamos en el console.info')

//Tipos de datos y variables
    //variables primitivas: var, let y const
    //Se suelen usar con variables que suelen modificarse
    let nombre='Juan';
    let edad = 28;
    let isAdulto = edad>=18;
    let hobbies = ['correr', 'dormir', 'leer']
    let persona= {nombre:'Juan', edad:25, isAdulto:true, hobbies:['correr', 'dormir', 'leer']};
    console.log("Estamos en let y este es el nombre: " , nombre);

    //Se suelen utilizarse con los objetos
    const nombre1='Juan';
    const edad1 = 28;
    const isAdulto1 = edad1>=18;
    const hobbies1 = ['correr', 'dormir', 'leer']
    const persona1= {nombre:'Juan', edad:25, isAdulto:true, hobbies:['correr', 'dormir', 'leer']};
    console.log("Estamos en const y este es el nombre: " + nombre);
    console.log("Estamos en const y es adulto?: " + isAdulto1)

    //Se utilizan con números que después se van a utilizar para hacer muchas operaciones
    var nombre2='Juan';
    var edad2= 28;
    var isAdulto2 = edad2>=18;
    var hobbies2 = ['correr', 'dormir', 'leer']
    var persona2= {nombre:'Juan', edad:25, isAdulto:true, hobbies:['correr', 'dormir', 'leer']};
    console.log("Estamos en var y estos son sus hobbies: " + hobbies2)
    console.log(`Estamos en var y estos es su nombre: ${persona2.nombre}`);

    //tipos de datos: String, number, boolean, undefined, null, symbol, object
        //Tipos de datos especiales: undefined, object. Undefined: ha sido declarada, pero no se le ha asignado ningún valor.

//Arrays y objetos literales
    const hobbies3=['correr', 'dormir', 'leer'];
    const numeros = [1, 2, 3, 4, 5];
    const verdaderoFalso =[true, false, true];
    console.log(typeof hobbies3); //Object
    console.log(numeros);
    console.log(verdaderoFalso);

//objeto date
    const fecha = new Date();
    console.log(typeof fecha)
    console.log(fecha)