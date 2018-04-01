import { createStore, keyValue } from 'k-ramel'

export default createStore({
  data: {
    todos: keyValue({ key: 'id', defaultData: [] }),
  },
})
