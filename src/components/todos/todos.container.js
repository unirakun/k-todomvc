import hocFetch from './todos.fetch'
import loader from 'hoc-react-loader'
import { compose } from 'recompose'
import Component from './todos'

export default compose(
  hocFetch('/todos.json'),
  loader({ print: ['data'] }),
)(Component)
