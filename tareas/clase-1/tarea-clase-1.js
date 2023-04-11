// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
/*
function calcularEdadUsuario(anioActual, anionNacimiento) {
 return  anioActual - anionNacimiento;
}

let anioActual = Number(prompt('Ingrese el año actual', '2023'));
let anioNacimiento = Number(prompt('Ingrese su año de nacimiento', '1990'));
let edadUsuario = calcularEdadUsuario(anioActual, anioNacimiento);
console.log('La edad del usuario es ' + edadUsuario);

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

function calcularSalarioMensual(salarioAnual) {
    const mesesEnUnAnio = 12;
    return salarioAnual / mesesEnUnAño;
}

function calcularSalarioAnual(salarioMensual){
    const mesesEnUnAnio = 12;
    return salarioMensual * mesesEnUnAño;
}

function calcularSalarioSemanal(salarioAnual){
    const semanasEnUnAnio = 52;
    return salarioMensual / semanasEnUnMes;
}

function calcularSalarioDiario(salarioAnual){
    const diasEnUnAnio = 365;
    return salarioMensual / diasEnUnMes;
}

let salarioAnual = Number(prompt('Ingrese su salario anual', '8000000'));
let salarioMensual = Number(prompt('ingrese su salario mensual', '78000'));

console.log('Su salario mensual es ' + calcularSalarioMensual(salarioAnual));
console.log('Su salario anual es ' + calcularSalarioAnual(salarioMensual));
console.log('Su salario semanal es ' + calcularSalarioSemanal(salarioAnual));
console.log('Su salario diario es ' + calcularSalarioDiario(salarioAnual));
*/

/// SCOPE

// Variable hoisting -> izar
// console.log(hola); //Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra undefined... por qué?
// var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

// Y con let?
// let mensaje = 'Hola, mundo';
// console.log(mensaje); //error

// function hoisting

/*
pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}
//pruebaHoisting();
*/

/*
var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    // console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error
}

prueba(3);

console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
// console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error
*/

