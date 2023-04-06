var express = require("express");
var router = express.Router();
var record = require("../controller/record");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello");
});
// router.post("/", function (req, res, next) {
//   res.json({ name: "HELLO" });
// });
router.post("/", record);
module.exports = router;
