import React, { Component } from 'react'

export default class task extends Component {

    constructor(props) {
        super();
        this.state = {
            someKey: 'some'
        };
    }



    render() {
        return (<>

                <li key={index} 
                    className="container-list">{item}
                    <button class="button-delete" onClick={() => this.Delete(index)}>Eliminar tarea</button>
                </li>        
                <hr></hr>    
            </>
        )   
    }
}
