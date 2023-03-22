import React, { useEffect, useState } from "react";

function ChildForUseEffect() {
  const [time, setTime] = useState(new Date().toString());
  const [msg, setMsg] = useState("Functional component");

  //we provide the call back function
  //sideeffect funtion
  useEffect(() => {
    //write the side effect you want to run
    console.log("Component is mounted or updated");
    const interval = setInterval(showDate, 1000);
    //componentWill unmount we retun
    return () => {
      console.log("component is uunmounted");
      clearInterval();
    };
  }, [time]);
  //when empty than run on every time the state changes or the component rerenders
  //when [] empty then render only first time when component mounted not updated
  //when we pass[a] dependency than it will run when the dependency is changed
  const showDate = () => {
    setTime(new Date().toString());
  };
  return (
    <div>
      <div>{time}</div>
      <button onClick={showDate}>show Date</button>
      <div>{msg}</div>
      <button onClick={() => setMsg("How are you?")}>Change Message</button>
    </div>
  );
}

export default ChildForUseEffect;
