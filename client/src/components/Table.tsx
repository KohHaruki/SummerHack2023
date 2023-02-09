import './Table.css'

interface TableProps {
    key: string;
    title: string;
    tabulardata: string[][];
}

const Table = (props: TableProps) => {

    return (
        <div className="table-container"> 
            <h2>{props.title}</h2>
            <table className="table">
                {
                    props.tabulardata.map((row: Array<string>, i: number) => (
                        <tbody key={"tbody" + i}>
                            <tr>
                                {
                                    row.map((data: string, j: number) => (
                                        <td key={"td" + j}>{data}</td>
                                    ))
                                }
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
        
    )
}

export default Table