// export { default as Login } from './Login'
// export { default as ResetPassword } from './ResetPassword'
// export { default as ForgotPassword } from './ForgotPassword'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import ResetPassword from './ResetPassword'
import ForgotPassword from './ForgotPassword'

const ViewLogin = ({ match }) => {
  console.log(match)
  return (
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} />
      <Route exact path={`${match.url}/login`} render={props => <Login {...props} />} />
      <Route path={`${match.url}/forgotPassword`} render={props => <ForgotPassword {...props} />} />
      <Route path={`${match.url}/resetPassword`} render={props => <ResetPassword {...props} />} />
    </Switch>
  )
}

export default ViewLogin
