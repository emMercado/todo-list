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


const postData = async (url,data) => {
  /* debugger */
  const configRequest = {
      method: 'POST',
      url: 'https://api-fake-pilar-tecno.herokuapp.com/'+url,
      data: data

  }
  try {
      const res = await axios(configRequest)
      return res.data
  } catch (err) {
      console.error(err)
  }
}

const deleteData = async (url,id) => {
  const configRequest = {
      method: 'DELETE',
      url: `https://api-fake-pilar-tecno.herokuapp.com/${url}/${id}`, 
  }
  try {
      const res = await axios(configRequest)
      return (res.data)
  } catch (err) {
      console.error(err)
      throw err
  }
} 


export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ciudades: [],
      lugares: [],
      organizaciones: [],
      trabajos: [],
    };
  }

  deleteJob = (id) => {
    let url = 'jobs'
    deleteData(url,id)
    .then(() => this.setState({
      trabajos: this.state.trabajos.filter(trabajo => trabajo.id !== id )
    }))
  }


  addCountries = (pais) => {
    let data = {name: pais}
    const url = 'countries'
    postData(url, data).then(res => {
      this.setState({
        ciudades: [...this.state.ciudades, res],
      });
    })
  }
 
  addCities = (lugares, idPais) => {
    let data = {name: lugares, countrieId: idPais} 
    const url = 'places'
    postData(url,data).then(res => {
      this.setState({
        lugares: [...this.state.lugares, res],
      });
    })

  }
  addCompanies = (organizaciones, idCiudad) => {
    let data = {name: organizaciones, placeId: idCiudad} 
    const url = 'organizations'
    postData(url,data).then(res => {
      this.setState({
        organizaciones: [...this.state.organizaciones, res],
      });
    })
  }

  addJobs = (trabajos, idOranizacion) => {
    let data = {position: trabajos, description:' ' , organizationId: idOranizacion} 
    const url = 'jobs'
    postData(url,data).then(res => {
      /* debugger */
      this.setState({
        trabajos: [...this.state.trabajos, res],
      });
    })
  }


  componentDidMount(){
    axios
      .get('https://api-fake-pilar-tecno.herokuapp.com/db')
      .then((response)=> {
        console.log(response);
        this.setState({
          trabajos: response.data.jobs,
          ciudades: response.data.countries,
          lugares: response.data.places,
          organizaciones: response.data.organizations,
        }) 
      })
      .catch((error)=>{
        console.log(error);
      })

    /*  getData().then(res => this.setState({
        dbPilar: res,
      })) */
  }


  render() {
        
    /* console.log(this.state.dbPilar) */
    
    return (
      <div className="App">
        
        <Navbar/> 
        
        <Switch>
          
            <Route path="/" exact render={()=> <MainView listas={this.state} deleteJob={this.deleteJob} />}></Route>
            <Route path="/jobs" exact render={()=> <Jobs  jobs={this.state.trabajos} agregarJobs={this.addJobs} companies={this.state.organizaciones} />} ></Route>
            <Route path="/companies" exact render={()=> <Companies companies={this.state.organizaciones} agregarCompanies={this.addCompanies} cities={this.state.lugares} />} ></Route>
            <Route path="/cities" exact render={()=> <Cities cities={this.state.lugares} agregarCities={this.addCities} countries={this.state.ciudades} />} ></Route>
            <Route path="/countries" exact render={()=> <Countries countries={this.state.ciudades} agregarPais={this.addCountries} />} ></Route>
            {/*  <Route component={NotFoundView}></Route> */}
        </Switch>
     
      </div>
    );
  }
}

