import React from 'react'
import './UserInfo.css'
import AddFriend from './AddFriend/AddFriend'
import firebase from 'firebase'

export default function UserInfo({user, email}) {
  return (
    <div>
      <section className="my-info">
        {email}
      </section>
        
      <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
    </div>
  )
}
