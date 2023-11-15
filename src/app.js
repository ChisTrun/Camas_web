const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require('passport');
const session = require('express-session');
const auth_r = require(path.join(__dirname,'/routes/auth.r'));
const pages_r = require(__dirname + "/routes/pages_r");
const index_r = require(__dirname + "/routes/index_r");
require("dotenv").config();
const hbs = require('express-handlebars');

const app = express();
const port = process.env.PORT;

app.engine('hbs', hbs.engine({extname: ".hbs"}));
app.set('view engine', 'hbs');
app.set('views', __dirname + "/views");

app.use(express.static(__dirname +"/public"))
app.use(express.urlencoded({ extended: true }));

app.use(session({secret: "MyUser"}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(auth_r);
app.use("/pages",pages_r);
app.use("/",index_r);
app.use((err,req,res,next) => {
  res.status(500).send(err);
})


app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
