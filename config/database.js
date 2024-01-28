const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DATA_BASE_URL)
    .then(console.log("DB Conection Successfully..."))
    .catch((error) => {
      console.log("Issue in db Connection!!!!!!!");
    });
};

module.exports = dbConnect;
