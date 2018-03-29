import { inject } from '@k-ramel/react'
import Component from './header'


export default inject(store => ({
  // data
  newTodo: store.ui.newTodo.get(),
}))(Component)
