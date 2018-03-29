import { connect } from 'react-redux'
import Component from './todo'

const mapStateToProps = (state, { id }) => ({
  ...state.data.todos.filter(todo => todo.id === id)[0],
})

export default connect(mapStateToProps)(Component)
