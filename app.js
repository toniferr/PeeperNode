'use strict'

//carga de modulos
var express = require('express'); 
var bodyParser = require('body-parser')

//ejecuta express
var app = express();

// cargar archivos rutas


// middlewares
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

// CORS

// rutas
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Pagina principal</h2>"
    );
});
app.get('/test', (req, res) => {
    res.status(200).send({
        message: "mensaje desde api de nodejs"
    });
});

// exportar
module.exports = app;