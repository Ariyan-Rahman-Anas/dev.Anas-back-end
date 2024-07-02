const ProjectModel = require("./../model/ProjectModel");
const cloudUploader = require("./../controller/cloudUploader");

//posting a project
const createAProject = async (req, res) => {
    const { title, details, aside, liveLink, frontCode, backCode } =
      req.body;
    const file = req.file
    if (!file) return res.status(400).send("Please select an image");
    try {
        const img_res = await cloudUploader(file);
        const aProject = await ProjectModel.create({
          title,
          details,
          liveLink,
          frontCode,
          aside,
          backCode,
          image: img_res.secure_url,
        });
        console.log("The new project is: ", aProject);
        return res
          .status(201)
          .json({ message: "Successfully created the project!" });
    } catch (error) {
    console.log("error occurred: ", error);
    return res.status(500).json({ error: error.message });
        
    }
}

//getting all projects
const readProjects = async (req, res) => {
    try {
        const data = await ProjectModel.find()
        res.status(200).json({ totalProjects: data.length, data });
    } catch (error) {
        console.log("error with fetching projects ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
  createAProject,
  readProjects,
};