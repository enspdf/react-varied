const mongoose = require("mongoose");
const { mongoURI } = require("../config");

const checkConnection = () => mongoose.connection.readyState;

const connectToDatabase = async () => {
  try {
    if (!checkConnection()) {
      console.log("Connecting to databse");
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
    }

    console.log("Connected to database, connection state", checkConnection());
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectToDatabase };
