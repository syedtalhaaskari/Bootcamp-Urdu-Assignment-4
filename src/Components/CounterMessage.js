import React from "react";

function CounterMessage(props) {
    return(
        <div>
            <h3>Current Counter Value is {props.counter}</h3>
        </div>
    )
}

export default CounterMessage;