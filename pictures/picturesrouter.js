const router = require('express').Router()
const Pics = require('./picturesmodel.js')
const {verifyUpload, verifyToken} = require('./picturesmiddleware.js')

router.get('/', (req, res) => {
if (req.query.cat_id){
    Pics.findByCategory(req.query.cat_id)
    .then(pics => {
        res.status(200).json(pics)
    })
    .catch(error => {
        res.status(500).json(error)
    })
} else if (req.query.type_id){
    Pics.findByType(req.query.type_id)
    .then(pics => {
        res.status(200).json(pics)
    })
    .catch(error => {
        res.status(500).json(error)
    })
} else {
Pics.getAll()
.then(pics => {
    res.status(200).json(pics)
})
.catch(error => {
    res.status(500).json(error)
})
} 
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

router.get('/:id', (req, res) => {
    const id = req.params.id
    Pics.findById(id)
    .then(pic => {
        res.status(200).json(pic)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

// router.get('/cat/:id', (req, res) => {
//     const cat_id = req.params.id
//     Pics.findByCategory(cat_id)
//     .then(pics => {
//         res.status(200).json(pics)
//     })
//     .catch(error => {
//         res.status(500).json(error)
//     })
// })

// router.get('/type')


module.exports = router;