const mongoose = require('mongoose');

const specalitiesSchema = new mongoose.Schema({
    yearsOfExperience: {
        type: Number,
    },
    completedProjects: {
        type: Number,
    },
    workedCountries: {
        type: Number,
    },
    clients: {
        type: Number,
    }
}, { timestamps: true, versionKey: false })

const SpecalitiesModel = mongoose.model("specalities", specalitiesSchema)
module.exports = SpecalitiesModel