import { inject } from '@k-ramel/react'
import hocFetch from './todos.fetch'
import Component from './todos'

export default inject(store => ({
  todos: store.data.todos[store.ui.footer.get().filter].getKeys(),
  allCompleted: store.data.todos.all.getLength() === store.data.todos.completed.getLength(),
  onCompleteAll: () => store.dispatch('@@ui/HEADER_ON_COMPLETE_ALL'),
}))(
  hocFetch('/todos.json')(Component)
)
