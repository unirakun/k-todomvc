export const ADD_TODO = 'ADD_TODO'
export const CHANGE_NEW_TODO = 'CHANGE_NEW_TODO'
export const RESET_NEW_TODO = 'RESET_NEW_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const COMPLETE_ALL = 'COMPLETE_ALL'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

export const addNewTodo = e => ({ type: ADD_TODO, payload: e.target.value.trim() })
export const resetNewTodo = e => ({ type: RESET_NEW_TODO })
export const onChange = e => ({ type: CHANGE_NEW_TODO, payload: e.target.value.trim() })
