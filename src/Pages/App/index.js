import React from 'react'
import { useSelector } from 'react-redux'
import Layout from 'Layout'
import { Switch, Route, Redirect } from 'react-router-dom'
import { getTokenSelector } from 'Store/auth/selectors'
import Loader from 'Pages/Loader'
import RoutesName from './RoutesName'

function App() {
  const token = useSelector(getTokenSelector)
  return (
    <Layout>
      <Switch>
        {RoutesName.map((route, index) => {
          const { path, component } = route
          return <Route key={index} exact path={path} component={component} />
        })}
        {!token && <Redirect to="/login" />}
        <Route path="/error" />
      </Switch>
      <Loader />
    </Layout>
  )
}

export default App
