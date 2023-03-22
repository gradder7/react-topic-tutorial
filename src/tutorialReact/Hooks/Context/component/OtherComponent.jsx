import React, { useContext } from "react";
import UserContext from "../context/Context";

function OtherComponent() {
    const {state}=useContext(UserContext);
  return (
    <div>
      <h1>state= {state.fName}</h1>
    </div>
  );
}

export default OtherComponent;
