// Esto surge de la practica anterior, donde estaba todso integrado en un solo archivo
// A apartir de aqui dividiremos el problema en varioos archivos
// para poder realizar la depuracion y el control  de forma mas clara y precisa
// el problema se divide en dos parte, en una utilizaremos require para importar el archivo, en la contraparte, usamos exportar para traer esa informacion
const math = require('./math.js');

// Aqui mostramos por pantalla, para utilizar las funciones de math.js, agregamos la constante Math anteponiendolo a un punto, luego la funcion que queremos utilizar
console.log(math.add(1, 2));
console.log(math.substract(1, 2));
console.log(math.multiply(1, 2));
console.log(math.divide(1, 2));

// Pero lo que buscamos es dividir los archivos en pequeños archivos
// por lo que en la siguiente practica realizaremos la misma mecanica pero con distintos archivos