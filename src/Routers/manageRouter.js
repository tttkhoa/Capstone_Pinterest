const express = require("express");
const { privateAPI } = require("../Utils/jwt");
const manageRouter = express.Router();
const { getInfoUser, getImgSaved, getImgCreated, deleteImg } = require("../Controllers/manageController");

manageRouter.get('/get-info-user/:id',privateAPI,getInfoUser)
manageRouter.get('/get-img-saved/:id',privateAPI,getImgSaved)
manageRouter.get('/get-img-created/:id',privateAPI,getImgCreated)
manageRouter.delete('/delete-img/:id',privateAPI,deleteImg)

module.exports = manageRouter