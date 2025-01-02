export default class CentroVeterinario{
    constructor(){
        this.mascotas=[];
    }
    agregarMascota(mascota){
        this.mascotas.push(mascota);
    }

    mostrarMascotas(){
        if(this.mascotas.length ===0){
            console.log("No hay mascotas en el inventario de este centro veterinario");
        }
        else{
            this.mascotas.forEach(mascota => console.log(mascota.mostrarDetalle()));
        }
    }
}