
import React from "react";
const StyledButton = ({children, mode}) => {
    return(
        <button className={`btn btn-secondary text-md border-2 hover:border-slate-800 hover:shadow-md hover:shadow-black`}>
            {children}
        </button>

    )
}

export default StyledButton;