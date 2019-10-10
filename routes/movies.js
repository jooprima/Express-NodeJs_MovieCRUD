var express = require("express");

var router = express.Router();

var Movie = require("../models/MovieSchema");

//Get all movies
router.get("/", function(req, res, next) {
  let ListMovies = [];
  Movie.find(function(err, movies) {
    if (movies) {
      for (let data of movies) {
        ListMovies.push({
          id: data._id,
          name: data.name,
          released_on: data.released_on
        });
      }
      res.render("movie/allMovies", { ListMovies });
    } else {
      ListMovies.push({
        id: "",
        name: "",
        released_on: ""
      });
      res.render("movie/allMovies", { ListMovies });
    }
  });
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
router.post("/create", function(req, res) {
  const { name, date } = req.body;

  let errors = [];

  if (!name || !date) {
    errors.push({ msg: "Silahkan Lengkapi data yang dibutuhkan" });
  }

  if (errors.length > 0) {
    res.render("movie/createMovies", { errors });
  } else {
    const newMovie = Movie({
      name,
      released_on: date
    });
    newMovie
      .save()
      .then(movie => {
        errors.push({ msg: "Data Movie Berhasil Ditambah" });
        res.render("movie/createMovies", { errors });
      })
      .catch(err => console.log(err));
  }
});

//action update
router.put("/update/:movieId", function(req, res) {});

//action delete
router.delete("/delete/:movieId", function(req, res) {});

module.exports = router;
