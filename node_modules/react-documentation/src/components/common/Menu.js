'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

import MenuItem from './MenuItem'

export class Menu extends ReactCSS.Component {

  classes() {
    return {
      'default': {

      },
    }
  }

  render() {
    return (
      <div>
        { this.props.items.map((item, i) => {
          return <MenuItem partialPath={ this.props.route } key={ i } {...item} />
        }) }
      </div>
    )
  }
}

export default Menu
