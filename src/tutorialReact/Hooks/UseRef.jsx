import React, { useState, useRef, useEffect } from "react";

// access dom directly
//store prev values
function UseRef() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  //   if i want to focus on the input tag when i click on reset button
  //it will retun me an object that will have the current property in it that point to the element
  const inputref = useRef();
  const previousValue = useRef("");
  const reset = () => {
    inputref.current.focus();
    setName("");
  };

  //   prevvalue i will use useeffect
  useEffect(() => {
    previousValue.current = counter;
  }, [counter]);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseRef()</h1>
      {/* here i will use the ref */}
      <input
        ref={inputref}
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(inputref.current.value)}
      />
      <button onClick={reset}>Reset</button>
      <h1>My Name is : {name}</h1>
      <hr />
      <h2>counter to store the prev and new value</h2>
      <h3>new value :{counter}</h3>
      {previousValue.current !== undefined && (
        <h3>Prev value : {previousValue.current}</h3>
      )}

      <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
        Chnage Value
      </button>
    </div>
  );
}

export default UseRef;
