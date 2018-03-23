import React, { Component } from 'react'

export default (/* config */) => (WrappedComponent) => {
  return class extends Component {

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
