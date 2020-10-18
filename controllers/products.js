const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProducts = (req, res, next) => {
  //   products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      title: "Dog title",
      path: "/shop",
      pageTitle: "Shop",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
    console.log("products here", products);
  });
};