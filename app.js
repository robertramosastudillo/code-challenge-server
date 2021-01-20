const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

// Enable cors
app.use(cors());

// Enable express.json
app.use(express.json());

// Global route configuration
app.use("/api", routes);

module.exports = app;
