import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'

require('./sass/app.scss')

import Routes from './routes'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>
  , document.getElementById('root')
)
