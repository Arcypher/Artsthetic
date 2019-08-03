var express = require("express");
var app = express();

app.use(express.static("styles")); //css files storage
app.use(express.static("scripts")); //scripts files storage (important for MVC)
app.set("view engine", "ejs");

//root page
app.get("/", function(req, res){
	res.render("landing");
});

//automatically collect IP. Set port through command prompt
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server is now active!");
});