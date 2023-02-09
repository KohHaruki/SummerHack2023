import { UniqueTabularData } from '../types/UniqueTabularData'
import Table from './Table';

interface TablePreviewProps {
    downloadableData: UniqueTabularData[];
}

const TablePreview = (props: TablePreviewProps) => {
    const downloadCsv = (csv: string, index: number) => {
        const aTag = document.createElement('a')
        aTag.setAttribute("href", `data:text/csv;charset=utf-8,${csv}`)
        aTag.setAttribute("download", `table-${index + 1}`)
        aTag.style.display = "none"

        document.body.appendChild(aTag)
        aTag.click()
        document.body.removeChild(aTag)
    }


    if (props.downloadableData.length === 0) {
        return null;
    }

    return (
        <>
            {
                props.downloadableData.map((tabularData: UniqueTabularData, index: number) => (
                    <div key={tabularData.uid}>
                        <Table key={tabularData.uid} title={"Table " + (index + 1)} tabulardata={tabularData.tabulardata}/>
                        <button onClick={() => downloadCsv(tabularData.csv, index)}>Download</button>
                    </div>
                ))
            }
        </>
    )
}

export default TablePreview