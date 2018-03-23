import React, { Component } from 'react'

export default (url) => (WrappedComponent) => {
  return class extends Component {
    static displayName = 'todoFetch'

    componentWillMount = async () => {
      const raw = await window.fetch(url, { method: 'GET', headers: { 'Accept': 'application/json' } })
      const {message, subtitle} = await raw.json()
      const label = `${message}${subtitle}`
      
      this.setState((state) => ({
        ...state,
        label,
      }))
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }
}
