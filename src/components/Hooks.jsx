import React, { useState } from 'react'

const Hooks = () => {

    const [value, setValue] = useState(0)

    const add = () =>{
        setValue(value+1);
    }

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={add}>Add</button>
    </div>
  )
}

export default Hooks;