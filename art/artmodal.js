const db = require("../data/dbConfig.js");
const axios = require("axios");
const FormData = require("form-data");
let data = new FormData();

function getAll() {
  return db("art as a").join("types as t", "t.id", "a.type_id");
}
async function addArt(art) {
  let [id] = await db("art").insert(art, "id");
  return findArtById(id);
}
function findArtById(id) {
  return db("art").where({ id });
}
function delArt(id) {
  return db("art")
    .where({ id })
    .first()
    .delete()
    .then((res) => {
      return getAll();
    });
}
function updateArt(id, udArt) {
  return db("art")
    .where({ id })
    .update(udArt, "id")
    .then((res) => db("art"));
}
async function getArtByType(type) {
  const art = await db("art as a").join("types as t", "t.id", "a.type_id");
  return art.filter((art) => art.type === type);
}
function getAllImg() {
  return db("images");
}
function getImg(id) {
  return db("images").where({ id });
}
function addImage(image) {
  return db("images").insert(image, "id");
}

module.exports = {
  getAll,
  addArt,
  delArt,
  updateArt,
  getArtByType,
  addImage,
  getImg,
  getAllImg,
};
