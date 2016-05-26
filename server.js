var express = require("express");

var app = express();

var homepage = require('./routes/homepage');
var origami_library = require('./routes/origami_library.js');

app.set('view engine', 'ejs');

app.use('/', homepage);
app.use('/origami_library', origami_library);


app.listen(3000, function(){

	console.log("Our server is SERVING baby! on port 3000");

});
