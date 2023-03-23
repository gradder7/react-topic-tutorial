import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to React Tutorial </h1>
      <div style={{ margin: "90px", fontSize: "30px" }}>
        <Link to="/portals" style={{ textDecoration: "none", color: "orange" }}>
          <p style={{ display: "inline" }}>Portals</p>
        </Link>
        <br />
        <Link
          to="/useStateHook"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>UseStateHook()</p>
        </Link>
        <br />
        <Link
          to="/useEffectHook"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>UseEffectHoook()</p>
        </Link>
        <br />
        <Link
          to="/useEffectHooknew"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>UseEffectHoook() another Example</p>
        </Link>
        <br />
        <Link to="/useRef" style={{ textDecoration: "none", color: "orange" }}>
          <p style={{ display: "inline" }}>UseRefs()</p>
        </Link>
        <br />
        <Link to="/context" style={{ textDecoration: "none", color: "orange" }}>
          <p style={{ display: "inline" }}>Context</p>
        </Link>
        <br />
        <Link
          to="/useReducer"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>UseReducer()</p>
        </Link>
        <br />
        <Link to="/useMemo" style={{ textDecoration: "none", color: "orange" }}>
          <p style={{ display: "inline" }}>UseMemo() with Function</p>
        </Link>
        <br />
        <Link
          to="/useMemoComponent"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>UseMemo() with Component</p>
        </Link>
        <br />
        <Link
          to="/useCallback"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>useCallback()</p>
        </Link>
        <br />
        <Link
          to="/useParams"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>useParams()</p>
        </Link>
        <br />
        <Link
          to="/useNavigate"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>useNavigate()</p>
        </Link>
        <br />
        <Link
          to="/navigate"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>Navigate</p>
        </Link>
        <br />
        <Link
          to="/nestedRouting"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>Nested Routing</p>
        </Link>
        <br />
      </div>
    </div>
  );
}

export default Home;
