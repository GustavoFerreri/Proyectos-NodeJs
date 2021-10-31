// En la segunda practica realizamos una funcion para cada operacion

// Suma
function add(a, b) {
    return a + b;
}
// Resta
function substract(a, b) {
    return a - b;
}
// Multiplicacion
function multiply(a, b) {
    return a * b;
}
// Division
function divide(a, b) {
    if (b == 0) {
        return "Error no se puede dividir por cero";
    }
    else {
        return a / b;
    }
}

// Aqui mostramos por pantalla
console.log(add(1, 2));
console.log(substract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));

// Pero lo que buscamos es dividir los archivos en pequeños archivos
// por lo que en la siguiente practica realizaremos la misma mecanica pero con distintos archivos