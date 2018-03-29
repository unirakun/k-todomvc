import { createStore, simpleObject, keyValue } from 'k-ramel'
import listeners from './listeners'

export default createStore(
  {
    data: {
      todos: {
        all: { type: 'keyValue', key: 'id' },
        completed: keyValue({ key: 'id' }),
      },
    },
    ui: {
      newTodo: simpleObject( { defaultData: '' }),
    },
  },
  {
    listeners,
  },
)
