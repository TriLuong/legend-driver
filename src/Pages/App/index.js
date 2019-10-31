import React from 'react'
import Layout from 'Layout'
import { Switch, Route } from 'react-router-dom'
import Login from 'Pages/Login'
import LoadHistory from 'Pages/LoadHistory'
import LoadDetail from 'Pages/LoadDetail'
import Chatbot from 'Pages/Chatbot'
// import './App.css'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={LoadHistory} />
        <Route path="/login" component={Login} />
        <Route path="/loadDetail" component={LoadDetail} />
        <Route path="/chatbot" component={Chatbot} />
        <Route path="/error" />
      </Switch>
    </Layout>
  )
}

export default App
