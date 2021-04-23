import React from 'react'

export class ToDoList extends React.Component {
            //clase todo list clase padre react component
    constructor(props){
        super(props)
       
    }
    //obligatorio el metodo render
    render(){
        return(
            <ul>
               <li>Aprender React</li>
               <li>Aprender WebPack</li>
               <li>Aprender Babel</li>
            </ul>
        )
    }
}