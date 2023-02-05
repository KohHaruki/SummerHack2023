import React, { useState, useRef } from 'react'
import FilePreview from './FilePreview'
import './DragDropFileUploader.css'

const DragDropFileUploader = () => {
    const [fileList, setFileList] = useState<File[]>([]);
    const dragRef = useRef<HTMLDivElement>(null);

    const onFileDrop = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;

        const updatedFileList = [...fileList, ...event.target.files];
        setFileList(updatedFileList);
    }

    const handleUpload = () => {
        const formData = new FormData();
        const url = "http://localhost:5000/api/uploadfile"

        for (let i = 0; i < fileList.length; i++) {
            formData.append(`userpic`, fileList[i], fileList[i].name);
        }
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((result) => {console.log("Success:", result)})
            .catch((error) => {console.log(error)});
    }

    const fileRemove = (file: File) => {
        const updatedFileList = [...fileList];
        updatedFileList.splice(updatedFileList.indexOf(file), 1);
        setFileList(updatedFileList);
    }

    const onDragEnter = () => {
        dragRef.current!.classList.add('dragover');
    }

    const onDragLeave = () => {
        dragRef.current!.classList.remove('dragover');
    }

    const onDrop = () => {
        dragRef.current!.classList.remove('dragover');
    }

    return (
        <>
            <div className="drag-drop-area" 
                ref={dragRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <p className="drag-drop-area-label">Drag & Drop your files here</p>
                <input className="drag-drop-input" type="file" multiple accept=".jpg, .png, .pdf" onChange={onFileDrop} />
            </div>

            <button className="upload-button" onClick={handleUpload}>Upload Images</button>

            <FilePreview fileList={fileList} fileRemove={fileRemove}/>
        </>
    )
}

export default DragDropFileUploader