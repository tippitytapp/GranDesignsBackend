const token = process.env.TOKEN;
const bcryptjs = require('bcryptjs');
const password = process.env.SUPER_SEC;

const verifyUpload = (req, res, next) => {
    const art = req.body;
    console.log("ART", art)
    if (!art) {
        res.status(400).json({
            message: "Information Required to Post"
        })
    } else if (!art.title || !art.price || !art.src || !art.alt || !art.type_id){
        res.status(400).json({
            message: "Title, Price, Src, Alt, and Type are all required fields"
        })
    } else {
        next()
    }
}

const verifyToken = (req, res, next) => {
    if (req.headers.authorization !== token){
        res.status(401).json({
            message: "You must be logged in to post"
        })
    } else {
        next()
    }
}

const passHash = password => {
    const hash = bcryptjs.hashSync(password);
    return hash;
}

module.exports = {
    verifyUpload,
    verifyToken,
    passHash
}