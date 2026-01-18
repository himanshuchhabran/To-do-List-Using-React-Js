import React, { useState } from 'react'

const App = () => {
  let [count,setCount] =useState(0);

  const incrementCounter=()=>{
    setCount(
      count++)
  }

  const decrementCounter=()=>{
     setCount(count--)
  }

  return (
    <div>
      <button onClick={incrementCounter}>+</button>
      <p>{count}</p>
      <button onClick={decrementCounter}>-</button>
    </div>
  )
}

export default App