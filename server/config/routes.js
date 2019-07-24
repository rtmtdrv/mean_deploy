
const pets = require("../controllers/pets.js");
const path = require("path");

module.exports = function(app){

    app.get("/pets", pets.getAll)

    app.get("/pets/:id", pets.getOne)

    app.post("/pets", pets.addPet)

    app.put("/pets/:id", pets.editPet)

    app.delete("/delete/:id", pets.deletePet)

    app.post("/like/:id", pets.addLike)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}

