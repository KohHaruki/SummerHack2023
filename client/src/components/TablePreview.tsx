import { UniqueTabularData } from '../types/UniqueTabularData'
import Table from './Table';

const TablePreview = (props: any) => {
    if (props.downloadableData.length == 0) {
        return <h1>Hello</h1>;
    }

    return (
        <>
            {
                props.downloadableData.map((tabularData:UniqueTabularData, index: number) => (
                    <Table key={tabularData.uid} title={"Table " + (index + 1)} tabulardata={tabularData.tabulardata}/>
                ))
            }
        </>
    )
}

export default TablePreview