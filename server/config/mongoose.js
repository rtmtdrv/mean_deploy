const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const models_path = path.join(__dirname, "./../models");
mongoose.connect("mongodb://localhost/mean_exam", { useNewUrlParser: true, useFindAndModify: false});
mongoose.set('useCreateIndex', true);


fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf(".js") >= 0)
		require(models_path+"/"+file);
});