// Podemos utilizar modulos para multiples trabajos

/*
    Dentro de la documentacion de la Web de nodejs, tenemos distintos
    modulos que nos permiten trabajar con archivos, como por ejemplo.
*/

// Prueba con el modulo OS, lo importamos y lo colocamos dentro de una constante, la nomenclatura deberia respetar el nombre original del modulo
const os = require('os');

// Ahora agreamos otro modulo muy usado el modulo file system, esto CODIGO BLOQUEANTE
const fs = require('fs');

// Mostramos por pantalla el sistema en el cual trabajamos
console.log(os.platform());

// version()
console.log(os.release());

// memoria total, y free memory
console.log(os.totalmem());
console.log(os.freemem());

// Vamos a usar fs para crear un nuevo archivo, con manejo de error
// Tener precaucion a la hora de escribir esta funcion, puesto que, el parentesis se cierra a posterior de los bracket o llaves de cierre de la funcion
// ESTO ES CODIGO ASINCRONO
fs.writeFile('./texto.txt', 'linea uno', function (err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
});

// Un detalle interesante es el orden que se ejecuta para comprobarlo colocaremos, ya que esto no es un codigo asincrono
console.log('Ultima linea');

// En la consola podremos observar como la linea anterior se muestra siempre antes de las opereaciones de sistema

// Ahora vamos a leer el archivo que acabamos de crear con fs.readFile

// Veamos que quitando utf8, podemos ver que no es un texto plano, es un buffer
fs.readFile('./texto.txt', function (err, data){
    if(err){
        console.log(err);
    }
    console.log(data);
});

// posible solucion to_string()
fs.readFile('./texto.txt', function (err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

// Otro mas sencillo solo agregando utf8
fs.readFile('./texto.txt', 'utf-8', function (err, data){
    if(err){
        console.log(err);
    }
    console.log(data);
});