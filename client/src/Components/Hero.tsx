import React from 'react'
import DragDropFileUploader from './DragDropFileUploader'

const Hero = (props: any) => {
    return (
        <div className="hero">
        <h2 className="hero-title">{props.title}</h2>
        {/* <DragDropFileUploader /> */}
    </div>
    )
}

export default Hero