import { useState } from 'react'
import uniqid from 'uniqid'
import { UniqueTabularData } from '../types/UniqueTabularData'
import Hero from '../components/Hero'
import DragDropFileUploader from '../components/DragDropFileUploader'
import TablePreview from '../components/TablePreview'

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tortor sed diam elementum iaculis. Etiam pretium diam eu tortor suscipit sodales. Curabitur id odio a mauris aliquam rutrum ut a purus. Maecenas sollicitudin interdum facilisis. Suspendisse vulputate arcu lacus, id fermentum diam imperdiet ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tortor sed diam elementum iaculis. Etiam pretium diam eu tortor suscipit sodales. Curabitur id odio a mauris aliquam rutrum ut a purus. Maecenas sollicitudin interdum facilisis. Suspendisse vulputate arcu lacus, id fermentum diam imperdiet ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tortor sed diam elementum iaculis. Etiam pretium diam eu tortor suscipit sodales. Curabitur id odio a mauris aliquam rutrum ut a purus. Maecenas sollicitudin interdum facilisis. Suspendisse vulputate arcu lacus, id fermentum diam imperdiet ut."

const Home = () => {
    const [downloadableData, setDownloadableData] = useState<Array<UniqueTabularData>>([])

    const updateDownloadableData = (data: any) => {
        const newUniqueTabularData: UniqueTabularData = {
            tabulardata: data.structured_text_output,
            csv: data.csv_output,
            uid: uniqid()
        }

        setDownloadableData(prevState => [...prevState, newUniqueTabularData])
    }

    return (
        <>
            <Hero title={"Online Image Scanner"} subtitle={"Easily extract tabular data from PNG, JPG, and PDF"} />
            <DragDropFileUploader updateDownloadableData={updateDownloadableData}/>
            <TablePreview downloadableData={downloadableData}/>
            
            <div className="container">
                <Hero title="How To Use Our Product" subtitle="" />
                <ol className="instruction">
                    <li>Open the web application in your preferred web browser.</li>
                    <li>Click on the "Upload File" button to select your PNG, JPG or PDF file from your device.</li>
                    <li>After selecting the file, click the "Submit" button.</li>
                    <li>The web application will start extracting the tabular data from your file using computer vision and OCR techniques. This process may take a few seconds to a minute, depending on the size of your file.</li>
                    <li>Once the tabular data has been extracted, you will be able to download the data in CSV format.</li>
                    <li>To download the extracted data, click the "Download" button. The file will be saved to your device in CSV format, which can be opened using spreadsheet software such as Microsoft Excel, Google Sheets, or LibreOffice Calc.</li>
                    <li>You can now use the extracted data as needed.</li>
                </ol>
                <strong>Note:</strong> If you encounter any errors or difficulties while using the web application, feel free to contact us for assistance.
            </div>
            

        </>
    )
}

export default Home