// Funciones

// Desde aqui realizamos una modificacion al original
const math = {}

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

// Aqui colocaremos los export para que se puedan usar en otro archivo

// La primera prueba no fue buena puesto sugirio modifcar exports.add = add por la version es6
// quedando como se detalla debajo
/*
Arroja un error esta forma sugerida
    export { _add as add };
    const _substract = substract;
    export { _substract as substract };
    const _multiply = multiply;
    export { _multiply as multiply };
    const _divide = divide;
    export { _divide as divide };

comentamos el metodo anterior para realizar el envio de un objeto en lugar de una funcion
    exports.add = add;
    exports.substract = substract;
    exports.multiply = multiply;
    exports.divide = divide;
*/

// Se puede hacer de otra manera
math.add = add;
math.substract = substract;
math.multiply = multiply;
math.divide = divide;

// Utilizando la propiedad module.export que permite traspasar un objeto, en este caso math, pero podria meter una variable, otra funcion, etc
module.exports = math;