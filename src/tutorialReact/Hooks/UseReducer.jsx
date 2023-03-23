import React, { useReducer, useState } from "react";
let initialValue = 0;
// state will be the current state
//action mehtod will have a type property
const reducer = (state, action) => {
  // action from which type will be triggered will print in log
  //retunn the type from where the action is performed
  console.log(action);
//   if (action.type === "INCREMENT") {
//     return state + 1;
//   }
//   if (action.type === "DECREMENT") {
//     return state - 1;
//   }
//   if (action.type === "RESET") {
//     return 0;
//   }
//   // it always return state
//   return state;
// };
// or we can also write the switch cases
switch (action.type) {
  case "INCREMENT": {
    return state + 1;
  }
  case "DECREMENT": {
    return state - 1;
  }
  case "RESET": {
    return 0;
  }
  default:{
    return state;
  }
}
};
function UseReducer() {
  //   const [count, setCount] = useState(0);

  // useReducer is same as useState
  //in big projects we have to manage a lot of states we use useReducer
  // useReducer(reducer,initialState) it takes two arguments
  //reducer=> which is a pure function which takes action and state and retun us a new state
  //intialvalue is the value you want to give like in useState(0);
  //it retuns two elements of array which we destructure from the array[state/value,dispatch/function]
  //[state,dispatch] // state we will get the updated values return by the reducer
  const [state, dispatch] = useReducer(reducer, initialValue);
  //it retuns two elements of array which we destructure from the array[state/value,dispatch/function]
  //   console.log(useReducer(reducer,initialValue));

  //   dispatch is a method which is use to trigger the action using the type we define
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Use Reducer</h1>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default UseReducer;
