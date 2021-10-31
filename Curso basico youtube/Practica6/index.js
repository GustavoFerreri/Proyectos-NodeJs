// En este caso usamos un nuevo modulo para la creaciond e servidores de forma mas sencilla
// npm install express
// Este framework nos permite crear servidores web

// Importamos el modulo express
const express = require('express');

// Creamos una instancia de express
const server = express();

// Configuramos el servidor para que escuche en el puerto 3000
server.get('/', function(req, res){
    res.send('<h1>Hola mundo con express y Node</h1>');
    res.end();
});
server.listen(3000, function(){
    console.log('Servidor iniciado');
});