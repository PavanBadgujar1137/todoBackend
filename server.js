const express = require("express");
const app = express();
const cors = require("cors"); // Import the cors middleware

require("dotenv").config();
app.use(express.json());
// Define your CORS options
const corsOptions = {
  origin: "http://127.0.0.1:5501", // Replace with your frontend domain
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

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
