var express = require("express");
var router = express.Router();


router.get("/", function(request, response){

	response.render("../views/homepage", {us: 'We are boss ass bitches!'});

	console.log(request.url);

});

router.get("/origami-library", function(request, response){


	response.render("../views/origami-library", {text: "We Badasss!"});
	console.log(request.url);
})


module.exports = router; 