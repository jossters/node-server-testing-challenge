
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jokes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert([
        {joke_name: 1, joke_punchline: 'rowValue1'},
        {joke_name: 2, joke_punchline: 'rowValue2'},
        {joke_name: 3, joke_punchline: 'rowValue3'}
      ]);
    });
};
