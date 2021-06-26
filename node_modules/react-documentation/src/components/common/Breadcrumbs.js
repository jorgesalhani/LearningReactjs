'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

export const getLinkPath = (path, location) => {
  var string = ''

  path.map((pathItem, i) => {
    if (i <= location) {
      if (i !== 0) {
        string += '/'
      }

      string += pathItem
    }
  })

  return string
}

export class Breadcrumbs extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        breadcrumbs: {
          height: '64px',
          lineHeight: '64px',
          padding: '0 5px',
        },
        item: {

        },
        link: {

        },
        slash: {
          padding: '0 10px',
        },
      },
    }
  }

  render() {
    return (
      <div style={ this.styles().breadcrumbs }>
        { this.props.route.split('/').map((routeItem, i) => {

          if (this.props.route.split('/').length !== i + 1) {
            return (
              <span style={ this.styles().item } key={ i }>
                <a href={ getLinkPath(this.props.route.split('/'), i) } style={ this.styles().link }>{ routeItem }</a>
                <span  style={ this.styles().slash }>/</span>
              </span>
            )
          } else {
            return <span style={ this.styles().item } key={ i }>{ routeItem }</span>
          }

        }) }
      </div>
    )
  }
}

export default Breadcrumbs
