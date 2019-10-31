import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import FirebaseHelper from 'Utils/FirebaseHelper'
import { configureStore } from 'Store/configureStore'
import history from 'Utils/history'

import App from 'Pages/App'
import * as serviceWorker from './serviceWorker'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'Assets/scss/app.scss'

FirebaseHelper.init()

export const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
