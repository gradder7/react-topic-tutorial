import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// use navigate means on click of something or on update of some thiing redirecte or navigate to this path.
// It helps to go to the specific URL, forward or backward pages
function UseNavigate() {
  const navigate = useNavigate();
  //give the location object having some properties like current path
  //   const location = useLocation();
  //   console.log(location);

  const gotHomePage = () => {
    navigate("/");
  };

  //   we use navigate(-1) to go to previous page
  const gotPrevPage = () => {
    navigate(-1);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Use Navigate hook</h1>
      <button onClick={gotHomePage}>Go to Home Page</button>
      <button onClick={gotPrevPage}>Go to Prev Page</button>
    </div>
  );
}

export default UseNavigate;
