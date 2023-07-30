import React, { useState } from 'react'

const Counter = () => {

    const [incre, setIncre] = useState(null)

    

  return (
    <div>
        <button onClick={() => setIncre(p => p+1)}>+</button>
        <span>{incre}</span>
        <button onClick={() =>setIncre(p => p-1)}>-</button>
    </div>
  )
}
 
export default Counter