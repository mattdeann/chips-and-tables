const games = [
  {
    roomName: "First Game Ever",
    players: [
      {
      email: "skingston@gmail.com",
      chipCount: 100,
      myTurn: false,
      currentCards: [
        {
          number: 11,
          suit: "spades"
        },
        {
          number: 12,
          suit: "spades"
        }
      ]
      },
      {
        email: "matthewallandean@gmail.com",
        chipCount: 100,
        myTurn: true,
        currentCards: [
          {
            number: 9,
            suit: "spades"
          },
          {
            number: 10,
            suit: "spades"
          }
        ]
      },
    ],
   round: 1,
    turn: 1,
    deck: [
      {
        number: 2,
        suit: "spades"
      },
      {
        number: 3,
        suit: "spades"
      },
      {
        number: 4,
        suit: "spades"
      },
      {
        number: 5,
        suit: "spades"
      },
      {
        number: 6,
        suit: "spades"
      },
      {
        number: 7,
        suit: "spades"
      }
    ]
  },
  {
    roomName: "Second Game Ever",
    players: [
      {
      email: "skingston@gmail.com",
      chipCount: 100,
      myTurn: false,
      currentCards: [
        {
          number: 10,
          suit: "spades"
        },
        {
          number: 11,
          suit: "spades"
        }
      ]
      },
      {
        email: "matthewallandean@gmail.com",
        chipCount: 100,
        myTurn: true,
        currentCards: [
          {
            number: 9,
            suit: "spades"
          },
          {
            number: 12,
            suit: "spades"
          }
        ]
      },
    ],
   round: 1,
    turn: 1,
    deck: [
      {
        number: 2,
        suit: "spades"
      },
      {
        number: 3,
        suit: "spades"
      },
      {
        number: 4,
        suit: "spades"
      },
      {
        number: 5,
        suit: "spades"
      },
      {
        number: 6,
        suit: "spades"
      },
      {
        number: 7,
        suit: "spades"
      }
    ]
  },
]

export default games