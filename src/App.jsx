import './App.css'
import { useState } from 'react'
import ContactList from './components/ContactList.jsx'
import SelectedContact from './components/SelectedContact.jsx'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}  />
      )}
      
    </>
  )
}

export default App
