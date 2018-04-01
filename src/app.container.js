import { provider } from '@k-ramel/react'
import App from './app'
import store from './store'

export default provider(store)(App)
