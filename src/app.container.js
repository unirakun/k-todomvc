import App from './app'
import { connect } from 'react-redux'
import { onChange, addNewTodo, resetNewTodo } from './store/actions'

const mapStateToProps = (state) => ({
  todos: state.data.todos,
  newTodo: state.ui.newTodo,
})

const mapDispatchToProps = (dispatch) => ({
  onKeyDown: e => e.which === 13 && dispatch(addNewTodo(e)) && dispatch(resetNewTodo(e)),
  onChange: e => dispatch(onChange(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
