

const Selector = (props) => {


    return ( 

        <select onChange={(e) => props.selector(e, 'select')}  >
            <option value="-1" >Seleccionar</option>
            {props.lista.map((elemento,index)=> {return <option key={index} value={index} >{elemento[props.cambio]}</option>} )}
            {/* {console.log(props.lista)} */}
        </select>
     );
}
 
export default Selector;