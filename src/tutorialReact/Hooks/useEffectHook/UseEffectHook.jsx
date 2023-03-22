import React, { useEffect, useState } from "react";
import ChildForUseEffect from "./ChildForUseEffect";

function UseEffectHook() {
  const [flag, setFlag] = useState();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseEffect Hook</h1>
      <div>
        <button onClick={() => setFlag(!flag)}>
          Toogle the component
        </button>
      </div>
      {flag ? <ChildForUseEffect /> : ""}
    </div>
  );
}

export default UseEffectHook;
