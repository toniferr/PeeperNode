'use strict' //para activar modo strict, nuevas caract js

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);

module.exports = router;