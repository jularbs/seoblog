const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const optionSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      reguired: true,
      index: true,
      unique: true,
      max: 64,
    },
    value: {
      type: String,
    },
    updatedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Option", optionSchema);
