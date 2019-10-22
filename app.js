const express = require("express");

const expHbs = require("express-handlebars");

const path = require("path");

const fileUpload = require("express-fileupload")


const app = express();

const dataBase = require("./dataBase").getInstance();
dataBase.setModels();

app.listen(3000, () => {console.log('server startoval')});
app.use(express.static(path.join(__dirname, "static")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use (fileUpload());

global.appRoot = __dirname;

app.engine(
  ".hbs",
  expHbs({
    extname: ".hbs",
    defaultLayout: null
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));


const { RenderPage } = require("./controllers");
const { userRouter, houseRouter, authRouter } = require("./router");

app.get("/", RenderPage.mainPage);
app.get("/auth", RenderPage.authPage);
app.get("/usersRegister", RenderPage.registerPage);
app.get("/housesRegister", RenderPage.housePage);

app.use("/user", userRouter);
app.use("/house", houseRouter);
app.use("/auth", authRouter);

app.all("*", (req, res, next, error) => {
  console.log(error);
  res.render("error");
});
