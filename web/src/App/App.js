import React, {useState, useEffect, useRef} from 'react';
import './App.css';

const api = process.env.REACT_APP_API_URL || 'http://localhost:8000'

const socket = require("socket.io-client")(api, {
  withCredentials: false // WARN: please do not do this in production
});


function App() {
  socket.on('connection', () => {
    console.log("connected to socket!")
  })

  return (
    <div className="App">
    </div>
  );
}

export default App;
