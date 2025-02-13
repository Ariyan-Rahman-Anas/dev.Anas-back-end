const express = require("express")
const { postExperience, getExperiences, deleteExperience } = require("../controller/experienceController")

const router = express.Router()

router.post("/create", postExperience)
router.get("/list", getExperiences)
router.delete("/remove/:id", deleteExperience)

module.exports = router