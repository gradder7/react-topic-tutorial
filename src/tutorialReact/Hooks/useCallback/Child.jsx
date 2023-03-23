import React from "react";

function Child({ name, counter }) {
  console.log("i am child");

  return (
    <div>
      <h1>child </h1>
      {/* <h2>{counter}</h2> */}
      <h2>My name is :{name()}</h2>
    </div>
  );
}

//return a pure compoment
export default React.memo(Child);
