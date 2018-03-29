import React from 'react'
import PropTypes from 'prop-types'

const NewTodo = ({
  newTodo,
  onKeyDown,
  onChange,
}) => (
    <input
      className="new-todo"
      name="newTodo"
      placeholder="What needs to be done?"
      autoFocus
      value={newTodo}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  )

NewTodo.propTypes = {
  newTodo: PropTypes.string,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
}

NewTodo.defaultProps = {
  newTodo: '',
  onKeyDown: undefined,
  onChange: undefined,
}

export default NewTodo
