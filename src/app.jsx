import React, { Fragment } from 'react'
import Todos from './components/todos'
import Header from './components/header'
import Footer from './components/footer'
import Info from './components/info'

const App = () => (
  <Fragment>
    <section className="todoapp">
      <Header />
      <Todos />
      <Footer />
    </section>
    <Info />
  </Fragment>
)

export default App
