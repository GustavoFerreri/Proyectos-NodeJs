// carganos el modulo express
const express = require('express');
// carganos el modulo de rutas
const router = express.Router();

// reemplazamos app por router
router.get('/', (req, res) => {
    res.render('index.html', {title: 'Web Simple'});
});

// reemplazamos app por router
router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact Page'});
});

// exportamos el modulo
module.exports = router;