import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import axios from 'axios'

const fileTypes = ["JPG", "PNG", "PDF"]

const DragDrop = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleUpload = (selectedFile: File) => {
        setSelectedFile(selectedFile);

        const formData = new FormData();

        formData.append("myFile", selectedFile!);
        
        axios.post("api/uploadfile", formData)
            .then(() => {console.log("Success")})
            .catch((e) => {console.log("Error")})
    }

    const handleTypeError = (err: TypeError) => {
        console.log(err)
    }

    const handleSizeError = (err: Error) => {
        console.log(err)
    }

    return (
        <FileUploader className="uploader" handleChange={handleUpload} name="myFile" type={fileTypes} multiple={false} maxSize={2} onTypeError={handleTypeError} onSizeError={handleSizeError}/>
    )
}

export default DragDrop