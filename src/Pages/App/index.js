import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import Layout from 'Layout'
import { Switch, Route, Redirect } from 'react-router-dom'
import { getTokenSelector } from 'Store/auth/selectors'
import Loader from 'Pages/Loader'
import { useInjectSaga } from 'redux-injectors'
import Login from 'Pages/Login'
import RoutesName from './RoutesName'
import loginSaga from '../Login/saga'
import PrivateRoute from './PrivateRoute'
import RedirectHome from './RedirectHome'

function App() {
  const token = useSelector(getTokenSelector)
  useInjectSaga({ key: 'login', saga: loginSaga })
  return (
    <Layout>
      <Helmet titleTemplate="%s - Legend" defaultTitle="Legend">
        <meta name="description" content="Legend" />
      </Helmet>
      <Switch>
        <RedirectHome exact path="/login" component={Login} />
        {RoutesName.map((route, index) => {
          const { path, component } = route
          return <PrivateRoute key={index} exact path={path} component={component} />
        })}
        <Redirect path="" to="/driver" />
      </Switch>
      <Loader />
    </Layout>
  )
}

export default App
