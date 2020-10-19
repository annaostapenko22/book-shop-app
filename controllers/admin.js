const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProducts = (req, res, next) => {
  //   products.push({ title: req.body.title });
  const title = req.body.title;
  const imgUrl = req.body.imgUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, description, imgUrl, price);

  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      title: "Admin prods",
      path: "/admin/products",
      pageTitle: "Admin prods",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
    console.log("products here", products);
  });
};
