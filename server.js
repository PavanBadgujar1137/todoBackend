const express = require("express");
const app = express();
// const cors = require("cors"); // Import the cors middleware

require("dotenv").config();
app.use(express.json());

// app.use(cors(corsOptions));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`APP Running Successfully at ${PORT} ....`);
});

const routes = require("./routes/todos");

app.use("/api/v1", routes);

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send("Hello, Ji Backend is Running Successfully!!!!");
});
