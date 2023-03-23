import React, { useCallback, useState } from "react";
import Child from "./Child";

// 1st time the component is render
// 2nd time it should render when there are some changes
// usecallback do the refrencial equality => function recreated
// similar as useMemo() but do memoization of function
function UseCallback() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(10);

//   only with the functions callback works
//if you pass the function as an props to the child than every time when the parent changes the functions also reacted and passed as props again and render the child again and again when parent updates called refrencial equality.

//   const printName = () => {
//     return "Himanshu";
//   };

  //to solve this issue we use the useCallback because it will store the function by doing memoization
    const printName =useCallback(() => {
      return "Himanshu";
    },[counter])
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Use Callback</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <hr />
      <Child name={printName} counter={counter} />
    </div>
  );
}

export default UseCallback;
