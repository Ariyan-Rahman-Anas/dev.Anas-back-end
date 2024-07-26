const mongoose = require("mongoose");

const credentialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    degreeTitle: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    instituteURL: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    cto: {
      type: String,
      required: true,
    },
    greeting: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const credentialModel = mongoose.model("credentials", credentialSchema);
module.exports = credentialModel;