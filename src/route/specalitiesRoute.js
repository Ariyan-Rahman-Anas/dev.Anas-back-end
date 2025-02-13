const express = require("express")
const { postSpecalities, getSpecalities, editSpecalities } = require("../controller/SpecalitiesController")

const router = express.Router()

router.post("/create", postSpecalities)
router.get("/list", getSpecalities)
router.patch("/edit/:id", editSpecalities)

module.exports = router