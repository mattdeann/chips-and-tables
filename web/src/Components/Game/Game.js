import React from 'react'

const api = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const socket = require("socket.io-client")(api, {
  withCredentials: false // WARN: please do not do this in production
});

export default function Game() {
  socket.on('connection', () => {
    console.log("connected to socket!");
  })

  return (
    <div>
      <section className="game-room">

      </section>
      <section className="game-chat">
        <article>
          All Messages
        </article>
        <form>
          <input />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  )
}
