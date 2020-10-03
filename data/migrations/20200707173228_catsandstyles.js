exports.up = function (knex) {
  return knex.schema
    .createTable("types", (type) => {
      type.increments();
      type.string("type").notNullable();
    })
    .createTable("tags", (tag) => {
      tag.increments();
      tag.string("tag").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tags").dropTableIfExists("types");
};
