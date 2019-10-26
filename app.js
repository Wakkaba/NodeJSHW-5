const express = require("express");
const expHbs = require("express-handlebars");
const path = require("path");
const fileUpload = require("express-fileupload")

const app = express();
const dataBase = require("./dataBase").getInstance();
dataBase.setModels();

const http = require('http').createServer(app);
const io = require("socket.io")(http);
const chatUsers = {}
const supportChannel = ['Support'];

io.on('connection', socket => {
  socket.on('new-user', userName =>{
    chatUsers[socket.id] = userName
    socket.broadcast.emit('user-connected', userName)
  })
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', {message: message, name: chatUsers[socket.id]})
  })
  socket.on('disconnect', () =>{
    socket.broadcast.emit('user-disconnected', chatUsers[socket.id])
    delete chatUsers[socket.id] 
  })
  socket.on('joinChannel',(channel) =>{
    if(supportChannel.includes(channel)) {
      socket.join(channel);
      io.of('/suport')
      .in(channel).emit('newUser', 'New user connected channel' + channel)
    
      return socket.emit('Welcome to support','What is your problem?')
    } else {
      return socket.emit('err',"Support is currently unavailable" + channel)
    }
   
  })
  
});

http.listen(3000, () => {console.log('server startoval')});
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
app.get("/support", RenderPage.supportPage)



app.use("/user", userRouter);
app.use("/house", houseRouter);
app.use("/auth", authRouter);

app.all("*", (req, res, next, error) => {
  console.log(error);
  res.render("error");
});
