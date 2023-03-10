const express = require("express");
const itemRoutes = require('./routes/item.routes')
const jwt = require("jsonwebtoken");

const cors=require("cors")

 const db = require('./database-mysql');


const app = express();
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.ACCESS_TOKEN_SECRET);
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
