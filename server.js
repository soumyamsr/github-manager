const path = require("path");
const express = require("express");
const middleware = require("webpack-dev-middleware");
const config = require("./webpack.config.js");
const webpack = require("webpack");

const app = express(),
  compiler = webpack(config),
  isDevelopment = process.env.npm_config_env === "development";

app.use(middleware(compiler));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

//serve the files on port 5001
/*eslint-disable no-console*/
app.listen(5001, () => {
  console.log("server started at port 5001");
});
