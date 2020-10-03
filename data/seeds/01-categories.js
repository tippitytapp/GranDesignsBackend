
exports.seed = function(knex) {
      return knex('types').insert([
        {id: 1, type: 'painting'},
        {id: 2, type: 'rockart'},
        {id: 3, type: 'decor'},
      ])
      .then(() => {
        console.log('\n === Types Table Seeded === \n'.yellow.bold.underline)
      })
};

