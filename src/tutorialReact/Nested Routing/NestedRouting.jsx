import React from "react";
import AboutUsNested from "./components/AboutUsNested";
import ContactUs from "./components/ContactUs";
import HomeNested from "./components/HomeNested";
import { Link, Outlet } from "react-router-dom";

function NestedRouting() {
  return (
    <div style={{ textAlign: "center", margin: "200px", fontSize: "30px" }}>
      <h1>Welcome to Nested Routing</h1>
      <Link to="homeNested" style={{ textDecoration: "none", color: "orange" }}>
        <p style={{ display: "inline" }}>Home Nested</p>
      </Link>
      <br />
      <Link
        to="contactNested"
        style={{ textDecoration: "none", color: "orange" }}
      >
        <p style={{ display: "inline" }}>Contact Nested</p>
      </Link>
      <br />
      <Link
        to="aboutNested"
        style={{ textDecoration: "none", color: "orange" }}
      >
        <p style={{ display: "inline" }}>About Nested</p>
      </Link>
      <br />
      {/* childrens */}
      <Outlet />
    </div>
  );
}

export default NestedRouting;
