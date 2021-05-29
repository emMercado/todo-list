import React, { Component } from 'react'
import Add from '../components/Add';


export default class Countries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
 
        }
    }

    inputChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    render() {
        return (
            <div className="containers">
                <div className="container-form">
                
                    <b>Paises</b>
                    <hr/>
                    <input onChange={(e) => this.inputChange(e) }  ></input>
                    
                    <Add agregar={this.props.agregarPais} input={this.state.input}  ></Add>
                    <ul>
                        {this.props.countries.map((elemento,index) => {return <li key={index}>{elemento.name}</li>} ) }
                    </ul>
                    
                </div>
            </div>
        )
    }
}
