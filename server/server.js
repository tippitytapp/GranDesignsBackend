const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const ArtRouter = require('../art/artrouter.js')
const AdminRouter = require('../admin/adminrouter.js')
const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/adminlogin', AdminRouter)
// server.use('/art', ArtRouter)

server.get("/", (req, res) => {
  res.status(200).json({ message: "API up" });
});

module.exports = server;
