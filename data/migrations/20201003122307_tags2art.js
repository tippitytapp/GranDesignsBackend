exports.up = function (knex) {
  return knex.schema.createTable("t2a", (t2a) => {
    t2a.increments();
    t2a
      .integer("tag_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("tags")
      .onUpdate("CASCADE")
        .onDelete("CASCADE");
      t2a
        .integer("art_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("art")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("t2a")
};
