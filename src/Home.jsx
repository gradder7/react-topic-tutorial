import React from "react";
import { Link } from "react-router-dom";

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
        <Link
          to="/useRef"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>UseRefs()</p>
        </Link>
        <br />
        <Link
          to="/context"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>Context</p>
        </Link>
        <br />
        <Link
          to="/useReducer"
          style={{ textDecoration: "none", color: "orange" }}
        >
          <p style={{ display: "inline" }}>UseReducer()</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
