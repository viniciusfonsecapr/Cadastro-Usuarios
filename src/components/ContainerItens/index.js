import React from "react";

import { ContainerItems as ContainerI } from "./style";

function ContainerItems({children, isBlur}){

    return(
        <ContainerI isBlur={isBlur}>{children}</ContainerI>
    )
}

export default ContainerItems