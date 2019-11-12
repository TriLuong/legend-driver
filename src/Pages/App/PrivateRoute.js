import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getTokenSelector } from 'Store/auth/selectors'

const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props => (token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/user',
            state: { from: props.location }
          }}
        />
      ))}
  />
)
const mapStateToProps = createStructuredSelector({
  token: getTokenSelector
})

export default connect(mapStateToProps)(PrivateRoute)
