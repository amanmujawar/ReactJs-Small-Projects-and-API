import React, { useState } from 'react';

function TemperatureComponent(props) {

    const [first, setfirst] = useState("false")



    const temperature = props.temperature;
    let message;

    if (temperature > 30) {
        message = "It's hot outside!";
    } else {
        message = "It's not too hot outside.";
    }
    

    const clicked = () =>{
        setfirst    ("Aman");
    }
    

    return (
        <div>
            <h2>Temperature Checker</h2>
            <p>{message}</p>
            <h1 onClick={clicked}>{first}</h1>
        </div>
    );
}

export default TemperatureComponent;
