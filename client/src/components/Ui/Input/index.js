import React from 'react'

const  Input = props => {
    return (
        <input 
            className="form-control mb-4 p-4 border-none" 
            placeholder={props.placeholder} 
            type={props.type} 
            onFocus={e => e.target.placeholder = ""}
            onBlur={e => e.target.placeholder = props.placeholder}
            onChange={props.onChange}
        />
    )
}

export default Input
