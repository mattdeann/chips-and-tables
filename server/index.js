const express = require('express')
const app = express()
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const httpServer = require('http').createServer(app)
const cors = require('cors')
const port = process.env.PORT || 8000

app.set('port', port)

const server = app.listen(port, () => console.log(`listening on port ${port}`))

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    allowHeaders: '*',
    credentials: false,
    methods: ['GET', 'POST']
  }
})

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next()
})


// Socket events
io.on('connection', (socket) => {
  console.log('new client connected');
  socket.emit('connection', null);
});

app.use(cors())

// Database Interactions

app.get(`/api/v1/users/:id`, async (req, res) => {
  try {
    const user = await database('users').where({email: req.params.email}).first().then(row => row);

    res.status(200).json(user);
  } catch(error) {
    res.status(500).json({ error });
  }
});


// GET A SINGLE GAME'S MESSAGES
// USES GAMEID SET WITH UUID ON FRONT END
app.get('/api/v1/games/messages/:id', async (req, res) => {
  try {
    const game = await database('games').where({gameId: req.params.id})

    const messages = game.messages

    res.status(200).json(messages)
  } catch (error) {
    res.status(500).json({ error })
  }
})

app.post('/messages', async (req, res) => {
  try {
    const message = await knex('messages').insert({
      message: req.body.message,
      user_name: req.body.user_name
    }, 'message')
    res.status(201).json( { message } )
  } catch (error) {
    res.status(500).json( { error } )
  }
})