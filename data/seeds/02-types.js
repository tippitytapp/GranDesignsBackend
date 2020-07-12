const colors = require('colors');


exports.seed = function(knex) {
      return knex('types').insert([
        {id: 1, type: 'canvas painting'},
        {id: 2, type: 'framed painting'},
        {id: 3, type: 'framed canvas painting'},
        {id: 4, type: "painted stone"},
        {id: 5, type: "other"}
      ])
      .then(() => {
        console.log('\n === Types table seeded === \n'.magenta.bold.underline)
      })
};
