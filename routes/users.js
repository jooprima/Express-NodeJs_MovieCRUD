var express = require("express");
var router = express.Router();

// Halaman Login
router.get("/login", function(req, res, next) {
  res.render("login", { title: "Halaman Login" });
});

//Halaman Register
router.get("/register", function(req, res, next) {
  res.render("register", { title: "Halaman Register" });
});

module.exports = router;
