import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../actions'

const initialState = [
  {
    id: 0,
    label: 'Ne pas faire dormir le breizhCamp !',
    completed: true,
  },
  {
    id: 1,
    label: 'Continuer de les intéresser ...',
    completed: false,
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: new Date(),
          completed: false,
          label: action.payload
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.payload
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, label: action.payload } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
