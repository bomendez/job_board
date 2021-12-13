const mongoose = require("mongoose")
const JobSchema = require('../schema/Jobs.Schema').JobSchema

const PokemonModel = mongoose.model("Jobs", JobSchema);

function insertPokemon(job) {
    return PokemonModel.create(job);
}

function getAllPokemon() {
    return PokemonModel.find().exec();
}

function findPokemonByName(title) {
    return PokemonModel.find({title: title}).exec();
}

function findPokemonById(id) {
    return PokemonModel.findById(id).exec();
}

function findJobByOwner(owner) {
    return PokemonModel.find({
        owner: owner
    }).exec();
}

function findJobByPartialName(partialUserString) {
    return PokemonModel.find({ "title": { "$regex": partialUserString, "$options": "i" } }).exec();
}

function favorite(username, jobID) {
    return PokemonModel.findOneAndUpdate({ "title": username}, {
        $addToSet: {favorites: [jobID]}
    })
}

// Make sure to export a function after you create it!
module.exports = {
    insertPokemon,
    findPokemonByName,
    getAllPokemon,
    findPokemonById,
    findJobByOwner,
    findJobByPartialName,
    favorite
};