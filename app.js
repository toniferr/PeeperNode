'use strict'

//carga de modulos
var express = require('express'); 
var bodyParser = require('body-parser')

//ejecuta express
var app = express();

// cargar archivos rutas
var project_routes = require('./routes/project');

// middlewares
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

// CORS

// rutas
/* app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Pagina principal</h2>"
    );
});
app.post('/test/:id', (req, res) => {

    console.log(req.body.name); //va en el cuerpo de la peticion
    console.log(req.query.web); //va en la url con ?param=
    console.log(req.params.id); //va de param en url /param

    res.status(200).send({
        message: "mensaje desde api de nodejs"
    });
}); */
app.use('/api', project_routes);


// exportar
module.exports = app;