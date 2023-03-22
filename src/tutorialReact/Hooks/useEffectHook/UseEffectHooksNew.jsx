import React, { useEffect, useState } from "react";

function UseEffectHooksNew() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  useEffect(() => {
    alert("i am clicked");
  }, [num]);
  return (
    <div>
      <h1>UseEffectHookNEW</h1>
      <button
        onClick={() => {
          setNum((prev) => prev + 1);
        }}
      >
        Click Me : {num}
      </button>
      <button
        onClick={() => {
          setNums((prev) => prev + 1);
        }}
      >
        Click Me : {nums}
      </button>
    </div>
  );
}

export default UseEffectHooksNew;
