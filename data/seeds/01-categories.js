
exports.seed = function(knex) {
      return knex('types').insert([
        {id: 0, type: 'painting'},
        {id: 1, type: 'rockart'},
        {id: 2, type: 'decor'},
      ])
      .then(() => {
        console.log('\n === Types Table Seeded === \n'.yellow.bold.underline)
      })
};

