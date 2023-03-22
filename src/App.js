import React from 'react'
import Portals from './tutorialReact/Portals'
import { BrowserRouter as Router,Routes,Rout, Route } from 'react-router-dom'
import Home from './Home'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portals' element={<Portals/>}/>
      </Routes>
    </Router>
  )
}
