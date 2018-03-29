export const onChange = e => ({ type: '@@ui/ADD_TODO_CHANGE', payload: e.target.value })
export const onKeyDown = e => ({ type: '@@ui/ADD_TODO_KEYDOWN', payload: e.keyCode })
