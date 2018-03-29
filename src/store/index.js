import { createStore, compose } from 'redux'
import reducers from './reducers'

const store = createStore(
  reducers,
  compose(
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

export default store
