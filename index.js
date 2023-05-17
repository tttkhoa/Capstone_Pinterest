const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("."));
app.listen(8080);
const rootRouter = require('./src/Routers/rootRouter')
app.use("/api",rootRouter)