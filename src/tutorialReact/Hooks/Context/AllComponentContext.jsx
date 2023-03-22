import React, { useState } from "react";
import GrandParent from "./component/GrandParent";
import OtherComponent from "./component/OtherComponent";
import { UserProvider } from "./context/Context";

// its like a app.js component
function AllComponentContext() {
  // const [state, setState] = useState({
  //   fName: "Himanshu",
  //   lName: "Mehra",
  // });
  // console.log(state);

  return (
    // all components inside the user provider will use the context
    <>
      <UserProvider>
        <GrandParent />
        <hr />
        <OtherComponent />
      </UserProvider>
    </>
  );
}

export default AllComponentContext;
