import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import NewTodo from '../newTodo'
import cn from 'classnames'

const Header = ({
  style,
  className,
  newTodo,
  onKeyDown,
  onChange,
}) => (
  <header style={style} className={cn('header', className)}>
    <h1>todos</h1>
    <NewTodo
      newTodo={newTodo}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  </header>
)

Header.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  newTodo: PropTypes.string,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
}

Header.defaultProps = {
  style: undefined,
  className: undefined,
  newTodo: '',
  onKeyDown: undefined,
  onChange: undefined,
}

export default onlyUpdateForPropTypes(Header)
