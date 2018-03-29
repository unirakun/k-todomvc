import { connect } from 'react-redux'
import todos from '../../store/reducers/todos'
import Component from './todos'

const mapStateToProps = (state) => ({
  todos: todos.getKeys(state),
})

export default connect(mapStateToProps)(Component)
