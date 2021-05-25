import React, { Component } from 'react'
import Add from '../components/Add';
import Selector from '../components/Selector';

export default class Jobs extends Component {

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
                    <b>Elegir la compania a la que pertenece</b>
                    <br/>
                    <Selector lista={this.props.companies} selector={this.inputChange} cambio='company' />
                    <hr/>
                    <b>Trabajos</b>
                    <input onChange={(e) => this.inputChange(e, 'input')}/>

                    <Add agregar={this.props.agregarJobs} input={this.state.input}  seleccionar={this.state.select} />
                    <ul>
                        {this.props.jobs.map((elemento,index) => {return <li key={index} >{elemento.job} {elemento.company}</li>})}
                    </ul>
                </div>
            </div>
        )
    }
}
