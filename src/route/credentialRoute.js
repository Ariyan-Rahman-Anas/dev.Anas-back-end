const express = require("express");
const route = express.Router();
const multer = require("multer");

const {
  createCredential,
  readCredentials,
} = require("./../controller/credentialController");

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


//posting a credential
// router.post("/", upload.single("image"), createCredential);
//post a item
route.post("/", upload.single("image"), createCredential);

//getting credentials
// router.get("/", readCredentials);
//getting all items
route.get("/", readCredentials)

module.exports = route;