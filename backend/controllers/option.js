const Option = require("../models/option");
const { errorHandler } = require("../helpers/dbErrorHandlers");

exports.create = (req, res) => {
  const { key, value } = req.body;

  let option = new Option({ key, value, updatedBy: req.profile._id });

  option.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.list = (req, res) => {
  Option.find({})
    .select("key value")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
};

exports.read = (req, res) => {
  const key = req.params.key;

  Option.findOne({ key }).exec((err, option) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    if (!option) {
      return res.status(400).json({
        error: "Option key invalid",
      });
    }
    res.json(option);
  });
};

exports.remove = (req, res) => {
  const key = req.params.key;

  Option.findOneAndRemove({ key }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    if (!data) {
      return res.status(400).json({
        error: "Option key invalid",
      });
    }

    res.json({
      message: "Option deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  const { key, value } = req.body;

  Option.findOne({ key }).exec((err, option) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    if (!option) {
      return res.status(400).json({
        error: "Option Key Invalid",
      });
    }
    //change updated by
    option.value = value;
    option.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      res.json(data);
    });
  });
};
