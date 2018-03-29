import React from 'react'
import PropTypes from 'prop-types'
import NewTodo from '../newTodo'
import cn from 'classnames'

const Header = ({
  style,
  className,
}) => (
  <header style={style} className={cn('header', className)}>
    <h1>todos</h1>
    <NewTodo />
  </header>
)

Header.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Header.defaultProps = {
  style: undefined,
  className: undefined,
}

export default Header
