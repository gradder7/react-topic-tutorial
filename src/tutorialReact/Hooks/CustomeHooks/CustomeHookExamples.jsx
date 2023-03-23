import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function CustomeHookExamples() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome To the custome Hook Examples</h1>
      <Link to="/counter">Counter App Using Custome Hook</Link>
    </div>
  );
}

export default CustomeHookExamples;
