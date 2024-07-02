const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema(
  {
    title: {
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
    liveLink: {
      type: String,
      required: true,
    },
    frontCode: {
      type: String,
      required: true,
    },
    backCode: {
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