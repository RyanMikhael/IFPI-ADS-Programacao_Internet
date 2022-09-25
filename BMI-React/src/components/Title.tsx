import React from "react";

interface TitleProps{
    nameApp: String
}

function Title({nameApp}: TitleProps ){
    return(
        <h2>{nameApp}</h2>
    )
}
export default Title