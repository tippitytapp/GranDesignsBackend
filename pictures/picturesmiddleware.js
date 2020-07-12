const token = process.env.TOKEN;

const verifyUpload = (req, res, next) => {
    const post = req.body;
    if (!post){
        res.status(400).json({
            message: "Information Required to Post"
        })
    } else if (!post.title || !post.price || !post.dimensions || !post.cat_id || !post.type_id){
        res.status(400).json({
            message: "Title, Price, Dimensions, Category, and Type are all required fields"
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

module.exports = {
    verifyUpload,
    verifyToken
}