// Ahora vamos a ver otro modulo de nodejs request http
const http = require('http');

// Una manera de tratar el html
/*
En este caso dando un mensaje 200 que la  web esta funcionando con normalidad
    http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});    
        res.write('<h1>Hola Mundo desde desde nodejs</h1>');
        res.end();
    }).listen(3000);

En estte caso dando un mensaje 400 que manifiesta un error
    http.createServer(function(req, res){
        res.writeHead(400, {'Content-Type': 'text/plan'});    
        res.write('Erroe web no encontrada');
        res.end();
    }).listen(3000);
*/

const handleServer = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});    
    res.write('<h1>Hola Mundo desde desde nodejs</h1>');
    res.end();
}

const server = http.createServer(handleServer);
// creamos mediante npm un modulo de color
// Usamos npm install colors
// Los modulos los buscamos en la web de npmjs.com

// usamos npm init para crear un proyecto
