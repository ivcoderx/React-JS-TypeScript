import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components'
import { Todos } from './pages/Todos'
import { About } from './pages/About'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route component={ Todos } path="/" exact />
            <Route component={ About } path="/about" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
