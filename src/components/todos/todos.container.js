import { connect } from 'react-redux'
import { getIdTodos } from '../../store/todos.selectors.js'
import Component from './todos'

const mapStateToProps = (state) => ({
  todos: getIdTodos(state),
})

export default connect(mapStateToProps)(Component)