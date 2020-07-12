const router = require('express').Router()
const supersecretadminpw = process.env.SUPER_SEC;
const token = process.env.TOKEN;


router.post('/', (req, res) => {
    const user = req.body
    if(!user || !user.name || user.name !== "grandesigns" || !user.password || user.password !== supersecretadminpw){
        res.status(401).json({message: "username or password incorrect"})
    } else {
        res.status(200).json({token: token})
    }
})

module.exports = router;