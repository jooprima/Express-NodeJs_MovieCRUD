var express = require("express");
var router = express.Router();

const { CekAuth, forwardAuth } = require("../config/auth");

//Halaman welcome
router.get("/", forwardAuth, function(req, res, next) {
  res.render("welcome", { title: "Halaman Welcome" });
});

//Halaman Dashboard
router.get("/dashboard", CekAuth, function(req, res, next) {
  res.render("dashboard", { title: "Halaman Dashboard" });
});

module.exports = router;
