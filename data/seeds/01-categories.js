
exports.seed = function(knex) {
      return knex('categories').insert([
        {id: 1, category: 'dogs'},
        {id: 2, category: 'cats'},
        {id: 3, category: 'ostriches'},
        {id: 4, category: 'dogs'},
        {id: 5, category: 'cats'},
        {id: 6, category: 'ostriches'},
        {id: 7, category: 'dogs'},
        {id: 8, category: 'cats'},
        {id: 9, category: 'ostriches'},
        {id: 10, category: 'dogs'},
        {id: 11, category: 'cats'},
        {id: 12, category: 'ostriches'},
        {id: 13, category: 'people'}
      ])
      .then(() => {
        console.log('\n === Categories Table Seeded === \n'.yellow.bold.underline)
      })
};

