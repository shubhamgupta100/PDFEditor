const mongoose = require("mongoose");
const uploadSchema = new mongoose.Schema(
  {
    imageName: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
      default: Date.now,
      index: { expires: "1m" },
    },
  },
  {
    timestamps: true,
  }
);

const Upload = mongoose.model("Upload", uploadSchema);
module.exports = Upload;
