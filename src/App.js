import React from 'react'
import Login from 'Pages/Login'
import './App.css'
import FirebaseHelper from 'Utils/FirebaseHelper'

FirebaseHelper.init()

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
