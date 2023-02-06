import React, { useState, useRef } from 'react'
import FilePreview from './FilePreview'
import uploadLogo from '../assets/cloud-upload.svg'
import './DragDropFileUploader.css'

const DragDropFileUploader = () => {
    const [fileList, setFileList] = useState<File[]>([]);
    const dragRef = useRef<HTMLDivElement>(null);

    const onFileDrop = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;

        const updatedFileList = [...fileList, ...event.target.files];
        setFileList(updatedFileList);
    }

    const handleUpload = async () => {
        let formData = new FormData();
        const url = "http://localhost:5000/api/uploadfile"

        for (let i = 0; i < fileList.length; i++) {
            formData.append(`image`, fileList[i], fileList[i].name);

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData,
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const result = await response.json();
                console.log("Success:", result)
            } catch (error) {
                console.log(error)
            }
            
            formData = new FormData();
        }   
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
        <div className="upload-section">
            <div className="drag-drop-area" 
                ref={dragRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <img className="drag-drop-area__img" src={uploadLogo} alt="upload logo" />
                <p className="drag-drop-area__label">Drag & Drop your files here</p>
                <input className="drag-drop-input" type="file" multiple accept=".jpg, .png, .pdf" onChange={onFileDrop} />
            </div>

            <button className="upload-button" onClick={handleUpload}>Upload Images</button>

            <FilePreview fileList={fileList} fileRemove={fileRemove}/>
        </div>
    )
}

export default DragDropFileUploader