import './Button.css'
import React from 'react'

function Button(props) {
    return (
        <div>
            <button className={props.className}> 
                        {props.label}
            </button>
        </div>
    )
}

export default Button


