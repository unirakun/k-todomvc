import { inject } from '@k-ramel/react'
import Component from './todos'

export default inject(store => ({
  todos: store.data.todos.all.getKeys(),
}))(Component)
