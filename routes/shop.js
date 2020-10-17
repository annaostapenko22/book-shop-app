const path = require("path");

const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log("shop", adminData.products);
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    title: "Dog title",
    path: "/shop",
    pageTitle: "Shop",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // next();
});
module.exports = router;
