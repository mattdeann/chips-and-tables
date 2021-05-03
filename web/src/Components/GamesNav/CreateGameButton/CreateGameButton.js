import React from 'react'
import {Link} from 'react-router-dom'

export default function CreateGame() {

  return (
    <p className="create-game btn">
      <Link to="/newgame">Create Game</Link>
    </p>
  )

  
}
