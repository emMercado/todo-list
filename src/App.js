import React from 'react'
import { Route , Switch } from 'react-router-dom';
import axios from 'axios'

//vistas
/* import { ToDoList } from './views/ToDoList.jsx' */
import MainView from './views/MainView' 
import Jobs from './views/Jobs';
import Companies from './views/Companies';
import Cities from './views/Cities';
import Countries from './views/Countries';

//components
import Navbar from './components/Navbar';
/* import {getData} from './components/pilarClient'; */

/* import NotFoundView from './views/NotFoundView';  */


export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      paises: [],
      cities: [],
      jobs: [],
      companies: [],

      
      ciudades: [],
      lugares: [],
      organizaciones: [],
      trabajos: [],
    };
  }

  addCountries = (pais) => {
    this.setState({
      paises : [...this.state.paises, {
        country: pais,
      }
      ]
    })
  }
  addCities = (cities,c) => {
    this.setState({
      cities : [...this.state.cities, {
        city: cities, 
        country: c
      }]
    })
  }
  addJobs = (jobs,i) => {
    this.setState({
      jobs : [...this.state.jobs, {
        job: jobs, 
        company: i
      }]
    })
  }

  addCompanies = (companies,c) => {
    this.setState({
      companies : [...this.state.companies, {
        company: companies, 
        city: c
      }]
    })
  }

  componentDidMount(){
    axios
      .get('https://api-fake-pilar-tecno.herokuapp.com/db')
      .then((response)=> {
        console.log(response);
        this.setState({organizaciones: response.data.jobs}) 
        this.setState({ciudades: response.data.countries})
        this.setState({lugares: response.data.places})
        this.setState({organizaciones: response.data.organizations})
      })
      .catch((error)=>{
        console.log(error);
      })

    /*  getData().then(res => this.setState({
        dbPilar: res,
      })) */
  } 

  componentDidMount2(){
    axios
      .get('https://api-fake-pilar-tecno.herokuapp.com/db')
      .then((response)=> {
        console.log(response);
        
      })
      .catch((error)=>{
        console.log(error);
      })

    /*  getData().then(res => this.setState({
        dbPilar: res,
      })) */

  } 
  /* postData()  */

  /* deleteData() */

  render() {
        
    /* console.log(this.state.dbPilar) */
    
    return (
      <div className="App">
        
        <Navbar/> 
        
        <Switch>
          
            <Route path="/" exact render={()=> <MainView listas={this.state} />}></Route>
            <Route path="/jobs" exact render={()=> <Jobs  jobs={this.state.jobs} agregarJobs={this.addJobs} companies={this.state.companies} />} ></Route>
            <Route path="/companies" exact render={()=> <Companies companies={this.state.companies} agregarCompanies={this.addCompanies} cities={this.state.cities} />} ></Route>
            <Route path="/cities" exact render={()=> <Cities cities={this.state.cities} agregarCities={this.addCities} countries={this.state.paises} />} ></Route>
            <Route path="/countries" exact render={()=> <Countries countries={this.state.paises} agregarPais={this.addCountries} />} ></Route>
            {/*  <Route component={NotFoundView}></Route> */}
        </Switch>
          {this.state.trabajos.map((elemento, index)=>(<p key={index} >{elemento.name}</p>))} 
          {this.state.organizaciones.map((elemento, index)=>(<p key={index} >{elemento.name}</p>))}
          {this.state.ciudades.map((elemento, index)=>(<p key={index} >{elemento.name}</p>))}
          {this.state.lugares.map((elemento, index)=>(<p key={index} >{elemento.name}</p>))}
      </div>
    );
  }
}

