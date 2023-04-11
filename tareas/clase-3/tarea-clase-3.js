// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreUsuario = prompt('Ingrese su nombre').toLowerCase();
const miNombre = 'sergio';
const nombrePariente = 'carlos';

if(nombreUsuario === miNombre) {
    console.log(`Hola, Tocayo! Yo tambien me llamo ${miNombre}`);
} else if(nombreUsuario === nombrePariente) {
    console.log(`Hola ${nombreUsuario}, te llamas igual que mi tío`);
} else {
    console.log(`Hola ${nombreUsuario}`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
s
const edadUsuario = Number(prompt('Ingrese su edad','24'));
const miEdad = 26;

if(edadUsuario > miEdad){
    console.log('Sos mayor que yo');
}else if (edadUsuario < miEdad){
    console.log('Sos menor que yo');
}else if (edadUsuario === miEdad){
    console.log('Tenemos la misma edad!');
}else {
    console.log('No entendi la respuesta');
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const usuarioTieneDocumento = prompt('Tenes documento?').toLowerCase();

if (usuarioTieneDocumento === 'si'){
    const edadUsuario = Number(prompt('Cuantós años tenes?'));
    if(edadUsuario >= 18){
        console.log('Pasa al bar');
    }else if (edadUsuario < 18){
        console.log('No pasas');
    }else {
        console.log('No entendi la respuesta');
    }
} else if (usuarioTieneDocumento === 'no'){
    console.log('No pasas');
} else {
    console.log('No entendi la respuesta');
}