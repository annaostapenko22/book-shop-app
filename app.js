const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars") 

const app = express();

app.engine("hbs", expressHbs({layoutsDir: "views/layouts", defaultLayout: "main-layout", extname: "hbs"}))
app.set("view engine", "hbs");
// is set by default in our case, this is example
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", {pageTitle: "Page not found!"});
});
// const server = http.createServer(app);

app.listen(3002, () => {
  console.log("Listening...");
});
