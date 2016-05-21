var express = require("express");

var app = express();

var homepage = require('./routes/homepage');

app.set('view engine', 'ejs');

app.use('/', homepage);

app.listen(3000, function(){

	console.log("Our server is SERVING baby! on port 3000");

});