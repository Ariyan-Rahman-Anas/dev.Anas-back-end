const mongoose = require("mongoose")

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true,
        enum: ["Full-time", "Part-time", "Contract", "Internship"]
    },
    company: {
        type: String,
        required: true
    },
     startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        default: null
    },
     duration: {
         type: Number,
         default:null
    },
    current: {
        type: Boolean,
        default: false
    },
    location: {
        type: String,
        required: true
    },
    workType: {
        type: String,
        required: true,
        enum: ["Remote", "On-site", "Hybrid"]
    },  
    skills: {
        type: [String],
        required: true
    }
}, { timestamps: true, versionKey: false })

const ExperienceModel = mongoose.model("experience", experienceSchema)
module.exports = ExperienceModel