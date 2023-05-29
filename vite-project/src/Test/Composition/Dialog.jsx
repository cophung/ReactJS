import React from 'react'

const Dialog = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            {props.children}
        </div>
    )
}

export default Dialog