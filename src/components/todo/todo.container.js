import { connect } from 'react-redux'
import { getTodo } from '../../store/todos.selectors.js'
import Component from './todo'

const mapStateToProps = (state, { id }) => ({
  ...getTodo(state)(id),
})

export default connect(mapStateToProps)(Component)