exports.up = function (knex) {
  return knex.schema
    .createTable("art", (art) => {
      art.increments();
      art.string("title").notNullable();
      art.decimal("price").notNullable();
      art.string("size");
      art.string("description");
      art.string("src").notNullable();
      art.string("alt").notNullable();
      art.string("tags")
      art
        .integer("type_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("types")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      art.boolean("custom").defaultTo(false);
    })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("art");
};
