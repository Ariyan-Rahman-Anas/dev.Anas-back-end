const ExperienceModel = require("../model/ExperienceMode")

const postExperience = async (req, res, next) => {
    try {
        const {
            title,
            employmentType,
            company,
            startDate,
            endDate,
            duration,
            current,
            location,
            workType,
            skills
        } = req.body
        if (!title || !employmentType || !company || !startDate || !location || !workType || !skills) {
            res.status(400).json({
                success: false,
                message:"Please try to fill out all the fields"
            })
        }
        const experience = await ExperienceModel.create({
             title,
            employmentType,
            company,
            startDate,
            endDate,
            duration,
            current,
            location,
            workType,
            skills
        })
        res.status(201).json({
            success: true,
            message: "Created ",
            experience
        })
    } catch (error) {
        next(error)
    }
}

const getExperiences = async (req, res, next) => {
    try {
        const experiences = await ExperienceModel.find({})
        if (experiences.length < 1) {
            res.status(404).json({
                success: false,
                message: "No experiences found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Retrieved",
            totalExperiences : experiences.length,
            experiences
        })
    } catch (error) {
        next(error)
    }
}


const deleteExperience = async (req, res, next) => {
    try {
        const deleteItem = await ExperienceModel.findById(req.params.id)
        if (!deleteItem) {
            res.status(404).json({
                success: false,
                message: "Experience not found"
            })
        }
        await deleteItem.deleteOne()
        res.status(200).json({
            success: true,
            message: "Deleted",
            deleteItem,
        })
    } catch (error) {
        next(error)
    }
} 

module.exports = {
    postExperience,
    getExperiences,
    deleteExperience
}