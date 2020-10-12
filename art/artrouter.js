const router = require("express").Router();
const multer = require('multer')
const Art = require("./artmodal.js");
const { verifyUpload, verifyToken } = require("./artmiddleware.js");

const storage = multer.diskStorage({
    destination: function (req, file, cb) { 
        cb(null, 'public')
    },
    filename: function (req, file, cb) { 
        cb(null, Date.now()+ '-' +file.originalname)
    }
})
const upload = multer({storage: storage}).single('file')

router.get("/", (req, res) => {
  return Art.getAll().then((resp) => res.status(200).json(resp));
});

router.get("/:type", (req, res) => {
  return Art.getArtByType(req.params.type).then((resp) =>
    res.status(200).json(resp)
  );
});

router.post("/", verifyUpload, (req, res) => {
  let art = req.body;
  return Art.addArt(art).then((resp) => {
    res.status(201).json(resp);
  });
});

router.delete("/:id", (req, res) => {
  return Art.delArt(req.params.id).then((resp) => {
    res.status(200).json(resp);
  });
});

router.patch("/:id", verifyUpload, (req, res) => {
  return Art.updateArt(req.params.id, req.body).then((resp) => {
    res.status(200).json(resp);
  });
});

router.post("/img", (req, res) => {
//   console.log(req.body);
//   return Art.addImage(res.body)
//     .then((resp) => res.status(201).json(resp))
//     .catch(console.log);
    upload(req, res, function (err) { 
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) { 
            return res.status(500).json(err)
        } else res.status(200).send(req.file)
    })
});

router.get("/img", (req, res) => {
  return Art.getAllImg()
    .then((resp) => res.status(200).json(resp))
    .catch(console.log);
});

module.exports = router;
