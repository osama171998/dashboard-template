var express = require('express');
var router = express.Router();
const UserController  = require("../controller/user");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/get-user",UserController.AddUser);

module.exports = router;
