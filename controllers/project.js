'use strict'

const project = require('../models/project');
var Project = require('../models/project');
const { param } = require('../routes/project');

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'metodo home'
        })
    },

    test: function(req, res){
        return res.status(200).send({
            message: "metodo test"
        })
    },

    saveProject: function(req, res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if (err) return res.status(500).send({
                message: 'Error al guardar'
            });
            if (!projectStored) return res.status(404).send({
                message: 'No se ha podido guardar el project'
            });
            return res.status(200).send({
                project: projectStored
            });
        });

        return res.status(200).send({
            project: project,
            message: "Metodo saveProject"
        })
    },

    getProject: function(req, res){
        var projectId = req.params.id;

        if (projectId == null) return res.status(404).send({
            message: 'No existe el project'
        });            

        Project.findById(projectId, (err, project) => {            
            if (err) return res.status(500).send({
                message: 'Error al obtener project'
            });            
            if (!project) return res.status(404).send({
                message: 'No existe el project'
            });
            return res.status(200).send({
                project
            });
        });
    },

    getProjects: function(req, res){

        //Project.find({year:2021})  busca projects del año 2021
        Project.find({}).sort('-year').exec((err, projects) => {           
            if (err) return res.status(500).send({
                message: 'Error al obtener projects'
            });            
            if (!projects) return res.status(404).send({
                message: 'No existen projects'
            });
            return res.status(200).send({
                projects
            });
        });
    },

    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdate) => {
            if (err) return res.status(500).send({
                message: 'Error al actualizar el project'
            });            
            if (!projectUpdate) return res.status(404).send({
                message: 'No existe project'
            });
            return res.status(200).send({
                project: projectUpdate
            });
        });
    },

    deleteProject: function(req, res){
        var projectId = req.params.id;
        
        Project.findByIdAndDelete(projectId, (err, projectRemove) => {
            if (err) return res.status(500).send({
                message: 'Error al borrar el project'
            });            
            if (!projectRemove) return res.status(404).send({
                message: 'No existe project'
            });
            return res.status(200).send({
                project: projectRemove
            });
        });
    }
};

module.exports = controller;