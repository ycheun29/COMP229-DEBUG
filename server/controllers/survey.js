let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

let Survey = require("../models/survey");

module.exports.getSurveyList = (req, res, next) => {
  Survey.find((err, list) => {
    if (err) {
      return console.error(err);
    } else {
      res.json(list);
    }
  });
};

module.exports.addSurvey = (req, res, next) => {
  let item = req.body;

  Survey.create(req.body, (err, Survey) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({ success: true, msg: "Successfully Added New Survey" });
    }
  });
};

module.exports.updateSurvey = (req, res, next) => {
  let id = req.params.id;
  let item = req.body;

  Survey.updateOne({ _id: id }, item, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Edited Survey",
        survey: item,
      });
    }
  });
};

module.exports.deleteSurvey = (req, res, next) => {
  let id = req.params.id;

  Survey.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({ success: true, msg: "Successfully Deleted Survey" });
    }
  });
};
