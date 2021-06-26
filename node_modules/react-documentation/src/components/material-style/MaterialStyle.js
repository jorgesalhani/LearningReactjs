'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

import MaterialStyleSidebar from './MaterialStyleSidebar'
import Breadcrumbs from '../common/Breadcrumbs'
import Markdown from '../../../modules/react-markdown/src/index'

const markdownTest = `
//Welcome.

The following Style Guide is a tool for developers and designers to use to ensure that a consistent design
experience is maintained throughout GrubCentral. If you’re looking for either the visual design language or
front-end code used across GrubCentral, you’re in the right place!

Additionally, the living Style Guide is meant to grow and evolve alongside GrubCentral. As improvements are
made across the platform, they’ll immediately be updated in the style guide so that you’ll always have the most
up to date information.

---

//# Be Principled

As a GrubHub Product Designer, the following principles are in place to guide our design process and serve as
solid footing for which all GrubHub products are built upon. The desire to create innovative products starts, and
ends, with a mutual respect and understanding of our design principles.
`

export class MaterialStyle extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        wrap: {
          display: 'flex',
          alignItems: 'stretch',
          Absolute: '0 0 0 0',
        },
        sidebar: {
          minWidth: '200px',
          maxWidth: '200px',
          background: '#fafafa',
        },
        content: {
          flex: '1',
        },
        divider: {
          margin: '0 15px',
          boxShadow: 'inset 0 -1px 0 #eee',
        },
        body: {
          padding: '30px',
        },
      },
    }
  }

  render() {
    return (
      <div style={ this.styles().wrap }>
        <div style={ this.styles().sidebar }>
          <MaterialStyleSidebar route={ this.props.route } />
        </div>
        <div style={ this.styles().content }>
          <div style={ this.styles().divider }>
            <Breadcrumbs route={ this.props.route } />
          </div>
          <div style={ this.styles().body }>
            <Markdown text={ markdownTest }/>
          </div>
        </div>
      </div>
    )
  }
}

export default MaterialStyle
