const {
  uploadTos3,
  uploadAllFilesToS3,
  deleteObjectFromS3,
} = require("../helpers/s3uploader.js");
const formidable = require("formidable");
const Url = require("url-parse");

exports.upload = (req, res) => {
  console.log("IN UPLOAD CONTROLLER");
  let form = new formidable.IncomingForm();

  form.multiples = true;
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    console.log("IN form parse");
    if (err)
      return res
        .status(400)
        .json({ error: "There's an error occured in parsing form data" });

    const { photos } = files;
    const { key } = fields;

    if (!photos) return res.status(400).json({ error: "No photos received" });
    //check length of files;

    if (photos.length > 1) {
      //use multiple file uploader
      uploadAllFilesToS3(photos, key).then((data) => {
        return res.json({ keys: data, success: "Files uploaded successfully" });
      });
    } else {
      //use single file uploader
      uploadTos3(photos, key).then((data) => {
        return res.json({ keys: data, success: "Files uploaded successfully" });
      });
    }
  });
};

exports.remove = (req, res) => {
  console.log("DELETING OBJECT");

  let form = new formidable.IncomingForm();

  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    const { key } = fields;

    if (!key) return res.status(400).json({ error: "No Link in request" });

    const url = new Url(key);
    const fileKey = url.pathname.slice(1);

    deleteObjectFromS3(fileKey)
      .then((data) => {
        res.json({ key: fileKey });
      })
      .catch((err) => res.json({ error: err }));
  });
};
