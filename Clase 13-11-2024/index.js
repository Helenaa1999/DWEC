function saludar(){
    const nombre=document.getElementById('nombre').value; //Esto va a buscar el nombre que le queramos dar
    const apellido=document.getElementById('apellido').value;
    console.log("Hola mundo");
    console.log(saludarParametros(nombre, apellido));
}

function saludarParametros(nombre, apellido){
    console.log("Hola " + nombre + apellido);
}

function sumar(a,b){
    return a + b;
}

console.log(saludar());
console.log(sumar(50, 900));

//funciones anónimas
const multiplicar = function(a,b){
    return a*b;
}
console.log(multiplicar(5,5));
const multiplicar2 = function(a,b){
    console.log(a*b);
}

/*Función de flecha*/
const dividir = (a,b) => a/b //necesita saber la cantidad de valores que vamos a utilizar
const restar = (a,b) =>{
    return a-b;
}
const saludaFuncionFlecha = () => console.log("Hola desde la función de flecha");
const saludaFuncionFlecha2 = () => {console.log("Hola desde la función de flecha")};
let edad;
let nombre;


const personas=[
    {nombre:"Juan", edad: 25},
    {nombre: "Ana", edad: 30}, 
    {nombre: "Pedro", edad: 35},
    {nombre:"Oscar", edad: 12}
]
const menores =(personas) => {
    return personas.filter(persona => persona.edad<18);
    /*for(let i=0; i<=persona.length;i++){
        if(personas[i]).edad<18){
            menores.push(personas[i]);
        }
    }
    return menores;*/
   /*personas.forEach(persona=>{
    return persona.edad<18})*/
}
console.log("Estos son los menores de edad: " + menores(personas).map(persona =>persona.nombre)); //se vuelve a recorrer la constante con el .map()