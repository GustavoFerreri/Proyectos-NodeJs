// llamamos al modulo express
const express = require('express');
// llamamos al modulo path
const path = require('path');
// creamos una instancia de express
const app = express();

// setting
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Midleware

// routes
app.use(require('./routes/routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listenining server
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto 3000');
});