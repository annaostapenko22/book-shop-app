const path = require("path");

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = []

router.get("/add-product", (req, res, next) => {
  console.log("In the miffleware");
  // res.send(
  //   "<form action='/admin/add-product' method='POST'><input type='text' name='title'><button>click</button></form>"
  // );
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // next();
});

router.post("/add-product", (req, res, next) => {
  console.log("req body", req.body);
  products.push({title: req.body.title})
  res.redirect("/shop");
});

exports.routes = router;
exports.products = products;
