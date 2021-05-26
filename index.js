var express = require("express");
var path = require("path");
const port = process.env.PORT || 5000;
const db = require("./config/mongoose");

var indexRouter = require("./routes/index");

var app = express();
app.use(express.static("public"));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Router
app.use("/", indexRouter);

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server is running on port :", port);
});

module.exports = app;
