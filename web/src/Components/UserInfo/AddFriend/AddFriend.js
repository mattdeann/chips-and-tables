import React, {useState} from 'react'

export default function AddFriend({user}) {
  const [currentFriendEmail, setCurrentEmail] = useState("")
  const [friends, setFriends] = useState(user.contacts)

  const handleSubmit = e => {
    e.preventDefault()
    // need to send new friends list to server, to trigger rerender for UserInfo. Currently new friend ends up in local function state only.
    setFriends(prevState => {
      return [...prevState, currentFriendEmail]
    }, setCurrentEmail(""))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="add-player-email">Email</label>
      <input id="add-player-email" value={currentFriendEmail} onChange={e => {setCurrentEmail(e.target.value)}} />
      <button type="submit">Add Player</button>
    </form>
  )
}
