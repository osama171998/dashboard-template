var express = require('express');
var router = express.Router();
const UserController  = require("../controller/user");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/add-user",UserController.AddUser);
router.post("/login",UserController.login);
router.get("/verify-user",UserController.VerifyUser);


module.exports = router;
