import React, { useContext } from "react";
import UserContext from "../context/Context";

function Child() {
  const { state } = useContext(UserContext);
  const { fName, lName } =  state ;
  console.log(state);

  return (
    <div>
      <h1>First Name:{fName}</h1>
      <h1>Last Name:{lName}</h1>
    </div>
  );
}

export default Child;
