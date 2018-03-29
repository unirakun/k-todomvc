import { connect } from 'react-redux'
import { onChange, addNewTodo, resetNewTodo } from '../../store/actions'
import Component from './newTodo'

const mapStateToProps = (state) => ({
  newTodo: state.ui.newTodo,
})

const mapDispatchToProps = (dispatch) => ({
  onKeyDown: e => e.which === 13 && dispatch(addNewTodo(e)) && dispatch(resetNewTodo(e)),
  onChange: e => dispatch(onChange(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
