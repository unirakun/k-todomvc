import { connect } from 'react-redux'
import { getTodos } from '../../store/todos.selectors.js'
import Component from './todos'

const mapStateToProps = (state) => ({
  todos: getTodos(state),
})

export default connect(mapStateToProps)(Component)