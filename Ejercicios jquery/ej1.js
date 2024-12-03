$("input[type='checkbox']").on("click", function(){
    //esto sirve para que solo un checkbox esté seleccionado
    $("input[type='checkbox']").prop("checked", false)
    $(this).prop("checked", true)
})

$("#send").on("click",function(){
    //se recoge que el valor del input(dato añadido) sea de tipo texto
    /*.val(): se utiliza para coger valores de formularios como input, select y textarea.
            Cuando el primer elemento es select-multiple nos devuelve un array con todos los valores seleccionados
    */
    var txt=$("#textoAñadir").val()
    if(!txt){
        return
    }
    //recojo el id del input que esté seleccionado
    /*.parent(): coge el padre de cada elemento */
    var colorClase=$("input[type='checkbox']:checked").parent().attr("class")
    if(!colorClase){
        return
    }

    //se añade el texto como un nuevo párrafo
    $("#historialChat").append("<p class='" + colorClase+ "'>" + txt + "</p>")
    //reseteo el input del texto
    $("#textoAñadir").val("")
})

$("salir").on("click", function(){
    //recojo el color del checkbox marcado y elimino todo lo que tenga esa clase
    var colorClase=$("input[type='checkbox']:checked").parent().attr("class")
    $("."+colorClase).remove()
})