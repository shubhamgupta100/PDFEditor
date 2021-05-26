var express = require("express");
const uploadSchema = require("../model/file");
var router = express.Router();
var multer = require("multer");
const path = require("path");
const { extname } = require("path");
const imageData = uploadSchema.find({});

router.use(express.static(__dirname + "./public/"));
var storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({
  storage: storage,
}).single("avatar");
/* GET home page. */
router.post("/", upload, function (req, res, next) {
  var imageName = req.file.filename;
  //   success = req.file.filename + " Uploaded Successfully !";
  var imageDetail = new uploadSchema({
    imageName: imageName,
  });
  imageDetail.save(function (err, doc) {
    if (err) throw err;
    imageData.exec(function (err, data) {
      if (err) throw err;
      res.render("main", {
        imageName,
        title: "Upload A File ....",
      });
    });
  });
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Upload A File ...." });
});

module.exports = router;
