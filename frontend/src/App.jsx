import { useState } from 'react'
import './App.css'
import ProfileEditor from './components/ProfileEditor'
import BookList from './components/BookList'
import RoleSwticher from './components/RoleSwticher'

function App() {

  return (
    <div>
      <ProfileEditor/>
      <RoleSwticher/>
      <BookList/>
    </div>
  )
}

export default App
