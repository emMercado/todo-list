

const Selector = (props) => {

    return ( 

        <select onChange={(e) => props.selector(e, 'select')}  >
            <option value="-1" >Seleccionar</option>
            {props.lista.map((elemento,index)=> {return <option key={index} value={elemento.id} >{elemento.name}</option>} )}
        </select>
     );
}
export default Selector;