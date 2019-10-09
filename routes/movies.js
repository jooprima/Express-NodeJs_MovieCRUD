var express = require("express");

var router = express.Router();

//Get all movies
router.get("/", function(req, res, next) {
  res.render("movie/allMovies", { title: "Halaman Get Movies" });
});

//create Movies
router.get("/create", function(req, res, next) {
  res.render("movie/createMovies", { title: "Halaman Create Movie" });
});

//update movies
router.get("/update/:movieId", function(req, res, nest) {
  res.render("movie/updateMovies", {
    title: "Halaman Update Movie",
    movieId: req.params.movieId
  });
});

//action create
router.post("/create", function(req, res) {});

//action update
router.put("/update/:movieId", function(req, res) {});

//action delete
router.delete("/delete/:movieId", function(req, res) {});

module.exports = router;
