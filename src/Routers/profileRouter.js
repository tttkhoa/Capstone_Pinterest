const express = require("express");
const { privateAPI } = require("../Utils/jwt");
const upload = require('../Utils/avatar')
const { editProfile } = require("../Controllers/profileController");
const profileRouter = express.Router();

profileRouter.put('/edit-profile/:id',upload.single("file"),privateAPI,editProfile)

module.exports = profileRouter