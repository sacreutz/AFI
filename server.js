import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { request } from "https";

var Home = require("./client/src/Pages/Home/Home");
var Symba = require("./client/src/Pages/Symba/Symba");

var express = require("express");
var app = express();
var cors = require("cors");
var ReactRouter = require("react-router");

//uses cloud's port or localhost 5000
var PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(request, response) {
  var html = ReactDOMServer.renderToString(React.createElement(Home));
  response.send(html);
});

//app.listen always goes at the end of your code
app.listen(PORT, function() {
  console.log("App listening on PORT:" + PORT);
});
