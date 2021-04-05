exports.up = function(knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id').primary()
      table.string('email')
      table.string('displayName')
      table.specificType('friends', 'text[]')

      table.timestamps(true,true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users')
};
