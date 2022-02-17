import { useState } from 'react'
import logo from './logo.svg'
import './styles/tailwind.css'
import Index from './pages/Index'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Meter from './pages/Meter'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />}>   
        </Route>
        <Route exact path="/dashboard" element={<Dashboard/>}>
        </Route>
        <Route exact path="/meter" element={<Meter/>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
