const ProjectModel = require("./../model/ProjectModel");
const cloudUploader = require("./../controller/cloudUploader");

//posting a project
const createProject = async (req, res, next) => {
  try {
    const { category, name, details, frontTech, backTech, aside, liveLink, frontCode, backCode } =
      req.body;

    const file = req.file
    if (!file) {
      res.status(404).json({
        success: false,
        message: "No file uploaded.",
      })
    }

    const img_res = await cloudUploader(file);

    const newProject = await ProjectModel.create({
      category,
      name,
      details,
      frontTech,
      backTech,
      frontCode,
      backCode,
      liveLink,
      aside,
      image: img_res.secure_url,
    });
    res.status(201).json({
      success: true,
      message: "Project posted Successfully!",
      newProject
    });
  } catch (error) {
    next(error)
  }
}

//getting all projects
const getAllProjects = async (req, res, next) => {
  try {
    const projects = await ProjectModel.find({})
    if (!projects || projects.length < 1) {
      res.status(404).json({
        success: false,
        message: "No projects found.",
      })
    }
    res.status(200).json({
      success: true,
      message: "Projects fetched successfully!",
      totalProjects: projects.length,
      projects
    });
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createProject,
  getAllProjects,
};