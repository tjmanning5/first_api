// express
var express = require('express');
var app = express();

// mongoose
var mongoose = require('mongoose');

// body parser is lame
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// controller file
require('./controllers/weens.js')(app);

// connect to DB
mongoose.connect('mongodb://test:f121c9a8@ds141320.mlab.com:41320/todosampleproject5')
// Once logged in to the db through mongoose, log a success message
mongoose.connection.once('open', function () {
	console.log('Mongoose connection successful.');
});

app.listen(3000, function() {
	console.log('App listening on PORT BUTTS');
});