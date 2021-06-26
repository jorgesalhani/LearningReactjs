'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

import MaterialStyleSidebarMenu from './MaterialStyleSidebarMenu'

export class MaterialStyleSidebar extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        logo: {
          height: '64px',
          lineHeight: '64px',
          fontSize: '20px',
          background: '#D6000F',
          color: '#fff',
          textAlign: 'center',
          fontSmoothing: 'antialiased',
        },
      },
    }
  }

  render() {
    return (
      <div>
        <div style={ this.styles().logo }><strong>Style</strong>Hub</div>
        <div style={ this.styles().menu }>
          <MaterialStyleSidebarMenu route={ this.props.route } />
        </div>
      </div>
    )
  }
}

export default MaterialStyleSidebar
