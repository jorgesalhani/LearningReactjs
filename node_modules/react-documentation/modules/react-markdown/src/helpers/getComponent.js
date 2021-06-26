'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

class H1 extends ReactCSS.Component {
  render() {
    return <h1>{ this.props.children }</h1>
  }
}

class H3 extends ReactCSS.Component {
  render() {
    return <h3>{ this.props.children }</h3>
  }
}

class P extends ReactCSS.Component {
  render() {
    return <p>{ this.props.children }</p>
  }
}

class HR extends ReactCSS.Component {
  render() {
    return <hr />
  }
}

export const getComponent = (type, args) => {
  if (type === 'header') {
    if (args.level === 1) {
      return H1
    }

    if (args.level === 3) {
      return H3
    }
  }

  if (type === 'para') {
    return P
  }

  if (type === 'hr') {
    return HR
  }

  console.log('COMPONENT DOESNT EXIST', type)
  return class Foo extends React.Component {
    render() {
      return <div>{ this.props.children }</div>
    }
  }
}

export default getComponent
