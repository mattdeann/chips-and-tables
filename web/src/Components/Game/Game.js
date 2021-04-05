import React , {useState} from 'react'

const api = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const socket = require("socket.io-client")(api, {
  withCredentials: false // WARN: please do not do this in production
});

export default function Game() {
  socket.on('connection', () => {
    console.log("connected to socket!");
  })

  const [chatInput, setChatInput] = useState('');

  const handleChange = e => {
    setChatInput(e.target.value)
  }

  // on submit, send a POST to the API
  const handleSubmit = e => {
    e.preventDefault()

    
  }

  return (
    <div>
      <section className="game-room">

      </section>
      <section className="game-chat">
        <article>
          All Messages
        </article>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={chatInput} />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  )
}
