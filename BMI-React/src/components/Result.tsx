import React from "react";

interface ResultProps{
    finalResult: number
}

function Result({finalResult}: ResultProps) {


    return(
        <span className="result" >YOUR BMI IS {finalResult}</span>
    )
}

export default Result