const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const PicturesRouter = require('../pictures/picturesrouter.js')
const AdminRouter = require('../admin/adminrouter.js')
const server=express()
server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('/login', AdminRouter)
server.use('/art', PicturesRouter)

server.get('/', (req, res) => {
    res.status(200).json({message:"API up"})
})

module.exports=server;