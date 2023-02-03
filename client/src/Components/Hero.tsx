import React from 'react'
import DragDrop from './DragDrop'

const Hero = (props: any) => {
    return (
        <div className="hero">
        <h2 className="hero-title">{props.title}</h2>
        <DragDrop />
    </div>
    )
}

export default Hero