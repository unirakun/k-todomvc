import { when } from 'k-ramel'
import { todos } from './reactions'

export default [
  when('@@krml/INIT')(todos.load),
  when('@@http/TODOS>GET>ENDED')(todos.set),
  when('@@ui/TODO_ON_COMPLETE')(todos.toggleComplete),
]
