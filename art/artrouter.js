const router = require("express").Router();
const Art = require("./artmodal.js");
const { verifyUpload, verifyToken } = require("./artmiddleware.js");

router.get("/", (req, res) => {
  return Art.getAll().then((resp) => res.status(200).json(resp));
});

router.get("/:type", (req, res) => {
  return Art.getArtByType(req.params.type).then((resp) =>
    res.status(200).json(resp)
  );
});

router.post("/", (req, res) => {
  let art = req.body;

  return Art.addArt(art).then((resp) => {
    res.status(201).json(resp);
  });
});

router.delete("/:id", (req, res) => {
  return Art.delArt(req.params.id).then((resp) => {
    console.log(resp)
    res.status(203).json(resp);
  });
});

router.patch("/:id", (req, res) => {
  return Art.updateArt(req.params.id, req.body).then((resp) => {
    res.status(200).json(resp);
  });
});


module.exports = router;
