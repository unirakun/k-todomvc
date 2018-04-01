import { when } from 'k-ramel'
import { listen, inject } from '@k-ramel/react'
import { compose } from 'recompose'
import Todos from './todos'

const load = (action, store, drivers) => {
  drivers.http('TODOS').get('/todos.json')
}

const set = (action, store) => {
  store.data.todos.set(action.payload)
}

const setCompleted = ({ payload }, store) => {
  const todo = store.data.todos.get(payload)

  store.data.todos.update({ id: payload, completed: !todo.completed })
}

const listeners = [
  when('@@krml/LISTENERS>ADDED')(load),
  when('@@http/TODOS>GET>ENDED')(set),
  when('@@ui/CLICKED/COMPLETED')(setCompleted),
]

const mapStore = store => ({
  todos: store.data.todos.getKeys(),
})

export default compose(
  listen(listeners),
  inject(mapStore),
)(Todos)
