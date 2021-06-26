'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

import Menu from '../common/Menu'

export class MaterialStyleSidebarMenu extends ReactCSS.Component {

  classes() {
    return {
      'default': {

      },
    }
  }

  render() {
    return (
      <div>
        <Menu items={[
          {
            label: 'Overview',
          },
          {
            label: 'Design',
            children: [
              {
                label: 'foo bar',
              },
            ],
          },
          {
            label: 'Components',
            children: [
              {
                label: 'foo bar',
              },
            ],
          },
          {
            label: 'Layouts',
            children: [
              {
                label: 'foo bar',
              },
            ],
          },
          {
            label: 'Resources',
            children: [
              {
                label: 'foo bar',
              },
            ],
          },
        ]} route={ this.props.route } />
      </div>
    )
  }
}

export default MaterialStyleSidebarMenu
