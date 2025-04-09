const { log } = require("console");
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const { page, limit } = req.query;

  console.log(`example query: page:${page} - limit:${limit}`);
  res.send("respond with a resource");
});

router.get("/new", function (req, res) {
  console.log("retrieve:",req.currentDate);
  res.send("Respond new Product");
});

router.get("/:productId", function (req, res, next) {
  const { productId } = req.params;
  res.send(`respond with a resource by id: ${productId}`);
});

router.post("/", function (req, res) {
  const { name, secondName } = req.body;
  console.log(`name:${name} - secondName: ${secondName}`);
  res.send(`Create new Product: name:${name} - secondName: ${secondName}`);
});

module.exports = router;
