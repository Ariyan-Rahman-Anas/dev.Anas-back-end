const CredentialModel = require("./../model/CredentialModel")
const cloudUploader = require("./cloudUploader");

//posting a credential
const createCredential = async (req, res, next) => {
  try {
    const { title, degreeTitle, institute, instituteURL, description, cto, greeting } = req.body;
    if (!title || !degreeTitle || !institute || !instituteURL || !description || !cto || !greeting) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const file = req.file
    if (!file) {
      res.status(404).json({
        success: false,
        message: "No image provided",
      })
    };

    const img_res = await cloudUploader(file)

    const credential = await CredentialModel.create({
      title,
      degreeTitle,
      institute,
      instituteURL,
      description,
      cto,
      greeting,
      image: img_res.secure_url,
    });
    return res.status(201).json({
        success: true,
        message: "Credential created Successfully!",
        credential
      });
  } catch (error) {
    next(error)
  }
}


// getting credentials
const getAllCredentials = async (req, res, next) => {
  try {
    const credentials = await CredentialModel.find();
    res.status(200).json({
      success: true,
      message: "All credentials retrieved successfully!",
      totalCredentials: credentials.length,
      credentials,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createCredential, getAllCredentials };