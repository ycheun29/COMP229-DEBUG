let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

// enable jwt
let jwt = require("jsonwebtoken");
let DB = require("../config/db");

// create the User Model instance
let userModel = require("../models/user");
let User = userModel.User; // alias

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // console.log(err);
    // console.log(user);
    // console.log(info);
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({
        success: false,
        msg: "Username or password is incorrect",
      });
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }

      const payload = {
        id: user._id,
        username: user.username,
      };

      const authToken = jwt.sign(payload, DB.Secret, {
        expiresIn: 604800, // 1 week
      });

      return res.json({
        success: true,
        msg: "User Logged in Successfully!",
        user: {
          id: user._id,
          username: user.username,
        },
        token: authToken,
      });
    });
  })(req, res, next);
};

module.exports.processRegisterPage = (req, res, next) => {
  // instantiate a user object
  let newUser = new User({
    username: req.body.username,
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        req.flash(
          "registerMessage",
          "Registration Error: User Already Exists!"
        );
        console.log("Error: User Already Exists!");
        return res.json({
          success: false,
          msg: "User Already Exists!",
        });
      }
      return res.json({
        success: false,
        msg: error,
      });
    } else {
      return res.json({ success: true, msg: "User Registered Successfully!" });
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.json({ success: true, msg: "User Successfully Logged out!" });
};
