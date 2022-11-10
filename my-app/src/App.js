import React from 'react'
import Output from './components/Output'
import Signup from './components/Signup'
import { Routes, Route,  BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/"  element={<Signup/>}/>
        <Route  path="/output"  element={<Output  />}/>
      </Routes>
    </BrowserRouter>
  )
}
