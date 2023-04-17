import React from 'react'
import './About.css'


const About = (props) => {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={className}>About Us Page</h1>
        </div>
    )
}

export default About