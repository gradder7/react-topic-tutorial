import React from "react";
import Portals from "./tutorialReact/Portals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import UseStateHook from "./tutorialReact/Hooks/UseStateHook";
import UseEffectHook from "./tutorialReact/Hooks/useEffectHook/UseEffectHook";
import UseEffectHooksNew from "./tutorialReact/Hooks/useEffectHook/UseEffectHooksNew";
import UseRef from "./tutorialReact/Hooks/UseRef";
import AllComponentContext from "./tutorialReact/Hooks/Context/AllComponentContext";
import UseReducer from "./tutorialReact/Hooks/UseReducer";
import UseMemo from "./tutorialReact/Hooks/useMemo/UseMemo";
import UseMemoComponent from "./tutorialReact/Hooks/useMemo/UseMemocomponent/UseMemoComponent";
import UseCallback from "./tutorialReact/Hooks/useCallback/UseCallback";
import Useparams from "./tutorialReact/Hooks/UseParams/Useparams";
import UseNavigate from "./tutorialReact/Hooks/useNavigate/UseNavigate";
import NavigateComp from "./tutorialReact/Hooks/NavigateComp";
import NestedRouting from "./tutorialReact/Nested Routing/NestedRouting";
import HomeNested from "./tutorialReact/Nested Routing/components/HomeNested";
import ContactUs from "./tutorialReact/Nested Routing/components/ContactUs";
import AboutUsNested from "./tutorialReact/Nested Routing/components/AboutUsNested";
import UseHistory from "./tutorialReact/Hooks/UseHistory/UseHistory";

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
        <Route path="/context" element={<AllComponentContext />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useMemoComponent" element={<UseMemoComponent />} />
        <Route path="/useCallback" element={<UseCallback />} />
        {/* here i pass the dynamic path */}
        <Route path="/useParams/:id/:name" element={<Useparams />} />
        <Route path="/useNavigate" element={<UseNavigate />} />
        <Route path="/navigate" element={<NavigateComp />} />
        <Route path="/nestedRouting/" element={<NestedRouting />}>
          <Route path="homeNested" element={<HomeNested />} />
          <Route path="contactNested" element={<ContactUs />} />
          <Route path="aboutNested" element={<AboutUsNested />} />
        </Route>
      </Routes>
    </Router>
  );
}
