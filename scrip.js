const nombre = prompt("¿Cual es tu nombre?");
const edad = prompt("¿Qué edad tienes?");
const lenjuage = prompt("¿Que lenguaje de programación estás aprendiendo?");
const mensaje = "¡Hola ${nombre}, tienes ${edad} y ya estas aprendiendo ${lenguaje}!";

alert(mensaje);

const respuesta = prompt("¿Te gusta estudiar ${lenguaje}? Respoonde con el número 1 - SI o 2 - NO");
if (respuesta == 1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}
if (respuesta == 2){
    alert("Oh, que pena...¿Ya intentaste aprender otros lenguajes?");
}