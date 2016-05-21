var express = require("express");
var router = express.Router();


router.get("/", function(request, response){

	response.render("../views/homepage", {us: 'We are boss ass bitches!'});

});


module.exports = router; 