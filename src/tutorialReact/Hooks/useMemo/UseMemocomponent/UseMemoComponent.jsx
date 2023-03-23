import React, { useState } from "react";
import Child from "./Child";

function UseMemoComponent() {
    // i am updating the count not the child but still the child is rendering
    //so to stop this use use react.memo in child
    //now child will not render.
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      <Child />
    </div>
  );
}

export default UseMemoComponent;
