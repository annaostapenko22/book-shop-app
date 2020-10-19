const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      title: "All prods",
      path: "/products",
      pageTitle: "Shop",
    });
  });
};


exports.getCart = (req, res, next) => {
    res.render("shop/cart", {
      // prods: products,
      title: "Cart",
      path: "/cart",
      pageTitle: "Cart",
      // hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
    // console.log("products here", products);
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
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
}

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    // prods: products,
    title: "checkout",
    path: "/checkout",
    pageTitle: "Cart",
    // hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
  // console.log("products here", products);
};

