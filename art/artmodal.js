const db = require("../data/dbConfig.js");

function getAll() {
  return db("art");
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

function getArtByType(type) {
    return db("art").join("types", "art.type_id", "=", "types.id").select("*");
}

module.exports = {
  getAll,
  addArt,
  delArt,
    updateArt,
  getArtByType
};
