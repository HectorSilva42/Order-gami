var express = require("express");

var app = express();

<<<<<<< HEAD
var path = require("path");

var routes = require('./routes');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,"/public")));

app.use('/', routes);
=======
var homepage = require('./routes/homepage');
var origami_library = require('./routes/origami_library.js');

app.set('view engine', 'ejs');

app.use('/', homepage);
app.use('/origami_library', origami_library);
>>>>>>> bfe8ca35bc24eaa328c23bd90a63987569796d34


app.listen(3000, function(){

	console.log("Our server is SERVING baby! on port 3000");

});
