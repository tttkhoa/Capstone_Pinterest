const express = require("express");
const { privateAPI } = require("../Utils/jwt");
const { getInfoImage, getComment, saveImage, postComment, isImgSaved } = require("../Controllers/detailController");
const detailRouter = express.Router();

detailRouter.get("/get-image-info/:id",getInfoImage)
detailRouter.get("/get-comment-info/:id",getComment)
detailRouter.post("/save-image",privateAPI,saveImage);
detailRouter.post("/post-comment",privateAPI,postComment)
detailRouter.get('/is-img-saved',privateAPI,isImgSaved)

module.exports = detailRouter