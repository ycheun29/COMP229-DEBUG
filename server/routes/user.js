let express = require("express");
let router = express.Router();

let indexController = require("../controllers/user");

/* POST Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* POST Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);

module.exports = router;
