import React, { Component } from 'react';
import Add from '../components/Add';
import Selector from '../components/Selector';

export default class Cities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            select: -1,
            
        };
    }

    inputChange = (e, cambiar) => {
        this.setState({
            [cambiar]: e.target.value
        });
    }


    render() {
        return (
            <div className="containers">
                <div className="container-form">
                    
                    <b>Elegir el pais a la que pertenece la ciudad</b>
                    <br/>
                    <Selector lista={this.props.countries} selector={this.inputChange} cambio='country' />
                    <hr/>
                    <b>Ciudades</b>
                    <input onChange={(e) => this.inputChange(e,'input') }/> 

                    <Add agregar={this.props.agregarCities} input={this.state.input} seleccionar={this.state.select}></Add>
                    
                    <ul>
                        {this.props.cities.map((elemento,index) => {return <li key={index}>{/* {elemento.country} */} {elemento.name}</li>} ) }
                    </ul>
                </div>
            </div>
        )
    }
}
