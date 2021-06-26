'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

export class MenuItem extends ReactCSS.Component {

  constructor(props) {
    super()
    var splitPath = String(props.partialPath).split('/')
    this.state = {
      isOpen: splitPath[0] === props.label || false,
      splitPath: splitPath,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  classes() {
    return {
      'default': {
        children: {
          display: 'none',
        },
        row: {
          display: 'flex',
          padding: '10px',
          cursor: 'pointer',
        },
        label: {
          flex: '1',
        },
        arrow: {
          display: 'none',
        },
      },
      'has-children': {
        arrow: {
          display: 'block',
        },
      },
      'open': {
        item: {
          background: '#eee',
        },
        children: {
          display: 'block',
        },
        arrow: {
          transform: 'rotate(180deg)',
        },
      },
      'active': {
        label: {
          fontWeight: 'bold',
        },
      },
    }
  }

  styles() {
    return this.css({
      'has-children': this.props.children != null,
      'open': this.state.isOpen,
      'active': this.state.splitPath.length === 1,
    })
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div style={ this.styles().item }>
        <div style={ this.styles().row }>
          <div style={ this.styles().label } onClick={ this.handleClick }>{ this.props.label }</div>
          <div style={ this.styles().arrow }>v</div>
        </div>

        { this.props.children ? <div style={ this.styles().children }>
          { this.props.children.map((item, i) => {
            return <MenuItem key={ i } partialPath={ this.state.splitPath.unshift() } {...item} />
          }) }
        </div> : null }

      </div>
    )
  }
}

export default MenuItem
