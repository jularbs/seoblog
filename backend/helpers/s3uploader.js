const fs = require("fs");
const AWS = require("aws-sdk");

exports.uploadImageToS3 = async (files) => {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_S3_PUBLICKEY,
    secretAccessKey: process.env.AWS_S3_SECRETKEY,
  });

  const params = {
    Bucket: process.env.AWS_S3_BUCKETNAME,
    Key: files.photo.name,
    Body: fs.readFileSync(files.photo.path),
  };

  const res = await new Promise((resolve, reject) => {
    s3.upload(params, (err, data) =>
      err == null ? resolve(data) : reject(err)
    );
  });

  return res.Location;
};
