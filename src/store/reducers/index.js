import { combineReducers } from 'redux'
import todos from './todos'
import newTodo from './newTodo'

export default combineReducers({
  data: combineReducers({ todos }),
  ui: combineReducers({ newTodo }),
})
