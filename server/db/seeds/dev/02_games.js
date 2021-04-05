exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
  .then(function () {
    // Inserts seed entries
    return knex('games').insert([
      {
        gameId: '16630afb-12d5-4ae7-bd5c-0d6d621676a4',
        gameState: {
          "players": [
            {
              "email": "deanma95@gmail.com",
              "chips": 100,
              "cards": [
                {
                  "number": 5,
                  "suit": "hearts"
                },
                {
                  "number": 6,
                  "suit": "hearts"
                },
              ]
            },
            {
              "email": "third@email.com",
              "chips": 100,
              "cards": [
                {
                  "number": 7,
                  "suit": "hearts"
                },
                {
                  "number": 8,
                  "suit": "hearts"
                },
              ]
            }
          ],
          "pot": 0,
          "round": 1,
          "currentTurn": 1,
        },
        messages: {
          sender: "deanma95@gmail.com",
          message: "hi there"
        }
      }
    ]);
  });
};
