import React from "react"

interface LabelProps{
    fieldName: String
}

function Label({fieldName}: LabelProps){
    return(
        <label htmlFor="">{fieldName}</label>
    )
}

export default Label