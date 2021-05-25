

const Table = (props) => {
    const { paises, cities, companies, jobs } = props.listas;
    return ( 
        <table>
            <thead>
                <tr>
                    <td>
                        {props.msg.map((item, index)=>{return(
                            <td key={index} ><b>{item}</b></td>
                        )})}
                    </td>
                </tr>
            </thead>
            <tbody >
                {jobs.map((elemento, indice) => {return(
                    <tr key={indice}>
                        {/* <td >{indice}</td> */}
                        <td >{elemento.job}</td>
                        <td >{companies[elemento.company].company}</td>
                        <td >{cities[companies[elemento.company].city].city}</td>
                        <td >{paises[cities[companies[elemento.company].city].country].country}</td>
                    </tr>
                )})}
            </tbody>
        </table>

     );
}
 
export default Table;
