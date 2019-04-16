const express = require("express"),
  router = express.Router(),
  Operation = require("../../models/Operation"),
  operationManager = new Operation();

router
  .get("/", function(req, res) {
    try {
      operationManager.list().then(data => res.json(data));
    } catch (error) {
      res.sendStatus(500);
    }
  })
  .post("/", function(req, res) {
    const data = req.body,
      key = operationManager.create(data);

    res.json({ ...data, key });
  });

module.exports = router;
