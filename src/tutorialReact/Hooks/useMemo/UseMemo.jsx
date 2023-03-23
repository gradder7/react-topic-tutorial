import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

// use memo is use to stop the unwanted function calls and unwanted component updation
function UseMemo() {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(10);
  const location = useLocation();

  //   function is calling for both the button but we are updating count only so to stop this we use usememo();
  //   const multicount = () => {
  //     console.log('fucn called');
  //     return count * 5;
  //   };
  // the solution is useMemo() it wil stop the unwanyted calling of function where it is not required
  //syntax useMemo(func(),[dependency when to update])
  const multicount = useMemo(() => {
    console.log("fucn called");
    return count * 5;
  }, [count]);

  console.log(location);
  

  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseMemo hook</h1>
      <h1>Count:{count}</h1>
      <h1>MultiCount:{multicount}</h1>
      <h1>newCount:{newCount}</h1>
      <button onClick={() => setCount(count + 1)}>Count Update</button>
      <button onClick={() => setNewCount(newCount * 10)}>
        newCount Multiply
      </button>
    </div>
  );
}

export default UseMemo;
