



const Table = (props) => {
    
    const {  lugares, organizaciones, trabajos, ciudades } = props.listas;
    
   /*  debugger */
    return ( 
        <div className="container">
  
            <table className="table table-hover table-dark">
            <thead className="">
                <tr>
                         
                    {props.msg.map((item, index)=>{return(
                    <th key={index}  ><b>{item}</b></th>
                    )})}
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody  >
                {/* {ciudades.length>0 && ciudades.map((elemento, index)=>{return (
                    <p key={index} >{elemento.name}</p>
                    )})} */}


                {trabajos.length>0 && trabajos.map(({position, description, id, organizationId}, indice) => {
                    
                    let org = organizaciones.find(organizacion => {return Number(organizationId) === Number(organizacion.id)})
                    let ciud = lugares.find(lugar => {return Number(org.placeId) === Number(lugar.id)})
                    let pais = ciudades.find(pais => {return Number(ciud.countrieId) === Number(pais.id)})
                    
                    /* debugger */
                    return(
                    <tr key={indice}>
                        <td  >{position}</td>
                        <td  >{org.name}</td>
                        <td  >{ciud.name}</td>
                        <td  >{pais.name}</td>
                        <td><button onClick={() => props.deleteJob(id)} >Eliminar</button> </td>
                    </tr>
                )})}
            </tbody>
        </table>
        </div>
        
     );
}
 
export default Table;
