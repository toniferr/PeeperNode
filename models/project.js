'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: [String]
});

module.exports = mongoose.model('Project', ProjectSchema); //mongoose pone en singular y plugar projects
// projects --> guarda los documents en la coleccion