var express = require("express");
var router = express.Router();


router.get("/", function(req, res){

	res.render("../views/origami_library.ejs", {trial: 'SO IT BEGINS!'});

});

module.exports = router;
