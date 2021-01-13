const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      min: 3,
      max: 160,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    body: {
      type: {},
      required: true,
      min: 120,
      max: 2000000,
    },
    excerpt: {
      type: String,
      max: 1000,
    },
    mtitle: {
      type: String,
    },
    mdesc: {
      type: String,
    },
    photo: {
      contentType: String,
      link: String,
    },
    categories: [
      {
        type: ObjectId,
        ref: "Category",
        required: true,
      },
    ],
    tags: [
      {
        type: ObjectId,
        ref: "Tag",
        required: true,
      },
    ],
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      required: true,
    },
    postType: {
      type: String,
      required: true,
    },
    album: { type: Array, default: [] },
    albumName: String,
    videoLink: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
