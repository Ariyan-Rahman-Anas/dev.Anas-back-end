const express = require("express");
const route = express.Router();
const multer = require("multer");

const {
  createProject,
  getAllProjects,
  getAllCategory
} = require("./../controller/projectController");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { files: 10 }, // file limit
  fileFilter(req, file, callback) {
    if (file.mimetype.startsWith("image")) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
});


route.post("/create", upload.single("image"), createProject );
route.get("/all", getAllProjects);
route.get("/categories", getAllCategory);

module.exports = route;