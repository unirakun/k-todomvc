import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import App from './app.container'

const Wrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Wrapper
