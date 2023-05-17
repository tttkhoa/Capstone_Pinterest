const express = require("express");
const rootRouter = express.Router();
const userRouter = require("./userRouter");
const homeRouter = require("./homeRouter");
const detailRouter = require("./detailRouter");
const manageRouter = require("./manageRouter");
const profileRouter = require("./profileRouter");
const uploadRouter = require("./uploadRouter");

rootRouter.use("/user", userRouter);
rootRouter.use("/home", homeRouter);
rootRouter.use("/detail",detailRouter)
rootRouter.use("/manage",manageRouter)
rootRouter.use("/profile",profileRouter)
rootRouter.use("/upload",uploadRouter)

module.exports = rootRouter;
