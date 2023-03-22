import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Welcome to React Tutorial </h1>
      <div style={{ margin: "90px", fontSize: "30px" }}>
        <Link to="/portals" style={{ textDecoration: "none" }}>
          Portals
        </Link>
      </div>
    </div>
  );
}

export default Home;
