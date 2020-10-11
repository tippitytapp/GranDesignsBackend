exports.up = function (knex) {
  return knex.schema.createTable("images", (img) => {
    img.increments();
    img.text("name").notNullable().unique();
    img.binary("file").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("images");
};
