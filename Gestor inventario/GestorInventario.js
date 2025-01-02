
export default class GestorInventario{
    constructor(){
        this.productos=[];
    }
    agregarProducto(producto){
        this.productos.push(producto);
    }

    buscarId(id){
        return this.productos.find(producto=>producto.id==id);
    }

    eliminarProducto(id){
        let indexProducto;
        indexProducto=this.productos.findIndex(producto => producto.id == id);
        this.productos.splice(indexProducto, 1);
    }

    actualizarProducto(id, nuevoProducto){
        const producto= this.productos.find(producto=>producto.id==id);
        if(producto){
            producto.nombre=nuevoProducto.nombre;
            producto.precio = nuevoProducto.precio;
            producto.cantidad = nuevoProducto.cantidad;
        }
        this.productos.push(nuevoProducto);
        this.productos.filter(producto=>producto.id!=id);
    }

    mostrarDetalle(){
        if(this.productos.length==0){
            console.log("No hay productos en el inventario.")
        }
        else{
            this.productos.forEach(producto =>console.log(producto.mostrarDetalle()));
        }
    }
}