const todos = [
  { id: 0, label: 'Ne pas faire dormir le breizhCamp !', completed: true },
  { id: 1, label: 'Continuer de les intéresser ...', completed: false },
]

module.exports = {
  POST: todo => {
    todos.push({ ...todo, id: todos.length })
    return todos
  },
  GET: () => {
    return todos
  },
}
