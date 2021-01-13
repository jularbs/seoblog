const fs = require("fs");
const AWS = require("aws-sdk");

//TO FIX
//add multiple file upload
//check if file exists
//if update > delete previous file
//create sign on key to make sure there are no duplicates

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_PUBLICKEY,
  secretAccessKey: process.env.AWS_S3_SECRETKEY,
});

exports.uploadTos3 = (file, folder) => {
  return new Promise((resolve, reject) => {
    s3.upload(
      {
        Key: `${folder}/${file.name}`,
        Bucket: process.env.AWS_S3_BUCKETNAME,
        Body: fs.readFileSync(file.path),
      },
      (err, data) => {
        if (err) return reject(err);
        return resolve(data.Location);
      }
    );
  }); 
};

exports.asyncUploadToS3 = async (file, folder) => {
  return this.uploadTos3(file, folder);
}

exports.uploadAllFilesToS3 = async (files, folder) => {
  return Promise.all(files.map(file => this.asyncUploadToS3(file, folder)));
}

exports.uploadImageToS3 = async (files) => {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_S3_PUBLICKEY,
    secretAccessKey: process.env.AWS_S3_SECRETKEY,
  });

  const params = {
    Bucket: process.env.AWS_S3_BUCKETNAME,
    Key: `featuredimage/${files.photo.name}`,
    Body: fs.readFileSync(files.photo.path),
  };

  const res = await new Promise((resolve, reject) => {
    s3.upload(params, (err, data) =>
      err == null ? resolve(data) : reject(err)
    );
  });

  return res.Location;
};

exports.deleteObjectFromS3 = async (file) => {
    const params = {
      Bucket: process.env.AWS_S3_BUCKETNAME,
      Key: file
    };

    const res = await new Promise((resolve, reject) => {
      s3.deleteObject(params, (err, data) =>
        err == null ? resolve(data) : reject(err)
      );
    });

    return res;



}