const router = require('express').Router()
const Pics = require('./picturesmodel.js')
const {verifyUpload, verifyToken} = require('./picturesmiddleware.js')

router.get('/', (req, res) => {
    Pics.getAll()
    .then(pics => {
        res.status(200).json(pics)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post('/', verifyToken, verifyUpload, (req, res) => {
    Pics.add(req.body)
    .then(pics => {
        res.status(201).json(pics)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.put('/:id', verifyToken, verifyUpload, (req, res) => {
    const id = req.params.id
    Pics.update(id, req.body)
    .then(pics => {
        res.status(200).json(pics)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})


module.exports = router;