import React from "react";

function TimeMessage(props) {
    return (
        <div>
            <h1>Good {props.time ? "Morning" : "Night"}</h1>
        </div>
    )
}

export default TimeMessage;