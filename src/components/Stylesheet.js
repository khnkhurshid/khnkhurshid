import React from 'react'
import './CSS/main.css'

function Stylesheet(props) {
    let className = props.primary? 'primary':''
    return (
        <div>
            <h1 className={`${className} font-xl `}>stylesheet1</h1>
        </div>
    )
}

export default Stylesheet
