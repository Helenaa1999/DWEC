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

//Operaciones aritméticas
    //Suma
        let su=5;
        let su2=3
        console.log(su+su2);
    //Resta
        let re=5;
        let re2
        console.log(re-re2);
    //Multiplicación
        let mu=5;
        let mu2=3;
        console.log(mu*mu2);
    //División
        let di=5;
        let di2=3;
        console.log(di/di2);
    //Incremento
        let numero1=5;
        console.log(numero1++);
    //Decremento
        let numero2=5;
        console.log(numero2--);
    //Exponente
        let ex=5;
        let ex2=3;
        console.log(ex^ex2);

    
    console.log("Igualdad" + 5 =="5"); //true
    console.log("Igualdad estricta" + 5 ==="5"); //false

    // or ||
    let a=5;
    let b = -10;
    console.log(a>0 || b>0);

    // and &&
    let a2 =5;
    let b2=-10;
    console.log(a2>0 && b2>0);

    //adición
    let a3=5;
    a3 +=3;
    console.log(a3);

    //sustracción
    let a4=5;
    a4 -=3;
    console.log(a4);

    //multiplicación
    let a5=3;
    a5 *=5;
    console.log(a5)

    //división
    let a6=3;
    a6/=5;
    console.log(a6);

    //estructuras de control
        let condicion=10;
            if(condicion===10){
                console.log("Condición verdadera aplicada")
            }
            else{
                console.log("La condición es falsa");
            }

        let condicion2=11
        if(condicion ===10){
            console.log("La condición es 10");
        }else if (condicion2 === 11){
            console.log("La condición es 11");
        }else{
            ("La condición no es ni 10 ni 11");
        }

        //if anidado
            let condicion3=15;
            let condicion4=10
            if(condicion4 === 10){
                if(condicion3===11){
                    console.log("La condición es 10")
                }
                else{
                    console.log("La condición no es ni 10 ni 11")
                }
            }else{
                console.log("La condición no es 10");
            }
        //switch
            let condicion5=11;
            switch(condicion5){
                case 10:
                    console.log("La condición es 10");
                    break;
                case 11:
                    console.log("La condición es 11");
                    break;
                default:
                    console.log("No es ni 10 ni 11");
                    break;
            }

        //for
            for(let i=0; i<=10; i++){
                console.log("Hola " + i);
            }
        
            //foreach
                let hobbies4=['correr', 'dormir', 'leer'];
                hobbies4.forEach(function(hobbie, index){
                    console.log('Hobbie: ' + hobbie + ', indice: ' + index);
                });
            //for con array
            let hobbies5=['correr', 'dormir', 'leer'];
            for(let i=0; i<=hobbies5.length;i++){
                console.log("Hobbie: " + hobbies5[i] + ", índice: " + i);
            }
        //do-while
            let contador=0;
            do{
                console.log('Hola: ' + contador);
                contador++;
            }while(contador<=10);

        //while
            while(contador <=10){
                console.log('Hola: ' + contador);
                contador++;
            }
        
        