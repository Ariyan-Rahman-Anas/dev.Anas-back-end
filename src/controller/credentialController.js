const CredentialModel = require("./../model/CredentialModel")
const cloudUploader = require("./cloudUploader");

//posting a credential
const createCredential = async (req, res) => {
    const {
      title,
      degreeTitle,
      institute,
      instituteUrl,
      description,
      cto,
      greeting,
    } = req.body;
    const file = req.file
    if (!file) return res.status(400).send("Please select an image");
    try {
        const img_res = await cloudUploader(file)
        const aCredential = await CredentialModel.create({
          title,
          degreeTitle,
          institute,
          instituteUrl,
          description,
          cto,
          greeting,
          image: img_res.secure_url,
        });
        console.log("The new credential is: ", aCredential);
        return res
          .status(201)
          .json({ message: "Successfully created the credential!" });
    } catch (error) {
      console.log("An error occurred: ", error);
      return res.status(500).json({ error: error.message });
    }
}

const readCredentials = async (req, res) => {
  try {
    const data = await CredentialModel.find();
    res.status(200).json({
      totalCredentials: data.length,
      data,
    });
  } catch (error) {
    console.log("Error fetching credentials:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = { createCredential, readCredentials };