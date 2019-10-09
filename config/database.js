//setup connection to mongodb
const mongoose = require("mongoose");
const mongodb = "mongodb://localhost/CRUD_Movie";

mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"));

mongoose.Promise = global.Promise;

module.exports = mongoose;
