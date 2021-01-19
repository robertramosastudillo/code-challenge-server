const express = require("express");
const routes = require("./routes");

const app = express();

// Enable express.json
app.use(express.json());

// Global route configuration
app.use("/api", routes);

module.exports = app;
