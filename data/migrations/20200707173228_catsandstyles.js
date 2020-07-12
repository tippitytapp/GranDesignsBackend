
exports.up = function(knex) {
    return knex.schema.createTable('categories', cat => {
        cat.increments()
        cat.string('category')
    })
    .createTable('types', type => {
        type.increments()
        type.string('type')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('types')
    .dropTableIfExists('categories')
};
