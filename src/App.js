import React from 'react'
import Portals from './tutorialReact/Portals'
import { BrowserRouter as Router,Routes,Rout, Route } from 'react-router-dom'
import Home from './Home'
import UseStateHook from './tutorialReact/Hooks/UseStateHook';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portals" element={<Portals />} />
        <Route path="/useStateHook" element={<UseStateHook />} />
      </Routes>
    </Router>
  );
}
