var mongoose = require('mongoose');
var weensModel = require('../models/weens.js');

module.exports = function (app) {

    app.post('/api/weens', function(req, res) {
        // create a weens
        console.log('hit');
        console.log(req.body.test);
    });

    app.get('/api/weens', function(req, res) {
        // get a weens
    })

};