import { CHANGE_NEW_TODO, RESET_NEW_TODO } from '../../constants'

const initialState = ''

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NEW_TODO:
      return action.payload

    case RESET_NEW_TODO:
      return initialState

    default:
      return state
  }
}
