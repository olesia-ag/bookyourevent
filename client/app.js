import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Homepage from './components/homepage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Routes />
    </div>
  )
}

export default App
