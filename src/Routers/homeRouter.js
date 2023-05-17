const express = require("express");
const { getImage, getImageSearch } = require("../Controllers/homeController");
const homeRouter = express.Router();

homeRouter.get("/get-image",getImage);
homeRouter.get("/get-image-search/:keyword",getImageSearch);

module.exports = homeRouter