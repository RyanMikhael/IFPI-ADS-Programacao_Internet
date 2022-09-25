import React, { ChangeEventHandler } from "react";

interface InputProps{
    value: number
    changeCallback: ChangeEventHandler
}

function Input({value, changeCallback}: InputProps){
    return(
        <input className="input-controll" value={value}  onChange={changeCallback} type="number" />
    )
}

export default Input