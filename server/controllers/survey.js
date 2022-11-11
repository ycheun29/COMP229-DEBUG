let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

let Survey = require("../models/survey");

module.exports.displaySurveyList = (req, res, next) => {
  Survey.find((err, list) => {
    if (err) {
      return console.error(err);
    } else {
      res.json(list);
    }
  });
};
