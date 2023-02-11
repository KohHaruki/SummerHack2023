import React, { useState } from 'react'
import uniqid from 'uniqid'
import { UniqueTabularData } from '../types/UniqueTabularData'
import Hero from '../components/Hero'
import DragDropFileUploader from '../components/DragDropFileUploader'
import TablePreview from '../components/TablePreview'
import Article from '../components/Article'
import About from './About'
import Developer from './Developer'

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
            <Hero title={"Online Image Scanner"} subtitle={"Easily extract tabular data from PNG, JPG, and PDF"} id="home"/>
            <DragDropFileUploader updateDownloadableData={updateDownloadableData}/>
            <TablePreview downloadableData={downloadableData}/>
            <Article title="Some additional content" content={content} />
            <About id="about" />
            <Developer id="developer" />
        </>
    )
}

export default Home