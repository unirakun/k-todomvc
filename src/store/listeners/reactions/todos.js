import { reaction } from 'k-ramel'

export const load = reaction((action, store, { http }) => {
  http('TODOS').get('/todos.json')
})

export const set = reaction(({ payload }, store) => {
  store.data.todos.all.set(payload)
})

export const toggleComplete = reaction((action, store) => {
  const todo = store.data.todos.all.get(action.payload)
  store.data.todos.all.update({ id: action.payload, completed: !todo.completed })
})
