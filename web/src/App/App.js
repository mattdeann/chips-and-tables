import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'
import Login from '../Components/Login/Login'
import Header from '../Components/Header/Header'
import GamesNav from '../Components/GamesNav/GamesNav'
import Dashboard from '../Components/Dashboard/Dashboard'
import NewGame from '../Components/NewGame/NewGame'
import Game from '../Components/Game/Game'





function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('')
  const [user, setUser] = useState({})
  const [games, setGames] = useState([{gameId: uuidv4(), players: ["matthewallandean@gmail.com", "skingston@gmail.com"], gameHistory: {}}])
  const [activeGame, setActiveGame] = useState({})


  const handleChange = e => {
    setCurrentMessage(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();


  }

  const startNewGame = (playerEmails) => {
    // DO POST HERE?
    // both of these sets are getting mock objects
    setGames(prevState => {
      return [...prevState, {gameId: uuidv4(), players: playerEmails, gameHistory: {turn: 1, playerChipCounts: {}}}]
    });
    setActiveGame({gameId: uuidv4(), players: playerEmails, gameHistory: {turn: 1, playerChipCounts: {}}
    });
  }

  const selectGame = gameId => {
    const newActiveGame = games.find(game => game.gameId === gameId);

    setActiveGame(newActiveGame);
  }

  const sendMessage = (recipients, text) => {
    
  }



  return (
    isSignedIn 
    ? 
    <Router>
      <main className="app">
        <Header className="header"/>
        <GamesNav games={games} className="nav" selectGame={selectGame} />
        <Switch>
          <Route exact path="/newgame">
            <NewGame user={user} startNewGame={startNewGame} />
          </Route>
          <Route exact path="/gameroom/:id">
            <Game />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard user={user} games={games} />
          </Route>
        </Switch>
      </main>
    </Router>
    :
    <Login setIsSignedIn={setIsSignedIn}/>
  );
}

export default App;
