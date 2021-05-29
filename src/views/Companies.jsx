import React, { Component } from 'react'
import Add from '../components/Add';
import Selector from '../components/Selector';

export default class Companies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            select: -1,
        };
    }

    inputChange = (e,cambiar) => {
        this.setState({
            [cambiar]: e.target.value
        })
    }

    

    render() {
        return (
            <div className="containers">
                <div className="container-form">
                    
                    <b>Elegir la Ciudad a la que pertenece su compania</b>
                    <br/>
                    <Selector lista={this.props.cities} selector={this.inputChange} cambio='city' />
                    <hr/>
                    <b>Empresas</b>
                    <input onChange={(e) => this.inputChange(e, 'input')} />

                    <Add agregar={this.props.agregarCompanies} input={this.state.input} seleccionar={this.state.select}/>
                    <ul>
                        {this.props.companies.map((elemento,index) => {return <li key={index}>{/* {elemento.company} */}{elemento.name} </li>} ) }
                    </ul>
                </div>
            </div>
        )
    }
}
