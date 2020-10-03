const router = require('express').Router()
const Pics = require('./picturesmodel.js')
const {verifyUpload, verifyToken} = require('./picturesmiddleware.js')



module.exports = router;