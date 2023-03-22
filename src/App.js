import React from "react";
import Portals from "./tutorialReact/Portals";
import { BrowserRouter as Router, Routes, Rout, Route } from "react-router-dom";
import Home from "./Home";
import UseStateHook from "./tutorialReact/Hooks/UseStateHook";
import UseEffectHook from "./tutorialReact/Hooks/useEffectHook/UseEffectHook";
import UseEffectHooksNew from "./tutorialReact/Hooks/useEffectHook/UseEffectHooksNew";
import UseRef from "./tutorialReact/Hooks/UseRef";
import AllComponentContext from "./tutorialReact/Hooks/Context/AllComponentContext";
import UseReducer from "./tutorialReact/Hooks/UseReducer";


export default function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portals" element={<Portals />} />
        <Route path="/useStateHook" element={<UseStateHook />} />
        <Route path="/useEffectHook" element={<UseEffectHook />} />
        <Route path="/useEffectHooknew" element={<UseEffectHooksNew />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/context" element={<AllComponentContext/>} />
        <Route path="/useReducer" element={<UseReducer/>} />
      </Routes>
    </Router>
  );
}
