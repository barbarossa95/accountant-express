var express = require("express");
var router = express.Router();

var operationRouter = require("./operation");

router
  .get("/", function(req, res) {
    res.json(initOperations);
  })
  .post("/", function(req, res) {
    const operation = req.body;

    console.log("New operation posted");

    console.log(operation);

    res.json(operation);
  });

module.exports = router;
