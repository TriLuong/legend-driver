import React from 'react'
import { useSelector } from 'react-redux'
import Layout from 'Layout'
import { Switch, Route, Redirect } from 'react-router-dom'
import { getTokenSelector } from 'Store/auth/selectors'
import Loader from 'Pages/Loader'
import { useInjectSaga } from 'redux-injectors'
import RoutesName from './RoutesName'
import loginSaga from '../Login/saga'

const NotFound = () => <div>NOT FOUND</div>

function App() {
  const token = useSelector(getTokenSelector)
  useInjectSaga({ key: 'login', saga: loginSaga })
  return (
    <Layout>
      <Switch>
        {RoutesName.map((route, index) => {
          const { path, component } = route
          return <Route exact key={index} path={path} component={component} />
        })}
        {!token && (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )}
        <Route path="" component={NotFound} />
      </Switch>
      <Loader />
    </Layout>
  )
}

export default App
