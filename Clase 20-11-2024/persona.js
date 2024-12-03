//POO: paradigma de la programación que nos permite trasladar cosas reales a nuestra app. 
//Se inspira en la forma en la que percibimos el mundo
//Encapsulamiento: una forma que nos da el paradigma para ocultar los detalles de un objeto y exponer sólo lo necesario
class Persona{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    //Getters y Setters
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }
    get getEdad(){
        return this.edad;
    }
    set setEdad(nuevaEdad){
        if(nuevaEdad >0){
           this.edad =nuevaEdad;
        }
        else{
            console.log("Edad incorrecta");
        }
    }

    saludar(persona){
        console.log("Hola " + [persona.getNombre])
    }
}

//instanciar la clase
const persona= new Persona("Juan", 82);
console.log(persona.getNombre); //Juan
persona.setNombre="Pedro";
console.log(persona.getNombre);
persona.saludar(persona);