exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 1,
        email: 'deanma95@gmail.com',
        displayName: 'Matt',
        friends: ['second@email.com']
      },
      {
        id: 2,
        email: 'second@email.com',
        displayName: 'Carol',
        friends: ['third@email.com']
      },
      {
        id: 3,
        email: 'third@email.com',
        displayName: 'Jost',
        friends: ['second@email.com']
      }
    ]);
  });
};