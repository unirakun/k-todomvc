import React, { Component } from 'react'

export default (url) => (WrappedComponent) => {
  return class extends Component {
    static displayName = 'todosFetch'

    componentWillMount = async () => {
      const raw = await window.fetch(url)
      const data = await raw.json()
      
      this.setState((state) => ({
        ...state,
        data,
      }))
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }
}
