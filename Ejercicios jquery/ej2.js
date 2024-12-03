for(let x=0; x<10; x++){
    var tr="<tr>";
    for(let j=0; j<10; j++){
        tr+="<td><i class='fa-solid fa-film'></i></td>"
    }
    tr+="</tr>";
    $("tbody").append(tr);
}

var usuario=1;
var contadorAsientosReservados=0;
$("tbody").on("click", "i", function(){
    if($(this).hasClass("reservado")){
        return
    }
    if($(this).hasClass("prerreserva")){
        $(this).removeClass("prerreserva");
    }
    else{
        $(this).addClass("prerreserva");
    }
})

$("#reservar").on("click", function(){
    var prerresevas=$(".prerreserva");
    var numReservasNuevas=prerresevas.length;
    if(numReservasNuevas==0){
        return
    }
    prerresevas.removeClass("prerreserva").addClass("reservado");
    contadorAsientosReservados+=numReservasNuevas;
    $("#historial").append("<p>El usuario " + usuario++ + "ha reservado " + numReservasNuevas + " asientos </p>");
    if(contadorAsientosReservados==100){
        alert("Sala de cine llena")
    }
})