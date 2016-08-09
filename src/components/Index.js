import React, { Component } from 'react'

class Index extends Component {

  render() {

    return(

      <div id="index">
        <div className="index-wrap">
          <div className="images">
            <img src={require('../img/rr/react.png')}/>
            <img src={require('../img/rr/redux.png')}/>
          </div>
          <h1>React/Redux Baby</h1>
        </div>
      </div>

    )

  }

}

export default Index
