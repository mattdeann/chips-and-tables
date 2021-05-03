exports.up = function(knex) {
  return knex.schema
    .createTable('games', function (table) {
      table.increments('id').primary()
      table.string('gameId')
      table.json('gameState')
      table.json('messages')
      table.timestamps(true,true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('games')
};