import { connect } from 'react-redux'
import todos from '../../store/reducers/todos'
import Component from './todo'

const mapStateToProps = (state, { id }) => ({
  ...todos.get(id)(state),
})

export default connect(mapStateToProps)(Component)
