const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb+srv://sg350:XK6QamadFiyP9yOy@cluster0.hhfth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

mongoose.connect("mongodb://localhost/PDF");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We are connected");
});
