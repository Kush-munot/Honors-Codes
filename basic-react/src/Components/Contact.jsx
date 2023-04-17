import React from 'react'
import './Contact.css'

const Contact = (props) => {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={className}>Contact Us Page</h1>
        </div>
    )
}

export default Contact