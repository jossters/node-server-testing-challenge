exports.up = function(knex) {
    return knex.schema
    .createTable('jokes', tbl => {
        tbl.increments('joke_id')
        tbl.string('joke_name')
        tbl.string('joke_punchline')
    })
    
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('jokes')
  
};
