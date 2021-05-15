import React, { Component } from 'react'


export class ToDoList extends Component {
            
    constructor(props){
        super(props)
        this.state = {
            tasks : [],
            empresa:'',
            pais:'',
            ciudad: '',
            puesto:''
        }
    }

    Entrada(change){
        if (change.target.id === 'puesto'){
            this.setState({
                puesto: change.target.value
            })
        }
        else if (change.target.id === 'empresa'){
            this.setState({
                empresa: change.target.value
            })
        }
        else if (change.target.id === 'ciudad'){
            this.setState({
                ciudad: change.target.value
            })
        }
        else if (change.target.id === 'pais'){
            this.setState({
                pais: change.target.value
            })
        }
    }

    addTask(){
        if ( this.state.empresa === '' || this.state.pais === '' || this.state.ciudad === '' || this.state.puesto === ''){
            alert("*Obligatorio* - Completar todos los campos.")
        }
        else{
            this.setState({
            tasks: [...this.state.tasks, `${this.state.pais}, ${this.state.ciudad}, ${this.state.empresa}, ${this.state.puesto}`],
            puesto: '',
            empresa: '',
            ciudad: '',
            pais: ''
            })  
        }
    } 

    Delete(index){
        var newTask = this.state.tasks
            newTask.splice(index, 1)
            this.setState({
                tasks: newTask
            })
    } 
  
    render(){
        return(
            <div class="containers">
                <div>
                    <div class="container-form">
                        <label htmlFor="pais" >Pais: </label>    
                        <input class="text-form"
                        value={this.state.pais} 
                        onChange={(change) => this.Entrada(change)}
                        name="pais" id="pais" type="text"></input>
                        <br></br>
                        <br></br>
                        <label htmlFor="ciudad">Ciudad: </label>
                        <input 
                        value={this.state.ciudad} 
                        onChange={(change) => this.Entrada(change)}
                        name="ciudad" id="ciudad" type="text"></input>
                        <br></br>
                        <br></br>
                        <label htmlFor="empresa">Empresa: </label>
                        <input 
                        value={this.state.empresa} 
                        onChange={(change) => this.Entrada(change)}
                        name="empresa" id="empresa" type="text"></input>
                        <br></br>
                        <br></br>
                        <label htmlFor="puesto">Puesto: </label>
                        <input 
                        value={this.state.puesto} 
                        onChange={(change) => this.Entrada(change)}
                        name="puesto" id="puesto" type="text"></input>
                        <br></br>
                        <br></br> 
                        <button class="button"onClick={() =>this.addTask()}>Agregar</button>
                        </div>           
                        <br></br>
                        <br></br>
                        { this.state.tasks.map((item, index ) => { return(
                            <>
                                <li key={index} className="container-list">{item}
                                <button class="button-delete" onClick={() => this.Delete(index)}>Eliminar tarea</button>
                                </li>        
                                <hr></hr>
                            </>) })}      
                </div>
            </div>
        )
    }
}