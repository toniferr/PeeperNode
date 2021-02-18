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
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Add headers
/*app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});*/

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