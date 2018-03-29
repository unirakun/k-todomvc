import { inject } from '@k-ramel/react'
import Component from './todo'

export default inject((store, { id }) => ({
  // data
  ...store.data.todos.all.get(id),
  // callbacks
  onComplete: () => store.dispatch({ type: '@@ui/TODO_ON_COMPLETE', payload: id }),
}))(Component)
