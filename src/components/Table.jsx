

const Table = (props) => {
    const { paises, cities, companies, jobs } = props.listas;
    return ( 
        <div className="container">
            <table className="table table-hover table-dark">
            <thead className="">
                <tr>     
                    {props.msg.map((item, index)=>{return(
                    <th key={index}  ><b>{item}</b></th>
                    )})}
                </tr>
            </thead>
            <tbody  >
                {jobs.map((elemento, indice) => {return(
                    <tr key={indice}>
                        {/* <td >{indice}</td> */}
                        <td  >{elemento.job}</td>
                        <td  >{companies[elemento.company].company}</td>
                        <td  >{cities[companies[elemento.company].city].city}</td>
                        <td  >{paises[cities[companies[elemento.company].city].country].country}</td>
                    </tr>
                )})}
            </tbody>
        </table>
        </div>
        
     );
}
 
export default Table;
