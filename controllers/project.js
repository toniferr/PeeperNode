'use strict'

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
    }
};

module.exports = controller;