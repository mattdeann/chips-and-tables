const express = require('express')
const app = express()
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


io.on('connection', (socket) => {
  console.log('new client connected');
  socket.emit('connection', null);
});

app.use(cors())
