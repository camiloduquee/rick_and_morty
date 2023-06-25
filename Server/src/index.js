// const { conn } = require("./db/DB_connection");
const { database } = require("./db/DB_connection");
const express = require("express");
const server = express();
const router = require("./routes/index");
require("dotenv").config();

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json());
server.use("/rickandmorty", router);

database.sync({ alter: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`Server raised in port: ${process.env.PORT}`);
  });
});

module.exports = express;
