import React from 'react'
import './FilePreview.css'

const FilePreview = (props: any) => {
    if (props.fileList.length == 0) {
        return (
            <p>Upload files to start</p>
        )
    }

    return (
        <>
            <div className="file-preview-area">
                {
                    props.fileList.map((item: File, index: number) => (
                        <div key={index} className="file-preview-item">
                            <p>{item.name}</p>
                            <p>{item.size} B</p>
                            <button className="remove" onClick={() => props.fileRemove(item)}>X</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default FilePreview