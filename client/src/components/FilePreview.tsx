import './FilePreview.css'
import imageLogo from '../assets/image.svg'
import trashLogo from '../assets/trash-fill.svg'

interface FilePreviewProps {
    fileList: File[];
    fileRemove(item:File): void;
}

const FilePreview = (props: FilePreviewProps) => {
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
                            <img className="img-logo" src={imageLogo} alt="image logo" />
                            <div className="file-info">
                                <p className="file-name">{item.name}</p>
                                <p className="file-size">{item.size} B</p>
                            </div>
                            <button className="remove-button" onClick={() => props.fileRemove(item)}><img src={trashLogo} /></button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default FilePreview