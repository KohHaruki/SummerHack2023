import './Table.css'

const Table = (props: any) => {

    return (
        <>
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
        </>
        
    )
}

export default Table