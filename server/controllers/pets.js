const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

module.exports = {

    getAll:(req, res)=>{
        Pet.find({},null,{sort:{type: 1}},(err, pet)=>{
            if(err){
                res.json({message: "Error!", error: err});
            }
            else {
                res.json({message: "Success!", pet: pet});
            }
        })
    },

    getOne:(req, res)=>{
        Pet.findById({_id:req.params.id},(err,pet)=>{
            if(err){
                res.json({message: "Error!", error: err});
            }
            else {
                res.json({message: "Success!", pet: pet});
            }
        })
    },

    addPet:(req, res)=>{
        Pet.create(req.body,(err, pet)=>{
            if(err){
                res.json({message: "Error!", error: err});
            }
            else {
                res.json({message: "Success!", added: true});
            }
        })
    },

    editPet:(req, res)=>{
        Pet.findByIdAndUpdate({_id:req.params.id}, req.body, {runValidators:true, context:"query"}, (err,pet)=>{
            if(err){
                res.json({message: "Error!", error: err});
            }
            else {
                res.json({message: "Edit Success!", pet: pet});
            }
        })
    },

    deletePet:(req, res)=>{
        Pet.findByIdAndDelete({_id:req.params.id}, (err, pet)=>{
            if(err){
                res.json({message: "Error!", error: err});
            }
            else {
                res.json({message: "Delete Success!", pet:pet});
            }
        })
    },

    addLike:(req,res)=>{
        console.log("req.body ", req.body)
        Pet.findByIdAndUpdate({_id:req.params.id}, {$set:{likes: req.body.likes}}, (err,pet) =>{
            if(err){
                res.json({message: "Error!", error: err});
            }
            else {
                res.json({message: "Like Success!", pet:pet});
            }
        })
    },
}