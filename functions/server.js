//Allows routing
import serverless from "serverless-http";
//Runs server using express
import express from "express";
//Allows frontend to communicate with backend
import cors from "cors";
//Middleware parsing data and populated to req,res objects
import bodyParser from "body-parser";
//React, no explanation needed
import React from "react";
import { renderToString } from "react-dom/server";

//App component from src file
import App from "../src/App";

const ReactExpressServer = "react-express-ssr";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Html = ({ body, styles, title }) => {
  const stylesheet = styles ? `<style>${styles}</style>` : "";
};
