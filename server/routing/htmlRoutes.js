var express = require("express");
var path = require("path");
var app = express.Router();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

//route for saved articles
app.get("/saved", function(req, res) {
res.sendFile(path.join(__dirname, "../../public/saved.html"));
});

app.get("*", function(req, res) {
res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = app;