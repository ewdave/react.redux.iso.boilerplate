import React, { Component } from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'

//Layouts
import IndexLayout from './components/Layouts/IndexLayout'

//Routes
import Index from './components/Index'

export default (
  <span>
    <Route path="/" component={IndexLayout}>
      <IndexRoute component={Index}/>
      <Redirect path="*" to="/"/>
    </Route>
  </span>
)
