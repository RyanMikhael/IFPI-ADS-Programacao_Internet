import React, { MouseEventHandler } from "react";

interface ButtonProps{
    label: String
    clickedFunction: MouseEventHandler
}

function Button({label, clickedFunction}: ButtonProps){
    return(
        <button onClick={clickedFunction} >{label}</button>
    )
}

export default Button