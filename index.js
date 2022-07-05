//dependencies
const express = require("express");
const connectMongoose = require("./mongoose");
const todoRouteHandler = require("./routeHandler/todoRouteHandler");

//app initialize
const app = express();
app.use(express.json());

//application route
app.use("/todo", todoRouteHandler);
//listening on port 5000
app.listen(5000, () => {
  connectMongoose().catch(console.error());
  console.log("Server is running on port 5000");
});
