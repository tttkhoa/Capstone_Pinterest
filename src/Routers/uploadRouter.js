const express = require("express");
const { privateAPI } = require("../Utils/jwt");
const upload = require('../Utils/upload')
const { uploadImage } = require("../Controllers/uploadController");
const uploadRouter = express.Router();

uploadRouter.post('/upload-img',upload.single("file"),privateAPI,uploadImage)

module.exports = uploadRouter