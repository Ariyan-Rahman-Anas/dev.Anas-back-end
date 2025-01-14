const express = require("express");
const route = express.Router();
const multer = require("multer");

const {
  createCredential,
  getAllCredentials,
} = require("./../controller/credentialController");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { files: 10 },
  fileFilter(req, file, callback) {
    if (file.mimetype.startsWith("image")) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
});


//posting a credential
route.post("/create", upload.single("image"), createCredential);

//getting credentials
route.get("/all", getAllCredentials)

module.exports = route;