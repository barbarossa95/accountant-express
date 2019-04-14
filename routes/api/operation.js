var express = require("express");
var router = express.Router();

var operationRouter = require("./operation");

router.get("/", function(req, res) {
  res.json({
    test: "balalayka"
  });
});

module.exports = router;
