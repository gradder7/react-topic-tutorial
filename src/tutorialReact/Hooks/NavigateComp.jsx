import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

//Navigate is an element when you want to navigate to other pages
// Navigate is basically useNavigate() converted into a React component.
// This makes it easy to implement in our React apps.
// useNaigate()= <Navigate to={/}/>
function NavigateComp() {
  const [flag, setFlag] = useState(false);
  if (flag === true) {
    return <Navigate to="/" />;
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Navigate</h1>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Click me to Navigate
      </button>
    </div>
  );
}

export default NavigateComp;
