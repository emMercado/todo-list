

const Add = (props) => {
    return ( 
        <button onClick={()=> props.agregar(props.input, props.seleccionar )  } >
            Agregar
        </button>
     );
}

export default Add;
