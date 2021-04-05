import React from 'react'
import './Dashboard.css'
import firebase from 'firebase'
import Header from '../Header/Header'
import UserInfo from '../UserInfo/UserInfo'

export default function Dashboard({user}) {

  // GET THE USER BY EMAIL, LOAD THEIR DATA INTO DASHBOARD


  return (
    <main className="dashboard">
      <UserInfo />
    </main>
  )
}