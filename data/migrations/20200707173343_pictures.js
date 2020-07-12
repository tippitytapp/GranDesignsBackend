
exports.up = function(knex) {
  return knex.schema.createTable('pictures', pics => {
    pics.increments()
    pics.string('title')
        .notNullable()
    pics.decimal('price')
        .notNullable()
    pics.string('dimensions')
        .notNullable()
    pics.string('description')
    pics.string('img_url')
    pics.integer('cat_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    pics.integer('type_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pictures')
};
