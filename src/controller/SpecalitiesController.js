const SpecalitiesModel = require("../model/SpecalitiesModel")

const postSpecalities = async (req, res, next) => {
    try {
        const { yearsOfExperience, completedProjects, workedCountries, clients } = req.body;

        const isSpecalitiesAvailable = await SpecalitiesModel.find({})
        if (isSpecalitiesAvailable.length >= 1) {
            return res.status(400).json({
                success: false,
                message: "Specalities already available"
            })
        } else {
            const spacalities = await SpecalitiesModel.create({
                yearsOfExperience, completedProjects, workedCountries, clients
            })
            res.status(201).json({
                success: true,
                message: "Created",
                spacalities
            })
        }
    } catch (error) {
        next(error)
    }
}

const getSpecalities = async (req, res, next) => {
    try {
        const specalities = await SpecalitiesModel.find({})
        if (specalities.length < 1) {
            return res.status(404).json({
                success: false,
                message: "No specialties found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Retrieved",
            specalities
        })
    } catch (error) {
        next(error)
    }
}

const editSpecalities = async (req, res, next) => {
    try {
        const { yearsOfExperience, completedProjects, workedCountries, clients } = req.body
        const specalities = await SpecalitiesModel.findById(req.params.id)
        if (yearsOfExperience) {
            specalities.yearsOfExperience = yearsOfExperience
        }
        if (completedProjects) {
            specalities.completedProjects = completedProjects
        }
        if (workedCountries) {
            specalities.workedCountries = workedCountries
        }
        if (clients) {
            specalities.clients = clients
        }
        const updatedSpecalities = await specalities.save()
        res.status(200).json({
            success: true,
            message: "Updated",
            updatedSpecalities
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { postSpecalities, getSpecalities, editSpecalities }