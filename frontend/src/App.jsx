import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/NavBar'
import './components/Navbar.css'
// Import other components and pages here

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      
      </Switch>
    </Router>
  )
}

export default App

