let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

let passport = require("passport");

let surveyController = require("../controllers/survey");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

router.get("/", surveyController.getSurveyList);
router.post("/add", surveyController.addSurvey);
router.post("/edit/:id", surveyController.updateSurvey);
router.post("/delete/:id", surveyController.deleteSurvey);

module.exports = router;
