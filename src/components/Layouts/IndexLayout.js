import React, { Component } from 'react'

class IndexLayout extends Component {

  render() {

    return(

      <div id="index-layout">
        { this.props.children }
      </div>

    )

  }

}

export default IndexLayout
