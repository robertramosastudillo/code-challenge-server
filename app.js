const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

// Enable cors
const corsOptions = {
  origin: process.env.FRONTEND_URL,
};
app.use(cors(corsOptions));

// Enable express.json
app.use(express.json());

// Global route configuration
app.use("/api", routes);

module.exports = app;
