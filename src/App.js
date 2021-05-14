import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
/* import NavBar from './components/NavBar'; */


import { ToDoList } from './components/ToDoList/ToDoList.jsx'

import Jobs from './views/Jobs';
import Companies from './views/Companies';
import Cities from './views/Cities';
import Countries from './views/Countries';
import Navbar from './views/Navbar';
import NotFoundView from './views/NotFoundView'; 


function App() {
  return (
    <div className="App">
    
      
      <Router>
      <Navbar /> 
        <Route path="/" exact component={ToDoList}></Route>
         
        <Route path="/jobs" exact component={Jobs} ></Route>
        <Route path="/companies" exact component={Companies} ></Route>
        <Route path="/cities" exact component={Cities} ></Route>
        <Route path="/countries" exact component={Countries} ></Route>
        <Route component={NotFoundView}></Route>
       
      </Router>

      
    
    </div>
  );
}



export default App;
