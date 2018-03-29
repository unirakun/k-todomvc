import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Todos from './components/todos'
import Header from './components/header'
import Footer from './components/footer'
import Info from './components/info'

const App = ({ todos, newTodo, onChange, onKeyDown }) => (
  <Fragment>
    <section className="todoapp">
      <Header newTodo={newTodo} onChange={onChange} onKeyDown={onKeyDown} />
      <Todos todos={todos} />
      <Footer />
    </section>
    <Info />
  </Fragment>
)

App.propTypes = {
  todos: PropTypes.array,
  newTodo: PropTypes.string,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
}

App.defaultProps = {
  todos: [],
  newTodo: '',
  onKeyDown: undefined,
  onChange: undefined,
}

export default App
