import { inject } from '@k-ramel/react'
import Todo from './todo'

const mapStore = (store, ownProps) => ({
  ...store.data.todos.get(ownProps.id),
  onComplete: () => store.dispatch({ type: '@@ui/CLICKED/COMPLETED', payload: ownProps.id }),
})

export default inject(mapStore)(Todo)
