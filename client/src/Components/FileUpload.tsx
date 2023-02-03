import React, { useState } from 'react'
import axios from 'axios'

const FileUpload = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;

        setSelectedFile(event.target.files[0]);
        
        setIsFilePicked(true);
    };

    const handleUpload = () => {
        const formData = new FormData();

        formData.append("myFile", selectedFile!);
        
        axios.post("api/uploadfile", formData)
            .then(() => {console.log("Success")})
            .catch((e) => {console.log("Error")})
    };

    return (
        <>
            <input type="file" name="file" onChange={changeHandler} />
            <button onClick={handleUpload}>Upload Image</button>
        </>
    )
}

export default FileUpload