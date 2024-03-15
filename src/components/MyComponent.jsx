import React, { useEffect, useRef, useState } from 'react'

const MyComponent = () => {
    const [myData, setMyData] = useState("");
    // const [count, setCount] = useState();

    // const inp = useRef(0)
    // console.log(inp)
    const inpElem = useRef("")
    
    // useEffect(()=>{
        // //   setCount(count+1);
        // inp.current = inp.current + 1
        // })
        
    const changeStyle = () =>{
        inpElem.current.style.backgroundColor = "#82E0AA"
        inpElem.current.focus();
    };
  
  
  
    return (
      <div className='ref'>
        <input 
        type="text" 
        ref={inpElem}
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
        />
        <br />
        {/* <p>The number of times render: {inp.current}</p> */}
        <button onClick={changeStyle}>Change</button>
      </div>
    )
}

export default MyComponent