import React from "react";

export function Form ({children, ...props}) {
    return (
        <form noValidate {...props}>
            {children}
        </form>
    )
}