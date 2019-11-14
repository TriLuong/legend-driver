import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import Layout from 'Layout'
import { Switch, Route, Redirect } from 'react-router-dom'
import { getTokenSelector } from 'Store/auth/selectors'
import { getUserSelector } from 'Store/user/selectors'
import { extendToken } from 'Store/auth/actions'
import Loader from 'Pages/Loader'
import { useInjectSaga } from 'redux-injectors'
import Login from 'Pages/Login'
import RoutesName from './RoutesName'
import loginSaga from '../Login/saga'
import PrivateRoute from './PrivateRoute'
import RedirectHome from './RedirectHome'

function App() {
  useInjectSaga({ key: 'login', saga: loginSaga })
  const [isExtendToken, setIsExtendToken] = useState(false)
  const dispatch = useDispatch()
  const token = useSelector(getTokenSelector)
  const user = useSelector(getUserSelector)

  useEffect(() => {
    if (!isExtendToken && user) {
      const refreshToken = user.refreshToken
      dispatch(extendToken({ refreshToken }))
      setIsExtendToken(true)
    }
  }, [token])

  return (
    <Layout>
      <Helmet titleTemplate="%s - Legend" defaultTitle="Legend">
        <meta name="description" content="Legend" />
      </Helmet>
      <Switch>
        {RoutesName.map((route, index) => {
          const { path, component } = route
          return <PrivateRoute key={index} exact path={path} component={component} />
        })}
        <RedirectHome path="/user" component={Login} />
        <Route path="/user" render={props => <Login {...props} />} />
        <Redirect path="" to="/driver" />
      </Switch>
      <Loader />
    </Layout>
  )
}

export default App
