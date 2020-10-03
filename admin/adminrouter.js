const router = require('express').Router()
const bcryptjs = require('bcryptjs');
const supersecretadminpw = process.env.SUPER_SEC;
const token = process.env.TOKEN;
const {passHash} = require('../art/artmiddleware.js')

const newPass = passHash(supersecretadminpw)

router.post('/', (req, res) => {
    const user = req.body
    if(!user || !user.name || user.name !== "grandesigns" || !user.password ||  !bcryptjs.compareSync(user.password, newPass )){
        res.status(401).json({message: "username or password incorrect"})
    } else {
        res.status(200).json({token: token})
    }
})


module.exports = router;