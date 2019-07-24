const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Pet's name is required!"], minlength: [3, "Name must be a minimum of 3 characters"], unique: true},
    type: {type: String, required: [true, "Pet type is required!"], minlength: [3, "Type must be a minimum of 3 characters"]},
    description: {type: String, required: [true, "Description is required!"], minlength: [3, "Description must be a minimum of 3 characters"]},
    skillOne: {type: String, default: ""},
    skillTwo: {type: String, default: ""},
    skillThree: {type: String, default: ""},
    likes: {type: Number, default: 0}
}, {timestamps: true});

PetSchema.plugin(uniqueValidator, {message: "Must be unique name."});
mongoose.model("Pet", PetSchema);