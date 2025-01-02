export default class GestorInventario{
    constructor(){
        this.productos=[];
    }
    agregarProducto(producto){
        this.productos.push(producto);
    }
    buscarProductoById(id){ 
        return this.productos.find(producto => producto.id ===id);
    }
    eliminarProducto(id){
        const index = this.productos.findIndex(producto=>producto.id === id);
        this.productos.splice(index, 1);
        //Para que la lista original la pisemos. Piso la anterior y me quedo con la nueva lista
        //this.productos=this.productos.filter(producto=>producto.id !==id);
    }
    mostrarProductos(){
        if(this.productos.length===0){
            console.log("No hay productos en el inventario.")
        }
        else{
            this.productos.forEach(producto=>console.log(producto.mostrarDetalle()));
        }
    }
    actualizarProductos(id, nuevoProducto){
        //con find me aseguro que voy a buscar algo de ese producto
        const producto = this.productos.find(producto=>producto.id===id);
        //Este if comprueba que producto no sea igual a null o undefined
        if(producto){
            producto.nombre=nuevoProducto.nombre;
            producto.precio=nuevoProducto.precio;
            producto.cantidad=nuevoProducto.cantidad;
        }
        this.productos.push(nuevoProducto);
        this.productos=this.productos.filter(producto=>producto.id !==id);

        //deben guardar el producto y eliminar el producto anterior
        /*pasos para actualizar: 1.Buscar el producto 
        2.Validar que el producto exista 
        3. Actualizar el producto. 
        4.Eliminar el producto anterior de la lista 
        5. guardar el nuevo producto*/
    }
}