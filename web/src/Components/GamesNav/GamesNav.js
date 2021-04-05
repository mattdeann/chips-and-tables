import React from 'react'
import {Link} from 'react-router-dom'
import './GamesNav.css'
import CreateGame from './CreateGameButton/CreateGameButton'

export default function GamesNav({games, selectGame}) {
  const gameElements = games.map((game, index) => {
    return (
      <Link 
        to={`/gameroom/${game.gameId}`} 
        onClick={() => selectGame(game.gameId) } 
        key={index} 
      >
      {game.gameId}
      </Link>
    )
  })

  return (
    <nav className="site-nav">
      {gameElements}
      <CreateGame />
    </nav>
  )
}
