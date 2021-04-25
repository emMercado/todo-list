import React from 'react'

export class ToDoList extends React.Component {
            //clase todo list clase padre react component
    constructor(props){
        super(props)
        /* console.log(this.props.tasks) */
        this.props = props
        this.state = {
            inputValue : "",
            tasks : ["Aprender React","Aprender WebPack","Aprender Babel"]
        }
    }

     //hace q un componente hijo cambie los componentes padre
    addTask(task){
        //actualizar un nuevo estado
        /* this.state.tasks = ["Nueva Tarea"]  no se verian cambios en la aplicacion con esta forma*/
        this.setState({
        tasks: [...this.state.tasks, task]
        //que sea un arreglo y se le agregan los valores
        //... son sprate operator, traer todo lo q tiene this state tasks y le aniade toda la tarea nueva
        })
    }

    handleInput(event){
    this.setState({
        inputValue: event.target.value
    })
    }

    //obligatorio el metodo render
    render(){
        return(
            <div>
                <ul>
                { this.state.tasks.map((task, index ) => { return <li key={index}>{task}</li> }) }
                </ul>
                <input value={this.state.value} onChange={(e) => this.handleInput(e)} type="text" /><button onClick={() =>this.addTask(this.state.inputValue)}>Agregar</button>
            </div>
        )
    }
}