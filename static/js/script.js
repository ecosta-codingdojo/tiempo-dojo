// Función para convertir de celsius a fahrenheit
function celsius2Fahrenheit(celsius) {
    var fahrenheit = Math.round(celsius * 9 / 5 + 32);
    return fahrenheit;
}

// Función para convertir de fahrenheit a celsius
function fahrenheit2Celsius(fahrenheit) {
    var celsius = Math.round((fahrenheit - 32) * 5 / 9);
    return celsius;
}

// Función para convertir las temperaturas, utiliza las funciones anteriores
function convertirTemperatura(elemento) {

    // Guardar los elementos HTML que contienen las temperaturas
    var spanTemperatura1 = document.querySelector("#temperatura1");
    var spanTemperatura2 = document.querySelector("#temperatura2");
    var spanTemperatura3 = document.querySelector("#temperatura3");
    var spanTemperatura4 = document.querySelector("#temperatura4");
    var spanTemperatura5 = document.querySelector("#temperatura5");
    var spanTemperatura6 = document.querySelector("#temperatura6");
    var spanTemperatura7 = document.querySelector("#temperatura7");
    var spanTemperatura8 = document.querySelector("#temperatura8");

    // Guardar el valor de las temperaturas para convertirlos
    var temperatura1 = spanTemperatura1.innerText;
    var temperatura2 = spanTemperatura2.innerText;
    var temperatura3 = spanTemperatura3.innerText;
    var temperatura4 = spanTemperatura4.innerText;
    var temperatura5 = spanTemperatura5.innerText;
    var temperatura6 = spanTemperatura6.innerText;
    var temperatura7 = spanTemperatura7.innerText;
    var temperatura8 = spanTemperatura8.innerText;

    // Si el elemento seleccionado es celsius
    if (elemento.value == "celsius") {
        // Convertir las temperaturas individualemnte
        spanTemperatura1.innerText = fahrenheit2Celsius(temperatura1);
        spanTemperatura2.innerText = fahrenheit2Celsius(temperatura2);
        spanTemperatura3.innerText = fahrenheit2Celsius(temperatura3);
        spanTemperatura4.innerText = fahrenheit2Celsius(temperatura4);
        spanTemperatura5.innerText = fahrenheit2Celsius(temperatura5);
        spanTemperatura6.innerText = fahrenheit2Celsius(temperatura6);
        spanTemperatura7.innerText = fahrenheit2Celsius(temperatura7);
        spanTemperatura8.innerText = fahrenheit2Celsius(temperatura8);
    }

    // Si el elemento seleccionado es fahrenheit
    if (elemento.value == "fahrenheit") {
        // Convertir las temperaturas individualemnte
        spanTemperatura1.innerText = celsius2Fahrenheit(temperatura1);
        spanTemperatura2.innerText = celsius2Fahrenheit(temperatura2);
        spanTemperatura3.innerText = celsius2Fahrenheit(temperatura3);
        spanTemperatura4.innerText = celsius2Fahrenheit(temperatura4);
        spanTemperatura5.innerText = celsius2Fahrenheit(temperatura5);
        spanTemperatura6.innerText = celsius2Fahrenheit(temperatura6);
        spanTemperatura7.innerText = celsius2Fahrenheit(temperatura7);
        spanTemperatura8.innerText = celsius2Fahrenheit(temperatura8);
    }
}

// Función para cargar el reporte del clima, muestra un mensaje de alerta
function cargarReporte() {
    alert("Loading weather report...");
}

// Función para eliminar el bloque de cookies
function aceptarCookie() {
    var bloqueCookie = document.querySelector("#bloque-cookie");
    bloqueCookie.remove();
}