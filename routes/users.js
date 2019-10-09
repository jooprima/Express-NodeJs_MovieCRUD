var express = require("express");
var router = express.Router();

var User = require("../models/UserSchema");

// Halaman Login
router.get("/login", function(req, res, next) {
  res.render("login", { title: "Halaman Login" });
});

//Halaman Register
router.get("/register", function(req, res, next) {
  res.render("register", { title: "Halaman Register" });
});

//Action register
router.post("/register", function(req, res) {
  const { name, email, password, password2 } = req.body;

  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Silahkan lengkapi data anda !" });
    console.log("Silahkan lengkapi data anda");
  }

  if (password != password2) {
    errors.push({ msg: "Password tidak sama" });
    console.log("Password tidak sama");
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        console.log("Email sudah ada");
        errors.push({ msg: "Email Sudah ada" });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });
        newUser
          .save()
          .then(user => {
            console.log("Selamat anda berhasil Registrasi,Silahkan Login");
            res.redirect("/auth/login");
          })
          .catch(err => console.log(err));
      }
    });
  }
});

module.exports = router;
