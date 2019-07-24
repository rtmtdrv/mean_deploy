const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT = 3333;

//config
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public/dist/public'));

//database
require("./server/config/mongoose");

//routes
require("./server/config/routes.js")(app);

//port
app.listen(PORT, console.log(`Listening on port: ${PORT}!`));