const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const notFoundPageController = require("./controllers/error");

app.set("view engine", "ejs");
// is set by default in our case, this is example
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(notFoundPageController.get404);
// const server = http.createServer(app);

app.listen(3002, () => {
  console.log("Listening...");
});
