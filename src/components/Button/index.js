import React from "react";

import {Button as Buttons} from './style'

function Button({children, ...props}){

    return <Buttons {...props}>{children}</Buttons>
    
}

export default Button;