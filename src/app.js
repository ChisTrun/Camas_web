const express = require("express");
const cors = require("cors");
const api = require(__dirname + "/routes/api");
const page = require(__dirname + "/routes/pages");
const default_r = require(__dirname + "/routes/default_r");
require("dotenv").config();
const hbs = require('express-handlebars');

const app = express();
const port = process.env.PORT;

app.engine('hbs', hbs.engine({extname: ".hbs"}));
app.set('view engine', 'hbs');
app.set('views', __dirname + "/views");

app.use(express.static(__dirname +"/public"))
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", api);
app.use("/pages",page);
app.use("/",default_r);
app.use((err,req,res,next) => {
  res.status(500).send("error")
})


app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
