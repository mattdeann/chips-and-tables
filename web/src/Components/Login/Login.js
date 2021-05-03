import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAJJwEdLmTgehGVOZOXJU0i2MXkYfUdCbI",
  authDomain: "poker-b0611.firebaseapp.com",
  projectId: "poker-b0611",
  storageBucket: "poker-b0611.appspot.com",
  messagingSenderId: "197769353539",
  appId: "1:197769353539:web:8172b4114d2c2f3530f7f6",
  measurementId: "G-DJ467KH1KH"
}

firebase.initializeApp(firebaseConfig)

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}

function Login({setIsSignedIn}) {
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user)
    });
    return () => unregisterAuthObserver();// Make sure we un-register Firebase observers when the component unmounts.
  }, [])

  return (
    <div>
      <h1>Chips and Tables</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default Login;