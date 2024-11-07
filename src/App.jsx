// import { useState } from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from "./NavBar"
import MailboxList from "./MailboxList"
import MailboxForm from "./MailboxForm"
import MailboxDetails from "./MailboxDetails"
// src/App.jsx

const App = () => {

  const initialState = [
    {
      _id: 1,
      boxSize: 'Small',
      boxholder: 'Alex',
    }
  ]

const [mailboxes, setMailboxes] = useState(initialState)

const addbox = (newMailBoxDetails) => {
  newMailBoxDetails._id = mailboxes.length + 1;
  setMailboxes([...mailboxes, newMailBoxDetails])
}
  return (
    <div>
      <NavBar />
      <h1>Welcome to the Post Office!</h1>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes = {mailboxes}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes = {mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addbox = {addbox} />} />
      </Routes>
    </div>
  )
};

export default App;
