const mongoose = require("mongoose");

const connection_string = "mongodb://127.0.0.1:27017/auth-app";

function connectToDb() {
  mongoose.connect(connection_string);

  mongoose.connection.on("connected", () => {
    console.log("Connection to MongoDB successful");
  });

  mongoose.connection.on("error", () => {
    console.log("An error occured");
  });
}

module.exports = { connectToDb };
