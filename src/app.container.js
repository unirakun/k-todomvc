import App from './app'
import { connect } from 'react-redux'
import { getTodos, getNewTodo } from './store/selectors'
import { onChange, onKeyDown } from './store/actions'

const mapStateToProps = (state) => ({
  todos: getTodos(state),
  newTodo: getNewTodo(state),
})

const mapDispatchToProps = (dispatch) => ({
  onKeyDown: e => dispatch(onKeyDown(e)),
  onChange: e => dispatch(onChange(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
