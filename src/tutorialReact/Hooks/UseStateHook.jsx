import React, { Children, useState } from "react";

function UseStateHook() {
  // changing the direct varailble will not RE-RENDER THE UI
  // let a = "Himanshu";
  // const changeName = () => {
  //   a = "Nikhil";
  //   console.log("iam clicked");
  //   return a;
  // };

  //   so we use use stateHook
  //   console.log(useState()); // it will return me an array [initial value,function]
  //   we cannot use the use state in funtion and in conditon
  // desturcture the value in array
  const [name, setName] = useState("Himanshu");
  const [flag, setFlag] = useState(false);
  //if you want to do the heavy fucntion calls and than after want to set the initial state so we use function inside the useState
  const [count, setCount] = useState(()=>{
    console.log('clicked');
    return 0;
    
  });
  const [inputName, setInputName] = useState("");
  const [names, setNames] = useState([]);
  const changeName = () => {
    setName("nikhil");
    setFlag(!flag);
  };
  const increment = () => {
    // the count should have to increase by one but not incrementing by 2
    //so we will use prev value to solve this issue
    // setCount(count+1);
    // setCount(count+1);
    // now it will increment by 2;
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  //   form
  const submitData = (e) => {
    e.preventDefault();
    setNames([...names, inputName]);
    setInputName("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseState Hooks</h1>
      {/* if flag  is true than show the name */}
      <h3>Your name is:{flag && name}</h3>
      <button onClick={changeName}>Click Me</button>
      <br />
      <br />
      {/* numbers in state */}
      <hr />
      <h3>counter</h3>
      <button onClick={increment}>increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <hr />
      {/* use state for array and object */}
      <form onSubmit={submitData}>
        <input
          type="text"
          placeholder="enter name"
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
        <button>submit</button>
      </form>
      <ul>
        {names.map((val, index) => {
          return <li key={index + val}>{val}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseStateHook;
