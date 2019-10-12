//setup connection to mongodb
const mongoose = require("mongoose");
const mongodb =
  "mongodb://joo:jooprima@crudmovie-shard-00-00-w5jw0.mongodb.net:27017,crudmovie-shard-00-01-w5jw0.mongodb.net:27017,crudmovie-shard-00-02-w5jw0.mongodb.net:27017/crudmovie?ssl=true&replicaSet=crudmovie-shard-0&authSource=admin&retryWrites=true";

// update string url terbaru
// mongodb://joo:jooprima@crudmovie-shard-00-00-w5jw0.mongodb.net:27017,crudmovie-shard-00-01-w5jw0.mongodb.net:27017,crudmovie-shard-00-02-w5jw0.mongodb.net:27017/crudmovie?ssl=true&replicaSet=crudmovie-shard-0&authSource=admin&retryWrites=true

mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// mongoose.connect(...).catch(err => console.log(err))

mongoose.Promise = global.Promise;

module.exports = mongoose;
