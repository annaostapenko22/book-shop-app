const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars") 

const app = express();

app.set("view engine", "ejs");
// is set by default in our case, this is example
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", {pageTitle: "Page not found!", path: "/"});
});
// const server = http.createServer(app);

app.listen(3002, () => {
  console.log("Listening...");
});
