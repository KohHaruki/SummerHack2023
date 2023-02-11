import React, { useState, useRef } from 'react'
import FilePreview from './FilePreview'
import Spinner from './Spinner'
import uploadLogo from '../assets/cloud-upload.svg'
import './DragDropFileUploader.css'

interface DragDropFileUploaderProps {
    updateDownloadableData: (obj: {structured_text_output: string[], csv_output: string}) => void;
}

const DragDropFileUploader = (props: DragDropFileUploaderProps) => {
    const [fileList, setFileList] = useState<File[]>([]);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const dragRef = useRef<HTMLDivElement>(null);

    const onFileDrop = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;

        const updatedFileList = [...fileList, ...event.target.files];

        setFileList(updatedFileList);
    }

    const handleUpload = async () => {
        let formData = new FormData();
        // Change the port accordingly
        const url = "http://localhost:8080/api/uploadfile"

        setIsUploading(true)

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

                props.updateDownloadableData(result)
                

            } catch (error) {
                console.log(error)
            }
            
            formData = new FormData();
        }

        setIsUploading(false)

        // Empties the files that has been uploaded
        setFileList([]) 
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

            <button className="upload-button" onClick={handleUpload} disabled={isUploading} >
                {isUploading ? <><Spinner /> &nbsp; Loading</>: "Upload Images"}
            </button>

            <FilePreview fileList={fileList} fileRemove={fileRemove}/>
        </div>
    )
}

export default DragDropFileUploader