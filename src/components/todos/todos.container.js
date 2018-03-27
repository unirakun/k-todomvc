import hocFetch from './todos.fetch'
import Component from './todos'

export default hocFetch('/todos.json')(Component)
