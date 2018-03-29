import { connect } from 'react-redux'
import Component from './todos'

const mapStateToProps = (state) => ({
  todos: state.data.todos.map(todo => todo.id),
})

export default connect(mapStateToProps)(Component)
