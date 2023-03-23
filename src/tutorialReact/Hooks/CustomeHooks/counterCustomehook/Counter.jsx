import React from 'react'
import useCounterHook from './useCounterHook'

function Counter() {
const [value,increment,decrement,reset]=useCounterHook(0);
  return (
    <div style={{textAlign:"center"}}>
      <h1>Counter App using Custome Hook</h1>
      <h2>Count:{value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
