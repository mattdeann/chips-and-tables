import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import './NewGame.css'

export default function NewGame({user, startNewGame}) {
  // players are a list of emails (array or strings)
  const [playerEmails, setPlayers] = useState([user.email])
  const [currentEmail, setCurrentEmail] = useState("")

  const addPlayer = e => {
    e.preventDefault()
    setPlayers(prevState => {
      return [...prevState, currentEmail]
    }, setCurrentEmail(""))
  }

  const sendNewGameData = e => {
    e.preventDefault()
    startNewGame(playerEmails) 
  }

  return (
    <div>
      <article className="new-game">
        <form onSubmit={sendNewGameData}>
          <label htmlFor="add-player-email">Email</label>
          <input id="add-player-email" value={currentEmail} onChange={e => {setCurrentEmail(e.target.value)}} />
          <button onClick={addPlayer}>Add Player</button>
          <Link to="/gameroom" onClick={sendNewGameData}>Start Game</Link>
        </form>
        <section className="added-players">
          {playerEmails.map((player, index) => <p key={index} >{player}</p>)}
        </section>
      </article>
    </div>
  )
}
