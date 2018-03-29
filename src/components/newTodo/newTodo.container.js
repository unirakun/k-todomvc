import { connect } from 'react-redux'
import newTodo from '../../store/reducers/newTodo'
import todos from '../../store/reducers/todos'
import Component from './newTodo'

const makeTodo = label => ({ id: new Date().getTime(), label })

const mapStateToProps = (state) => ({
  newTodo: newTodo.get()(state),
})

const mapDispatchToProps = (dispatch) => ({
  onKeyDown: e => e.which === 13 
    && dispatch(todos.add(makeTodo(e.target.value))) 
    && dispatch(newTodo.reset()),
  onChange: e => dispatch(newTodo.set(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)