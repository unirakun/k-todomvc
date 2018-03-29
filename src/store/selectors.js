export const getIdTodos = state => state.data.todos.all.keys
export const getTodos = state => state.data.todos.all.array
export const getTodo = state => id => state.data.todos.all.array[id]
export const getNewTodo = state => state.ui.newTodo
