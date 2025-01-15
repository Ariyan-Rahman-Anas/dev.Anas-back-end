const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["Non-Functional", "Front-End", "Full-Stack"],
    },
    name: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    frontTech: {
      type: [String],
      required: true,
    },
    backTech: {
      type: [String],
    },
    frontCode: {
      type: String,
      required: true,
    },
    backCode: {
      type: String,
    },
    liveLink: {
      type: String,
      required: true,
    },
    aside: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const projectModel = mongoose.model("projects", projectSchema);
module.exports = projectModel;