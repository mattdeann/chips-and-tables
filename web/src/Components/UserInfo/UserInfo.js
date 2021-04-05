import React from 'react'
import './UserInfo.css'
import AddFriend from './AddFriend/AddFriend'
import firebase from 'firebase'

export default function UserInfo({user, email}) {
  return (
    <div>
    <section className="my-info">
      <p>Welcome Display Name</p>
      <article className="profile">
        <p>Pic of avatar?</p>
        <section> 
          <p>{email}</p>
          <p>Wins / Stats</p>
        </section>
      </article>
    </section>
    <section className="friends">
    <p>Friends</p>
      <article className="friends-list">
        {user.contacts.map(contact => {
          return <p className="contact">{contact}</p>
        })}
      </article>
      <section className="add-friend">
        <h4>Add Friend</h4>
        <AddFriend user={user} />
      </section>
    </section>
      
    <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
    </div>
  )
}
