var express = require("express");

var app = express();

var path = require("path");

var routes = require('./routes');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,"/public")));

app.use('/', routes);


app.listen(3000, function(){

	console.log("Our server is SERVING baby! on port 3000");

});
