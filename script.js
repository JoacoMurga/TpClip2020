var contador = 0;
var intentos = 4;
var respuestaCorrecta = ("ABOGACIA");
var respuesta = document.getElementById("respuesta");
var alerta = document.getElementById("alerta");
var intentosCartel = document.getElementById("intentosCartel");
var pista = document.getElementById("pista")
var redireccion = document.getElementById("redireccion")

function adivi() {
    var respuestaUser = respuestaCorrecta
    event.preventDefault()
    if (respuestaUser == respuesta.value.toUpperCase()) {
        alerta.innerHTML = '<div class="container-sm alert alert-success" id="alerta"  role="alerta">La respuesta es CORRECTA! FELICITACIONES!</div>'
        redireccion.innerHTML = '<p class="container-sm fw-400"> Seras redireccionado en 5 segundos, gracias por jugar! </p>'
        setTimeout('location.href = "index.html"', 5000)
    } else {
        contadorIntentos()
    }
}

function contadorIntentos() {
    intentos--;
    switch (intentos) {
        case 3:
            alerta.innerHTML = '<div class="container-sm alert alert-danger" id="alerta"    role="alerta">La respuesta es INCORRECTA!</div>';
            intentosCartel.innerHTML = '<div class="container-sm alert alert-danger" id="intentosCartel"    role="intentosCartel">Te quedan 3 intentos</div>'
            break;

        case 2:
            alerta.innerHTML = '<div class="container-sm alert alert-danger" id="alerta"    role="alerta">La respuesta es INCORRECTA!</div>';
            pista.innerHTML = '<p class="container-sm"> Una pista, comienza con A! </p>'
            intentosCartel.innerHTML = '<div class="container-sm alert alert-danger" id="intentosCartel"    role="intentosCartel">Te quedan 2 intentos</div>'
            break;

        case 1:
            alerta.innerHTML = '<div class="container-sm alert alert-danger" id="alerta"    role="alerta">La respuesta es INCORRECTA!</div>';
            pista.innerHTML = '<p class="container-sm"> Una pista, son "derechos"! </p>'
            intentosCartel.innerHTML = '<div class="container-sm alert alert-danger" id="intentosCartel"    role="intentosCartel">Te quedan 1 intentos</div>'
            break;
        case 0:

            intentosCartel.innerHTML = '<div class="container-sm alert alert-danger" id="intentosCartel"    role="intentosCartel">PERDISTE! la respuesta correcta era ABOGACIA!</div>'
            redireccion.innerHTML = '<p class="container-sm fw-400"> Seras redireccionado en 5 segundos, gracias por jugar! </p>'
            setTimeout('location.href = "index.html"', 5000)
            alerta.remove()
            pista.remove()
            break;
    }
}