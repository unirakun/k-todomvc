import * as types from './constants'

export const addNewTodo = e => ({ type: types.ADD_TODO, payload: e.target.value.trim() })
export const resetNewTodo = e => ({ type: types.RESET_NEW_TODO })
export const onChange = e => ({ type: types.CHANGE_NEW_TODO, payload: e.target.value.trim() })
